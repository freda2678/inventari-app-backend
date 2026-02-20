const ventaModel = require('../models/ventaModel');

exports.register = (req, res) => {
  const { producto_id, cliente_id, cantidad, fecha } = req.body;
  ventaModel.registrarVenta(producto_id, cliente_id, cantidad, fecha, (err) => {
    if (err) return res.status(500).send('Error registrando venta');
    res.send('Venta registrada ✅');
  });
};
