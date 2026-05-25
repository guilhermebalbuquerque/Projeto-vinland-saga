var dashModel = require("../models/dashModel");

function receberDados(req, res) {

    let dadosDashboard = {};

    dashModel.buscarTotalUsuarios()

        .then(function (resultadoTotalUsuarios) {

            dadosDashboard.totalUsuarios = resultadoTotalUsuarios;

            return dashModel.buscarTotalQuiz();
        })

        .then(function (resultadoTotalQuizRespondidos) {

            // Salva a quantidade de quizzes respondidos
            dadosDashboard.totalQuizRespondidos = resultadoTotalQuizRespondidos;

            return dashModel.buscarPersonalidade();
        })

        .then(function (resultadoPersonalidades) {
            dadosDashboard.personalidades = resultadoPersonalidades;

            return dashModel.buscarPersonagem();
        })

        .then(function (resultadoPersonagens) {
            dadosDashboard.personagens = resultadoPersonagens;

            // Retorna tudo em json
            res.status(200).json(dadosDashboard);
        })

        .catch(function (erro) {

            console.log("Erro ao buscar dados da dashboard:", erro);

            console.log(
                "\nHouve um erro ao buscar os resultados da dashboard! Erro:",
                erro.sqlMessage
            );

            res.status(500).json({
                erro: erro.sqlMessage
            });
        });
}

module.exports = {
    receberDados
};