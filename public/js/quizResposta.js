function obterDados() {
    var id_usuario = sessionStorage.ID_USUARIO;

    if (!id_usuario) {
        alert("Você precisa estar logado para ver o resultado!");
        window.location = "../login.html";
        return;
    }

    fetch(`/quiz/resultado/${id_usuario}`)
        .then(function (resposta) {

            if (resposta.ok) {

                resposta.json().then(function (resultado) {
                    var personagem    = resultado[0].personagem;
                    var personalidade = resultado[0].personalidade;
                    var descricao     = resultado[0].descricao;
                    var descricaoPersonagem = sessionStorage.DESCRICAO_PERSONAGEM;

                    document.getElementById("h1_personagem").innerHTML = personagem;
                    document.getElementById("h2_personalidade").innerHTML = personalidade;
                    document.getElementById("span_descricao_personagem").innerHTML = descricaoPersonagem;
                    document.getElementById("img_personagem").src =
                        `./assets/imgs/${personagem.toLowerCase()}.png`;
                });

            } else if (resposta.status == 204) {
                alert("Você ainda não fez o quiz!");
                window.location = "./quiz.html";

            } else {
                console.error("Erro ao buscar resultado: " + resposta.status);
            }
        })
        .catch(function (erro) {
            console.error("Erro na requisição: " + erro);
        });
}
