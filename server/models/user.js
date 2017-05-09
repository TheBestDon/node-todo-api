var mongoose = require('mongoose');


var User = mongoose.model('User', {
    user: {
        type: String,
        minlength: 1
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports = {User};