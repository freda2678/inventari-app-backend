const clienteModel = require('../models/clienteModel');


exports.crear = (req, res) => {
  const { nombre, contacto } = req.body;
  clienteModel.crearCliente(nombre, contacto, (err) => {
    if (err) return res.status(500).send('Error creando cliente');
    res.send('Cliente creado ✅');
  });
};

exports.listar = (req, res) => {
  clienteModel.listarClientes((err, results) => {
    if (err) return res.status(500).send('Error listando clientes');
    res.json(results);
  });
};
