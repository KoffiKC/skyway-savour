const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const cohort = req.body.cohort;
  const password = encryptLib.encryptPassword(req.body.password);

  const queryText = `INSERT INTO "users" (username, password, cohort)
    VALUES ($1, $2, $3) RETURNING id`;
  pool
    .query(queryText, [username, password, cohort])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

// USER PROFILE ROUTES

// this will select all the users reviews on the profile page
router.get('/reviews/:user_id', rejectUnauthenticated, (req, res) => {
  // GET route code here
  
  const sqlText = `
  SELECT "reviews".*, "users".username, "users".cohort, "locations".name FROM "reviews"
  JOIN "users" on "users".id = "reviews".user_id
  JOIN "locations" on "locations".id = "reviews".location_id
  WHERE "reviews".user_id = ${req.params.user_id};`

  pool
    .query(sqlText)
    .then(result => res.send(result.rows))
    .catch((err) => {
      console.log('GET request for locations FAILED: ', err);
      res.sendStatus(500);
    });
});

module.exports = router;
