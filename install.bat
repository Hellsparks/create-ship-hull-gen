@echo off
cd /d "%~dp0"
echo === Ship Hull Generator Installer ===
echo.

:: Check if Node.js is already installed
where node >nul 2>&1
if %ERRORLEVEL% EQU 0 (
  for /f "tokens=*" %%v in ('node --version') do echo Node.js %%v found.
  goto install_deps
)

:: Try the default install location first (winget/official installer puts it here)
if exist "%ProgramFiles%\nodejs\node.exe" (
  set "PATH=%ProgramFiles%\nodejs;%PATH%"
  echo Node.js found at %ProgramFiles%\nodejs
  goto install_deps
)

echo Node.js not found. Installing via winget...
echo This may take a minute - please wait.
echo.

where winget >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
  echo winget is not available on this PC.
  echo Please install Node.js manually from:
  echo   https://nodejs.org/en/download/
  echo Then run this installer again.
  pause
  exit /b 1
)

winget install --id OpenJS.NodeJS.LTS --accept-source-agreements --accept-package-agreements
echo.

:: Manually add Node to PATH for this session (winget does not refresh current session)
set "PATH=%ProgramFiles%\nodejs;%PATH%"

:: Verify it worked
where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
  echo.
  echo ============================================================
  echo Node.js was installed but this terminal needs to be restarted.
  echo Please CLOSE this window and double-click install.bat again.
  echo ============================================================
  echo.
  pause
  exit /b 1
)
for /f "tokens=*" %%v in ('node --version') do echo Node.js %%v installed successfully.

:install_deps
echo.
echo Installing dependencies...
call npm install
if %ERRORLEVEL% NEQ 0 (
  echo.
  echo npm install failed. Please check your internet connection and try again.
  pause
  exit /b 1
)
echo.
echo ============================================================
echo  Done! Double-click run.bat to start the generator.
echo ============================================================
pause
