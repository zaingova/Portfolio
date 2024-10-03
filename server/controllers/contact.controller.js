import Contact from '../models/contact.model.js'
import pkg from 'lodash';
const { extend } = pkg;
import errorHandler from '../controllers/error.controller.js'

// add a contact
const create = async (req, res) => {
    const contact = new Contact(req.body);
    try {
        await contact.save();
        return res.status(200).json({
            message: "Contact created successfully!"
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

// get all contacts
const list = async (req, res) => {
    try {
        let contacts = await Contact.find().select('firstname lastname email')
        res.json(contacts)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

// middleware function for returning the contact in the request
const userByID = async (req, res, next, id) => {
    try {
        let contact = await Contact.findById(id);
        if (!contact) {
            return res.status(400).json({
                error: "Contact not found"
            })
        }
        // sets req.profile to the cntact which we found by ID. This will be used later by other functions
        req.profile = contact;
        next();
    } catch (err) {
        return res.status(400).json({
            error: "Could not retrieve contact"
        })
    }
}

// find contact by ID
const read = async (req, res) => {
    return res.json(req.profile);
}

// update contact by ID
const update = async (req, res) => {
    try {
        let contact = req.profile;
        contact = extend(contact, req.body);
        await contact.save();
        res.json(contact);
    } catch (err) {
        error: errorHandler.getErrorMessage(err);
    }
}

// removes one contact by ID
const remove = async (req, res) => {
    try {
        let contact = req.profile;
        let deletedContact = await contact.deleteOne();
        res.json(deletedContact);
    } catch (err) {
        error: errorHandler.getErrorMessage(err)
    }
}

// removes all contacts
const removeAll = async (req, res) => {
    try {
        await Contact.deleteMany()
        return res.status(200).json({
            message: "All contacts have been removed successfully"
        })
    } catch (err) {
        error: errorHandler.getErrorMessage(err)
    }
}

export default { create, list, userByID, read, update, remove, removeAll };