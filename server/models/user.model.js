import mongoose from 'mongoose';

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
    }
});

export default mongoose.model('User', UserSchema);
