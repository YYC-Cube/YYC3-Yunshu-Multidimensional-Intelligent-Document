// src/core/yyc-system.js
class YYCSystem {
  constructor(config) {
    // 初始化核心模块
    this.storage = new StorageAdapter(config.storage);
    this.platform = new PlatformAdapter();
    this.pluginSystem = new PluginSystem();
    this.i18n = new I18nEngine();
    this.errorManager = new ErrorManager();
    
    // 初始化功能模块
    this.initFeatureModules();
    
    // 初始化视觉系统
    this.initVisualSystem(config.visual);
  }

  initFeatureModules() {
    // 基础编辑功能
    this.editorCore = new EditorCore();
    
    // AI功能
    this.aiProcessor = new AIContentProcessor();
    
    // 协作系统
    this.collabEngine = new RealtimeCollaboration();
    
    // 表格系统
    this.spreadsheet = new SpreadsheetEngine();
    
    // 代码处理
    this.codeExecutor = new CodeExecutor();
    
    // 媒体处理
    this.mediaProcessor = new MediaProcessor();
  }

  initVisualSystem(config) {
    // 应用视觉规范
    this.visual = {
      typography: new TypographySystem(config.typography),
      colors: new ColorSystem(config.colors),
      icons: new IconSystem(config.icons),
      components: new ComponentVisualSystem(config.components)
    };
  }
}