const { RequestError } = require("mssql");
const { getConnection } = require("./db_connection");

async function loginDB(user) {
  let query = `SELECT * FROM [dbo].[users] WHERE email='${user.email}' AND password='${user.password}'`;
  let conn = await getConnection();
  if (conn === undefined) {
    return false;
  }
  else {
    try {
      let rs = await conn.request().query(query);
      // console.log(rs);
      return rs.recordset.length>0;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}

module.exports = loginDB