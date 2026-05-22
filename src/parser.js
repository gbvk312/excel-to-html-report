const ExcelJS = require('exceljs');

/**
 * Parses an Excel file and returns an object containing sheet names and their data.
 * @param {string} filePath - Path to the Excel file.
 * @returns {Promise<Object>} { sheetNames: string[], data: Object }
 */
async function parseExcel(filePath) {
  try {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    
    const sheetNames = [];
    const data = {};

    workbook.eachSheet((worksheet, sheetId) => {
      sheetNames.push(worksheet.name);
      const headers = [];
      const sheetData = [];

      worksheet.eachRow((row, rowNumber) => {
        if (rowNumber === 1) {
          row.eachCell((cell, colNumber) => {
            headers[colNumber] = cell.value?.toString() || `__EMPTY_${colNumber}`;
          });
        } else {
          const rowData = {};
          for (let i = 1; i < headers.length; i++) {
            if (headers[i]) rowData[headers[i]] = "";
          }
          row.eachCell((cell, colNumber) => {
            if (headers[colNumber]) {
              rowData[headers[colNumber]] = cell.value;
            }
          });
          sheetData.push(rowData);
        }
      });
      
      data[worksheet.name] = sheetData;
    });

    return { sheetNames, data };
  } catch (error) {
    throw new Error(`Failed to parse Excel file: ${error.message}`);
  }
}

module.exports = { parseExcel };
