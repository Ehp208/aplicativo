const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const rotaUsuarios = require('./routes/usuario');
const rotaLogradouros = require('./routes/logradouro');
const rotaBairros = require('./routes/bairro');
const rotaCidades = require('./routes/cidade');
const rotaEstados = require('./routes/estado');
const rotaCeps = require('./routes/cep');
const rotaPessoaFisica = require('./routes/pessoaFisica');
const rotaMotoristas = require('./routes/motorista');
const rotaTransportadores = require('./routes/transportador');
const rotaVeiculos = require('./routes/veiculo');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));  // apenas erros simples
app.use(bodyParser.json());

app.use((req, res, next) => {
    //  res.header('Access-Control-Allow-Origin', 'http://bstransportes.zapto.org');
    res.header('Access-Control-Allow-Origin', '*');   // * dá acesso a qualquer servidor
    res.header('Access-Control-Allow-Header',
        'Origin, x-Requested-With, Content-Type, Accept, Authorization'
    );   // * dá acesso a qualquer servidor

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }

    next();
});// json de entrada no body

app.use('/usuarios', rotaUsuarios);
app.use('/logradouros', rotaLogradouros);
app.use('/bairros', rotaBairros);
app.use('/cidades', rotaCidades);
app.use('/estados', rotaEstados);
app.use('/ceps', rotaCeps);
app.use('/pessoasFisicas', rotaPessoaFisica);
app.use('/motoristas', rotaMotoristas);
app.use('/transportadores', rotaTransportadores);
app.use('/veiculos', rotaVeiculos);

// Quando não encontra nenhuma rota
app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
});

module.exports = app;
