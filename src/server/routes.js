var router = require('express').Router();
var four0four = require('./utils/404')();

router.get('/me', getMe);
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

function getMe(req, res, next) {
  res.json(req.user);
}