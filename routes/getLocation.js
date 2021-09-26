const express = require('express')
const router = express.Router();


router.get('/getLocation/:ip', async (req,res) =>{
    const ip = req.params.ip
    res.json({
        "sucess":"Ip Location will be added soon!"
    })

})

module.exports = router