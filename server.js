require('dotenv').config()
const app = require('./app')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('MongoDB is LIVE')
})
    app.listen(PORT, () => {
        console.log('ITS ACTIVE')
    })