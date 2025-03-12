const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware para servir archivos estáticos desde dist/
app.use(express.static(path.join(__dirname, "dist")));

// Ruta principal
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/index.html"));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
