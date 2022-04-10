const express = require('express');
const asyncHandler = require('express-async-handler');
const { Image  } = require('../../db/models');

const router = express.Router();


router.post('/', asyncHandler(async function(req,res){
    const { chairId,
            url
    } = req.body


    const image =await Image.create({
        chairId,
        url
    })

    return res.json(chairId);
}))

module.exports = router;
