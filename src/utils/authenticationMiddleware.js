const jwt = require('jsonwebtoken');
const { Users } = require('../orm/models'); // módulo para acceder a la base de datos

const secret = process.env.JWT_SECRET;

async function authMiddleware(req, res, next) {
  try {
    // obtener token del encabezado de autorización
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new Error('No se proporcionó un token de autenticación');
    }

    // verificar que el token tenga el formato correcto
    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new Error('El formato proporcionado no corresponde a un token de autenticación');
    }

    const decoded = jwt.verify(token, secret); 
    const user = await Users.findByPk(decoded.userId);
    
    if (!user) {
      throw new Error('Usuario no encontrado en la base de datos');
    }

    if (user.token !== token) {
      throw new Error('Token de autenticación no válido');
    }

    // si la autenticación es exitosa, se puede continuar con el siguiente middleware
    next();
    
  } catch (error) {
    // enviar una respuesta HTTP con el código de error correspondiente
    res.status(401).json({ message: error.message });
  }
}

module.exports = { authMiddleware };

