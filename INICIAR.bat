@echo off
title Profesor Joaquin Trincado - Escuela Magnético Espiritual
echo.
echo ========================================================
echo     ESCUELA MAGNETICO-ESPIRITUAL DE LA COMUNA UNIVERSAL
echo              Profesor Virtual - Joaquin Trincado
echo ========================================================
echo.
echo Iniciando el servidor...
echo.

cd /d "%~dp0"

:: Verificar si node_modules existe
if not exist "node_modules" (
    echo Primera vez: instalando dependencias...
    call npm install
    echo.
)

:: Iniciar la app
call npm run dev

pause
