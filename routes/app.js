
const express = require('express');
const router = express.Router();
const routes = require('../routes/addusers');



/*
    GET /app/ -> simply render the page
*/
router.get('/app', (req, res) => {
    res.status(200).render('dashboard');
});

// router.post('/app/users', (req, res) => {
//     res.status(200).render('dashboard');
// });

router.get('/', routes); 
module.exports = router;
