@echo off
title Push Person 3 RannaGhor to GitHub
color 0A
cls
echo ======================================================================
echo       RannaGhor Project - GitHub Push Helper (Person 3)
echo       Module: Smart Home Pantry Manager & Kolkata Bazaar Shopping List
echo ======================================================================
echo.
echo Step 1: Create a NEW repository on https://github.com/new
echo         (Do NOT check README, .gitignore, or license)
echo.
echo Step 2: Copy your GitHub repository URL
echo         Example: https://github.com/your-username/rannaghor-repo.git
echo.
set /p REPO_URL="Paste your GitHub Repository URL here: "

if "%REPO_URL%"=="" (
    echo.
    echo [ERROR] No URL entered. Operation canceled.
    echo.
    pause
    exit /b
)

echo.
echo [1/3] Setting git remote 'origin'...
git remote remove origin 2>nul
git remote add origin %REPO_URL%

echo [2/3] Setting branch to 'main'...
git branch -M main

echo [3/3] Pushing to GitHub (%REPO_URL%)...
git push -u origin main

if %ERRORLEVEL% equ 0 (
    echo.
    echo ======================================================================
    echo  SUCCESS! Person 3's repository has been pushed to GitHub!
    echo  URL: %REPO_URL%
    echo ======================================================================
) else (
    echo.
    echo ======================================================================
    echo  Push encountered an issue. Possible causes:
    echo   1. The repository URL was mistyped.
    echo   2. You need to log in to GitHub in Git / GitHub Desktop.
    echo   3. The remote repository already has commits.
    echo ======================================================================
)
echo.
pause
