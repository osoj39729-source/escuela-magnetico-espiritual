/**
 * EMECU - Deploy Automático de Reglas e Índices de Firestore
 * Usa la API REST de Firebase para desplegar sin necesidad de CLI
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const PROJECT_ID = 'eme-de-la-cu';

// ─── 1. Obtener token de acceso OAuth2 usando gcloud si está disponible ─────
async function getAccessToken() {
  // Intentar con las credenciales de aplicación por defecto de Google
  try {
    const { execSync } = await import('child_process');
    const token = execSync('gcloud auth print-access-token 2>nul', {
      encoding: 'utf8', timeout: 5000
    }).trim();
    if (token && token.length > 20) {
      console.log('[Auth] Token obtenido via gcloud CLI');
      return token;
    }
  } catch (e) { /* gcloud no disponible */ }

  // Intentar con firebase CLI
  try {
    const { execSync } = await import('child_process');
    const result = execSync('npx firebase login:ci --no-localhost 2>&1', {
      encoding: 'utf8', timeout: 3000
    });
    const match = result.match(/1\/\/[\w-]+/);
    if (match) return match[0];
  } catch (e) { /* no disponible */ }

  return null;
}

// ─── 2. Crear índices via Firestore Admin REST API ───────────────────────────
async function createIndexes(apiKey) {
  const indexes = [
    {
      collectionId: 'interactions',
      fields: [{ fieldPath: 'timestamp', order: 'DESCENDING' }],
      queryScope: 'COLLECTION_GROUP'
    },
    {
      collectionId: 'sessions',
      fields: [{ fieldPath: 'fechaInicio', order: 'DESCENDING' }],
      queryScope: 'COLLECTION'
    },
    {
      collectionId: 'sessions',
      fields: [
        { fieldPath: 'uid', order: 'ASCENDING' },
        { fieldPath: 'fechaInicio', order: 'DESCENDING' }
      ],
      queryScope: 'COLLECTION'
    },
    {
      collectionId: 'students',
      fields: [{ fieldPath: 'lastInteraction', order: 'DESCENDING' }],
      queryScope: 'COLLECTION'
    }
  ];

  let creados = 0, existentes = 0, errores = 0;

  for (const idx of indexes) {
    const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/collectionGroups/${idx.collectionId}/indexes?key=${apiKey}`;
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          queryScope: idx.queryScope,
          fields: idx.fields
        })
      });
      const data = await res.json();
      if (res.ok) {
        console.log(`  ✅ Índice creado: ${idx.collectionId} [${idx.fields.map(f => f.fieldPath).join(', ')}]`);
        creados++;
      } else if (data.error?.code === 409) {
        console.log(`  ℹ️  Ya existe: ${idx.collectionId} [${idx.fields.map(f => f.fieldPath).join(', ')}]`);
        existentes++;
      } else {
        console.log(`  ⚠️  ${idx.collectionId}: ${data.error?.message || 'Error desconocido'}`);
        errores++;
      }
    } catch (e) {
      console.error(`  ❌ Error de red para ${idx.collectionId}:`, e.message);
      errores++;
    }
  }

  return { creados, existentes, errores };
}

// ─── 3. Desplegar reglas via Firebase Rules REST API ────────────────────────
async function deployRules(accessToken) {
  if (!accessToken) {
    console.log('  ⚠️  Sin token OAuth. Las reglas se deben desplegar manualmente una vez.');
    console.log('  📋 URL: https://console.firebase.google.com/project/eme-de-la-cu/firestore/rules');
    return false;
  }

  const rulesPath = path.join(__dirname, 'firestore.rules');
  const rulesContent = fs.readFileSync(rulesPath, 'utf-8');

  try {
    // 1. Crear el ruleset
    const rulesetRes = await fetch(
      `https://firebaserules.googleapis.com/v1/projects/${PROJECT_ID}/rulesets`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          source: {
            files: [{
              name: 'firestore.rules',
              content: rulesContent
            }]
          }
        })
      }
    );

    if (!rulesetRes.ok) {
      const err = await rulesetRes.json();
      console.log('  ❌ Error creando ruleset:', err.error?.message);
      return false;
    }

    const ruleset = await rulesetRes.json();
    const rulesetName = ruleset.name;

    // 2. Asociar el ruleset a la release de Cloud Firestore
    const releaseRes = await fetch(
      `https://firebaserules.googleapis.com/v1/projects/${PROJECT_ID}/releases/cloud.firestore`,
      {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          release: { rulesetName }
        })
      }
    );

    if (releaseRes.ok) {
      console.log('  ✅ Reglas de Firestore desplegadas exitosamente');
      return true;
    } else {
      const err = await releaseRes.json();
      console.log('  ❌ Error publicando release:', err.error?.message);
      return false;
    }
  } catch (e) {
    console.error('  ❌ Error de red:', e.message);
    return false;
  }
}

// ─── MAIN ────────────────────────────────────────────────────────────────────
async function main() {
  console.log('\n🔥 EMECU - Configurador Automático de Firebase');
  console.log('==============================================\n');

  const API_KEY = process.env.VITE_FIREBASE_API_KEY;

  if (!API_KEY) {
    console.error('❌ Error: No se encontró la variable de entorno VITE_FIREBASE_API_KEY.');
    console.error('   Asegúrate de tener un archivo .env en la raíz del proyecto con la clave configurada.');
    process.exit(1);
  }

  // Crear índices (usa API Key, no necesita OAuth)
  console.log('📋 Creando índices de Firestore...');
  const indexResult = await createIndexes(API_KEY);
  console.log(`   Resultado: ${indexResult.creados} creados, ${indexResult.existentes} ya existentes, ${indexResult.errores} errores\n`);

  // Intentar desplegar reglas (necesita OAuth)
  console.log('🔐 Intentando desplegar reglas de Firestore...');
  const token = await getAccessToken();
  const rulesOk = await deployRules(token);

  console.log('\n==============================================');
  if (indexResult.errores === 0 && (rulesOk || !token)) {
    console.log('✅ Configuración completada exitosamente.');
    if (!token) {
      console.log('\n⚠️  PENDIENTE: Publicar reglas manualmente:');
      console.log('   https://console.firebase.google.com/project/eme-de-la-cu/firestore/rules\n');
    }
  } else {
    console.log('⚠️  Revisa los errores arriba.\n');
  }
}

main().catch(console.error);
