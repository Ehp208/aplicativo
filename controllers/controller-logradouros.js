const mysql = require('../mysql').pool;

exports.getLogradouros = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            'SELECT * FROM uvwlogradouro;',
            (error, resultado, fields) => {
                if (error) { return res.status(500).send({ error: error }) }
                const response = {
                    quantidade: resultado.length,
                    logradouros: resultado.map(logra => {
                        return {
                            id_logradouro: logra.id_logradouro,
                            descricao: logra.descricao,
                            request: {
                                tipo: 'GET',
                                descricao: 'Relação de Logradouros cadastrados...!!!',
                                url: 'localhost://localhost:3000/logradouros/' + logra.id_logradouro
                            }
                        }
                    })
                }

                return res.status(200).send(response);

            }
        )
    });
}

exports.getLogradouroIndividual = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            'SELECT * FROM uvwlogradouro WHERE id_logradouro = ?;',
            [req.params.id_logradouro],
            (error, resultado, fields) => {
                if (error) { return res.status(500).send({ error: error }) }

                if (resultado.length == 0) {
                    return res.status(404).send({
                        mensagem: "ID Inválido...!!!"
                    })
                }

                const response = {
                    logradouro: {
                        id_logradouro: resultado[0].id_logradouro,
                        descricao: resultado[0].descricao,
                        request: {
                            tipo: 'GET',
                            descricao: 'Relação de Logradouros cadastrados...!!!',
                            url: 'localhost://localhost:3000/logradouros'
                        }
                    }
                }
                return res.status(200).send(response);

            }
        )
    });
}

exports.postLogradouros = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }

        conn.query(
            'SELECT * FROM uvwCep WHERE logradouro = ?',
            [req.body.descricao],
            (error, resultado, fields) => {
                if (resultado.length !== 0)
                    return res.status(204).send({
                        mensagem: 'Logradouro já consta do cadastro de CEP'
                    });
                else {
                    conn.query(
                        'INSERT INTO tbllogradouro (descricao) VALUES (?)',
                        [req.body.descricao],
                        (error, resultado, fields) => {
                            conn.release();
                            if (error) { return res.status(500).send({ error: error }) }

                            res.status(201).send({
                                mensagem: 'Operação realizada com SUCESSO...!!!',
                                id_produto: resultado.insertId
                            });
                        }
                    )
                }
            }
        )
    });
}

exports.patchLogradouros = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            'UPDATE tbllogradouro SET descricao = ? WHERE id_logradouro = ?',
            [req.body.descricao, req.body.id_logradouro],
            (error, resultado, fields) => {
                conn.release();
                if (error) { return res.status(500).send({ error: error }) }

                res.status(202).send({
                    mensagem: 'Operação realizada com SUCESSO...!!!'
                });
            }
        )
    });
}

exports.deleteLogradouros = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            'DELETE FROM tbllogradouro WHERE id_logradouro = ?',
            [req.body.id_logradouro],
            (error, resultado, fields) => {
                conn.release();
                if (error) { return res.status(500).send({ error: error }) }

                res.status(202).send({
                    mensagem: 'Operação realizada com SUCESSO...!!!'
                });
            }
        )
    });
}
