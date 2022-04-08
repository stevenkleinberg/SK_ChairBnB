const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const chairsRouter = require('./chairs.js')
const bookingsRouter = require('./bookings')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);
router.use('/chairs', chairsRouter);
router.use('/bookings', bookingsRouter);

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
