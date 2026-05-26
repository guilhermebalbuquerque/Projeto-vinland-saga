let personagens = {
    Canute: "Frio, inteligente e ambicioso.",
    
    Bjorn: "Leal, impulsivo e guerreiro.",
    
    Thorkell: "Ama batalhas e desafios.",
    
    Askeladd: "Estratégico e manipulador.",
    
    Thors: "Pacífico, sábio e honrado.",
    
    Thorgil: "Brutal e apaixonado pela guerra.",
    
    Thorffin: "Busca paz e amadurecimento.",
    
    Olmar: "Inseguro e sonhador.",
    
    Snake: "Calmo, protetor e habilidoso.",
    
    Arnheid: "Gentil e resiliente.",
    
    Einar: "Bondoso, trabalhador e otimista."
};

let personalidades = {

    "Filosofia de paz e empatia": {
        pontos: 0,
        frase: "Você não tem inimigos."
    },

    "Honra e autocontrole": {
        pontos: 0,
        frase: "Um verdadeiro guerreiro não precisa de espada."
    },

    "Reflexão e maturidade": {
        pontos: 0,
        frase: "A vingança consome mais do que resolve."
    },

    "Resiliência": {
        pontos: 0,
        frase: "Sobreviver também é uma forma de coragem."
    },

    "Sabedoria estratégica": {
        pontos: 0,
        frase: "Nem toda batalha vale a pena."
    },

    "Ambição controlada": {
        pontos: 0,
        frase: "O poder sem propósito leva à destruição."
    },

    "Natureza protetora": {
        pontos: 0,
        frase: "Quem protege os outros demonstra verdadeira força."
    },

    "Espírito livre": {
        pontos: 0,
        frase: "A liberdade vale mais que ouro."
    },

    "Superação pessoal": {
        pontos: 0,
        frase: "O medo pode controlar um homem ou fortalecê-lo."
    },

    "Liderança e responsabilidade": {
        pontos: 0,
        frase: "Liderar é carregar o peso das escolhas."
    },

    "Humanidade e dor emocional": {
        pontos: 0,
        frase: "Até os mais fortes carregam cicatrizes."
    },

    "Mentalidade pacífica": {
        pontos: 0,
        frase: "A paz exige mais coragem que a guerra."
    }
};

let id_personagem = {
    'Canute':   1,
    'Bjorn':    2,
    'Thorkell': 3,
    'Askeladd': 4,
    'Thors':    5,
    'Thorgil':  6,
    'Thorffin': 7,
    'Olmar':    8,
    'Snake':    9,
    'Arnheid':  10,
    'Einar':    11
};

let id_personalidade = {
    'Filosofia de paz e empatia':   1,
    'Honra e autocontrole':         2,
    'Reflexão e maturidade':        3,
    'Resiliência':                  4,
    'Sabedoria estratégica':        5,
    'Ambição controlada':           6,
    'Natureza protetora':           7,
    'Espírito livre':               8,
    'Superação pessoal':            9,
    'Liderança e responsabilidade': 10,
    'Humanidade e dor emocional':   11,
    'Mentalidade pacífica':         12
};

const pesosPerguntas = [
    3,
    2,
    3,
    2,
    4,
    3,
    2,
    4,
    3,
    2,
    3,
    2,
    4,
    3,
    2,
    4
];

const perguntasQuiz = [

    {
        pergunta: "Quando alguém te provoca, você:",

        alternativaA: "Tenta resolver sem violência",
        alternativaB: "Responde imediatamente",
        alternativaC: "Analisa antes de agir",
        alternativaD: "Ignora e segue em frente",

        resultado: [
            ["Thors",    "Filosofia de paz e empatia"],
            ["Thorkell", "Ambição controlada"],
            ["Askeladd", "Sabedoria estratégica"],
            ["Thorffin", "Reflexão e maturidade"]
        ]
    },

    {
        pergunta: "Qual qualidade você mais admira?",

        alternativaA: "Empatia",
        alternativaB: "Coragem",
        alternativaC: "Inteligência",
        alternativaD: "Honra",

        resultado: [
            ["Arnheid",  "Natureza protetora"],
            ["Bjorn",    "Superação pessoal"],
            ["Canute",   "Liderança e responsabilidade"],
            ["Snake",    "Honra e autocontrole"]
        ]
    },

    {
        pergunta: "O que mais te motiva?",

        alternativaA: "Paz",
        alternativaB: "Poder",
        alternativaC: "Objetivos pessoais",
        alternativaD: "Liberdade",

        resultado: [
            ["Thorffin", "Mentalidade pacífica"],
            ["Thorgil",  "Ambição controlada"],
            ["Askeladd", "Reflexão e maturidade"],
            ["Einar",    "Espírito livre"]
        ]
    },

    {
        pergunta: "Quando enfrenta dificuldades, você:",

        alternativaA: "Mantém a calma",
        alternativaB: "Luta até o fim",
        alternativaC: "Pensa racionalmente",
        alternativaD: "Usa a dor para evoluir",

        resultado: [
            ["Snake",    "Honra e autocontrole"],
            ["Thorkell", "Superação pessoal"],
            ["Canute",   "Sabedoria estratégica"],
            ["Thorffin", "Humanidade e dor emocional"]
        ]
    },

    {
        pergunta: "Qual dessas frases mais combina com você?",

        alternativaA: "Você não tem inimigos",
        alternativaB: "A força resolve tudo",
        alternativaC: "Toda batalha exige inteligência",
        alternativaD: "A paz exige coragem",

        resultado: [
            ["Thors",    "Filosofia de paz e empatia"],
            ["Thorgil",  "Ambição controlada"],
            ["Askeladd", "Sabedoria estratégica"],
            ["Thorffin", "Mentalidade pacífica"]
        ]
    },

    {
        pergunta: "Como as pessoas normalmente te enxergam?",

        alternativaA: "Calmo",
        alternativaB: "Intimidador",
        alternativaC: "Inteligente",
        alternativaD: "Inspirador",

        resultado: [
            ["Thors",    "Mentalidade pacífica"],
            ["Bjorn",    "Superação pessoal"],
            ["Askeladd", "Sabedoria estratégica"],
            ["Canute",   "Liderança e responsabilidade"]
        ]
    },

    {
        pergunta: "Quando alguém precisa da sua ajuda, você:",

        alternativaA: "Ajuda imediatamente",
        alternativaB: "Resolve do seu jeito",
        alternativaC: "Pensa na melhor solução",
        alternativaD: "Protege acima de tudo",

        resultado: [
            ["Arnheid",  "Natureza protetora"],
            ["Snake",    "Honra e autocontrole"],
            ["Canute",   "Reflexão e maturidade"],
            ["Thors",    "Natureza protetora"]
        ]
    },

    {
        pergunta: "Qual ambiente mais combina com você?",

        alternativaA: "Uma vila tranquila",
        alternativaB: "Um campo de batalha",
        alternativaC: "Um reino político",
        alternativaD: "Uma jornada pelo mundo",

        resultado: [
            ["Einar",    "Mentalidade pacífica"],
            ["Thorkell", "Superação pessoal"],
            ["Canute",   "Liderança e responsabilidade"],
            ["Thorffin", "Espírito livre"]
        ]
    },

    {
        pergunta: "Como você reage ao fracasso?",

        alternativaA: "Aprende com ele",
        alternativaB: "Fica obcecado em vencer",
        alternativaC: "Esconde suas emoções",
        alternativaD: "Segue em frente mesmo ferido",

        resultado: [
            ["Thorffin", "Reflexão e maturidade"],
            ["Thorgil",  "Ambição controlada"],
            ["Snake",    "Honra e autocontrole"],
            ["Olmar",    "Humanidade e dor emocional"]
        ]
    },

    {
        pergunta: "Qual dessas atitudes mais combina com você?",

        alternativaA: "Proteger quem ama",
        alternativaB: "Buscar reconhecimento",
        alternativaC: "Planejar tudo antes",
        alternativaD: "Valorizar a liberdade",

        resultado: [
            ["Thors",    "Natureza protetora"],
            ["Canute",   "Liderança e responsabilidade"],
            ["Askeladd", "Sabedoria estratégica"],
            ["Einar",    "Espírito livre"]
        ]
    },

    {
        pergunta: "O que mais te incomoda nas pessoas?",

        alternativaA: "Crueldade",
        alternativaB: "Fraqueza",
        alternativaC: "Impulsividade",
        alternativaD: "Falsidade",

        resultado: [
            ["Arnheid",  "Filosofia de paz e empatia"],
            ["Thorkell", "Superação pessoal"],
            ["Thorffin", "Reflexão e maturidade"],
            ["Askeladd", "Sabedoria estratégica"]
        ]
    },

    {
        pergunta: "Em um grupo, você normalmente é:",

        alternativaA: "Quem aconselha",
        alternativaB: "Quem lidera",
        alternativaC: "Quem protege",
        alternativaD: "Quem diverte todo mundo",

        resultado: [
            ["Snake",    "Reflexão e maturidade"],
            ["Canute",   "Liderança e responsabilidade"],
            ["Thors",    "Natureza protetora"],
            ["Bjorn",    "Espírito livre"]
        ]
    },

    {
        pergunta: "Qual dessas frases você mais acredita?",

        alternativaA: "A paz é sempre a melhor escolha",
        alternativaB: "Somente os fortes sobrevivem",
        alternativaC: "Tudo depende da estratégia",
        alternativaD: "Cada pessoa carrega suas dores",

        resultado: [
            ["Thorffin", "Mentalidade pacífica"],
            ["Thorgil",  "Resiliência"],
            ["Askeladd", "Sabedoria estratégica"],
            ["Olmar",    "Humanidade e dor emocional"]
        ]
    },

    {
        pergunta: "O que você faria após vencer uma batalha?",

        alternativaA: "Tentaria evitar outra guerra",
        alternativaB: "Buscaria novos desafios",
        alternativaC: "Planejaria os próximos passos",
        alternativaD: "Ajudaria os feridos",

        resultado: [
            ["Thorffin", "Filosofia de paz e empatia"],
            ["Thorkell", "Ambição controlada"],
            ["Canute",   "Liderança e responsabilidade"],
            ["Arnheid",  "Natureza protetora"]
        ]
    },

    {
        pergunta: "Qual dessas características mais define você?",

        alternativaA: "Compaixão",
        alternativaB: "Determinação",
        alternativaC: "Inteligência",
        alternativaD: "Persistência",

        resultado: [
            ["Arnheid",  "Filosofia de paz e empatia"],
            ["Thorffin", "Superação pessoal"],
            ["Askeladd", "Sabedoria estratégica"],
            ["Einar",    "Resiliência"]
        ]
    },

    {
        pergunta: "O que representa força para você?",

        alternativaA: "Controlar sua raiva",
        alternativaB: "Nunca desistir",
        alternativaC: "Saber liderar",
        alternativaD: "Defender os outros",

        resultado: [
            ["Snake",    "Honra e autocontrole"],
            ["Thorkell", "Resiliência"],
            ["Canute",   "Liderança e responsabilidade"],
            ["Thors",    "Natureza protetora"]
        ]
    }
];

let indicePerguntaAtual = 0;
let perguntaRespondida = false;
let alternativaSelecionada = 0;
let id_quiz = 1;

carregarPergunta();

function carregarPergunta() {

    if (indicePerguntaAtual >= perguntasQuiz.length) {
        finalizarQuiz();
        return;
    }

    let perguntaAtual = perguntasQuiz[indicePerguntaAtual];

    document.getElementById("pergunta").innerHTML = perguntaAtual.pergunta;

    document.getElementById("primeiraQuestao").innerHTML = perguntaAtual.alternativaA;

    document.getElementById("segundaQuestao").innerHTML = perguntaAtual.alternativaB;

    document.getElementById("terceiraQuestao").innerHTML = perguntaAtual.alternativaC;

    document.getElementById("quartaQuestao").innerHTML = perguntaAtual.alternativaD;

    perguntaRespondida = false;

    let alternativas = document.querySelectorAll(".item-alternativa-quiz");

    for (let i = 0; i < alternativas.length; i++) {
        alternativas[i]
            .classList.remove("alternativa-selecionada");
    }
}

function responderPergunta(numeroAlternativa) {

    alternativaSelecionada =
        numeroAlternativa;

    perguntaRespondida = true;

    let alternativas = document.querySelectorAll(".item-alternativa-quiz");

    for (let i = 0; i < alternativas.length; i++) {

        alternativas[i].classList.remove("alternativa-selecionada");
    }

    alternativas[numeroAlternativa - 1].classList.add("alternativa-selecionada");
}

function avancarPergunta() {

    if (!perguntaRespondida) {

        alert("Escolha uma alternativa.");

        return;
    }

    let perguntaAtual = perguntasQuiz[indicePerguntaAtual];

    let resultadoResposta = perguntaAtual.resultado[alternativaSelecionada - 1];

    let personagemEscolhido = resultadoResposta[0];

    let personalidadeEscolhida = resultadoResposta[1];

    let pesoPergunta = pesosPerguntas[indicePerguntaAtual];

    personagens[personagemEscolhido] += pesoPergunta;

    personalidades[ personalidadeEscolhida].pontos += pesoPergunta;

    indicePerguntaAtual++;

    carregarPergunta();
}

function finalizarQuiz() {

    let nomesPersonagens = Object.keys(personagens);

    let personagemFinal = nomesPersonagens[0];

    let descPersonagemFinal = nomesPersonagens[1];

    for (let i = 1; i < nomesPersonagens.length; i++) {

        if (personagens[nomesPersonagens[i]] > personagens[personagemFinal]) {

            personagemFinal = nomesPersonagens[i];
        }
    }

    let nomesPersonalidades = Object.keys(personalidades);

    let personalidadeFinal = nomesPersonalidades[0];

    for (let i = 1; i < nomesPersonalidades.length; i++) {

        if (personalidades[nomesPersonalidades[i]].pontos >personalidades[personalidadeFinal].pontos) {

            personalidadeFinal = nomesPersonalidades[i];
        }
    }

    console.log(sessionStorage.ID_USUARIO);

    let idPersonagemFinal = id_personagem[personagemFinal];

    let idPersonalidadeFinal = id_personalidade[personalidadeFinal];

    sessionStorage.PERSONAGEM_FINAL = personagemFinal;

    sessionStorage.PERSONALIDADE_FINAL = personalidadeFinal;

    sessionStorage.FRASE_FINAL = personalidades[personalidadeFinal].frase;

    fetch("/quiz/salvarResultado", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            id_usuarioServer: sessionStorage.ID_USUARIO,

            idQuizServer: id_quiz,

            personagemServer: idPersonagemFinal,

            personagemDescServer: descPersonagemFinal,

            personalidadeServer: idPersonalidadeFinal
        })
    })

        .then(function (resposta) {

            if (resposta.ok) {

                setTimeout(function () {
                    window.location.href =
                        "./quizResposta.html";
                }, 3000);

            } else {
                alert("Erro ao salvar resultado.");
            }
        })

        .catch(function (erro) {
            console.log(erro);
        });
}