const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const chairsRouter = require('./chairs.js')
const bookingsRouter = require('./bookings')
const imagesRouter = require('./images.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);
router.use('/chairs', chairsRouter);
router.use('/bookings', bookingsRouter);
router.use('/images', imagesRouter);

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
