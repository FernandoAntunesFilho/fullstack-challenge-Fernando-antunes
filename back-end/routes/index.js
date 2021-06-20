const express = require('express');
const escolaControllers = require('../controllers/escolaControllers');
const turmaControllers = require('../controllers/turmaControllers');

const router = express.Router();

router.get('/escolas', escolaControllers.getEscolas);

router.post('/turmasescola', turmaControllers.getTurmasByEscola);

module.exports = router;