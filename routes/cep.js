const express = require('express');
const router = express.Router();

// Retorna todos Cep´s
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna todos os Cep s'
    })
});

// Inserir Cep
router.post('/', (req, res, next) => {
    const cep = {
        id_Cep: req.body.id_Cep,
        cep: req.body.cep,
        id_Logradouro: req.body.id_Logradouro,
        id_Bairro: req.body.id_Bairro,
        id_Cidade: req.body.id_Cidade,
        id_Estado: req.body.id_Estado,
        tipoCep: req.body.tipoCep,
        estatus: req.body.estatus
    };

    res.status(201).send({
        mensagem: 'INSERIR Cep',
        produtoCriado: cep
    })
});

// Alterar Cep
router.patch('/:id_Cep', (req, res, next) => {
    const id_enviado = req.params.id_Cep

    res.status(201).send({
        mensagem: 'ALTERAR Cep'
    })
});


// Deletar Cep
router.delete('/:id_Cep', (req, res, next) => {
    const id_enviado = req.params.id_Cep

    res.status(201).send({
        mensagem: 'DELETAR Cep'
    })
});


module.exports = router;
