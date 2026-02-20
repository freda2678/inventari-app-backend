const db = require('../config/database');

exports.registrarVenta = (producto_id, cliente_id, cantidad, fecha, callback) => {
  db.query('INSERT INTO ventas (producto_id, cliente_id, cantidad, fecha) VALUES (?, ?, ?, ?)',
    [producto_id, cliente_id, cantidad, fecha], callback);
};
