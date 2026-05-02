@echo off
cd /d "%~dp0"
echo === Ship Hull Generator ===
echo.

:: Add default Node.js install location to PATH in case it's not there yet
if exist "%ProgramFiles%\nodejs\node.exe" (
  set "PATH=%ProgramFiles%\nodejs;%PATH%"
)

:: Check npm is available
where npm >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
  echo ERROR: Node.js / npm not found.
  echo Please run install.bat first.
  echo.
  pause
  exit /b 1
)

:: Check node_modules exist
if not exist "node_modules" (
  echo node_modules not found - running npm install first...
  call npm install
  echo.
)

echo Starting server...
echo.
echo  Open this address in your browser:
echo    http://localhost:5173
echo.
echo  Press Ctrl+C to stop.
echo.

:: Open browser after a short delay (gives vite time to start)
start "" cmd /c "ping -n 4 127.0.0.1 >nul && start http://localhost:5173"

call npm run dev
pause
