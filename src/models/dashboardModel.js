var database = require("../database/config");

function buscarTotalUsuarios() {
    var instrucaoSql = `
        SELECT COUNT(id_usuario) AS total_jogadores
        FROM usuario;
    `;

    return database.executar(instrucaoSql);
}

function buscarTotalQuiz() {
    var instrucaoSql = `
        SELECT COUNT(id_resultado) AS total_quizzes
        FROM resultado_quiz;
    `;

    return database.executar(instrucaoSql);
}

function buscarPersonalidade() {
    var instrucaoSql = `
        SELECT 
            personalidade.nome AS personalidade,
            COUNT(resultado_quiz.id_resultado) AS quantidade
        FROM resultado_quiz
        JOIN personalidade
            ON resultado_quiz.fk_personalidade = personalidade.id_personalidade
        GROUP BY personalidade.nome
        ORDER BY quantidade DESC
        LIMIT 1;
    `;

    return database.executar(instrucaoSql);
}

function buscarPersonagem() {
    var instrucaoSql = `
        SELECT 
            personagem.nome AS personagem,
            COUNT(resultado_quiz.id_resultado) AS quantidade
        FROM resultado_quiz
        JOIN personagem
            ON resultado_quiz.fk_personagem = personagem.id_personagem
        GROUP BY personagem.nome
        ORDER BY quantidade DESC
        LIMIT 1;
    `;

    return database.executar(instrucaoSql);
}
function buscarGraficoParticipacoes() {
    var instrucaoSql = `
        SELECT 
            DATE_FORMAT(data_resultado, '%d/%m %H:%i') AS data_quiz,
            COUNT(id_resultado) AS total_participacoes
        FROM resultado_quiz
        GROUP BY DATE_FORMAT(data_resultado, '%d/%m %H:%i')
        ORDER BY MIN(data_resultado) ASC;
    `;
    return database.executar(instrucaoSql);
}

function buscarGraficoPersonagens() {
    var instrucaoSql = `
        SELECT 
            personagem.nome AS personagem,
            COUNT(resultado_quiz.id_resultado) AS total_escolhas
        FROM resultado_quiz
        JOIN personagem
            ON resultado_quiz.fk_personagem = personagem.id_personagem
        GROUP BY personagem.nome
        ORDER BY total_escolhas DESC;
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    buscarTotalUsuarios,
    buscarTotalQuiz,
    buscarPersonalidade,
    buscarPersonagem,
    buscarGraficoParticipacoes,
    buscarGraficoPersonagens
};