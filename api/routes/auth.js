const express = require('express');
const router = express.Router();

const controller = require('../controllers/auth.controller')

router.get('/', function(req, res, next) {
    
});

router.post('/professor', (req, res, next) => {
    controller.professorAuth(req, res)
})

router.post('/student', (req, res, next) => {
    controller.studentAuth(req, res)
})

module.exports = router;