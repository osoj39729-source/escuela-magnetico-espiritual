const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public/data/contents');
const bnPath = path.join(__dirname, 'src/data/blocked_nodes.ts');
const dictPath = path.join(__dirname, 'public/data/diccionario_sinapsis.json');

// ── Leer diccionario sináptico global ──
const dictGlobal = JSON.parse(fs.readFileSync(dictPath, 'utf8')).CONCEPTOS || {};

// ── Lista de libros rescatados (los que tenían temas con ≥500 chars) ──
const librosRescatados = {
  'alfaqui-vademecum':                       ['587: CAPITULO IV: LAS LEYES DEL UNIVERSOODIVINAS','666: PARTE SEGUNDA','667: CAPITULO V: LA CREACIONYSU FIN'],
  'buscando-a-dios-joaquin-trincado':        ['1116: CAPITULO SEXTO: LAS RELIGIONES: SU FIN'],
  'conocete-a-ti-mismo-1':                   ['989: CaPÍTULo PRiMeRo: La ViDa','1416: Párrafo Vii: eL aLMa soLo Tiene La ViDa naTURaLYTeMPoRaRia','1865: CaPÍTULo seGUnDo: eL esPÍRiTU','3500: Párrafo ii: LeYes DeRiVaDas Y FaTaLes Ya dijimos en el párrafo','4022: CaPÍTULo iV: La CReaCión','5831: Párrafo iii: La saLUDYLas enFeRMeDaDes son oBRa DeL esPÍRiTU, en JUsTiCia','7572: Punto segundo: ¿DónDe esTÁYQUÉ es La MeMoRia?','8510: CaPÍTULo Vii: GRaDos De PRoGReso','9086: Punto tercero: DE ADÁNYEVA HASTA ABRAHAM - LA INVESTIGACIÓN','11414: Párrafo Viii: La CaRiDaD ReLiGiosa es Un BaLDón','16292: CaPÍTULo X: DeFiniCiones JUZGaDas'],
  'cuestionario-espirita-racional':          ['78: Pregunta 6: ¿Qué se entiende por','232: Pregunta 16: ','321: Pregunta 22: '],
  'el-espiritismo-estudiado':                ['346: CAPÍTULO PRIMERO: LO QUE FORMAYSE LLAMA ESPIRITISMO','473: PÁRRAFO II: CÓMO SE FORMA EL ESPIRITISMO','724: PÁRRAFO II: CAÍNYABEL','888: CAPÍTULO TERCERO: MANDATO DEL PADRE CREADORASUS HIJOS','1937: CAPÍTULO SEXTO.: POR QUÉYCÓMO MOISÉS PROHIBIÓ EL USO DEL ESPIRITISMO','3318: En nuestra','3862: PÁRRAFO II: ELASTICIDAD DEL ALMA','4115: PARRAFO II: MATERIALISTASYESPIRITUALISTAS','5691: CAPÍTULO OCTAVO: LA ELECTRICIDADYEL ESPIRITISMO','6318: en','6550: CAPÍTULO PRIMERO: QUE SON FACULTADES MEDIANÍMICASYFORMA RACIONAL DE PRACTICAR EL','6657: CAPÍTULO PRIMERO:','9101: CAPITULO OCTAVO: LOS MÉDIUMS DE APORTESYOTROS','9250: CAPITULO NOVENO: EL MAGNETISMOYEL SONAMBULISMO','9534: CAPITULO DIEZ: LA SUGESTIÓNYLA TELEPATÍA','10278: CAPÍTULO TERCERO: FENÓMENOS DE LA ESCRITURA, PINTURAYDIBUJO','10482: CAPÍTULO QUINTO: FENÓMENO DE AUDICIÓN, INTUICIÓNEINSPIRACIÓN','10573: CAPÍTULO SEXTO: FENÓMENOS DE LEVITACIÓNYTRASLACIÓN','10735: CAPÍTULO SÉPTIMO: EL FENÓMENO DE APORTEYMATERIALIZACIÓN','11350: CAPÍTULO DIEZ: GRANDESYRAROS FENÓMENOS','12660: En nuestra','12818: CAPÍTULO TERCERO: EL MATERIALISMOYSU COHORTE','13390: CAPÍTULO OCTAVO: LOS FALSOS MAGOS, AGOREROSYADIVINAS','13566: CAPÍTULO NUEVE: LOS FALACES, PSEUDO SABIOSYPSEUDO CIENTÍFICOS','13751: CAPÍTULO DIEZ: LOS ENEMIGOS DEL TRABAJOYDEL TRABAJADOR'],
  'el-magnetismo-en-su-origen':              ['44: CONSEJOSYRECOMENDACIONESANUESTROS','46: DISCÍPULOSYADHERENTES','281: PROLOGOALA SEGUNDA EDICION','415: PROLOGOALA TERCERA EDICION:','486: MANUAL DE EDUCACIÓN MAGNÉTICA','597: EL MAGNETISMO EN LOS ANIMALES, PLANTASYMINERALES','649: ELECTRICIDADYMATERIA','1116: GRADO TERCERO','1593: POTENCIAYOBEDIENCIA DE LOS ESPÍRITUS NATURALES','1749: REGLA GENERALYÚNICA','1932: LECCIÓN CUARTA','1986: LECCIÓN QUINTA'],
  'espiritismo-en-su-asiento':               ['95: llevar a sus lectores'],
  'filosofia-enciclopedica-universal-tomo-1':['150: INTROITOYPROLEGÓMENO','832: Mayo 28','896: Junio 6','1429: Julio 18 de 1910'],
  'filosofia-enciclopedica-universal-tomo-2':['327: Posesión Portillo'],
  'filosof-a-austera-racional':              ['44: NOTAALA 2a. EDICIÓN','354: PRIMERA PARTE','357: CAPÍTULO I: Prehistoria y Tiempos Primitivos','362: PÁRRAFO 1°: AMORFISMOYANTROPOMORFISMO','454: PÁRRAFO 2°: CREENCIASYRELIGIONES','662: CAPÍTULO II: Escuelas Antiguas y Modernas','666: PÁRRAFO 1°: PRIMER PUNTO HISTÓRICO','1747: PÁRRAFO 5°: SÓCRATESYLOS SEMI-SOCRÁTICOS','2025: PÁRRAFO 6°: PLATÓNYARISTÓTELES','2599: PÁRRAFO 8°: NEOSYCRISTIANOS','2884: PÁRRAFO 9°','4355: PÁRRAFO 10°: GNOSTICISMOYLOS GNÓSTICOS','4895: CAPÍTULO IV: El Renacimiento','5753: PÁRRAFO 7°: IDEALISMO PESIMISTA','6006: PÁRRAFO 8°: ECLECTICISMOYPOSITIVISMO','6168: PÁRRAFO 9°: ASOCIACIONISMOYEVOLUCIONISMO','6550: CAPÍTULO V: Filosofía Moderna','6632: PÁRRAFO 2º: SPINOZAYLEIBNITZ','6914: CAPÍTULO VI: Filosofía francesa','7137: PÁRRAFO 3°: POLÍTICAYMORAL','7376: CAPÍTULO VII: Filosofía italiana','7380: PÁRRAFO 1°: LA CORRUPCIÓNYSUS CAUSAS','7634: CAPÍTULO VIII: Filosofía alemana','7655: PÁRRAFO 2°: KANTYSU CRITICISMO','7842: CAPÍTULO IX: Filosofía contemporánea','8358: CAPÍTULO XI: La psicología en Alemania','8362: PÁRRAFO 1°: PSICOLOGÍA FRENOLÓGICA','8771: SEGUNDA PARTE: PSICOLOGÍAYFISIOLOGÍA','9584: CAPÍTULO IV: Las sensaciones','10831: TERCERA PARTE: PSICOLOGÍA ESPIRITUAL','11655: PÁRRAFO 4º: EL LENGUAJEYLA CONCIENCIA','12016: CAPÍTULO III: Clases de percepción','12170: CAPÍTULO IV: La reflexión','12322: PÁRRAFO 2º: REFLEXIÓN INDUCTIVAYDEDUCTIVA','12476: CAPÍTULO V: La imaginación','12547: PÁRRAFO 2º: IMAGINACIÓN INVENTIVA','12683: Capítulo VI: La raízón','12791: PÁRRAFO 2º: LA RAZÓN SUMINISTRA IDEAS','12994: CAPÍTULO VII: La sensibilidad','12998: PÁRRAFO 1º: EL PLACER','13252: CAPÍTULO VIII: Las emociones','13310: PÁRRAFO 2º: SOLO EN LA CONCIENCIA','13509: PÁRRAFO 5º: TRASPASO','13548: PÁRRAFO 6º: LEYESOCAUSAS DE LAS EMOCIONES','13664: CAPITULO IX: Clasificación de las emociones','13716: PÁRRAFO 2°: OTRAS EMOCIONES','13921: CAPÍTULO X: Sentimientos estéticos','14179: CAPITULO XI: La voluntad','14183: PÁRRAFO 1º: MOVIMIENTOS AUTOMÁTICOS','14268: PÁRRAFO 2º: LOS SIGNOSYLA MÍMICA','14400: PÁRRAFO 5º: INHIBICIÓN'],
  'jes-s-hombre-y-no-dios':                  ['40: PRESENTACIÓN','859: JUANYJESÚS NO SON HOMBRES SOBRENATURALES','941: PERSECUCIÓN DE LOS SACERDOTESAJESÚS','1299: LA FALACIAYLA FUERZA BRUTA JUNTAS','1381: PRUEBAS AUTENTICAS PARA FUERZAYJUSTICIA DE LA SENTENCIA'],
  'los-cinco-amores':                        ['1488: CAPITULO SEXTO: EL AMOR PRIVADO','1686: CAPITULO SÉPTIMO: EL AMOR PROPIO','1786: CAPÍTULO OCTAVO: EL AMOR RELIGIOSO','1936: CAPÍTULO NOVENO: EL AMORALO AJENO','2439: CAPÍTULO PRIMERO: EL AMORALA AMISTAD','2781: CAPÍTULO SEGUNDO: EL AMORALA SALUD','3031: CAPÍTULO TERCERO: EL AMORALA EDUCACIÓN','3229: CAPÍTULO CUARTO: EL AMORALA MORAL SOCIAL','3479: CAPÍTULO QUINTO: EL AMORALA COOPERACIÓN','3728: CAPÍTULO SEXTO: EL AMORALA ECONOMÍA COMÚN','3887: PÁRRAFO IV: ECONOMÍA MORAL','4090: PÁRRAFO VIII: ECONOMÍA RURALYAGRÍCOLA','4524: CAPÍTULO SÉPTIMO: EL AMOR AL MEJOR BIENESTAR','4723: CAPÍTULO OCTAVO: EL AMORALA DEFENSA','4972: CAPÍTULO NUEVE: EL AMORALA JUSTICIA','5320: CAPÍTULO DIEZ: EL AMORAAGRANDAR','5574: CAPÍTULO PRIMERO: EL AMOR REGIONAL','6416: CAPÍTULO CUARTO: EL AMORALA BELLEZA','6664: CAPÍTULO QUINTO: EL AMORALA NATURALEZA','7113: CAPÍTULO SÉPTIMO: EL AMORALA LIBERTAD','7610: CAPÍTULO NUEVE: EL AMORALA IGUALDAD','7859: CAPÍTULO DIEZ: EL AMORALAS GRANDEZAS','13803: CAPÍTULO DIEZ: EL AMOR UNIVERSAL','14227: Conócete a ti mismo'],
  'los-extremos-se-tocan':                   ['7: CAPÍTULO 1: PREMISA','244: PREFACIO','484: PROLOGO','581: CAPÍTULO PRIMERO: LEY FUNDAMENTAL','5302: CAPÍTULO DOCE: DESDE PÍO IX','5733: CAPÍTULO CATORCE: ROMPIERON LA RESISTENCIA','5973: CAPÍTULO DIEZYSEIS: EL COMBUSTIBLE','6212: CAPÍTULO DIEZYSIETE: TODA LA TIERRA','6356: CAPÍTULO DIEZYOCHO: LOS CULPABLES','6548: CAPÍTULO DIEZYNUEVE: LALEY','6881: CAPÍTULO VEINTE: LA TIERRA DE PROMISIÓN','7215: CAPÍTULO VEINTEYUNO','7358: CAPÍTULO VEINTEYDOO','7454: CAPÍTULO VEINTEYTRES','7598: CAPÍTULO VEINTEYCUATRO','7837: CAPÍTULO VEINTEYCINCO','8124: CAPÍTULO VEINTEYSEII','8219: CAPÍTULO VEINTEYSIETE','8363: CAPÍTULO VEINTEYOCHO','8507: CAPÍTULO VEINTEYNUEVE','8651: CAPÍTULO TREINTA:','8795: CAPÍTULO TREINTAYUNO','8890: CAPÍTULO TREINTAYDOO','9041: este sencillo mandato','9177: CAPÍTULO TREINTA Y CUATRO','9990: CAPÍTULO 35: EPÍLOGO','10431: HECHOSYDEMOSTRACIONES'],
  'primer-rayo-de-luz':                      ['10570: CONTESTACION PONTIFICIA','11583: PARRAFO II: Racionalismo moderno','11605: PARRAFO III: Indiferentismo'],
  'profilaxis-de-la-vida':                   ['5046: CapÍTUlo sexTo: la edUCaCiÓN Moral','5269: CapÍTUlo sÉpTiMo: la edUCaCiÓN GeNeral','9685: CapÍTUlo viGÉsiMo: TraGedia fiNal','9712: del Dios de las religiones','10370: CapÍTUlo viGÉsiMo seGUNdo','11578: GRANDE, LA MADRE DE LAS FORNICACIONES'],
  'tercera-etapa':                           ['4: AÑO DE 1916.','5: ENERO 4 DE 1916.','12: CONSEJO'],
  'v-i-d-a---d-e----m-a-r-i-a':             ['152: CAPITULO PRIMERO: JOAQUÍNYANA','794: CAPITULO VI: LA INFANCIA DE JESÚS','963: CAPÍTULO IX: MARÍA SE PLEGA','1176: CAPITULO XI.: MARÍA VA','1466: CAPÍTULO II.: ADÁNYEVA','1562: CAPÍTULO III.: DE ADÁNYEVA HASTA ABRAHAM.','1625: CAPÍTULO IV.: DE ABRAHAM','1905: CAPITULO V.: DE MOISÉS','2244: PUNTO SEGUNDO: CONOCIMIENTO DE MARÍA'],
};

// ── Auditoría del Trinomio ────────────────────────────────────────────────────
let totalOK = 0, totalSinEsencia = 0, totalSinNodos = 0, totalSinContenido = 0;
const fallos = [];

console.log('\n╔══════════════════════════════════════════════════════════╗');
console.log('║   AUDITORÍA TRINOMIO: 161 TEMAS RESCATADOS              ║');
console.log('╚══════════════════════════════════════════════════════════╝\n');

Object.entries(librosRescatados).forEach(([libro, temasBloqueadosOCR]) => {
  const cPath = path.join(dir, libro + '_content.json');
  const ePath = path.join(dir, libro + '_esencia.json');

  if (!fs.existsSync(cPath) || !fs.existsSync(ePath)) {
    console.log('⚠️  ARCHIVOS FALTANTES: ' + libro);
    return;
  }

  const content = JSON.parse(fs.readFileSync(cPath, 'utf8'));
  const esencia = JSON.parse(fs.readFileSync(ePath, 'utf8'));

  let rescatadosLibro = 0, fallasLibro = [];

  temasBloqueadosOCR.forEach(temaOCR => {
    const numPag = temaOCR.split(':')[0].trim();
    // Buscar tema real en content.json
    const temaReal = Object.keys(content).find(k => k.startsWith(numPag + ':'));
    if (!temaReal) return; // no tiene contenido real, era correcto bloquearlo

    const textoContent = (content[temaReal] || '');
    if (textoContent.length < 500) return; // era vacío, ignorar

    rescatadosLibro++;

    // ── CAPA 1: Segmento ──
    const tieneSegmento = textoContent.length >= 500;

    // ── CAPA 2: Esencia ── buscar por página
    let esenciaData = esencia[temaReal] || null;
    if (!esenciaData) {
      // Intento por número de página
      const claveEsencia = Object.keys(esencia).find(k => k.startsWith(numPag + ':'));
      if (claveEsencia) esenciaData = esencia[claveEsencia];
    }
    const tieneEsencia = !!esenciaData;
    const piloto = esenciaData ? (esenciaData.PilotoDeCoherencia || esenciaData.Sinapsis || esenciaData.Resumen || '') : '';
    const esenciaReal = piloto.length > 50;

    // ── CAPA 3: Nodos Sinápticos ──
    const nodos = esenciaData ? (esenciaData.NodosSinapticos || esenciaData.DiccionarioSinaptico || []) : [];
    const nodosVinculados = nodos.filter(n => {
      const key = n.includes('#') ? n.split('#')[0] : n;
      return !!dictGlobal[key];
    });
    const tieneSinapsis = nodosVinculados.length > 0;

    // ── Veredicto ──
    if (tieneSegmento && tieneEsencia && esenciaReal && tieneSinapsis) {
      totalOK++;
    } else {
      const fallo = {
        libro,
        tema: temaReal.substring(0, 70),
        segmento: tieneSegmento ? '✅' : '❌',
        esencia: (tieneEsencia && esenciaReal) ? '✅' : '❌',
        sinapsis: tieneSinapsis ? '✅ (' + nodosVinculados.length + ' nodos)' : '❌ (0 nodos vinculados al global)',
        nodosTotales: nodos.length
      };
      fallos.push(fallo);
      if (!tieneEsencia || !esenciaReal) totalSinEsencia++;
      if (!tieneSinapsis) totalSinNodos++;
    }
  });
});

// ── Reporte ───────────────────────────────────────────────────────────────────
console.log('📊 TEMAS CON TRINOMIO COMPLETO (Segmento + Esencia + Sinapsis): ' + totalOK);
console.log('❌ TEMAS CON FALLOS: ' + fallos.length);
console.log('   → Sin Esencia real:    ' + totalSinEsencia);
console.log('   → Sin Nodos Sinápticos: ' + totalSinNodos);
console.log('');

if (fallos.length > 0) {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('DETALLE DE FALLOS POR LIBRO:');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  
  // Agrupar por libro
  const porLibro = {};
  fallos.forEach(f => {
    if (!porLibro[f.libro]) porLibro[f.libro] = [];
    porLibro[f.libro].push(f);
  });

  Object.entries(porLibro).forEach(([libro, lista]) => {
    console.log('📖 ' + libro + ' (' + lista.length + ' fallos)');
    lista.forEach(f => {
      console.log('  Tema: ' + f.tema);
      console.log('  Segmento: ' + f.segmento + ' | Esencia: ' + f.esencia + ' | Sinapsis: ' + f.sinapsis);
      console.log('');
    });
  });

  // Guardar reporte JSON para reparación posterior
  fs.writeFileSync('audit_rescued_fallos.json', JSON.stringify({ total: fallos.length, fallos }, null, 2));
  console.log('📄 Reporte de fallos guardado en: audit_rescued_fallos.json');
}

console.log('\n╔══════════════════════════════════════════════════════════╗');
console.log('║  FIN DE AUDITORÍA — TEMAS RESCATADOS                    ║');
console.log('╚══════════════════════════════════════════════════════════╝\n');
