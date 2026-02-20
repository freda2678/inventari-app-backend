// src/controllers/reporteController.js
const db = require('../config/database');

exports.financiero = (req, res) => {
    const { fechaInicio, fechaFin } = req.query;
    db.query("SELECT * FROM ventas WHERE fecha BETWEEN ? AND ?", [fechaInicio, fechaFin], (err, results) => {
        if (err) return res.status(500).send('Error generando reporte');
        res.json(results);
    });
};
