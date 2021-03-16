const express = require('express');
const router = express.Router();


// Retorna todos Veículos
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna todos veiculos'
    })
});

// Inserir um Veículo
router.post('/', (req, res, next) => {
    const veiculo = {
        id_Veiculo: req.body.id_Veiculo,
        id_Transportador: req.body.id_Transportador,
        id_Cidade: req.body.id_Cidade,
        id_Estado: req.body.id_Estado,
        placa: req.body.placa,
        carreta1: req.body.carreta1,
        carreta2: req.body.carreta2
    };

    res.status(201).send({
        mensagem: 'INSERIR Veiculo',
        produtoCriado: veiculo
    })
});

// Alterar Veículo
router.patch('/:id_veiculo', (req, res, next) => {
    const id_enviado = req.params.id_veiculo

    res.status(201).send({
        mensagem: 'ALTERAR Veículo'
    })
});


// Deletar Veículo
router.delete('/:id_veiculo', (req, res, next) => {
    const id_enviado = req.params.id_veiculo

    res.status(201).send({
        mensagem: 'DELETAR Veiculo'
    })
});


module.exports = router;
