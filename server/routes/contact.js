let express = require('express');
let router = express.Router();

//contact contactsController
let contactController = require('../controllers/contact');

/* GEt Contact List page - READ Operations */
router.get('/', contactController.displayContactList);

/* GET request to perform the delte action */
router.get('/delete/:id', contactController.performDelete);
module.exports = router;