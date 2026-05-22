const ExcelJS = require('exceljs');
const path = require('path');
const fs = require('fs');

async function createSample() {
  const data = [
    ["Name", "Department", "Performance Score", "Revenue Contribution"],
    ["Alice Johnson", "Engineering", 95, 120000],
    ["Bob Smith", "Marketing", 88, 85000],
    ["Charlie Brown", "Sales", 92, 150000],
    ["Diana Prince", "Product", 97, 110000],
    ["Ethan Hunt", "Operations", 85, 95000]
  ];

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Employee Performance");
  worksheet.addRows(data);

  const sampleFile = path.resolve(__dirname, 'sample.xlsx');
  
  try {
    await workbook.xlsx.writeFile(sampleFile);
    console.log(`\x1b[32m%s\x1b[0m`, `✨ Successfully created sample file: ${sampleFile}`);
  } catch (error) {
    console.error(`\x1b[31m%s\x1b[0m`, `❌ Error creating sample file: ${error.message}`);
    process.exit(1);
  }
}

createSample();
