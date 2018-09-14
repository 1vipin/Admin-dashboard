var mongoose = require('mongoose');
 settingSchema = mongoose.Schema({
    changeemail:{
        type: String,
        required: true
    },
   changepassword:{
        type: String,
        required: true
    },
});
module.exports = mongoose.model('Setting', settingSchema);