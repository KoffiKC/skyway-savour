const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  // GET route code here
  const sqlText = `SELECT * FROM "locations";`

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

  console.log('HEY IM IN HERE!!!');
  
  // GET route code here
  const sqlText = `
  SELECT * FROM "locations"
  WHERE "locations".id = ${req.params.id};
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
