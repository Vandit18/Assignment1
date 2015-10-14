var express = require('express');
var router = express.Router();




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Portfolio',
                        message: ''} );
});




/* GET About page */
router.get('/about', function(req, res, next) {
   res.render('About'); 
});

/* GET Contact page */
router.get('/Contact', function (req, res, next) {
    res.render('Contact');
});

/* GET Service page */
router.get('/services', function (req, res, next) {
    res.render('services');
});

/* GET Projects page */
router.get('/Projects', function (req, res, next) {
    res.render('Projects');
});


module.exports = router;
