@echo off
title Person 3 - RannaGhor Pantry & Bazaar (Port 5173)
set PATH=C:\Users\acer\AppData\Local\Programs\nodejs;%PATH%
cd /d "%~dp0"
echo ================================================================
echo   Person 3: RannaGhor Smart Pantry ^& Bazaar List
echo   Port: http://localhost:5173
echo ================================================================
if not exist node_modules (
  echo [Info] Installing node_modules...
  call npm install
)
echo [Info] Starting Vite Dev Server on http://localhost:5173 ...
start http://localhost:5173
call npm run dev
pause
