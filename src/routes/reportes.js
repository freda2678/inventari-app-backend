// src/routes/reportes.js
const express = require('express');
const router = express.Router();
const reporteController = require('../controllers/reporteController');

router.get('/financiero', reporteController.financiero);

module.exports = router;
