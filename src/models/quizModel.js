var database = require("../database/config");

function cadastrarQuiz(
    id_usuario,
    idQuiz,
    idPersonagem,
    idPersonalidade
) {
    console.log(">> Salvando resultado do quiz...");

    //autualizando resultado quiz e usuario para a pagina de resultado quiz
    var instrucaoSql = `
        INSERT INTO resultado_quiz (
            fk_usuario,
            fk_quiz,
            fk_personagem,
            fk_personalidade
        ) VALUES (
            ${id_usuario},
            ${idQuiz},
            ${idPersonagem},
            ${idPersonalidade}
        );
    `;

    console.log("Executando SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

function buscarResultado(id_usuario) {

    console.log(">> Buscando resultado do quiz do usuário: ", id_usuario);
    var instrucaoSql = `
        SELECT
            rq.id_resultado,
            rq.data_resultado,
            p.nome  AS personagem,
            p.descricao AS descricaoPersonagem,
            pe.nome AS personalidade,
            pe.descricao
        FROM resultado_quiz rq
             JOIN personagem p
                ON rq.fk_personagem = p.id_personagem
             JOIN personalidade pe
                ON rq.fk_personalidade = pe.id_personalidade
        WHERE rq.fk_usuario = ${id_usuario}
        ORDER BY rq.data_resultado DESC
        LIMIT 1;
    `;

    console.log("Executando SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}


module.exports = {
    cadastrarQuiz,
    buscarResultado
};