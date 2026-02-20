const db = require('../config/database');

exports.registrarLog = (usuario_id, accion, callback) => {
  db.query('INSERT INTO logs (usuario_id, accion, fecha) VALUES (?, ?, NOW())',
    [usuario_id, accion], callback);
};

exports.listarLogs = (callback) => {
  db.query('SELECT * FROM logs', callback);
};
