// src/modules/date-time.js
class DateTimeModule {
  constructor() {
    this.dateFormats = {
      standard: 'YYYY-MM-DD',
      full: 'YYYY年MM月DD日 dddd',
      timeOnly: 'HH:mm:ss'
    };
  }

  // 26.1 动态日期组件
  insertDynamicDate(formatKey = 'standard', customDate = null) {
    const format = this.dateFormats[formatKey] || formatKey;
    const date = customDate ? dayjs(customDate) : dayjs();
    return date.format(format);
  }

  // 26.2 倒计时集成
  createCountdown(targetDate, options = {}) {
    return {
      start: () => this.startCountdown(targetDate, options),
      stop: () => this.stopCountdown()
    };
  }
}