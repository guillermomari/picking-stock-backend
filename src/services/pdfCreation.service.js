const PDFDocument = require('pdfkit');
const fs = require('fs');

function pdfGenerator(content, image) {
  const doc = new PDFDocument();
  if (image) {
    doc.image(image);
  }
  const table = {
    headers: Object.keys(content[0]),
    rows: []
  };

  content.forEach(item => {
    const row = [];
    Object.values(item).forEach(value => {
      row.push(value.toString());
    });
    table.rows.push(row);
  });

  doc.table(table, {
    prepareHeader: () => doc.font('Helvetica-Bold'),
    prepareRow: (row, i) => doc.font('Helvetica').fontSize(10)
  });

  const nombreArchivo = `reporte_${new Date().toISOString()}.pdf`;
  const rutaArchivo = `./storage/${nombreArchivo}`;
  doc.pipe(fs.createWriteStream(rutaArchivo));
  doc.end();

  return rutaArchivo;
}

module.exports = {
    pdfGenerator
};
