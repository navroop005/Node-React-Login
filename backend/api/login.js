const model = require('../model/login');

async function login (request, response) {
  let user = request.body;
  console.log(user);

  let valid = await model.isValid(user.email, user.password);

  if (valid) {
    console.log("valid");
    response.sendStatus(200)
  } else {
    console.log("invalid");
    response.sendStatus(401)
  }
}
 
module.exports = login