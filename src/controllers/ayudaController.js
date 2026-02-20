exports.listar = (req, res) => {
  const faqs = [
    { pregunta: "¿Cómo registro una venta?", respuesta: "Ingresa al módulo de ventas y completa el formulario." },
    { pregunta: "¿Cómo agrego un producto?", respuesta: "Accede al módulo de inventario y usa la opción 'Agregar producto'." },
    { pregunta: "¿Qué roles existen?", respuesta: "Administrador, Vendedor y Consultor." }
  ];
  res.json(faqs);
};
