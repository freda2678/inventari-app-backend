const db = require('../config/database');

// Reporte financiero por rango de fechas
exports.obtenerReporteFinanciero = (fechaInicio, fechaFin, callback) => {
  const query = `
    SELECT v.id, v.fecha, p.nombre AS producto, c.nombre AS cliente, v.cantidad, (v.cantidad * p.precio) AS total
    FROM ventas v
    INNER JOIN productos p ON v.producto_id = p.id
    INNER JOIN clientes c ON v.cliente_id = c.id
    WHERE v.fecha BETWEEN ? AND ?
  `;
  db.query(query, [fechaInicio, fechaFin], callback);
};
