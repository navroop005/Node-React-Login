const loginDB = require("../database/login");
const User = require("./user");

async function isValid( email, password) {
  let user = new User(undefined, email, password);
  return loginDB(user);
}

module.exports = {isValid}