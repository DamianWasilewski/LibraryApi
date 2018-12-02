const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('*****', '*****', '******', {
  host: '****',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: Infinity,
    min: 0,
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db