const Show = require('../models/show')



exports.index = async function index (req,res) {
    try {
        const shows = await Show.find({})
        res.status(200).json(shows)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}



exports.create = async function create(req,res) {
    try {
        const createdShow = await Show.create(req.body)
        res.status(200).json(createdShow)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


exports.show = async function show(req,res) {
    try {
        const foundShow = await Show.findOne({ _id: req.params._id })
        res.status(200).json(foundShow)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}