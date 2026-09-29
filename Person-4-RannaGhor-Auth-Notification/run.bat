@echo off
title Person 4 - RannaGhor Auth & Notification (Port 5174)
set PATH=C:\Users\acer\AppData\Local\Programs\nodejs;%PATH%
cd /d "%~dp0"
echo ================================================================
echo   Person 4: RannaGhor User Auth ^& Email Notifications
echo   Port: http://localhost:5174
echo ================================================================
if not exist node_modules (
  echo [Info] Installing node_modules...
  call npm install
)
echo [Info] Starting Vite Dev Server on http://localhost:5174 ...
start http://localhost:5174
call npm run dev
pause
