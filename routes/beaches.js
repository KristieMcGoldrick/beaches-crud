var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex.table('beaches').select().then(function(beaches) {
    console.log(beaches);
    res.render('beaches', {beaches: beaches});
  })

});

router.get('/add', function (req, res, next){
  res.render('add');
});

router.post('/add', function(req, res, next){
  // console.log(req.body);
  // res.redirect('/beaches');
  var name = req.body.name;
  var image = req.body.image;
  var description =req.body.description;

  knex.table('beaches').insert (
    {
      name: name,
      image: image,
      description: description
    }
    // inserting it into db
  ).then (function(message) {
    console.log(message);
    res.redirect('/beaches');
  }).catch(function(error){
    next(error);
  })
});
module.exports = router;
