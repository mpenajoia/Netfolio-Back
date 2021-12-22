const express = require('express')
const router = express.Router()
const Asset = require("../models/assetSchema")

router.post('/', (req, res) => {
    Asset.create(req.body)
        .then(asset => {
            // console.log(req.body)
            res.status(201).json(asset)
        })
})

router.get('/', (req, res) => {
    Asset.find()
        .then(asset => res.status(200).json(asset))
})

router.delete('/:id', (req, res) => {
    Asset.deleteOne({ _id: req.params.id})
        .then(() => res.status(204).json(req.body) )
})

router.put('/:id', (req, res) => {
    Asset.findByIdAndUpdate({ _id: req.params.id}, req.body, {new: true}).then((asset) => {
        res.status(200).json(asset)
    })
})

module.exports = router;