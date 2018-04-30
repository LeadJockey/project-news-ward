const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('330559bb95d74b6ca415efb62a7f3861');
const _ = require('lodash');
const express = require('express');
const router = express.Router();
const dateFormat = require('dateformat');
const now = new Date();
const today = dateFormat(now, 'yyyy-mm-dd');

router.get('/:query/data', (req, res) =>{
  newsapi.v2
         .everything({
           q:decodeURIComponent(req.params.query),
           pageSize:100,
           from:today
         })
         .then(response =>{
           let data = { ...response };
           data.articles = _.unionBy(response.articles, 'title');
           res.json({ root:data });
         });
});

router.get('/:query', (req, res) =>{
  newsapi.v2
         .everything({
           q:decodeURIComponent(req.params.query),
           pageSize:100,
           from:today
         })
         .then(response =>{
           let data = { ...response };
           data.articles = _.unionBy(response.articles, 'title');
           res.render('index', { root:data });
         });
});

module.exports = router;