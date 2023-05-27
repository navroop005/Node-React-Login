const { RequestError } = require("mssql");
const { getConnection } = require("./db_connection");
const { User } = require("./db_model");

async function signup(user) {
  try {
    await User.create({
      name: user.name,
      email: user.email,
      password: user.password
    });
    return true;
  } catch (error) {
    return false;
  }
}

module.exports = signup