const XLSX = require('xlsx');

/**
 * Parses an Excel file and returns an object containing sheet names and their data.
 * @param {string} filePath - Path to the Excel file.
 * @returns {Object} { sheetNames: string[], data: Object }
 */
function parseExcel(filePath) {
  try {
    const workbook = XLSX.readFile(filePath);
    const sheetNames = workbook.SheetNames;
    const data = {};

    sheetNames.forEach(sheetName => {
      const worksheet = workbook.Sheets[sheetName];
      data[sheetName] = XLSX.utils.sheet_to_json(worksheet, { defval: "" });
    });

    return { sheetNames, data };
  } catch (error) {
    throw new Error(`Failed to parse Excel file: ${error.message}`);
  }
}

module.exports = { parseExcel };
