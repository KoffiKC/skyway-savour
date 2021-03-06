const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  // GET route code here
  const sqlText = `SELECT "locations".*, AVG("reviews".rating) as average FROM "locations"
  JOIN "reviews" ON "reviews".location_id = "locations".id
  Group BY "locations".id
  Order BY "locations".id;
 `

  pool
    .query(sqlText)
    .then(result => res.send(result.rows))
    .catch((err) => {
      console.log('GET request for locations FAILED: ', err);
      res.sendStatus(500);
    });
});


// this get is to select all of the data for a specific location
router.get('/details/:id', (req, res) => {

  // console.log('HEY IM IN HERE!!!');
  
  // GET route code here
  // NO BLINGS -- edna
  const sqlText = `
  SELECT "locations".*, AVG("reviews".rating) as average FROM "locations"
  JOIN "reviews" ON "reviews".location_id = "locations".id
  WHERE "locations".id = ${req.params.id}
  Group BY "locations".id;
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
  // in this function Admins will be able to add ne locations to the App
});

module.exports = router;
