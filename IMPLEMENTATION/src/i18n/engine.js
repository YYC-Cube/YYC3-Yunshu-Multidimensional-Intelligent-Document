class I18nEngine {
  constructor() {
    this.locales = new Map();
    this.currentLocale = 'zh-CN';
  }

  // 10.1 多语言配置
  addLocale(locale, resources) {
    this.locales.set(locale, new Intl.MapFormat(resources));
  }

  // 10.2 日期时间格式化
  formatDateTime(date, options = {}) {
    const formatter = new Intl.DateTimeFormat(this.currentLocale, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      ...options
    });
    return formatter.format(date);
  }
}