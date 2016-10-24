const express = require('express');
const router = express.Router();

const knex = require('../db/connection');

router.get('/', (req, res, next) => {
  return knex('coffee').select('*')
  .then((coffees) => {
    res.status(200).json({
      status: 'success',
      data: coffees
    });
  })
  .catch((err) => { return next(err); });
});

router.get('/:id', (req, res, next) => {
  const coffeeID = parseInt(req.params.id);
  return knex('coffee').where('id', coffeeID).first()
  .then((coffee) => {
    res.status(200).json({
      status: 'success',
      data: coffee
    });
  })
  .catch((err) => { return next(err); });
});

router.post('/', (req, res, next) => {
  return knex('coffee').insert(req.body).returning('*')
  .then((coffee) => {
    res.status(200).json({
      status: 'success',
      data: coffee
    });
  })
  .catch((err) => { return next(err); });
});

module.exports = router;
