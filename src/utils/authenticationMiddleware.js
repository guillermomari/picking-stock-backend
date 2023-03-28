const jwt = require('jsonwebtoken');
const db = require('../orm/models'); // módulo para acceder a la base de datos

const secret = process.env.JWT_SECRET;

function authMiddleware(req, res, next) {
  // obtener token del encabezado de autorización
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'No se proporcionó un token de autenticación' });
  }

  // verificar que el token tenga el formato correcto
  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'El formato proporcionado no corresponde a un token de autenticación' });
  }

  // verificar y decodificar el token
  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
  } catch (err) {
    return res.status(401).json({ message: 'Token de autenticación no válido' });
  }

  // verificar si el usuario existe en la base de datos
  const user = db.getUserById(req.user.userId);
  if (!user) {
    return res.status(401).json({ message: 'Usuario no encontrado en la base de datos' });
  }

  // verificar si el token almacenado en la base de datos coincide con el token proporcionado
  if (user.token !== token) {
    return res.status(401).json({ message: 'Token de autenticación no válido' });
  }

  // verificar si el usuario tiene permiso para acceder al endpoint
  if (!user.roles.includes(req.method + ' ' + req.path)) {
    return res.status(403).json({ message: 'No tiene permiso para acceder a este endpoint' });
  }

  // pasar al siguiente middleware
  next();
}

module.exports = authMiddleware;
