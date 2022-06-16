const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

// REJECT UNAUTh USER DOOODE
router.get('/location/:location_id', rejectUnauthenticated,  (req, res) => {
  // GET route code here
  // console.log(req.params.location_id);
  

  const sqlText = `SELECT "reviews".*, "users".username, "users".cohort FROM "reviews"
  JOIN "users" on "users".id = "reviews".user_id
  WHERE "reviews".location_id = $1;`

  pool
    .query(sqlText, [req.params.location_id])
    .then(result => res.send(result.rows))
    .catch((err) => {
      console.log('GET request for locations FAILED: ', err);
      res.sendStatus(500);
    });
});


// this will allow the user to add a review on a specific location page
router.post('/location/:location_id', rejectUnauthenticated, (req, res) => {
 
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

router.put('/user/:review_id', (req, res) => {

 
  const sqlText = `
  UPDATE "reviews" 
  SET "rating" = $1, "review" = $2
  WHERE "id" = $3;`

  const reviewData = [req.body.rating, req.body.review, req.params.review_id]
  
  pool
    .query(sqlText, reviewData)
    .then(() => res.sendStatus(202))
    .catch(err => {
      console.log('it seems that review is set in stone..', err);
      res.sendStatus(500)
    })
});

router.delete('/user/:review_id', rejectUnauthenticated, (req, res) => {
 
  const sqlText = `
  DELETE FROM "reviews" 
  WHERE "id" = $1;`
  
  pool
    .query(sqlText, [req.params.review_id])
    .then(() => res.sendStatus(200))
    .catch(err => {
      console.log('Everyones a critic, the same goes for you!', err);
      res.sendStatus(500)
    })
});

module.exports = router;
