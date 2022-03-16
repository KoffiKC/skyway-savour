const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/location/:location_id', (req, res) => {
  // GET route code here
  const sqlText = `SELECT "reviews".*, "user".username FROM "reviews"
  JOIN "user" on "user".id = "reviews".user_id
  WHERE "reviews".location_id = ${req.params.location_id};`

  pool
    .query(sqlText)
    .then(result => res.send(result.rows))
    .catch((err) => {
      console.log('GET request for locations FAILED: ', err);
      res.sendStatus(500);
    });
});


// this will allow the user to add a review on a specific location page
router.post('/location/:location_id', (req, res) => {
 
  const sqlText = `
  INSERT INTO "reviews" ("rating", "review", "user_id", "location_id")
  VALUES ($1,$2,$3,$4);`

  const reviewData = [req.body.rating, req.body.review, req.user.id, req.params.location_id]
  
  pool
    .query(sqlText, reviewData)
    .then(() => res.sendStatus(201))
    .catch(err => {
      console.log('cant post, sql said no :/', err);
      res.sendStatus(500)
    })
});

module.exports = router;
