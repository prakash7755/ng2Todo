'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const { User } = require('../models');
const TokenServ = require('../service/token');




/*
 *  User Register
 */

router.route('/register')
    .post((req, res, next) => {
        const { email, password } = req.body || {};

        if (!email || !password) {
            return res.status(401).json({message: 'Bad Requiest'});
        }

        /*
         * Password Bcrypet
         */
        bcrypt.hash(password, 10)
            .then((password) => {
                const user = new User({
                    email,
                    password
                })
                return user.save()
            })

             .then(isSuccess => {
            if (isSuccess) {
                const token = TokenServ.generateToken({ email });
                return res.json({ token })
            }

            return res.status(401).json({message: 'Worn password'})
        })
            .catch(next)

    })



/*
 *  Login Verification
 */


router.post('/login', (req, res, next) => {
    console.log(req.body)
    const { email, password } = req.body;

    if (!email || !password) {
        const error = console.error('Bad Requiest');
        return next(error)
    }

    User.findOne({ email })
        .then(data => {

            if (!data) {
                return res.json({ message: 'User With Given Email ID Not Found' })
            }

            /*
             * Bcrypt Password Verification
             */

            return bcrypt.compare(password, data.password)


        })
        .then(isSuccess => {
            if (isSuccess) {
                const token = TokenServ.generateToken({ email });
                return res.json({ token })
            }

            return res.status(401).json({message: 'Worn password'})
        })
        .catch(next)
})


/*
 * Error Handling
 */

router.use((error, req, res, next) => {
    const { message } = error || {};
    const isSuccess = false;
    console.error(error)
    res.json({ message, isSuccess })
})


module.exports = router