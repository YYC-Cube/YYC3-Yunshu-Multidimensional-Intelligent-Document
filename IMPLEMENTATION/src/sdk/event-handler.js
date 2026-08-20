class EventHandler {
  constructor(sdk) {
    this.sdk = sdk;
    this.errorCodes = {
      40001: "数据类型错误",
      40002: "数据不足",
      50303: "服务不可用"
    };
  }

  // 4.1.1 错误处理
  handleError(code, context) {
    const message = this.errorCodes[code] || "未知错误";
    console.error(`[错误 ${code}]: ${message}`, context);
    
    // 显示用户提示
    this._showUserError(code, context);
  }

  // 4.1.2 冲突解决
  handleConflict(conflict) {
    console.log(`检测到冲突: ${conflict.type}`);
    
    switch(conflict.type) {
      case 'edit':
        this._autoResolveEditConflict(conflict);
        break;
      case 'delete':
        this._promptManualResolution(conflict);
        break;
      default:
        this._fallbackResolution(conflict);
    }
  }

  _autoResolveEditConflict(conflict) {
    // 语义分析自动合并
    const resolved = this._semanticMerge(conflict);
    this.sdk.resolveConflict(conflict.id, resolved);
  }
}