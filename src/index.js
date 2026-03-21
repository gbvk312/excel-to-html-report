#!/usr/bin/env node

const { program } = require('commander');
const path = require('path');
const { parseExcel } = require('./parser');
const { renderReport } = require('./renderer');

program
  .version('1.0.0')
  .description('Convert Excel files into beautiful HTML reports')
  .argument('<input>', 'Input Excel file path')
  .option('-o, --output <output>', 'Output HTML file path', 'report.html')
  .option('-t, --title <title>', 'Report title', 'Excel Data Report')
  .action(async (input, options) => {
    try {
      const inputPath = path.resolve(input);
      const outputPath = path.resolve(options.output);
      
      console.log(`\x1b[36m%s\x1b[0m`, `🚀 Starting conversion: ${input}`);
      
      const excelData = await parseExcel(inputPath);
      console.log(`\x1b[32m%s\x1b[0m`, `✅ Parsed ${excelData.sheetNames.length} sheet(s)`);

      await renderReport(excelData, options.title, outputPath);
      console.log(`\x1b[32m%s\x1b[0m`, `✨ Report generated successfully at: ${outputPath}`);
      
    } catch (error) {
      console.error(`\x1b[31m%s\x1b[0m`, `❌ Error: ${error.message}`);
      process.exit(1);
    }
  });

program.parse(process.argv);
