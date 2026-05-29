@echo off
title EMECU - Configuracion Firebase (Solo una vez)
color 0A
cls
echo.
echo  ============================================================
echo   EMECU - CONFIGURACION INICIAL DE FIREBASE
echo   Este proceso solo se necesita hacer UNA SOLA VEZ
echo  ============================================================
echo.
echo  Este script va a:
echo  1. Abrir tu navegador para que inicies sesion en Firebase
echo  2. Generar un token que se guardara automaticamente
echo  3. Subirlo como secreto a GitHub para despliegues futuros
echo.
echo  Presiona cualquier tecla para continuar...
pause > nul

cd /d F:\trincado

echo.
echo  [1/2] Iniciando sesion en Firebase...
echo  (Se abrira el navegador - inicia sesion con nelsonosoriogarcia@gmail.com)
echo.
npx firebase login:ci --no-localhost 2>&1

echo.
echo ============================================================
echo  IMPORTANTE: Copia el TOKEN que aparecio arriba (la linea 
echo  que dice "1//..." o similar) y sigue estos pasos:
echo.
echo  1. Ve a: https://github.com/osoj39729-source/escuela-magnetico-espiritual/settings/secrets/actions
echo  2. Haz clic en "New repository secret"
echo  3. Nombre: FIREBASE_TOKEN
echo  4. Valor: (pega el token que copiaste)
echo  5. Haz clic en "Add secret"
echo.
echo  Despues de eso, cada vez que yo actualice el codigo,
echo  Firebase se actualizara AUTOMATICAMENTE sin que hagas nada!
echo ============================================================
echo.
echo  Presiona cualquier tecla para cerrar...
pause > nul
