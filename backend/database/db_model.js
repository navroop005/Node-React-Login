
const { DataTypes, Sequelize } = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(config.database, config.user, config.password, {
  dialect: 'mssql',
  host: config.server,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  dialectOptions: {
    encrypt: true
  },
  logging: (...msg) => console.log(msg)
});

const User = sequelize.define('user', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

async function test() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await sequelize.sync()
    console.log('sync');

    x = await User.create({
      name: 'Test user',
      email: 'user@x.y',
      password: 'password',
    })
    console.log('User added');
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      console.log('User exist');
    } else {
      console.error('Test Error:', error);
    }
  }
}

module.exports = { User, test }