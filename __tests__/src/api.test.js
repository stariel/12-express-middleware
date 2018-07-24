import app from '../../src/app.js';
import supertest from 'supertest';

const mockRequest = supertest(app.server);

describe('Express Web Server', () => {

  it('handles an invalid get request with a 404', () => {

    return mockRequest.get('/blah')
      .then()
      .catch(res => expect(res.status).toEqual(404));

  });
  it('handles an invalid get request with a 404', () => {

    return mockRequest.get('/api/v1/cats/blah')
      .then()
      .catch(res => expect(res.status).toEqual(404));

  });

  it('handles a valid get request', () => {

    return mockRequest.get('/api/v1/cats')
      .then(response => {
        expect(response.statusCode).toEqual(200);
      })
      .catch(console.err);
  });

  it('handles a valid get request for dogs', () => {

    return mockRequest.get('/api/v1/dogs')
      .then(response => {
        expect(response.statusCode).toEqual(200);
      })
      .catch(console.err);
  });

  it('on POST should respond with bad request if no request body was provided', () => {
    return mockRequest.post('/api/v1/cats')
      .catch(response => {
        expect(response.statusCode).toEqual(400);
      })
      .catch(console.err);
  });

  it('on POST should respond with bad request if request body was invalid', () => {
    let obj = {};
    return mockRequest.post('/api/v1/cats')
      .send(obj)
      .catch(response => {
        expect(response.statusCode).toEqual(400);
      })
      .catch(console.err);
  });

  it('should respond with the body content for a post request with a valid body', () => {
    let obj = {name:'Bob', age: '12'};
    return mockRequest.post('/api/v1/cats')
      .send(obj)
      .then(response => {
        expect(response.text).toContain('Bob');
      })
      .catch(console.err);
  });

  it('should respond with the body content for a post request with a valid body for dogs', () => {
    let obj = {name:'Bandit', age: '3'};
    return mockRequest.post('/api/v1/dogs')
      .send(obj)
      .then(response => {
        expect(response.text).toContain('Bandit');
      })
      .catch(console.err);
  });
  
});