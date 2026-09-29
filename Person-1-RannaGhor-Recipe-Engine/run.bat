@echo off
title Person 1 - RannaGhor Recipe Engine (Port 5171)
set PATH=C:\Users\acer\AppData\Local\Programs\nodejs;%PATH%
cd /d "%~dp0"
echo ================================================================
echo   Person 1: RannaGhor Recipe Engine ^& Cooking Guide
echo   Port: http://localhost:5171
echo ================================================================
if not exist node_modules (
  echo [Info] Installing node_modules...
  call npm install
)
echo [Info] Starting Vite Dev Server on http://localhost:5171 ...
start http://localhost:5171
call npm run dev
pause
