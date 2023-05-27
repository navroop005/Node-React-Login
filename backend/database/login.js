const { RequestError } = require("mssql");
const { getConnection } = require("./db_connection");
const { User } = require("./db_model");

async function loginDB(user) {
  try {
    user = await User.findOne({
      where: {
        email: user.email,
        password: user.password
      }
    });
    return user != null;
  } catch (error) {
    console.error(error);
    return false;
  } 
}

module.exports = loginDB