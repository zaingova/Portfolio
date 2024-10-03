import User from '../models/user.model.js';
import pkg from 'lodash';
const { extend } = pkg;
import errorHandler from '../controllers/error.controller.js'

// add new user
const create = async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        return res.status(200).json({
            message: "User created successfully!"
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

// get all users
const list = async (req, res) => {
    try {
        let users = await User.find().select('name email updated created')
        res.json(users)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

// middleware function for returning the user in the request
const userByID = async (req, res, next, id) => {
    try {
        let user = await User.findById(id);
        if (!user) {
            return res.status(400).json({
                error: "User not found"
            })
        }
        // sets req.profile to the user which we found by ID. This will be used later by other functions
        req.profile = user;
        next();
    } catch (err) {
        return res.status(400).json({
            error: "Could not retrieve user"
        })
    }
}

// find user by ID
const read = async (req, res) => {
    req.profile.password = undefined;
    console.log(req.profile)
    return res.json(req.profile);
}

// update user by ID
const update = async (req, res) => {
    try {
        let user = req.profile;
        user = extend(user, req.body);
        user.updated = Date.now();
        await user.save();
        user.password = undefined;
        res.json(user);
    } catch (err) {
        error: errorHandler.getErrorMessage(err);
    }
}

// removes one user by ID
const remove = async (req, res) => {
    try {
        let user = req.profile;
        let deletedUser = await user.deleteOne();
        deletedUser.password = undefined;
        res.json(deletedUser);
    } catch (err) {
        error: errorHandler.getErrorMessage(err)
    }
}

// removes all users
const removeAll = async (req, res) => {
    try {
        await User.deleteMany()
        return res.status(200).json({
            message: "All users have been removed successfully"
        })
    } catch (err) {
        error: errorHandler.getErrorMessage(err)
    }
}

export default { create, list, userByID, read, update, remove, removeAll };