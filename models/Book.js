const Sequelize = require('sequelize');
const db = require('../database/db');

module.exports = db.sequelize.define(
  'book',
  {
    book_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    author: {
      type: Sequelize.STRING
    },
    isbn: {
      type: Sequelize.INTEGER
    }
  },
  {
    timestamps: false
  }
)