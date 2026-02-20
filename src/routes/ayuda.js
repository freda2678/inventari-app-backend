const express = require('express');
const router = express.Router();
const ayudaController = require('../controllers/ayudaController');

router.get('/', ayudaController.listar);

module.exports = router;
