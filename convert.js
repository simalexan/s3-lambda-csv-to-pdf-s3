'use strict';
const fonts = {
    Helvetica: {
      normal: 'Helvetica',
      bold: 'Helvetica-Bold',
      italics: 'Helvetica-Oblique',
      bolditalics: 'Helvetica-BoldOblique'
    },
    Roboto: {
      normal: 'fonts/Roboto-Regular.ttf',
      bold: 'fonts/Roboto-Medium.ttf',
      italics: 'fonts/Roboto-Italic.ttf',
      bolditalics: 'fonts/Roboto-MediumItalic.ttf'
    }
  },
  PDFMake = require('pdfmake'),
  util = require('util'),
  fs = require('fs'),
  pdfPrinter = new PDFMake(fonts),
  { convertCSVToArray } = require('convert-csv-to-array'),
  SEPARATOR = process.env.SEPARATOR || ',',
  HAS_HEADERS = process.env.HAS_HEADERS || true;

const pdfStructure = {
  content: [{
    table: {
      headerRows: 1,
      body: []
    }
  }]
}

function readCSV(filepath) {
  const readFile = util.promisify(fs.readFile);
  return readFile(filepath, {encoding: 'utf8'})
    .then(file => convertCSVToArray(file, { type: 'array', separator: SEPARATOR }));
}

function writePDF(filepath, docData) {
  return new Promise((resolve) => {
    const pdfDoc = pdfPrinter.createPdfKitDocument(docData);
    pdfDoc.pipe(fs.createWriteStream(filepath)).on('finish', resolve);
    pdfDoc.end();
  });
}

module.exports = function convert(inFile, outFile) {
  return readCSV(inFile).then((csvRows) => {
    pdfStructure.content[0].table.body = [];
    if (HAS_HEADERS) {
      const csvHeaders = csvRows.splice(0,1)[0].map(headerName => ({text: headerName}));
      pdfStructure.content[0].table.body.push(csvHeaders);
    }
    pdfStructure.content[0].table.body = pdfStructure.content[0].table.body.concat(csvRows);
    return writePDF(outFile, pdfStructure);
  });
};