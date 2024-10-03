import express from 'express';
import contactCtrl from '../controllers/contact.controller.js';

const router = express.Router();

// establishes routes ending with /api/contacts
router.route('/api/contacts')
.get(contactCtrl.list) // get all contacts
.post(contactCtrl.create) // add new contact
.delete(contactCtrl.removeAll) // deletes all contacts

// establishes routes ending with api/contacts/:contactId
router.route('/api/contacts/:contactId')
.get(contactCtrl.read) // get contact by ID
.put(contactCtrl.update) // update contact by ID
.delete(contactCtrl.remove); // remove contact by ID

// setting up routes without a url param
router.param('contactId', contactCtrl.userByID);
router.route('api/contacts').post(contactCtrl.create);
router.route('api/contacts').get(contactCtrl.list);
router.route('api/contacts').delete(contactCtrl.removeAll);

// setting up routes with a url param
router.param('contactId', contactCtrl.userByID);
router.route('api/contacts/:contactId').get(contactCtrl.read);
router.route('api/contacts/:contactId').put(contactCtrl.update);
router.route('api/contacts/:contactId').delete(contactCtrl.remove);

export default router;