const express = require('express');
const db_model = require('./database/db_model');

db_model.test()

const app = express();

app.listen(8080);
app.use(express.json());

app.get('/hello', (request, response)=> {
  console.log('hello');
  response.send("Hello");
})

app.post('/login', require('./api/login'));
app.post('/signup', require('./api/signup'));

