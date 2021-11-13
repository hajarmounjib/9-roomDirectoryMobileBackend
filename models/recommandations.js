
var mongoose = require('mongoose');

var recommandationSchema = mongoose.Schema({
    typeRecommandation: String,
    nameRecommandation: String,
    adresse: String,
    description: String,
    visuel: String,
    telephone:Number,
    logo: String,
    urlSiteWeb:String,
    mapView:String,
    hotel:{ type: mongoose.Schema.Types.ObjectId, ref: 'hotels' },
})
module.exports = mongoose.model('recommandations', recommandationSchema)