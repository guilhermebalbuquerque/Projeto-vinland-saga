CREATE DATABASE vinland_saga;

USE vinland_saga;


-- TABELA: personalidade

CREATE TABLE personalidade(
    id_personalidade INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(100),
    descricao VARCHAR(250)
);


-- TABELA: personagem

CREATE TABLE personagem (
    id_personagem INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(45), 
    descricao_personagem VARCHAR(300)
);


-- TABELA: usuario

CREATE TABLE usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(120),
    email VARCHAR(120),
    senha VARCHAR(120),

    fk_personalidade INT DEFAULT NULL,
    fk_personagem INT DEFAULT NULL,

    CONSTRAINT fkUsuarioPersonalidade
        FOREIGN KEY (fk_personalidade)
            REFERENCES personalidade(id_personalidade),

    CONSTRAINT fkUsuarioPersonagem
        FOREIGN KEY (fk_personagem)
            REFERENCES personagem(id_personagem)
);






-- TABELA: quiz

CREATE TABLE quiz (
    id_quiz INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100),
    descricao VARCHAR(255)
);



-- TABELA: resultado_quiz

CREATE TABLE resultado_quiz (
    id_resultado INT PRIMARY KEY AUTO_INCREMENT,

    fk_usuario INT,
    fk_quiz INT,

    fk_personagem INT,
    fk_personalidade INT,
    
    data_resultado DATETIME DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fkResultadoUsuario
        FOREIGN KEY (fk_usuario)
            REFERENCES usuario(id_usuario),

    CONSTRAINT fkResultadoQuiz
        FOREIGN KEY (fk_quiz)
            REFERENCES quiz(id_quiz),

    CONSTRAINT fkResultadoPersonagem
        FOREIGN KEY (fk_personagem)
            REFERENCES personagem(id_personagem),

    CONSTRAINT fkResultadoPersonalidade
        FOREIGN KEY (fk_personalidade)
            REFERENCES personalidade(id_personalidade)
);


-- INSERT PERSONAGENS

INSERT INTO personagem (nome, descricao) VALUES
('Canute', 'Frio, inteligente e ambicioso.'),      -- id 1

('Bjorn', 'Leal, impulsivo e guerreiro.'),         -- id 2

('Thorkell', 'Ama batalhas e desafios.'),          -- id 3

('Askeladd', 'Estratégico e manipulador.'),        -- id 4

('Thors', 'Pacífico, sábio e honrado.'),           -- id 5

('Thorgil', 'Brutal e apaixonado pela guerra.'),   -- id 6

('Thorffin', 'Busca paz e amadurecimento.'),       -- id 7

('Olmar', 'Inseguro e sonhador.'),                 -- id 8

('Cobra', 'Calmo, protetor e habilidoso.'),        -- id 9

('Arnheid', 'Gentil e resiliente.'),               -- id 10

('Einar', 'Bondoso, trabalhador e otimista.');     -- id 11


-- INSERT PERSONALIDADES

INSERT INTO personalidade (nome, descricao) VALUES
('Filosofia de paz e empatia', '“Você não tem inimigos.”'), -- id 1

('Honra e autocontrole',
'“Um verdadeiro guerreiro não precisa de espada.”'), -- id 2

('Reflexão e maturidade',
'“A vingança consome mais do que resolve.”'), -- id 3

('Resiliência',
'“Sobreviver também é uma forma de coragem.”'), -- id 4

('Sabedoria estratégica',
'“Nem toda batalha vale a pena.”'), -- id 5

('Ambição controlada',
'“O poder sem propósito leva à destruição.”'), -- id 6

('Natureza protetora',
'“Quem protege os outros demonstra verdadeira força.”'), -- id 7

('Espírito livre',
'“A liberdade vale mais que ouro.”'), -- id 8

('Superação pessoal',
'“O medo pode controlar um homem ou fortalecê-lo.”'), -- id 9

('Liderança e responsabilidade',
'“Liderar é carregar o peso das escolhas.”'), -- id 10

('Humanidade e dor emocional',
'“Até os mais fortes carregam cicatrizes.”'), -- id 11

('Mentalidade pacífica',
'“A paz exige mais coragem que a guerra.”'); -- id 12


-- INSERT QUIZ

INSERT INTO quiz (titulo, descricao) VALUES
(
'Quiz de Personalidade Vinland Saga',
'Descubra qual personagem e personalidade combinam com você'
);
-- SELECTS

SELECT * FROM personagem;

SELECT * FROM personalidade;

SELECT * FROM usuario;

SELECT * FROM resultado_quiz;

SELECT id_usuario, nome, email, fk_personagem, fk_personalidade FROM usuario WHERE email = 'guilherme@gmail.com' AND senha = '123456';

-- pra ver o total de usuarios

SELECT COUNT(id_usuario) AS total_jogadores
FROM usuario;


-- total de qyuz===uiz

SELECT COUNT(id_resultado) AS total_quizzes
FROM resultado_quiz;


-- pra ver a personalidade mais vista

SELECT 
    personalidade.nome AS personalidade,
    COUNT(resultado_quiz.id_resultado) AS quantidade
FROM resultado_quiz
JOIN personalidade
    ON resultado_quiz.fk_personalidade = personalidade.id_personalidade
GROUP BY personalidade.nome
ORDER BY quantidade DESC
LIMIT 1;


-- personagem mais escolhido

SELECT 
    personagem.nome AS personagem,
    COUNT(resultado_quiz.id_resultado) AS quantidade
FROM resultado_quiz
JOIN personagem
    ON resultado_quiz.fk_personagem = personagem.id_personagem
GROUP BY personagem.nome
ORDER BY quantidade DESC
LIMIT 1;


-- grafico para ver os personagens mais escolhidos

SELECT 
    DATE(data_resultado) AS data_quiz,
    COUNT(id_resultado) AS total_participacoes
FROM resultado_quiz
GROUP BY DATE(data_resultado)
ORDER BY data_quiz ASC;


-- gráfico para ver o personagens escolhido

SELECT 
    personagem.nome AS personagem,
    COUNT(resultado_quiz.id_resultado) AS total_escolhas
FROM resultado_quiz
JOIN personagem
    ON resultado_quiz.fk_personagem = personagem.id_personagem
GROUP BY personagem.nome
ORDER BY total_escolhas DESC;