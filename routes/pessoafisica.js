const express = require('express');
const router = express.Router();

// Retorna todas as Pessoas Físicas
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna todas Pessoas Físicas'
    })
});

// Inserir uma Pessoa Física
router.post('/', (req, res, next) => {
    const pessoafisica = {
        id_Pessoa: req.body.id_Pessoa,
        id_PessoaFisica: req.body.id_PessoaFisica,
        nome: req.body.nome,
        cpf: req.body.cpf,
        rg: req.body.rg,
        dataNascimento: req.body.dataNascimento
    };

    res.status(201).send({
        mensagem: 'INSERIR Pessoa Física',
        produtoCriado: pessoafisica
    })
});

// Alterar Pessoa Física
router.patch('/:id_pessoafisica', (req, res, next) => {
    const id_enviado = req.params.id_pessoafisica

    res.status(201).send({
        mensagem: 'ALTERAR Pessoa Física'
    })
});


// Deletar uma Pessoa Física
router.delete('/:id_pessoaFisica', (req, res, next) => {
    const id_enviado = req.params.id_pessoaFisica

    res.status(201).send({
        mensagem: 'DELETAR Pessoa Física'
    })
});


module.exports = router;
