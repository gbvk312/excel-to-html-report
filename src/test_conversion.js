const { parseExcel } = require('./parser');
const { renderReport } = require('./renderer');
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

async function runTest() {
  console.log("🧪 Running end-to-end conversion test...");
  
  const sampleExcel = path.resolve(__dirname, '../sample.xlsx');
  const outputHtml = path.resolve(__dirname, '../test_output.html');

  // 1. Ensure sample file exists
  if (!fs.existsSync(sampleExcel)) {
    console.log("Generating sample file...");
    execSync('node create_sample.js', { cwd: path.resolve(__dirname, '..') });
  }

  try {
    // 2. Test Parser
    console.log("Testing Parser...");
    const excelData = await parseExcel(sampleExcel);
    if (!excelData.sheetNames.includes('Employee Performance')) {
      throw new Error("Parser failed to find expected sheet name.");
    }
    console.log("✅ Parser check passed.");

    // 3. Test Renderer
    console.log("Testing Renderer...");
    await renderReport(excelData, "Test Report", outputHtml);
    if (!fs.existsSync(outputHtml)) {
      throw new Error("Renderer failed to create output file.");
    }
    const htmlContent = fs.readFileSync(outputHtml, 'utf-8');
    if (!htmlContent.includes("Test Report") || !htmlContent.includes("Alice Johnson")) {
      throw new Error("Renderer output content check failed.");
    }
    console.log("✅ Renderer check passed.");

    console.log("✨ All tests passed successfully!");
    
    // Cleanup
    if (fs.existsSync(outputHtml)) fs.unlinkSync(outputHtml);
    
  } catch (error) {
    console.error(`❌ Test failed: ${error.message}`);
    process.exit(1);
  }
}

runTest();
