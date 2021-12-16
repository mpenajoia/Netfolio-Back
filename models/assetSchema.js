const mongoose = require('../db/connections');

const assetSchema = mongoose.Schema ({
    symbol: String,
    name: String,
    qty: Number,
    invested: Number,
    category: String,
    current: Number
})

module.exports = mongoose.model('Asset', assetSchema);