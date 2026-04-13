let pontuacao = 0;
let respondidas = [false, false, false];

function responder(perguntaIndex, correto) {

    if (respondidas[perguntaIndex]) return;

    respondidas[perguntaIndex] = true;

    const perguntas = document.querySelectorAll(".pergunta");
    const botoes = perguntas[perguntaIndex].querySelectorAll("button");

    botoes.forEach(botao => {
        botao.disabled = true;

        if (botao.getAttribute("onclick").includes("true")) {
            botao.classList.add("correto");
        } else {
            botao.classList.add("errado");
        }
    });

    if (correto) {
        pontuacao++;
    }

    verificarFinal();
}

function verificarFinal() {
    if (respondidas.every(r => r)) {
        document.getElementById("resultado").innerText =
            "Pontuação final: " + pontuacao + "/3";
    }
}