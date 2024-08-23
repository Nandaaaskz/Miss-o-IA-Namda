const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector(".caixa-resultado")
const TextoResultado = document.querySelector(".texto-resultado")


const perguntas = [
    {
        enunciado: "Qual o maior macaco de todos?",
        alternativas: [
            {
                texto: "A] Babuíno",
                afirmacao: "voce errou :(",
            },
            {
                texto: "B] Orangotango",
                afirmacao: "voce errou lol",
            },
            {
                texto: "C] Gorila",
                afirmacao: "voce acertou, parabens",
            },
            {
                texto: "D] Bugio",
                afirmacao: "errou lmao",
            }
        ]
    },
    {
        enunciado: "Qual o nome do personagem da Disney que foi criado por gorilas desde a sua infância?",
        alternativas: [
            {
                texto: "A] Mogli",
                afirmacao: "voce errou :(",
            },
            {
                texto: "B] Rodney",
                afirmacao: "voce errou :(",
            },
            {
                texto: "C] Dumbo",
                afirmacao: "voce errou :(",
            },
            {
                texto: "D] Tarzan",
                afirmacao: "resposta correta",
            }
        ]
    },
    {
        enunciado: "Chipanzés são carnívoros ou vegetarianos?",
        alternativas: [
            {
                texto: "A] Só comem frutas",
                afirmacao: "erro",
            },
            {
                texto: "B] Só comem carne",
                afirmacao: "errou lol",
            },
            {
                texto: "C] Comem de tudo",
                afirmacao: "certo",
            },
            {
                texto: "D] Passam fome",
                afirmacao: "? errou",
            }
        ]
    },
    {
        enunciado: "Qual é a espécie dos chimpanés?",
        alternativas: [
            {
                texto: "A] Pitangus sulphuratus",
                afirmacao: "espécie do bem-te-vi, errou",
            },
            {
                texto: "B] Pan troglodytes",
                afirmacao: "ta serto",
            },
            {
                texto: "C] Vampyroteuthis infernalis",
                afirmacao: "nao seu maluco",
            },
            {
                texto: "D] Aedes aegypti",
                afirmacao: "????????????????",
            }
        ]
    },
    {
        enunciado: "Qual o menor macaco?",
        alternativas: [
            {
                texto: "A] Sagui-pigmeu",
                afirmacao: " Afirmação ",
            },
            {
                texto: "B] Lêmure",
                afirmacao: " Afirmação ",
            },
            {
                texto: "C] Macaco-prego",
                afirmacao: " Afirmação ",
            },
            {
                texto: "D] Mico-leão-dourado",
                afirmacao: " Afirmação ",
            }
        ]
    },
    {
        enunciado: " Pergunta?",
        alternativas: [
            {
                texto: " Texto/resposta",
                afirmacao: " Afirmação ",
            },
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            },
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            },
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            }
        ]
    },
];
