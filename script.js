let barraLife = document.querySelector("#quantia-vida");
let barraWater = document.querySelector("#quantia-agua");
let barraDefense = document.querySelector("#quantia-defesa");
let barraMoney = document.querySelector("#quantia-dinheiro");
let nomePlayer = document.querySelector("#p1-name");


let personagens = [
    ["Roberta", [7, 4, 6, 3]],
    ["Hasan", [10, 10, 10, 10]],
    ["João", [2, 7, 7, 10]],
    ["Janaína", [6, 9, 5, 2]],
    ["Nicolas", [4, 5, 2, 6]]
]

let jogadores = [];

function checaAtributo(tipo) {
    switch (tipo) {
        case 0:
            return 'life';

        case 1:
            return 'water';

        case 2:
            return 'defense';
        
        case 3:
            return 'money';
    }
}


function rotuloInnerAtributo(tipo, valorAtributo) {
    let rotulo = "";
    let atributoA = checaAtributo(tipo);
    
    for (let i = 0; i < valorAtributo; i++) {
        rotulo = rotulo + `<img src="imgs/${atributoA}dot.png" class="atributo-status">`;
    }

    return rotulo;
}

function checaJogadores(person) {
    for (let i = 0; i < jogadores.lenght; i++) {
        if (person === jogadores[i]) {
            return 1;
        }
    }
    
    return 0;
}

function escolhePersonagem() {
    let rNumber;
    let personagemAtual;

    while (1) {
        rNumber = Math.random();

        if (rNumber === 0 || rNumber < 0.2) {
            personagemAtual = personagens[0];
            if (jogadores.length !== 0 && !checaJogadores(personagemAtual)) {
                return personagemAtual;
            }
            else if (jogadores.length === 0) {
                return personagemAtual;
            }
        }
        else if(rNumber >= 0.2 && rNumber < 0.4) {
            personagemAtual = personagens[1];
            if (jogadores.length !== 0 && !checaJogadores(personagemAtual)) {
                return personagemAtual;
            }
            else if (jogadores.length === 0) {
                return personagemAtual;
            }
        }
        else if(rNumber >= 0.4 && rNumber < 0.6) {
            personagemAtual = personagens[2];
            if (jogadores.length !== 0 && !checaJogadores(personagemAtual)) {
                return personagemAtual;
            }
            else if (jogadores.length === 0) {
                return personagemAtual;
            }
        }
        else if(rNumber >= 0.6 && rNumber < 0.8) {
            personagemAtual = personagens[3];
            if (jogadores.length !== 0 && !checaJogadores(personagemAtual)) {
                return personagemAtual;
            }
            else if (jogadores.length === 0) {
                return personagemAtual;
            }
        }
        else if(rNumber >= 0.8 && rNumber < 1) {
            personagemAtual = personagens[4];
            if (jogadores.length !== 0 && !checaJogadores(personagemAtual)) {
                return personagemAtual;
            }
            else if (jogadores.length === 0) {
                return personagemAtual;
            }
        }
    }
}

function criaJogador(nJogador) {
    let personagemA = escolhePersonagem();

    let jogador = {
        personagem: personagemA,

        num: nJogador,
        nome: personagemA[0],
        vida: personagemA[1][0],
        agua: personagemA[1][1],
        defesa: personagemA[1][2],
        dinheiro: personagemA[1][3],
    }

    return jogador;
}

function atualizaHTMLJogador(jogador) {
    let jogadorBarraLife = document.querySelector(`#p${jogador.num}-quantia-vida`);
    let jogadorBarraWater = document.querySelector(`#p${jogador.num}-quantia-agua`);
    let jogadorBarraDefense = document.querySelector(`#p${jogador.num}-quantia-defesa`);
    let jogadorBarraMoney = document.querySelector(`#p${jogador.num}-quantia-dinheiro`);
    let jogadorName = document.querySelector(`#p${jogador.num}-nome`);

    jogadorBarraLife.innerHTML = rotuloInnerAtributo(0, jogador.vida);
    jogadorBarraWater.innerHTML = rotuloInnerAtributo(1, jogador.agua);
    jogadorBarraDefense.innerHTML = rotuloInnerAtributo(2, jogador.defesa);
    jogadorBarraMoney.innerHTML = rotuloInnerAtributo(3, jogador.dinheiro);
    jogadorName.innerHTML = jogador.nome;
}

for (let i = 0; i < 5; i++) {
    jogadores.push(criaJogador(i + 1));
}

atualizaHTMLJogador(jogadores[0]);