const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const ControllerLogradouros = require('../controllers/controller-logradouros');


// Retorna todos Logradouros
router.get('/', login.obrigatorio, ControllerLogradouros.getLogradouros);

// Retorna um determinado Logradouro
router.get('/:id_logradouro', login.obrigatorio, ControllerLogradouros.getLogradouroIndividual);

// Inserir um Logradouro
router.post('/', login.obrigatorio, ControllerLogradouros.postLogradouros);

// Alterar Logradouro
router.patch('/', login.obrigatorio, ControllerLogradouros.patchLogradouros);

// Deletar um Logradouro
router.delete('/', login.obrigatorio, ControllerLogradouros.deleteLogradouros);

module.exports = router;
