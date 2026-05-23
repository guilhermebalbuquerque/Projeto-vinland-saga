var database = require("../database/config")

function buscarTotalUsuarios() {
    var instrucaoSql = `
    SELECT COUNT(*) AS total_jogadores
    FROM usuario;
    `;

    return database.executar(instrucaoSql)
}

function buscarTotalQuiz() {
       var instrucaoSql = `
    SELECT COUNT(*) AS total_jogadores
    FROM usuario;
    `; 
}
