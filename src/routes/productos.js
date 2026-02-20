const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

router.post('/', productoController.crear);
router.get('/', productoController.listar);

module.exports = router;
