const express = require('express');
const router = express.Router();

// Retorna todas Cidades
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna todas Cidades'
    })
});

// Inserir uma Cidade
router.post('/', (req, res, next) => {
    const cidade = {
        id_Cidade: req.body.id_Cidade,
        descricao: req.body.descricao
    };

    res.status(201).send({
        mensagem: 'INSERIR Cidade',
        produtoCriado: cidade
    })
});

// Alterar Cidade
router.patch('/:id_Cidade', (req, res, next) => {
    const id_enviado = req.params.id_Cidade

    res.status(201).send({
        mensagem: 'ALTERAR Cidade'
    })
});


// Deletar Cidade
router.delete('/:id_Cidade', (req, res, next) => {
    const id_enviado = req.params.id_Cidade

    res.status(201).send({
        mensagem: 'DELETAR Cidade'
    })
});


module.exports = router;
