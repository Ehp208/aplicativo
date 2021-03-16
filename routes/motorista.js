const express = require('express');
const router = express.Router();


// Retorna todos os Motoristas
router.get('/', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Retorna todos os Motoristas'
  })
});

// Inserir um Motorista
router.post('/', (req, res, next) => {
  const motorista = {
    id_Pessoa: req.body.id_pessoa,
    id_PessoaMotorista: req.body.id_pessoamotorista
  };

  res.status(201).send({
    mensagem: 'INSERIR Motorista'
  })
});

// Alterar um Motorista
router.patch('/:id_motorista', (req, res, next) => {
  const id_enviado = req.params.id_motorista

  res.status(201).send({
    mensagem: 'ALTERAR Motorista'
  })
});


// Deletar um Motoristas
router.delete('/:id_motorista', (req, res, next) => {
  const id_enviado = req.params.id_motorista

  res.status(201).send({
    mensagem: 'DELETAR Motorista'
  })
});




// Retorna os dados de um Motorista
router.get('/:id_motorista', (req, res, next) => {
  const id_enviado = req.params.id_motorista

  if (id_enviado === 'especial') {
    res.status(200).send({
      mensagem: 'Você descobriu um motoristas especial',
      id: id_enviado
    });
  } else {
    res.status(200).send({
      mensagem: 'Você passou o ID do motoristas ',
      id: id_enviado
    });
  }
});


module.exports = router;
