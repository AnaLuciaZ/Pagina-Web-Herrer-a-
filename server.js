const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require("sqlite3").verbose();
const path = require('path');

const app = express();
const port = 3000;

// Middleware para manejar datos de formularios
app.use(bodyParser.urlencoded({ extended: true }));

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Simulación de base de datos en memoria
const usuarios = [];

const db = new sqlite3.Database ("./egresados.db", (err))

// Ruta para la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Manejar registro de usuarios
app.post('/register', (req, res) => {
    const { nombres, apellidos, correo, contraseña } = req.body;
    usuarios.push({ nombres, apellidos, correo, contraseña });
    console.log('Usuarios registrados:', usuarios);
    res.redirect('/menu');
});

// Ruta para mostrar la página del menú
app.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'menu.html'));
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});



// Ruta para mostrar la página del menú
app.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'menu.html'));
});


// Iniciar el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
