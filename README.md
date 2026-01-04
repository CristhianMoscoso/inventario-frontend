🎨 Frontend – Sistema de Inventario

Frontend desarrollado para el Sistema de Inventario Web, encargado de la interfaz de usuario, la interacción con el usuario y el consumo de la API REST proporcionada por el backend.

La aplicación fue construida utilizando React con Vite, permitiendo un desarrollo rápido, modular y eficiente.

🧑‍💻 Autores

Cristhian Moscoso

Erika Mosquera

🎯 Objetivo del Frontend

Desarrollar una interfaz web que permita:

Visualizar y gestionar la información del inventario

Interactuar con la API REST del backend

Ofrecer una experiencia de usuario clara y organizada

Aplicar el uso de componentes reutilizables

El frontend tiene fines académicos.

🛠️ Tecnologías Utilizadas

React

Vite

JavaScript (ES6+)

HTML5

CSS

📁 Estructura del Frontend
frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── services/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── vite.config.js
├── package.json
└── package-lock.json

📌 Descripción de carpetas y archivos

components/: componentes reutilizables de la interfaz.

pages/: vistas principales de la aplicación.

context/: manejo del estado global (por ejemplo, autenticación).

services/: consumo de la API REST del backend.

App.jsx: componente principal de la aplicación.

main.jsx: punto de entrada de React.

styles.css: estilos generales del sistema.

🔁 Comunicación con el Backend

El frontend consume la API REST del backend mediante servicios centralizados, lo que permite:

Separar la lógica de negocio de la interfaz

Facilitar el mantenimiento del código

Mejorar la escalabilidad de la aplicación

La comunicación se realiza a través de peticiones HTTP (GET, POST, PUT, DELETE).

▶️ Ejecución del Frontend
1️⃣ Instalar dependencias
npm install

2️⃣ Ejecutar la aplicación
npm run dev


La aplicación se ejecuta en:

http://localhost:5173

📌 Buenas Prácticas Aplicadas

Uso de componentes reutilizables

Organización modular del código

Separación entre lógica y presentación

Consumo de API mediante servicios

Uso de Context API para estado global

Código limpio y legible
