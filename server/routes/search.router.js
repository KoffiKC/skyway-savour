const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// gets locations based on user input
router.get('/:search_term', rejectUnauthenticated, (req, res) => {
  // GET route code here

  // case insensitive/fuzzy search SQL 
  const sqlText = `
  SELECT DISTINCT "locations".* FROM "locations"
 JOIN "locations_food" on "locations".id = "locations_food".location_id
 JOIN "food_types" on "food_types".id = "locations_food".food_id
 WHERE "food_types".food_type LIKE '%${req.params.search_term}%' OR "locations".name LIKE '%${req.params.search_term}%'`

  pool
    .query(sqlText)
    .then(result => res.send(result.rows))
    .catch((err) => {
      console.log('GET request for locations FAILED: ', err);
      res.sendStatus(500);
    });
});


// this get is to get locations ordered in a specific manner
router.get('/sort/:id', rejectUnauthenticated, (req, res) => {

  // GET route code here
  const sqlText = `
  // SELECT * FROM "locations"
  // WHERE "locations".id = ${req.params.id};
  `
  /* SELECT locations.*, reviews.* FROM "locations"
  JOIN "reviews" ON "reviews".location_id = "locations".id
  where locations.id = 1 */
  pool
    .query(sqlText)
    .then(result => res.send(result.rows))
    .catch((err) => {
      console.log('GET request for locations FAILED: ', err);
      res.sendStatus(500);
    });
});

// POST will be ADMIN only
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
