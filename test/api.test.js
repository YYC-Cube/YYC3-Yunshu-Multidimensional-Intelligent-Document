const request = require('supertest');
const app = require('../IMPLEMENTATION/api/api-server');

describe('YYC³ API 测试', () => {
  it('GET / 应返回欢迎消息', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('YYC³');
  });

  it('POST /api/v1/docs 应创建新文档', async () => {
    const res = await request(app)
      .post('/api/v1/docs')
      .send({
        title: '测试文档',
        content: '这是测试内容'
      });
    
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toEqual('测试文档');
  });

  it('GET /api/v1/docs/:id 应返回文档', async () => {
    const res = await request(app).get('/api/v1/docs/doc_123');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', 'doc_123');
  });
});