const express = require('express');
const router = express.Router();

// Retorna todos Bairros
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna todos os Bairros'
    })
});

// Inserir um Bairro
router.post('/', (req, res, next) => {
    const bairro = {
        id_Bairro: req.body.id_Bairro,
        descricao: req.body.descricao
    };

    res.status(201).send({
        mensagem: 'INSERIR Bairro',
        produtoCriado: bairro
    })
});

// Alterar Bairro
router.patch('/:id_Bairro', (req, res, next) => {
    const id_enviado = req.params.id_Bairro

    res.status(201).send({
        mensagem: 'ALTERAR Bairro'
    })
});


// Deletar um Bairro
router.delete('/:id_Bairro', (req, res, next) => {
    const id_enviado = req.params.id_Bairro

    res.status(201).send({
        mensagem: 'DELETAR Bairro'
    })
});


module.exports = router;
