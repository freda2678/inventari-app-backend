const express = require('express');
const router = express.Router();

// Ruta de prueba
router.post('/login', (req, res) => {
  res.json({ message: 'Login funcionando' });
});

module.exports = router;
