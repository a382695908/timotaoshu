var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('', function(req, res, next) {
    res.render('pages/users/index', { title: '海贼团',myUrl:'/users/index' });
});

module.exports = router;
