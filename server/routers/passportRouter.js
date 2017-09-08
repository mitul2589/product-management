var express = require('express');
var path = require('path');
var PassportRouter = express.Router();
var Counter = require(path.join(__dirname + '/../models/users'));

var passportrouter = function (passport) {
    PassportRouter.get('/login', function (req, res) {
        res.sendFile(path.join(__dirname + '/../../src/login.html'));
    });

    /* Handle Login POST */
    PassportRouter.post('/login', passport.authenticate('login', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    }));

    /* GET Registration Page */
    PassportRouter.get('/signup', function (req, res) {
        res.sendFile(path.join(__dirname + '/../../src/signup.html'));
    });

    /* Handle Registration POST */
    PassportRouter.post('/signup', passport.authenticate('signup', {
        successRedirect: '/login',
        failureRedirect: '/login',
        failureFlash: true
    }));

    PassportRouter.get('/signout', function (req, res) {
        req.logout();
        res.redirect('/login');
    });

    return PassportRouter;
};


module.exports = passportrouter;