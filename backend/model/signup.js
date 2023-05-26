const User = require('./user');
const signupDB = require('../database/signup');


async function signup(name, email, password) {
  let user = new User(name, email, password);
  let userValid = user.validate();

  if (user.validate() == 'valid') {
    let done = await signupDB(user);
    if (done) {
      return 'Signed up';
    } else {
      return 'User already registered or Server error';
    }
  } else {
    return userValid;
  }
}

module.exports = { signup }