@echo off
title Person 2 - RannaGhor Meal Planner (Port 5172)
set PATH=C:\Users\acer\AppData\Local\Programs\nodejs;%PATH%
cd /d "%~dp0"
echo ================================================================
echo   Person 2: RannaGhor Meal Planner ^& Weekly Scheduler
echo   Port: http://localhost:5172
echo ================================================================
if not exist node_modules (
  echo [Info] Installing node_modules...
  call npm install
)
echo [Info] Starting Vite Dev Server on http://localhost:5172 ...
start http://localhost:5172
call npm run dev
pause
