let secureEnv = require('secure-env');
require('dotenv').config()

global.env = secureEnv({secret: process.env.SECRET});


function base() { 
  const greting_env = global.env.GREET;
  const main = global.env.MAIN;
  console.log(greting_env)
  console.log(main)
  return `Greetings from foo! ${greting_env} and ${main}` 
}

module.exports = base;
