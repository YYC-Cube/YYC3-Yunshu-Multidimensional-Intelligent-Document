// src/visual/typography.js
class TypographySystem {
  constructor(config) {
    // 6.1.1 字体体系
    this.fontConfig = {
      title: { family: 'Inter, PingFang SC', size: 24, lineHeight: 1.2 },
      heading1: { family: 'Inter, PingFang SC', size: 20, lineHeight: 1.3 },
      // ...其他字体配置
    };
    
    // 6.3.1 标题层级格式
    this.headingStyles = {
      h1: { fontSize: '20px', fontWeight: 'bold', indent: 0 },
      h2: { fontSize: '18px', fontWeight: 'bold', indent: '16px' },
      // ...其他标题样式
    };
    
    // 6.3.2 特殊区块样式
    this.blockStyles = {
      quote: { background: '#F2F3F5', borderLeft: '3px solid #1890FF' },
      code: { background: '#F2F3F5', fontFamily: 'Consolas' },
      // ...其他区块样式
    };
  }
  
  applyStyles(element, type) {
    const style = this.getStyle(type);
    Object.assign(element.style, style);
  }
  
  getStyle(type) {
    // 返回对应的样式对象
  }
}

// src/visual/colors.js
class ColorSystem {
  constructor(config) {
    // 6.1.2 颜色编码规范
    this.colorMap = {
      primaryText: '#1D2129',
      secondaryText: '#4E5969',
      link: '#1890FF',
      success: '#00B42A',
      warning: '#FF7D00',
      error: '#F53F3F',
      border: '#E5E6EB',
      background: '#FFFFFF',
      lightBackground: '#F2F3F5'
    };
  }
  
  getColor(name) {
    return this.colorMap[name] || '#000000';
  }
}

// src/visual/icons.js
class IconSystem {
  constructor(config) {
    // 6.2.1 功能符号定义
    this.iconMap = {
      completed: { unicode: 'U+2705', color: '#00B42A' },
      pending: { unicode: 'U+2610', color: '#1D2129' },
      // ...其他图标配置
    };
  }
  
  renderIcon(iconName, size = 16) {
    const icon = this.iconMap[iconName];
    const element = document.createElement('span');
    element.style.fontSize = `${size}px`;
    element.style.color = icon.color;
    element.textContent = String.fromCodePoint(parseInt(icon.unicode.substring(2), 16));
    return element;
  }
}