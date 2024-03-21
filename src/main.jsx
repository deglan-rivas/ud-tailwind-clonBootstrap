import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/**
 * usar el CDN o vite para crear una app de react, este me parece más sencillo, organizado y fácil de tomar apuntes
 * abrir bootstrap y tailwind para tener a la mano los recursos que se usarán: https://getbootstrap.com/docs/4.1/components/alerts/ y https://v2.tailwindcss.com/docs
 * instalar el fucking npx tailwindcss init
 * no estoy seguro qué faltaba, pero reseguí la doc de tailwind para vite y se logró instalar clases de tailwind con pnpm
*/