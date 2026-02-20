// src/controllers/productoController.js
const productoModel = require('../models/productoModel');

exports.crear = (req, res) => {
    const { nombre, categoria, stock, precio, stock_minimo } = req.body;
    productoModel.crearProducto(nombre, categoria, stock, precio, stock_minimo, (err) => {
        if (err) return res.status(500).send('Error creando producto');
        res.send('Producto creado');
    });
};

exports.listar = (req, res) => {
    productoModel.listarProductos((err, results) => {
        if (err) return res.status(500).send('Error listando productos');
        res.json(results);
    });
};
