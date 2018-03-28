const express    = require('express');
const app        = express();
const NewsAPI    = require('newsapi');
const newsapi    = new NewsAPI('330559bb95d74b6ca415efb62a7f3861');
const dateFormat = require('dateformat');
const now        = new Date();
const today      = dateFormat(now, 'yyyy-mm-dd');
const morgan     = require('morgan');
const path       = require('path');
const _          = require('underscore');
const mongoose   = require('mongoose');
const db         = mongoose.connection;

const q          = '이명박';

app.set('port', 3000);
app.set('db-url', 'mongodb://shawn:1234@ds127129.mlab.com:27129/news-ward')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

db.on('error', console.error);
db.once('open', () => console.log('Connected to mongo server'));
mongoose.connect(app.get('db-url'));

app.use(morgan('dev'));

app.get('/data', (req, res) => {
	newsapi.v2
				 .everything({q: q, pageSize: 100, from: today})
				 .then(response => {
					 let data      = {...response};
					 data.articles = _.uniq(response.articles, 'title');
					 res.json({root: data});
				 });
});

app.get('/', (req, res) => {
	newsapi.v2
				 .everything({q: q, pageSize: 100, from: today})
				 .then(response => {
					 let data      = {...response};
					 data.articles = _.uniq(response.articles, 'title');
					 res.render('index', {root: data});
				 });
});


app.listen(app.get('port'), () => {
	console.log(`server listening on port ${app.get('port')}`);
});