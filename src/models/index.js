const { Sequelize } = require('sequelize');

//cambiar datos 
const sequelize = new Sequelize('nombre_bd', 'usuario', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => console.log('Conectado a MySQL con Sequelize ✅'))
    .catch(err => console.error('Error de conexión:', err));

module.exports = sequelize;
