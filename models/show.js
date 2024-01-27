const mongoose = require('mongoose')

    const showSchema = new mongoose.Schema ({
        title: { type: String, required: true },
        releaseDate: { type: Number, required: true },
        overallRating: { type: String, required: true }
    })


    const Show = mongoose.model('Show', showSchema)

    module.exports = Show