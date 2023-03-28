const jwt = require('jsonwebtoken');
const { Users } = require('../orm/models'); // módulo para acceder a la base de datos


const secret = process.env.JWT_SECRET;

async function authMiddleware(req, res, next) {
  // obtener token del encabezado de autorización
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.send(401).json({ message: 'No se proporcionó un token de autenticación' });
  }

  // verificar que el token tenga el formato correcto
  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.send(401).json({ message: 'El formato proporcionado no corresponde a un token de autenticación' });
  }

  const decoded = jwt.verify(token, secret); 
  const user = await Users.findByPk(decoded.userId);
  try {
    
    if (!user) {
        res.send({ message: 'Usuario no encontrado en la base de datos' });
    }
    if (user.token !== token) {
      console.log(user.token, token )
        res.send({ message: 'Token de autenticación no válido' });
    }
    else {
      res.send({ message: 'Acceso correctamente autenticado' })
      next()
    }

  } catch (err) {
     res.send({ message: 'Token de autenticación no válido' });

  }

  //VER TODO ESTO

}

module.exports = authMiddleware;
