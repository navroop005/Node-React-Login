const { RequestError } = require("mssql");
const { getConnection } = require("./db_connection");

async function signup(user) {
  let query = `INSERT INTO [dbo].[users] VALUES ('${user.name}', '${user.email}', '${user.password}')`;
  let conn = await getConnection();
  if (conn === undefined) {
    return false;
  }
  else {
    try {
      let rs = await conn.request().query(query);
      console.log(rs);
      return rs.rowsAffected.length>0;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}

module.exports = signup