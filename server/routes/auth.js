const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const keys = require('../keys');
const router = express.Router();

router.post('/login', (req, res, next) => {

  passport.authenticate(
    'local',
    { session: false },
    (error, user, info) => {

      console.log(error, user, info);

      if (error || !user) {
        return res.status(400).json({
          message: 'Error logging in',
          user: user,
        });
      }

      req.login(user, {session: false}, (error) => {
        if (error) {
          res.send(error);
        }

        // generate a signed json web token and return
        // it in the response
        const token = jwt.sign(JSON.stringify(user), keys.secret);
        return res.json({user, token});
      });
    },
  )(req, res);
});

module.exports = router;