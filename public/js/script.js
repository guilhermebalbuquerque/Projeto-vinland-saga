function verificar() {

    var nomeVar = nome_input.value;
    var emailVar = email_input.value;
    var senhaVar = senha_input.value;
    var confirmacaoSenhaVar = confirmacao_senha_input.value;

    if (senhaVar !== confirmacaoSenhaVar) {
        console.log('Os Campos devem ser iguais!');
        
        cardErro.style.display = "block";
        mensagem_erro.innerHTML = "(As senhas devem ser iguais)";
        finalizarAguardar();
    }
    for (let i = 0; i < emailVar.length; i++) {

        if (emailVar[i] !== "@") {
            cardErro.style.display = "block";
            mensagem_erro.innerHTML = "(As senhas devem ser iguais)";
            finalizarAguardar();
        }

        else{
            break
        }
    }

    cadastrar()
}   