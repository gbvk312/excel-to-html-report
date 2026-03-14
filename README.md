# Excel to HTML Report 📊✨

Convert your Excel files into beautiful, interactive, and premium HTML reports with a single command.

![Premium Report Design](https://img.js.design/assets/static/7d7a78a60e0a5e8f3f8e5f5f5f5f5f5f.png)

## Features

- 💎 **Premium Design**: Modern glassmorphism aesthetic with smooth gradients and dark mode.
- 📑 **Sheet Tabs**: Seamlessly switch between multiple Excel sheets.
- 🔍 **Real-time Search**: Filter data across all columns instantly.
- 📱 **Responsive**: Built to look great on desktops, tablets, and phones.
- 🛠️ **Simple CLI**: Easy to use for engineers and data analysts.

## Project Structure

```text
excel-to-html-report/
├── src/
│   ├── index.js        # CLI entry point
│   ├── parser.js       # Excel parsing logic
│   ├── renderer.js     # HTML generation logic
│   └── templates/      # EJS templates
├── create_sample.js    # Utility to generate test Excel data
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```

## Installation

```bash
npm install
```

## Quick Start

If you don't have an Excel file ready, you can generate a sample one:

```bash
node create_sample.js
```

Then generate the report:

```bash
node src/index.js sample.xlsx -o output/report.html -t "Company Growth Report"
```

## Usage

```bash
node src/index.js <input-file.xlsx> [options]
```

### Options

- `-o, --output <path>`: Specify the output HTML file path (default: `report.html`).
- `-t, --title <string>`: Set a custom title for the report (default: `Excel Data Report`).
- `-v, --version`: Show version number.
- `-h, --help`: Display help information.

## Tech Stack

- **xlsx**: Powerful Excel parsing.
- **ejs**: Efficient HTML templating.
- **commander**: Robust CLI interface.
- **Vanilla CSS**: Premium modern styling.

## License

ISC