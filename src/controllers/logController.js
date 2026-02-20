const logModel = require('../models/logModel');

exports.listar = (req, res) => {
  logModel.listarLogs((err, results) => {
    if (err) return res.status(500).send('Error listando logs');
    res.json(results);
  });
};
