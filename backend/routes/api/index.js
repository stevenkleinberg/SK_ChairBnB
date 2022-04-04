const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const chairsRouter = require('./chairs.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);
router.use('/chairs', chairsRouter);

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
