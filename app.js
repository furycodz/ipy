const express = require('express')
const app = express() 
const getIp = require('./routes/getIp')
const getLocation = require('./routes/getLocation')
const cors = require('cors')
const PORT = 2004;

app.use(cors())


app.get('/isUp', (req,res) =>{
    res.json({
        "status":"Up and running !"
    })
})

app.use('/', getIp)
app.use('/geo', getLocation)


app.listen(PORT, console.log(`Server running on port: ${PORT}`))


