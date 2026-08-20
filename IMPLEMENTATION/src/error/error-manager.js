// src/error/error-manager.js
class ErrorManager {
  constructor() {
    // 4.1.1 错误码列表
    this.errorCodes = {
      40001: {
        category: 'validation',
        message: '字段类型不匹配',
        solution: '检查请求参数格式'
      },
      40102: {
        category: 'permission',
        message: '用户无编辑权限',
        solution: '调用权限查询接口获取详情'
      },
      50303: {
        category: 'service',
        message: '区块链节点连接失败',
        solution: '重试或切换备用节点'
      }
    };
    
    // 4.1.2 冲突解决机制
    this.conflictResolver = new ConflictResolver();
  }
  
  handleError(code, context) {
    const errorInfo = this.errorCodes[code] || {
      message: '未知错误',
      solution: '联系技术支持'
    };
    
    return {
      code,
      message: errorInfo.message,
      solution: errorInfo.solution,
      timestamp: new Date(),
      context
    };
  }
  
  resolveConflict(conflictData) {
    return this.conflictResolver.resolve(conflictData);
  }
}