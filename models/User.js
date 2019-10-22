var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        required: "Username is required"
    }, 
    password: {
        type: String,
        trim: true,
        required: "Password is required",
        validate: [
            function(input) {
                return input.length >=6;
            },
            "Password should be longer."
        ]
    },
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    }, 
    image: {
        type: String,
        required: false,
        unique: false,
        default: ""
    }, 
    userCreated: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Number,
        required: true,
        default: 0
    }, 
    goldstars: {
        type: Number,
        required: true,
        default: 0
    }, 
    myRequestedImages: [{
        type: Schema.Types.ObjectId,
        ref: "Suggestableimage"
    }],
    myCommunityCaptions: [{
        type: Schema.Types.ObjectId,
        ref: "Communitycaptions"
    }], 
    mySuggestedCaptions: [{
        type: Schema.Types.ObjectId,
        ref: "Suggestedcaptions"
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comments"
    }],
    isDeleted: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: {
        createdAt: 'created_at'
    }
})

// UserSchema.methods.generateHash = function(password){
//     return bcrypt.hashSync( password, bcrypt.genSaltSync(8), null);
// };

// UserSchema.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
// };

var User = mongoose.model("User", UserSchema);

module.exports = User;