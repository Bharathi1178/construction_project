@echo off
title Launch Interior & Construction Full-Stack Platform
echo ===================================================
echo   VASTU & STRUX - INTERIOR & CONSTRUCTION PLATFORM
echo ===================================================
echo.
echo Starting Django Backend on port 8000...
start "Django Backend Server (Port 8000)" cmd /k "cd backend && python manage.py runserver 127.0.0.1:8000"

echo.
echo Starting React Frontend on port 3000...
start "Frontend Web Server (Port 3000)" cmd /k "cd frontend && python -m http.server 3000"

echo.
echo Waiting 3 seconds for servers to initialize...
timeout /t 3 /nobreak >nul

echo Opening browser at http://localhost:3000/
start http://localhost:3000/

echo.
echo All services launched successfully!
echo Backend API: http://127.0.0.1:8000/api/
echo Frontend App: http://localhost:3000/
echo.
pause
