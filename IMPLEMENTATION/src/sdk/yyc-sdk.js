// src/sdk/yyc-sdk.js
class YYCSDK {
  constructor(config) {
    // 3.1.1 安装与初始化
    this.apiKey = config.apiKey;
    this.endpoint = config.endpoint || 'https://api.yyc3.com';
    this.initEditor();
  }
  
  initEditor() {
    // 3.1.2 文档编辑器集成
    this.editor = new DocumentEditor({
      container: config.container,
      features: config.features
    });
    
    // 注册插件
    if (config.plugins) {
      config.plugins.forEach(plugin => {
        this.editor.pluginSystem.registerPlugin(plugin);
      });
    }
  }
  
  // 5.1.1 增量渲染优化
  updateContent(content, options = {}) {
    if (options.incremental) {
      this.editor.applyIncrementalUpdate(content);
    } else {
      this.editor.setContent(content);
    }
  }
  
  // 5.2.1 动态水印生成
  applyWatermark(userInfo) {
    const watermarkText = `${userInfo.name} ${userInfo.id}`;
    this.editor.watermarkSystem.applyDynamicWatermark(watermarkText);
  }
}