const express = require('express');
const asyncHandler = require('express-async-handler');
const { Chair  } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler( async function(req,res){
    const chairs = await Chair.findAll()
    return res.json(chairs)
}));

module.exports = router;
