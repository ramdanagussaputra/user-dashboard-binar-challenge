const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: [true, 'User must have first name'],
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, 'User must have last name'],
    },
    username: {
        type: String,
        trim: true,
        required: [true, 'User must have username'],
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'User must have password'],
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'User must have email'],
    },
    city: {
        type: String,
        trim: true,
        required: [true, 'User must have address'],
    },
});

userSchema.pre(/^find/, function (next) {
    this.select('-__v');

    next();
});

userSchema.post('save', function (doc, next) {
    delete this.__v;

    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
