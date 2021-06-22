const express = require('express');
const escolaControllers = require('../controllers/escolaControllers');
const turmaControllers = require('../controllers/turmaControllers');
const alunoControllers = require('../controllers/alunoControllers');

const router = express.Router();

router.get('/escolas', escolaControllers.getEscolas);

router.post('/turmasescola', turmaControllers.getTurmasByEscola);

router.post('/alunosturma', alunoControllers.getAlunosByTurma);
router.post('/alunoid', alunoControllers.getAlunoById);
router.post('/alunosterm', alunoControllers.getAlunosByTerm);

module.exports = router;