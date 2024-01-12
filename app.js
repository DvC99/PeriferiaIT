require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect = require("./config/mongo")
const app = express()
const port =  process.env.PORT || 3000


app.use(cors())
app.use(express.json())
app.use('/api/1/', require('./app/routes'))

dbConnect()
app.listen(port, () => {
    console.log (`Run server http://localhost:${port}`)
});
