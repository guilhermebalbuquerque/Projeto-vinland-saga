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

                    // pega o id para mudar o html
                    document.getElementById("h1_personagem").innerHTML = personagem;
                    document.getElementById("h2_personalidade").innerHTML = `${personalidade} ${descricao} `;
                    document.getElementById("span_descricao_personagem").innerHTML = descricao;

                    // Monta o caminho da imagem para mudar a imagem de acordo com o personagem
                    document.getElementById("img_personagem").src = `./assets/imgs/${personagem.toLowerCase()}.png`;
                });

            } else if (resposta.status == 204) {
                // 204 para ver se o usuario fez o quiz que nem no web-data-viz
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

