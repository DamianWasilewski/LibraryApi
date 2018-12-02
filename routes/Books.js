const express = require('express');
const books = express.Router()
const cors = require('cors')

const Book = require('../models/Book');
books.use(cors())

//API starting route
books.get('/', (req, res) => {
  res.send('go to /library for all books')
});

//Fetch all data
books.get('/library', (req, res) => {
  Book.findAll()
  .then(book => {res.json(book)})
  .catch(err => {res.send('error: ' + err)})
});

//ADD Book
books.post('/library', (req, res) => {
  const bookInfo = {
    name: req.body.name,
    author: req.body.author,
    isbn: req.body.isbn
  }
  Book.create(bookInfo)
    .then(book => res.json(book))
    .catch(err => {res.send('error: ' + err)})
});

module.exports = books;