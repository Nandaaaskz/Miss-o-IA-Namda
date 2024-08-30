const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")


const perguntas = [
    {
        enunciado: "Qual o maior macaco de todos?",
        alternativas: [
            {
                texto: "a. Babuíno",
                afirmacao: "Pergunta 1 - Resposta marcada: a. Babuíno. Respota correta: c. Gorila. ",
            },
            {
                texto: "b. Orangotango",
                afirmacao: "Pergunta 1 - Resposta marcada: b. Orangotango. Respota correta: c. Gorila. ",
            },
            {
                texto: "c. Gorila",
                afirmacao: "Pergunta 1 - Resposta marcada: c. Gorila. Respota correta, Parabéns! ",
            },
            {
                texto: "d. Bugio",
                afirmacao: "Pergunta 1 - Resposta marcada: d. Bugio. Respota correta: c. Gorila. ",
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
        enunciado: "Só existem cerca de 3000 micos-leões-dourados na natureza devido a extinção :(",
        alternativas: [
            {
                texto: "a. Isso é triste :(",
                afirmacao: "certo",
            },
            {
                texto: "b. Isso é paia :(",
                afirmacao: "certo",
            },
            {
                texto: "c. fodasekkk",
                afirmacao: "ERRADO ERRADOO",
            },
            {
                texto: "d. Isso é complicado :(",
                afirmacao: "certo",
            }
        ]
    },
];

let atual = 0; 
let perguntaAtual; 
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();

}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + "";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "congratulations, você terminou o show do macaco.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();






