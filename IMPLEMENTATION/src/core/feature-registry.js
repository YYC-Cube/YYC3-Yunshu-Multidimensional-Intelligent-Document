// src/core/feature-registry.js
class FeatureRegistry {
  constructor() {
    // 注册26-135节新功能
    this.register('26.1', DateTimeModule.prototype.insertDynamicDate);
    this.register('27.1', DiagramModule.prototype.createMindMap);
    this.register('32.1', TableAdvancedFeatures.prototype.createSpreadsheet);
    this.register('56.1', CodeProcessingSystem.prototype.setupJupyterEnvironment);
    // ... 其他功能点
  }
}