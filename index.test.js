const request = require('supertest');
const app = require('./index');

describe('Test the root path', () => {
  let server;

  beforeAll(async () => {
    server = app.listen();
  });

  afterAll((done) => {
    server.close(done);
  });

  test('It should respond with 404 error for invalid route', async () => {
    const response = await request(server).get('/invalid-route');
    expect(response.statusCode).toBe(404);
  });
});

describe('Test the /docs path', () => {
  let server;

  beforeAll(async () => {
    server = app.listen();
  });

  afterAll((done) => {
    server.close(done);
  });

  test('It should respond with a success code', async () => {
    const response = await request(server).get('/docs');
    expect(response.statusCode).toBe(200);
  });
});
