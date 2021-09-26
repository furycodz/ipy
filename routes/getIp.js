const express = require('express')
const router = express.Router();


router.get('/getIp', (req,res) =>{
    try {
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    
        if(req.query.format == 'jsonp'){
            console.log('here');
            res.send(req.query.callback+'('+"{ip:"+ip+'})')
        }else{
            res.json({
                "ip":ip,
            })
        }

        const today = new Date();



        var dateTime = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+' '+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        console.log(`[${dateTime}] ${req.query.format}-${ip}`);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router