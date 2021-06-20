const express = require('express');
const escolaControllers = require('../controllers/escolaControllers');

const router = express.Router();

router.get('/escolas', escolaControllers.getEscolas);

module.exports = router;