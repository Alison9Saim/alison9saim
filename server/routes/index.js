let express = require('express');
let router = express.Router();

let Controllers = require('../controllers/index')

/* ROUTE SECTIONS */
/* GET home page. */
router.get('/', (req, res, next) => {
  Controllers.displayHome(res);
});


router.get('/home', (req, res, next) => {
  Controllers.displayHome(res);
});

/* GET about page */
router.get('/about', (req, res, next) => {
  Controllers.displayAbout(res);
});

/* GET Contact page */
router.get('/contact', (req, res, next) => {
  Controllers.displayContact(res);
});


/* GET Products page */
router.get('/products', (req, res, next) => {
  Controllers.displayProducts(res);
});


/* GET Services page */
router.get('/services', (req, res, next) => {
  Controllers.displayServices(res);
});

/* GET Login page */
router.get('/login', (req, res, next) => {
  Controllers.displayLogin(res);
});





module.exports = router;
