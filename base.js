
function base() { 
  const greting_env = process.env.GREET;
  const main = process.env.MAIN;
  console.log(greting_env)
  console.log(main)
  return `Greetings from foo! ${greting_env} and ${main}` 
}

module.exports = base;
