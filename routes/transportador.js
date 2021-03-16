const express = require('express');
const router = express.Router();


// Retorna todos Transportadores
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna todos Transportadores'
    })
});

// Inserir Transportador
router.post('/', (req, res, next) => {
    const transportador = {
        id_Transportador: req.body.id_Transportador,
        codigo: req.body.codigo,
        descricao: req.body.descricao,
        adiantamentoFretePercentual: req.body.adiantamentoFretePercentual,
        estatus: req.body.status,
        selecionar: req.body.selecionar
    };

    res.status(201).send({
        mensagem: 'INSERIR Transportador',
        produtoCriado: transportador
    })
});

// Alterar Transportador
router.patch('/:id_transportador', (req, res, next) => {
    const id_enviado = req.params.id_transportador

    res.status(201).send({
        mensagem: 'ALTERAR Transportador'
    })
});


// Deletar Transportador
router.delete('/:id_transportador', (req, res, next) => {
    const id_enviado = req.params.id_transportador

    res.status(201).send({
        mensagem: 'DELETAR Transportador'
    })
});


module.exports = router;
