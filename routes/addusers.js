const express = require('express');
const _ = require('lodash');
const router = express.Router();
var isValidDate = require('is-valid-date');
const {ObjectID} = require('mongodb');

router.get('/app/users', (req, res) => {
    res.render('users', {pageTitle: "Add users"});
});


router.post('/app/user', (req, res) => {
    var dateOfBirth = req.body.dateOfBirth;

    // Check for empty fields
    if (_.isEmpty(req.body.firstName) || _.isEmpty(req.body.lastName) || !isValidDate(dateOfBirth)) {
        if (_.isEmpty(req.body.firstName)) req.flash('error_msg', 'Please enter the first name.');
        if (_.isEmpty(req.body.lastName)) req.flash('error_msg', 'Please enter the last name.');
        if (_.isEmpty(req.body.email)) req.flash('error_msg', 'Please enter the email.');
        if (_.isEmpty(req.body.password)) req.flash('error_msg', 'Please enter the password.');
        if (!isValidDate(dateOfBirth)) req.flash('error_msg', 'The date is not valid.');
        if (!isValidDate(gender)) req.flash('error_msg', 'please enter the gender.');
        

        res.status(400).redirect('/app/adduser');
    } else {
        // set the gender of the new user
        var gender = req.body.gender;
        if (gender === "male") {
            gender = true;
        } else {
            gender = false;
        }

        // make a new user
        var user = User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: email,
            password: password,
            gender: gender,
            dateOfBirth: dateOfBirth,
            lastUpdate: (new Date().getTime())
        });

        user.save()
        .then((user) => {
            console.log(user);
            res.status(200).redirect('/app');
        })
        .catch((err) => {
            console.log(err);
            res.status(400).redirect('/app');
        });
   }
});


router.get('/app/getusers', (req, res) => {
    user.find({}).then((users) => {
        res.status(200).send(users);
    })
    .catch((err) => {
        console.log(err);
        res.status(400).send();
    });
});

router.post('/app/updateuser/:email', (req, res) => {
    email = req.params.email;
    user.findOneAndUpdate({
        email
    }, {
        "$set": {
            "password": password,
            "lastUpdate": (new Date().getTime())
         }
    },{
        new: true
    }).then((user) => {
        user.updateScore();
        res.redirect('/app/user/' + email);
    }).catch((err) => {
        console.log(err);
        res.redirect('/app/user/' + email);
    });
});

router.delete('/:email', (req, res) => {
    User.remove({ email: req.params.email})
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json({
            message: 'User deleted'
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;