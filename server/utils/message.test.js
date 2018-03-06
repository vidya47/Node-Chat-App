var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('Should generate correct message object', () =>  {
    var from = 'Jen';
    var text = 'Hi?!';
    var message = generateMessage(from, text);

    expect(typeof message.createdAt).toEqual('number');
    expect(message).toMatchObject({from, text});
  });
});


describe('generateLocationMessage', () => {
  it('Should generate correct message object', () => {
    var from = 'Vidya';
    var latitude = 1;
    var longitude = 1;
    var url = "https://www.google.com/maps?q=1,1";
    var message = generateLocationMessage(from, latitude, longitude);

    expect(typeof message.createdAt).toEqual('number');
    expect(message).toMatchObject({from, url});
  });
});
