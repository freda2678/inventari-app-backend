const db = require('../config/database');

exports.crearProducto = (nombre, categoria, stock, precio, stock_minimo, callback) => {
  db.query('INSERT INTO productos (nombre, categoria, stock, precio, stock_minimo) VALUES (?, ?, ?, ?, ?)',
    [nombre, categoria, stock, precio, stock_minimo], callback);
};

exports.listarProductos = (callback) => {
  db.query('SELECT * FROM productos', callback);
};
