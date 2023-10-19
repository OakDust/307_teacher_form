const express = require('express');
const router = express.Router();

const controller = require('../controllers/index.controller')


router.get('/', function(req, res, next) {

});

router.post('/', (req, res, next) => {
    controller.create(req, res)
})

module.exports = router;
