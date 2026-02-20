const express = require('express');
const cors = require('cors');

const usuariosRoutes = require('./routes/usuarios');
const ventasRoutes = require('./routes/venta');
const productosRoutes = require('./routes/productos');
const clientesRoutes = require('./routes/clientes');
const reportesRoutes = require('./routes/reportes');
const auditoriaRoutes = require('./routes/auditoria');
const ayudaRoutes = require('./routes/ayuda');
const authRoutes = require('./routes/auth');

const app = express();

app.use(cors());
app.use(express.json());

// Rutas principales
app.use('/api/clientes', clientesRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/ventas', ventasRoutes);
app.use('/api/reportes', reportesRoutes);
app.use('/api/auditoria', auditoriaRoutes);
app.use('/api/ayuda', ayudaRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;
