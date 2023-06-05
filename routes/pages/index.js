const express = require('express');
const router = express.Router();

// Import the homeController
//const homeController = require('../../controllers/pages/homeController');

router.get('/admin/editCountry', (req, res) => {
    res.render('admin/edit-country', { layout:'admin', title:'Edit Country' });
})

// Define the route for the home page
router.get('/', (req, res) => {
    res.render('home');
});

module.exports = router;