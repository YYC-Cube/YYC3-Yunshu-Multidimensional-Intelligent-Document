// src/modules/diagrams.js
class DiagramModule {
  constructor() {
    this.mindMapRenderer = new MindMapRenderer();
    this.flowChartRenderer = new FlowChartRenderer();
  }

  // 27.1 思维导图组件
  createMindMap(data, options = {}) {
    return this.mindMapRenderer.render(data, {
      layout: options.layout || 'horizontal',
      theme: options.theme || 'default'
    });
  }

  // 43.1 流程图高级操作
  createFlowChart(nodes, connections, options = {}) {
    return this.flowChartRenderer.create(nodes, connections, {
      interactive: true,
      stylePreset: options.style || 'professional'
    });
  }
}