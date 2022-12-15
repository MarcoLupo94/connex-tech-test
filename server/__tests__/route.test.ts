import request from 'supertest';
import app from '../index';
describe('Routes Handler', () => {
  test("Should respond with 403 if token isn't authorized", () => {
    return request(app)
      .get('/')
      .set('Authorization', 'Bearer thisIsNotArealToken')
      .expect(403);
  });
  test('Should respond with 200 if token is authorized', () => {
    return request(app)
      .get('/time')
      .set('Authorization', 'Bearer mysecrettoken')
      .expect(200);
  });
  test('/time route should return the right data', async () => {
    const response = await request(app)
      .get('/time')
      .set('Authorization', 'Bearer mysecrettoken')
      .expect(200);
    expect(response.body.properties).not.toBe(null);
  });
});
