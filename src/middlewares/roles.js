exports.verificarRol = (rolPermitido) => {
  return (req, res, next) => {
    if (req.user.rol !== rolPermitido) {
      return res.status(403).send('Acceso denegado');
    }
    next();
  };
};
