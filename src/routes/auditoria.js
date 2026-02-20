const express = require('express');
const router = express.Router();
const logController = require('../controllers/logController');
const auth = require('../middlewares/auth');
const roles = require('../middlewares/roles');

router.get('/', auth.verificarToken, roles.verificarRol('tecnico'), logController.listar);

module.exports = router;
