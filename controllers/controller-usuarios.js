const mysql = require('../mysql').pool;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.postLogin = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }

        const query = `SELECT * FROM uvwUsuario WHERE nome = ?`;
        conn.query(query,
            [req.body.nome, req.body.senhamobile],
            (error, results, fields) => {
                conn.release();
                if (error) { return res.status(500).send({ error: error }) }

                if (results.length < 1) {
                    return res.status(401).send({ mensagem: 'Usuário não cadastrado...!!!' })
                }
                else {
                    bcrypt.compare(req.body.senhamobile, results[0].senhamobile, (err, result) => {
                        if (err) {
                            return res.status(401).send({ mensagem: 'Usuário não cadastrado...!!!' })
                        }

                        if (result) {
                            const token = jwt.sign({
                                id_usuario: results[0].id_usuario,
                                nome: results[0].nome
                            },
                                process.env.JWT_KEY,
                                {
                                    expiresIn: "1h"
                                });

                            return res.status(200).send({
                                mensagem: 'Autenticação realizada com SUCESSO...!!!',
                                token: token
                            })
                        }

                        return res.status(401).send({ mensagem: 'Senha Inválida...!!!' })
                    });
                }

            });
    });
}

exports.postCadastro = (req, res, next) => {
    mysql.getConnection((error, conn) => {

        if (error) { return res.status(500).send({ error: error }) }

        conn.query(`SELECT * FROM uvwUsuario WHERE nome = ?`,
            [req.body.nome],
            (error, results) => {

                if (results.length > 0) {
                    res.status(409).send({ mensagem: 'Usuário já Cadastrado. Operação CANCELADA...!!!' })
                }
                else {
                    bcrypt.hash(req.body.senhamobile, 10, (errBcrypt, hash) => {

                        console.log(errBcrypt);

                        if (errBcrypt) { return res.status(500).send({ error: errBcrypt }) }

                        console.log("Vai gravar");


                        conn.query(
                            `INSERT INTO tblusuario (id_modulonivel, id_grupo, nome, senha, senhamobile, sistema, estatus) VALUES(?, ?, ?, ?, ?, ?, ?)`,
                            [req.body.id_modulonivel, req.body.id_grupo, req.body.nome, req.body.senha, hash, req.body.sistema, req.body.estatus],
                            (error, results) => {
                                conn.release();
                                if (error) { return res.status(500).send({ error: error }) }
                                response = {
                                    mensagem: 'Operação realizada com SUCESSO...!!!',
                                    usuarioCriado: {
                                        id_usuario: results.id_usuario,
                                        nome: req.body.nome
                                    }
                                }
                                return res.status(201).send(response);

                            });
                    });

                }

            });
    });
}
