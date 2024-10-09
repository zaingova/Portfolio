import express from 'express';
import userCtrl from '../controllers/user.controller.js';
import authCtrl from '../controllers/auth.controller.js';

const router = express.Router();

// establishes routes ending with /api/users
router.route('/api/users')
.get(userCtrl.list) // get all users
.post(userCtrl.create) // add new user
.delete(userCtrl.removeAll) // deletes all users

// establishes routes ending with api/users/:userId
router.route('/api/users/:userId')
// .get(authCtrl.requireSignin, userCtrl.read)
// .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
// .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove)
.get(userCtrl.read) // get user by ID
.put(userCtrl.update) // update user by ID
.delete(userCtrl.remove); // remove user by ID

router.param('userId', userCtrl.userByID);
router.route('api/users').post(userCtrl.create);
router.route('api/users').get(userCtrl.list);
router.route('api/users').delete(userCtrl.removeAll);

router.param('userId', userCtrl.userByID);
router.route('api/users/:userId').get(userCtrl.read);
router.route('api/users/:userId').put(userCtrl.update);
router.route('api/users/:userId').delete(userCtrl.remove);

export default router;