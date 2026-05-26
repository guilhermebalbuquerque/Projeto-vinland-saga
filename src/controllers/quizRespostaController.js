var quizRespostaModel = require("../models/quizModel");

function cadastrarQuiz(req, res) {

    var id_usuario = req.body.id_usuarioServer;
    var idQuiz = req.body.idQuizServer;
    var idPersonagem = req.body.personagemServer;
    var idPersonalidade = req.body.personalidadeServer;

    if (id_usuario == undefined) {
        res.status(400).send("id_usuario está undefined!");
    } else if (idQuiz == undefined) {
        res.status(400).send("idQuiz está undefined!");
    } else if (idPersonagem == undefined) {
        res.status(400).send("idPersonagem está undefined!");
    } else if (idPersonalidade == undefined) {
        res.status(400).send("idPersonalidade está undefined!");
    } else {
        quizRespostaModel.cadastrarQuiz(id_usuario, idQuiz, idPersonagem, idPersonalidade)
            .then(function (resultado) {
                console.log(resultado);
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao salvar o resultado do quiz: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function buscarResultado(req, res) {

    var id_usuario = req.params.id_usuario;

    console.log("Buscando resultado do quiz do usuário: ", id_usuario);

   
    quizRespostaModel.buscarResultado(id_usuario)
        .then(function (resultado) {

            
            if (resultado.length > 0) {
                res.status(200).json(resultado);

          
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao buscar o resultado do quiz: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    cadastrarQuiz,
    buscarResultado
};