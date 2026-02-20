const db = require('../config/database');

exports.crearCliente = (nombre, contacto, callback) => {
  db.query('INSERT INTO clientes (nombre, contacto) VALUES (?, ?)', [nombre, contacto], callback);
};

exports.listarClientes = (callback) => {
  db.query('SELECT * FROM clientes', callback);
};
