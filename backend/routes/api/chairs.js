const express = require('express');
const asyncHandler = require('express-async-handler');
const { Chair  } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler( async function(req,res){
    const chairs = await Chair.findAll()
    return res.json(chairs)
}));

router.get('/:id', asyncHandler( async function(req,res){
    const chair = await Chair.findOne({
        where:{ id: req.params.id,
        },
    })
    return res.json(chair);
}))

router.put('/:id', asyncHandler( async function(req, res){
    const id = req.body.id

    const chair = await Chair.findByPk(id)
    chair.address = req.body.address;
    chair.city = req.body.city;
    chair.state = req.body.state;
    chair.country = req.body.country;
    chair.name = req.body.name;
    chair.description = req.body.description;
    chair.price = req.body.price;
    chair.updatedAt = new Date();
    await chair.save();

    res.json(chair)


}))
module.exports = router;
