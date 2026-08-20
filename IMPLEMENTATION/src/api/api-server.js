require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const https = require('https');
const http = require('http');

const app = express();
const port = process.env.APP_PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production';

// 中间件
app.use(cors());
app.use(express.json());

// 根路由
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>YYC³ 云枢系统</title>
      <style>
        body { 
          font-family: 'Segoe UI', Tahoma, sans-serif; 
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          background-color: #f8f9fa;
          color: #212529;
        }
        h1 { 
          color: #0d6efd; 
          border-bottom: 2px solid #0d6efd;
          padding-bottom: 0.5rem;
        }
        .status-card {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          padding: 1.5rem;
          margin-top: 1rem;
        }
        .warning {
          color: #dc3545;
          font-weight: bold;
          background: #fff3cd;
          padding: 0.5rem;
          border-radius: 4px;
          margin-top: 1rem;
        }
      </style>
    </head>
    <body>
      <h1>YYC³ 云枢多维文档系统</h1>
      <div class="status-card">
        <p>✅ 服务运行正常</p>
        <p>版本: 1.0.0</p>
        <p>环境: ${process.env.NODE_ENV || 'development'}</p>
        <p>协议: ${isProduction ? 'HTTPS' : 'HTTP'}</p>
        ${isProduction && !hasHttpsConfig 
          ? `<div class="warning">⚠️ 生产环境未配置 HTTPS 证书</div>` 
          : ''}
      </div>
    </body>
    </html>
  `);
});

// 文档管理路由
const docRouter = require('./routes/document-routes');
app.use('/api/v1/docs', docRouter);

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error('[SERVER ERROR]', err.stack);
  res.status(500).json({
    error: 'SERVER_ERROR',
    message: '服务器内部错误',
    timestamp: new Date().toISOString()
  });
});

// 检查HTTPS证书
const hasHttpsConfig = fs.existsSync('key.pem') && fs.existsSync('cert.pem');

// 启动服务
if (isProduction && hasHttpsConfig) {
  // HTTPS 生产环境
  const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
  };

  const httpsServer = https.createServer(options, app);
  httpsServer.listen(443, () => {
    console.log(`\n🚀 YYC³ HTTPS 服务已启动`);
    console.log(`  访问地址: https://localhost`);
    console.log(`  API 文档: https://localhost/api/v1/docs\n`);
  });

  // HTTP 重定向到 HTTPS
  http.createServer((req, res) => {
    const httpsUrl = `https://${req.headers.host}${req.url}`;
    res.writeHead(301, { 'Location': httpsUrl });
    res.end();
  }).listen(80, () => {
    console.log('🔀 HTTP 重定向服务已启动 (80 → 443)');
  });
} else {
  // HTTP 开发环境
  const protocol = isProduction ? 'HTTP' : 'HTTP (开发模式)';
  const server = app.listen(port, () => {
    console.log(`\n🚀 YYC³ 服务已启动 (${protocol})`);
    console.log(`  访问地址: http://localhost:${port}`);
    console.log(`  API 文档: http://localhost:${port}/api/v1/docs\n`);
    
    if (isProduction && !hasHttpsConfig) {
      console.warn('⚠️ 警告：生产环境未配置 HTTPS 证书');
      console.warn('  请创建 key.pem 和 cert.pem 文件');
    }
  });
}