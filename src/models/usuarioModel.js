// src/models/usuarioModel.js
const db = require('../config/database');

exports.crearUsuario = (usuario, contrasena, rol, callback) => {
    db.query("INSERT INTO usuarios (usuario, contrasena, rol) VALUES (?, ?, ?)", 
    [usuario, contrasena, rol], callback);
};

exports.buscarPorUsuario = (usuario, callback) => {
    db.query("SELECT * FROM usuarios WHERE usuario = ?", [usuario], callback);
};

exports.listarUsuarios = (callback) => {
    db.query("SELECT id, usuario, rol FROM usuarios", callback);
};
