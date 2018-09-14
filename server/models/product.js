var mongoose = require('mongoose');
 productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    manufactureddate: {
        type: String,
        required: true
    },
    expireddate: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Product', productSchema);