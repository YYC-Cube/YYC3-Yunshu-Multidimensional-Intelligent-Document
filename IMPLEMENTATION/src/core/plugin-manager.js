// src/core/plugin-manager.js
class PluginManager {
  constructor() {
    this.plugins = new Map();
    this.hooks = {
      preSave: [],
      postRender: []
    };
  }

  // 30.1 插件注册与管理
  registerPlugin(plugin) {
    if (plugin.init && typeof plugin.init === 'function') {
      plugin.init(this);
      this.plugins.set(plugin.name, plugin);
      
      // 注册插件钩子
      if (plugin.hooks) {
        Object.keys(plugin.hooks).forEach(hookName => {
          this.registerHook(hookName, plugin.hooks[hookName]);
        });
      }
    }
  }

  // 48.1 第三方服务集成
  integrateService(serviceName, config) {
    const adapter = this.serviceAdapters.get(serviceName);
    if (adapter) {
      return adapter.initialize(config);
    }
    throw new Error(`Unsupported service: ${serviceName}`);
  }
}