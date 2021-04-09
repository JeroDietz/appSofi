const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get('/', indexController.home);
router.get('/actividades', indexController.actividades);
router.get('/alimentacion', indexController.alimentacion);
router.get('/juegos', indexController.juegos);

module.exports = router;