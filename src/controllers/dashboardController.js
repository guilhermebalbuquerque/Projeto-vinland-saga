var dashModel = require("../models/dashboardModel");

function receberDados(req, res) {

    let dadosDashboard = {};

    dashModel.buscarTotalUsuarios()

        .then(function (resultadoTotalUsuarios) {

            dadosDashboard.totalUsuarios = resultadoTotalUsuarios;

            return dashModel.buscarTotalQuiz();
        })

        .then(function (resultadoTotalQuizRespondidos) {
            // salva a quantidade de quiz respondidos
            dadosDashboard.totalQuizRespondidos = resultadoTotalQuizRespondidos;

            return dashModel.buscarGraficoParticipacoes();
        })

        .then(function (resultadoParticipacoes) {

            dadosDashboard.participacoes = resultadoParticipacoes;

            return dashModel.buscarPersonalidade();
        })

        .then(function (resultadoPersonalidades) {

            dadosDashboard.personalidades = resultadoPersonalidades;

            return dashModel.buscarPersonagem();
        })
        .then(function (resultadoPersonagens) {

            dadosDashboard.personagens = resultadoPersonagens;

            return dashModel.buscarGraficoPersonagens();
        })

        .then(function (resultadoGraficoPersonagens) {

            dadosDashboard.graficoPersonagens = resultadoGraficoPersonagens;

            res.status(200).json(dadosDashboard);
        })

        .catch(function (erro) {

            console.log("Erro ao buscar dados da dashboard:", erro);

            res.status(500).json({ erro: erro.sqlMessage });
        });
}

module.exports = {
    receberDados
};