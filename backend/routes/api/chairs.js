const express = require('express');
const asyncHandler = require('express-async-handler');
const { Chair, Image  } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler( async function(req,res){
    const chairs = await Chair.findAll({
        include: 'Images'
    })
    return res.json(chairs)
}));

router.post('/', asyncHandler(async function(req,res){
    const { name,
            description,
            address,
            city,
            country,
            state,
            price,
            userId,
            url
    } = req.body

    const chair = await Chair.create({
        name,
        description,
        address,
        city,
        country,
        state,
        price,
        userId
    })

    const chairId = chair.id
    const image =await Image.create({
        chairId,
        url
    })

    return res.json(chair);
}))

router.get('/:id', asyncHandler( async function(req,res){
    const id = req.params.id
    const chair = await Chair.findByPk(id, {
        include: 'Images'
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

    return res.json(chair)


}));

router.delete('/:id',asyncHandler( async function(req, res){
    const id  = req.params.id;

    const chair = await Chair.findByPk(id);
    await chair.destroy();
    return res.json(id)
}))

module.exports = router;
