const model = require('../model/signup');

async function signup (request, response) {
  let user = request.body;
  console.log(user);

  let message = await model.signup(user.name, user.email, user.password);
  console.log(message);

  if (message === 'Signed up') {
    response.status(200);
  } else if (message === 'User already registered or Server error') {
    response.status(500)
  }
  else {
    response.status(400)
  }
  response.send(message)
}
 
module.exports = signup