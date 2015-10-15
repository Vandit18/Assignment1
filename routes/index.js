var express = require('express');
var router = express.Router();




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Portfolio',
                        message: ''} );
});




/* GET About page */
router.get('/about', function(req, res, next) {
   res.render('about'); 
});

/* GET Contact page */
router.get('/Contact', function (req, res, next) {
    res.render('Contact');
});

/* GET Service page */
router.get('/services', function (req, res, next) {
    res.render('services');
});



module.exports = router;
