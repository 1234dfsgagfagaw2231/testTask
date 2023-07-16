const Router = require('express');
const router = new Router();
const dataRouter = require('./dataRouter');

router.use('/data', dataRouter);

module.exports = router;