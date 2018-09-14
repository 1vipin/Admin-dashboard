var mongoose = require('mongoose');

 orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productname: {
        type: String,
        required: true
    },
    orderId: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 1,
        required: true
    },
    dispatchdate: {
        type: String,
        required: true
    },
    deliverydate: {
         type: String,
         required: true
    }
});
module.exports = mongoose.model('Order', orderSchema);