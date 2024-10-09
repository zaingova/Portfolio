import mongoose from 'mongoose';
import crypto from 'crypto';

// user model: name, email, password, created, updated
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

// UserSchema.virtual('plainPassword')
//     .set(function (password) {
//         this._plainPassword = password;
//         this.salt = crypto.randomBytes(16).toString('hex');
//         this.password = this.encryptPassword(password);
//     })
//     .get(function () {
//         return this._plainPassword;
//     });

// UserSchema.path('password').validate(function (v) {
//     if (this._plainPassword && this._plainPassword.length < 6) {
//         this.invalidate('plainPassword', 'Password must be at least 6 characters.');
//     }
//     if (this.isNew && !this._plainPassword) {
//         this.invalidate('plainPassword', 'Password is required');
//     }
// }, null);

// UserSchema.methods = {
//     authenticate: function (plainText) {
//         return this.encryptPassword(plainText) === this.password;
//     },
//     encryptPassword: function (password) {
//         if (!password) return '';
//         try {
//             return crypto
//                 .pbkdf2Sync(password, this.salt, 10000, 64, 'sha512')
//                 .toString('hex');
//         } catch (err) {
//             return '';
//         }
//     }
// };

export default mongoose.model('User', UserSchema);
