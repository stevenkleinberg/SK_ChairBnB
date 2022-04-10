const express = require('express');
const asyncHandler = require('express-async-handler');
const { Booking  } = require('../../db/models');

const router = express.Router();

router.get('/:userId', asyncHandler(async function(req,res){
    const userId = req.params.userId
    const bookings = await Booking.findAll({
        where: {userId}
    })

    return res.json(bookings);
}))

router.post('/', asyncHandler(async function(req,res){
    const {
        userId,
        chairId,
        sitDate,
        standDate
    } = req.body;

    const booking = await Booking.create({
        userId,
        chairId,
        sitDate,
        standDate
    })

    return res.json(booking);
}))


router.delete('/:id',asyncHandler( async function(req, res){
    const id  = req.params.id;

    const booking = await Booking.findByPk(id);
    await booking.destroy();
    return res.json(id)
}))

module.exports = router;
