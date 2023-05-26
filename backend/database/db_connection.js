const sql = require('mssql');
const config = require('./config');

// const config = {
//   user: '',
//   password: '',
//   server: '.database.windows.net',
//   port: 1433,
//   database: '',
//   authentication: {
//     type: 'default'
//   },
//   options: {
//     encrypt: true
//   }
// }

let connection = undefined;

async function getConnection() {
  if (connection) {
    return connection;
  }
  try {
    connection = await sql.connect(config);
    console.log('Connected to database');
    return connection;
  } catch (err) {
    console.error(err.message);
  }
}

module.exports = {getConnection}

// var resultSet = await poolConnection.request().query(`SELECT TOP 20 pc.Name as CategoryName,
// p.name as ProductName 
// FROM [SalesLT].[ProductCategory] pc
// JOIN [SalesLT].[Product] p ON pc.productcategoryid = p.productcategoryid`);

// console.log(`${resultSet.recordset.length} rows returned.`);

// // output column headers
// var columns = "";
// for (var column in resultSet.recordset.columns) {
// columns += column + ", ";
// }
// console.log("%s\t", columns.substring(0, columns.length - 2));

// // ouput row contents from default record set
// resultSet.recordset.forEach(row => {
// console.log("%s\t%s", row.CategoryName, row.ProductName);
// });

// // close connection only when we're certain application is finished