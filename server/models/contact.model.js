import mongoose from "mongoose";

// contact model: firstname, lastname, contact
const ContactSchema = new mongoose.Schema({
    firstname: {
        type: "String",
        trim: true,
        required: "firstname is required"
    },
    lastname: {
        type: String,
        trim: true,
        required: "lastname is required"
    },
    contact: {
        type: String,
        trim: true,
        required: "contact is required",
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    }
});

export default mongoose.model('Contact', ContactSchema);