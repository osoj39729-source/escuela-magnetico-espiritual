@echo off
REM ============================================================
REM deploy.bat - Script de despliegue para Windows
REM Cátedra Maestro Joaquín Trincado - EMECU
REM Uso: Doble click en este archivo
REM ============================================================

echo ================================================
echo   DESPLIEGUE: Cátedra Maestro Trincado - EMECU
echo ================================================

REM 1. Verificar Vercel CLI
where vercel >nul 2>&1
IF ERRORLEVEL 1 (
  echo [INFO] Instalando Vercel CLI...
  npm install -g vercel
)

REM 2. Build de producción
echo [BUILD] Generando bundle de producción...
call npm run build

IF ERRORLEVEL 1 (
  echo [ERROR] El build falló. Revisa los errores arriba.
  pause
  exit /b 1
)

echo [OK] Build completado correctamente.

REM 3. Desplegar a Vercel
echo [DEPLOY] Iniciando despliegue a Vercel...
call vercel --prod --yes

echo ================================================
echo   El Profesor Trincado está en línea en Vercel!
echo ================================================
pause
