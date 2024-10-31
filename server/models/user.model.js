import mongoose from 'mongoose';
import crypto from 'crypto';

// User model: name, email, password, created, updated
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: "Name is required"
    },
    email: {
        type: String,
        trim: true,
        unique: "Email already exists",
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        required: 'Email is required'
    },
    password: {
        type: String,
        required: "Password is required"
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    },
    salt: String
});

UserSchema.virtual('inputPassword')
    .set(function (inputPassword) {
        this._inputPassword = inputPassword;
        this.salt = this.generateSalt();
        this.password = this.hashPassword(inputPassword);
    })
    .get(function () {
        return this._inputPassword;
    });

UserSchema.path('password').validate(function (password) {
    if (this._inputPassword && this._inputPassword.length < 6) {
        this.invalidate('password', 'Password must be at least 6 characters.');
    }
    if (this.isNew && !this._inputPassword) {
        this.invalidate('password', 'Password is required');
    }
}, null);

UserSchema.methods = {
    verifyPassword: function (plainPassword) {
        return this.hashPassword(plainPassword) === this.password;
    },
    hashPassword: function (password) {
        if (!password) return '';
        try {
            return crypto
                .createHmac('sha1', this.salt)
                .update(password)
                .digest('hex');
        } catch (err) {
            return '';
        }
    },
    generateSalt: function () {
        return Math.round((new Date().valueOf() * Math.random())) + '';
    }
};

export default mongoose.model('User', UserSchema);