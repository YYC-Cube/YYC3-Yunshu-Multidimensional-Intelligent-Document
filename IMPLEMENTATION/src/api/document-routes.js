const express = require('express');
const router = express.Router();

// 创建新文档
router.post('/', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({
      error: '40001',
      message: '标题和内容不能为空'
    });
  }
  
  // 实际实现会保存到数据库
  const newDoc = {
    id: `doc_${Date.now()}`,
    title,
    content,
    createdAt: new Date()
  };
  
  res.status(201).json(newDoc);
});

// 获取文档内容
router.get('/:doc_id', (req, res) => {
  const { doc_id } = req.params;
  
  // 实际实现会从数据库获取
  const doc = {
    id: doc_id,
    title: "示例文档",
    content: "这是文档内容",
    createdAt: "2025-07-15T08:00:00Z"
  };
  
  res.json(doc);
});

module.exports = router;