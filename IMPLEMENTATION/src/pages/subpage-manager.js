class SubpageManager {
  constructor() {
    this.templates = new Map();
  }

  // 14.1 子页面导航
  createNavigationTree(pages) {
    return pages.map(page => ({
      id: page.id,
      children: page.children ? this.createNavigationTree(page.children) : []
    }));
  }

  // 14.2 模板继承
  registerTemplate(name, template) {
    this.templates.set(name, template);
  }
}