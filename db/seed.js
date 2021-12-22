const mongoose = require('mongoose')

const Asset = require('../models/assetSchema')

Asset.deleteMany({}).then(() => {
    Asset.create({
        symbol: "TSLA",
        name: "Tesla",
        qty: 1,
        invested: 800,
        category: "Stock",
        current: 942.87
    })
})