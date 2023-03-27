const bwipjs = require('bwip-js');

function generateBarcode(barcodeString) {
  return new Promise((resolve, reject) => {
    bwipjs.toBuffer({
      bcid: 'code128', // Tipo de código de barras
      text: barcodeString, // Texto que se va a codificar
      scale: 3, // Escala del código de barras
      height: 10, // Altura del código de barras en mm
      includetext: true, // Incluir texto en el código de barras
      textxalign: 'center', // Alineación horizontal del texto
      textsize: 13 // Tamaño del texto en puntos
    }, (err, png) => {
      if (err) {
        reject(err);
      } else {
        resolve(png);
      }
    });
  });
}

module.exports = {
  generateBarcode
};
