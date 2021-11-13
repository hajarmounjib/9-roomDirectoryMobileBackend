
var mongoose = require('mongoose');

var roomDirectoryBaseSchema = mongoose.Schema({
    letterFilter: String,
    itemName: String,
    specialTag: String,
    description: String,
    hotel:{ type: mongoose.Schema.Types.ObjectId, ref: 'hotels' },
})
module.exports = mongoose.model('roomDirectoryBases', roomDirectoryBaseSchema)