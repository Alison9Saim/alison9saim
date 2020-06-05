let express = require('express');
let router = express.Router();
// connect the contactsController
let contactController = require('../controllers/contact');
/* GET Contact List page - READ Operation */
router.get('/', contactController.displayContactList);
/* GET Route to display the Add page */
router.get('/add', contactController.displayAddPage);
/* POST Route to process the Add page */
router.post('/add', contactController.processAddPage);

/* GET Route to display the Edit page */
router.get('/edit/:id', contactController.displayEditPage);

/* POST Route to process the Edit page */
router.post('/edit/:id', contactController.processEditPage);


/* GET request to perform the delete action */
router.get('/delete/:id', contactController.performDelete);
module.exports = router;