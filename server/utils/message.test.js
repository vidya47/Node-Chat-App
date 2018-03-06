var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('Should generate correct message object', () =>  {
    var from = 'Jen';
    var text = 'Hi?!';
    var message = generateMessage(from, text);

    expect(typeof message.createdAt).toEqual('number');
    expect(message).toMatchObject({from, text});
  });
});
