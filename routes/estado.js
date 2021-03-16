const express = require('express');
const router = express.Router();

// Retorna todos Estados
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna todos os Estados'
    })
});

// Inserir Estado
router.post('/', (req, res, next) => {
    const estado = {
        id_Estado: req.body.id_Estado,
        descricao: req.body.descricao
    };

    res.status(201).send({
        mensagem: 'INSERIR Estado',
        produtoCriado: estado
    })
});

// Alterar Estado
router.patch('/:id_Estado', (req, res, next) => {
    const id_enviado = req.params.id_Estado

    res.status(201).send({
        mensagem: 'ALTERAR Estado'
    })
});


// Deletar Estado
router.delete('/:id_Estado', (req, res, next) => {
    const id_enviado = req.params.id_Estado

    res.status(201).send({
        mensagem: 'DELETAR Estado'
    })
});


module.exports = router;
