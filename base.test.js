const base = require('./base.js');
require('dotenv').config()

test ('show greeting test', () => {
  let expected = 'Greetings from foo! Welcome_to_the_jungle and Virgin_forest' 
  expect(base()).toBe(expected);
});
