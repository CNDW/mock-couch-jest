const Couch = require('mock-couch');
process.EventEmitter = require('events');

describe('Some thing :', () => {
  it('should be true', () => {
    const couch = Couch.createServer()
    couch.listen(4465);
    expect(true).toBe(true);
    couch.close();
  });
});
