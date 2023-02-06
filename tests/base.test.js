const base = require('../base.js');
require('dotenv').config()

test ('show greeting test', () => {
  let expected = `Greetings from foo! ${global.env.GREET} and ${global.env.MAIN}`
  expect(base()).toBe(expected);
});
