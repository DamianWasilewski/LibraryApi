const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

let port = process.env.PORT || 5000;

let Books = require('./routes/Books')

app.use('/', Books)

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
