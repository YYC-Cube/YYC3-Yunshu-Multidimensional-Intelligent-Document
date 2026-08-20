// src/ai/assistant-extension.js
class AIAssistantExtension {
  // 28.1 AI帮我写
  generateContent(context, options = {}) {
    const style = options.style || 'professional';
    const length = options.length || 'medium';
    return this.aiModel.generate(context, { style, length });
  }

  // 57.1 文本摘要生成
  generateSummary(content, level = 'paragraph') {
    return this.summaryModel.summarize(content, {
      granularity: level,
      compression: 0.3
    });
  }

  // 61.1 上下文内容推荐
  recommendContent(context, maxItems = 5) {
    return this.recommendationEngine.getSuggestions(context, maxItems);
  }
}