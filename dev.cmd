@echo off
setlocal
start "backend" cmd /k "cd backend && npm run dev"
start "frontend" cmd /k "cd frontend && npm run dev"
endlocal
