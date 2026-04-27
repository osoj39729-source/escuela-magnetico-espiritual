#!/bin/bash
# ============================================================
# deploy.sh - Script de despliegue automatico a Vercel
# Cátedra Maestro Joaquín Trincado - EMECU
# Uso: ./deploy.sh
# ============================================================

set -e  # Salir si cualquier comando falla

echo "================================================"
echo "  DESPLIEGUE: Cátedra Maestro Trincado - EMECU"
echo "================================================"

# 1. Verificar que Vercel CLI está instalado
if ! command -v vercel &> /dev/null; then
  echo "[INFO] Instalando Vercel CLI..."
  npm install -g vercel
fi

# 2. Build de producción
echo "[BUILD] Generando bundle de producción..."
npm run build

echo "[OK] Build completado. Carpeta: dist/"

# 3. Desplegar a Vercel
echo "[DEPLOY] Iniciando despliegue a Vercel..."
vercel --prod --yes

echo "================================================"
echo "  ✅ Despliegue completado exitosamente!"
echo "  El Profesor Trincado está en línea."
echo "================================================"
