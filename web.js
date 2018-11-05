const mysql = require('mysql');
const express = require('express');
const app = express();
let port = process.env.PORT || 5000;
const mysqlConnection = mysql.createPool({
  host: 'xxxx',
  user: 'xxxx',
  password: 'xxxx',
  database: 'xxxx'
});

app.get('/', (req, res) => {
    res.send('go to /library for books');
});

app.get('/library/add', (req, res) => {
    const { name, author, isbn} = req.query;
    const INSERT_DATA_QUERY = `INSERT INTO books (name, author, isbn) VALUES('${name}', '${author}', '${isbn}')`
    mysqlConnection.query(INSERT_DATA_QUERY, (err, results) => {
      if(err) {
        return res.send(err)
      } else {
        return res.send('succesfully added data')
      }
    });
});

app.delete('/library/:id', (req, res) => {
    const DELETE_BOOK_QUERY = `DELETE FROM books WHERE book_id = ?`
    mysqlConnection.query(DELETE_BOOK_QUERY,[req.params.id], (err, results) => {
      if(err) {
        return res.send(err)
      } else {
        return res.send('Deleted successfully.');
      }
    });
});

app.post('/library/update/:id', (req, res) => {
    const { name, author, isbn} = req.query;
    const UPDATE_BOOK_QUERY = `UPDATE books SET name='${name}', author='${author}', isbn='${isbn}' WHERE book_id = ?`
    mysqlConnection.query(UPDATE_BOOK_QUERY,[req.params.id], (err, results) => {
      if(err) {
        return res.send(err)
      } else {
        return res.send('Updated successfully');
      }
    });
});

app.get('/library', (req, res) => {
    mysqlConnection.query('SELECT * FROM books', (err, results) => {
      if(err) {
        return res.send(err)
      } else {
        return res.json({
          data: results
        })
      }
    });
});


app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
