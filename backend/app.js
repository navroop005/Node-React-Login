const express = require('express');
const db_model = require('./database/db_model');

db_model.test()

const app = express();
const router = require('./router');

app.listen(8080);
app.use(express.json());

app.use('/', router);
