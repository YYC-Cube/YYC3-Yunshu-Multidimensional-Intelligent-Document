class CodeExecutor {
  constructor() {
    this.themes = new Map();
  }

  // 13.1 代码执行
  execute(code, lang) {
    return new Promise((resolve) => {
      const worker = new Worker('code-worker.js');
      worker.postMessage({ code, lang });
      worker.onmessage = (e) => resolve(e.data);
    });
  }

  // 13.2 主题切换
  registerTheme(name, themeConfig) {
    this.themes.set(name, themeConfig);
  }
}