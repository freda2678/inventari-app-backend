const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/ventaController');

router.post('/register', ventaController.register);

module.exports = router;
