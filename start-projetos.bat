@echo off
echo ====== Iniciando Backend ======
start cmd /k "cd backend && npm install && npm start"

echo ====== Iniciando Frontend ======
start cmd /k "cd frontend && npm install && npm run dev"

echo ================================
echo Projetos iniciados!
echo Backend rodando em: http://localhost:3001
echo Frontend rodando em: http://localhost:5173
pause
