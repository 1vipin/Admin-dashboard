const express = require('express');
const _ = require('lodash');
const router = express.Router();
const setting = require('./../server/models/setting.js');

router.get('/app/settings', (req, res) => {
    res.render('settings', {pageTitle: "settings"});
});


router.post('/app/settings', (req, res) => {
    email = req.params.email;
    user.findOneAndUpdate({
        email
    }, {
        "$set": {
            "changeemail": changeemail,
            "changepassword": changepassword
         }
    },{
        new: true
    })
    .then((user) => {
        user.updateScore();
        res.redirect('/app/user/' + email);
    })
    .catch((err) => {
        console.log(err);
        res.redirect('/app/user/' + email);
    });
});

module.exports = router;
   