const caixaPrincipal = document.querySelector(".principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        alternativas: [
            {
                texto: "Gosta de ler?",
            },
            {
                texto: "Não gosta de ler?",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Qual tipo de livro você gosta de ler?",
            },
            {
                texto: "Você faz leitura dinâmica?",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Gosta de livros de romance?",
            },
            {
                texto: "Gosta de livros de suspense?",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Já leu algum livro da Colleen Hoover?",
            },
            {
                texto: "Já leu algum livro do Stephen King?",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Já leu É assim que acaba?",
            },
            {
                texto: "Já leu O iluminado?",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Já leu Verity?",
            },
            {
                texto: "Já leu It: a coisa?",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Espero que tenha gostado",
            },
            {
                texto: "Atualize a página para começar.",
            }
        ]
    },

];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraAlternativas(){
    perguntaAtual = perguntas[atual];
    caixaAlternativas.textContent = "";

    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    atual++;
    mostraAlternativas();
}


mostraAlternativas();