const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const usuarioModel = require('../models/usuarioModel');

exports.register = async (req, res) => {
  const { usuario, contraseña, rol } = req.body;
  const hash = await bcrypt.hash(contraseña, 10);

  usuarioModel.crearUsuario(usuario, hash, rol, (err) => {
    if (err) return res.status(500).send('Error registrando usuario');
    res.send('Usuario registrado ✅');
  });
};

exports.login = (req, res) => {
  const { usuario, contraseña } = req.body;
  usuarioModel.buscarPorUsuario(usuario, async (err, results) => {
    if (err) return res.status(500).send('Error en BD');
    if (results.length === 0) return res.status(401).send('Usuario no encontrado');

    const valido = await bcrypt.compare(contraseña, results[0].contraseña);
    if (!valido) return res.status(401).send('Contraseña incorrecta');

    const token = jwt.sign({ id: results[0].id, rol: results[0].rol }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  });
};
