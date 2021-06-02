var express = require('express');
var router = express.Router();
const path = require('path');
const db = require('better-sqlite3')('articles.db');

/* GET home page. */

router.post('/article/add', function(req, res, next) {
    console.log(req.body)
    if(req.body.title === undefined || req.body.desc === undefined)
        res.send("Sry but you need to give 2 param exactly")

    const rdyToRun = db.prepare("INSERT INTO article (title,description) VALUES (?,?)");
    const article = [req.body.title, req.body.desc];

    rdyToRun.run(article);

    res.redirect('back');
});


router.get('/articles/all', function(req, res, next) {
    res.json(db.prepare('SELECT title, description FROM article').all());
});


module.exports = router;
