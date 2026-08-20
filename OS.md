# YYC云枢多维文档系统主入口

// 主入口文件
import { YYCSystem } from './core/yyc-system';

// 用户自定义配置
const userConfig = {
  storage: {
    type: 'webdav',
    params: {
      server: '[https://cloud.example.com](https://cloud.example.com)',
      username: 'user',
      password: 'pass'
    },
    mediaStorage: {
      type: 's3',
      bucket: 'user-media-bucket'
    }
  },
  ai: {
    apiKey: 'ai-api-key-123',
    features: ['quality-evaluation', 'summary-generation']
  }
};

// 初始化系统
const yycSystem = new YYCSystem(userConfig);

// 使用示例：AI内容质量评估
const content = "人工智能是未来...";
const qualityReport = yycSystem.aiProcessor.evaluateContentQuality(content);
console.log('内容质量评分:', qualityReport.score);

// 使用示例：表格跨表联动
yycSystem.spreadsheet.linkTables('sales_data', 'summary_report', {
  conditionalFormatting: true,
  dataValidation: true
});