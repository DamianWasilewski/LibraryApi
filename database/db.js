const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('heroku_69b3916c17a669d', 'b8910a0a760e1a', '86ed563d', {
  host: 'eu-cdbr-west-02.cleardb.net',
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