const express = require('express');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');

const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));
// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', indexRouter);

app.listen(3000, () => console.log(`Server is running on port 3000`));

module.exports = app;
