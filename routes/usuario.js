const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const ControllerUsuarios = require('../controllers/controller-usuarios');

router.post('/login', ControllerUsuarios.postLogin);

router.post('/cadastro', login.obrigatorio, ControllerUsuarios.postCadastro);

module.exports = router;
