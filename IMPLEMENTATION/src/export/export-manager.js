// src/export/export-manager.js
class ExportManager {
  // 45.1 多格式导出
  exportDocument(format, options = {}) {
    switch (format.toLowerCase()) {
      case 'pdf':
        return this.exportToPDF(options);
      case 'word':
        return this.exportToWord(options);
      case 'html':
        return this.exportToHTML(options);
      default:
        throw new Error(`Unsupported format: ${format}`);
    }
  }

  // 45.2 打印设置
  configurePrintSettings(settings) {
    this.printSettings = {
      ...this.defaultPrintSettings,
      ...settings
    };
  }
}