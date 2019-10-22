var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSessionSchema = new Schema({
    userId: {
        type: Number,
        default: -1
    },
    timestamp: {
        type: Date,
        default: Date.now()
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});


var UserSessionSchema = mongoose.model("User", UserSchema);

module.exports = UserSessionSchema;