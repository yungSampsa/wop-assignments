'use strict';
const express = require('express');
const {cat_list_get} = require('../controllers/catController');
const router = express.Router();

router.get('/', cat_list_get);
  
router.post('/', (req, res) => {
    res.send('With this endpoint you can add cats.')
  })
  
router.put('/', (req, res) => {
    res.send('With this endpoint you can edit cats.')
  })
  
router.delete('/', (req, res) => {
    res.send('With this endpoint you can delete cats.')
  })

router.get('/:id', (req, res) => {
    console.log('/cat/:id', req.params.id);
    res.send('You requested a cat whose id is ' + req.params.id);
  });

  module.exports = router;
