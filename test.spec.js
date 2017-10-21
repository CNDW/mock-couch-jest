const Couch = require('mock-couch');

describe('Some thing :', () => {
  it('should be true', () => {
    const couch = Couch.createServer()
    couch.listen();
    expect(true).toBe(true);
    couch.close();
  });
});
