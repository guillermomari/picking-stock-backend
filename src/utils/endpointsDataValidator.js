const { sequelize } = require('../orm/models');

function endpointsDataValidator(req, res, next) {
  const {entityName} = req.body;
  const model = sequelize.models[entityName];
  const attributes = Object.keys(model.attributes);
  const dataType = {};
  
  attributes.forEach((fieldName) => {
    dataType[fieldName] = model.rawAttributes[fieldName].type.key;
  });

  const data = req.body;
  const missingFields = attributes.filter(field => !data[field]);
  const wrongFields = attributes.filter(field => {
    const expectedDataType = dataType[field];
    const receivedDataType = typeof data[field];
    return expectedDataType !== receivedDataType;
  });

  if (missingFields.length > 0 || wrongFields.length > 0) {
    const mensajeError = `Los siguientes campos son requeridos o tienen tipos de dato incorrectos: ${[...missingFields, ...wrongFields].join(', ')}`;
    res.status(400).json({ error: mensajeError });
  } else {
    next();
  }
}

module.exports = endpointsDataValidator;
