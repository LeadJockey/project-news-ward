const express    = require('express');
const app        = express();
const morgan     = require('morgan');
const path       = require('path');
const mongoose   = require('mongoose');

const db         = mongoose.connection;

app.set('port', 3000);
app.set('db-url', 'mongodb://shawn:1234@ds127129.mlab.com:27129/news-ward')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

db.on('error', console.error);
db.once('open', () => console.log('Connected to mongo server'));
mongoose.connect(app.get('db-url'));

app.use(morgan('dev'));

app.use('/', require('./routes'));

app.listen(app.get('port'), () => {
	console.log(`server listening on port ${app.get('port')}`);
});