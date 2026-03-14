const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

/**
 * Renders the parsed Excel data into an HTML report using a template.
 * @param {Object} excelData - { sheetNames: string[], data: Object }
 * @param {string} title - Title of the report.
 * @param {string} outputPath - Path to save the generated HTML file.
 */
async function renderReport(excelData, title, outputPath) {
  try {
    const templatePath = path.join(__dirname, 'templates', 'report.ejs');
    const templateContent = fs.readFileSync(templatePath, 'utf-8');

    const html = await ejs.render(templateContent, {
      title,
      sheetNames: excelData.sheetNames,
      data: excelData.data
    });

    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(outputPath, html);
    return outputPath;
  } catch (error) {
    throw new Error(`Failed to render report: ${error.message}`);
  }
}

module.exports = { renderReport };
