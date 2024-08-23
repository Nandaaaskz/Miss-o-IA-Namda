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
                texto: "a. Babuíno",
                afirmacao: "voce errou :(",
            },
            {
                texto: "b. Orangotango",
                afirmacao: "voce errou lol",
            },
            {
                texto: "c. Gorila",
                afirmacao: "voce acertou, parabens",
            },
            {
                texto: "d. Bugio",
                afirmacao: "errou lmao",
            }
        ]
    },
    {
        enunciado: "Qual o nome do personagem da Disney que foi criado por gorilas desde a sua infância?",
        alternativas: [
            {
                texto: "a. Mogli",
                afirmacao: "voce errou :(",
            },
            {
                texto: "b. Rodney",
                afirmacao: "voce errou :(",
            },
            {
                texto: "c. Dumbo",
                afirmacao: "voce errou :(",
            },
            {
                texto: "d. Tarzan",
                afirmacao: "resposta correta",
            }
        ]
    },
    {
        enunciado: "Chipanzés são carnívoros ou vegetarianos?",
        alternativas: [
            {
                texto: "a. Só comem frutas",
                afirmacao: "erro",
            },
            {
                texto: "b. Só comem carne",
                afirmacao: "errou lol",
            },
            {
                texto: "c. Comem de tudo",
                afirmacao: "certo",
            },
            {
                texto: "d. Passam fome",
                afirmacao: "? errou",
            }
        ]
    },
    {
        enunciado: "Qual é a espécie dos chimpanés?",
        alternativas: [
            {
                texto: "a. Pitangus sulphuratus",
                afirmacao: "espécie do bem-te-vi, errou",
            },
            {
                texto: "b. Pan troglodytes",
                afirmacao: "ta serto",
            },
            {
                texto: "c. Vampyroteuthis infernalis",
                afirmacao: "nao seu maluco",
            },
            {
                texto: "d. Aedes aegypti",
                afirmacao: "????????????????",
            }
        ]
    },
    {
        enunciado: "Qual o menor macaco?",
        alternativas: [
            {
                texto: "a. Sagui-pigmeu",
                afirmacao: " Afirmação ",
            },
            {
                texto: "b. Lêmure",
                afirmacao: " Afirmação ",
            },
            {
                texto: "c. Macaco-prego",
                afirmacao: " Afirmação ",
            },
            {
                texto: "d. Mico-leão-dourado",
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

let atual = 0; 
let perguntaAtual; 

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();

}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();

