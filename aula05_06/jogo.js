let segundos = 0;
let minutos = 0;
let horas = 0;
let temporizador;
let jogoPausado = false;

const nave = document.getElementById('nave');
let posicaoNave = 0;
const velocidadeNave = 1;
let teclasPressionadas = {};

const missil1 = document.getElementById('missil1');
const missil2 = document.getElementById('missil2');
let missil1Ativo = false;
let missil2Ativo = false;
let missil1Disparado = false;
let missil2Disparado = false;
missil1.style.left = posicaoNave + '%';
missil2.style.left = posicaoNave + '%';
let velocidadeMissil = 30;

const aliensContainer = document.getElementById('aliensContainer');
let aliens = [];
const qtdAliens = 3;
let velocidadeDescida = 3;

let vidas = 3;
const vidasElement = document.getElementById('vida');

const overlay = document.getElementById('overlay');
const mensagem = document.getElementById('mensagem-pausa');

let faseAtual = 0;
const totalFases = 3;
const backgrounds = [
    'url("images/background.png")',
    'url("images/background2.jpg")',
    'url("images/background3.jpg")',
    'url("images/background4.jpg")'
];
let aliensMortos = 0;

function atualizarTemporizador() {
    segundos++;
    if (segundos >= 60) {
        segundos = 0;
        minutos++;
    }
    if (minutos >= 60) {
        minutos = 0;
        horas++;
    }
    const tempoFormatado = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    document.querySelector("#tempo").textContent = tempoFormatado;
}

function criarAliens() {
    aliensContainer.innerHTML = '';
    aliens = [];
    aliensMortos = 0;

    for (let i = 0; i < qtdAliens; i++) {
        const alien = document.createElement('img');
        alien.src = 'images/alien.png';
        alien.className = 'alien';
        alien.id = `alien-${i}`;
        alien.style.left = `${(i * 15) + 30}%`;
        alien.style.top = `0px`;
        aliensContainer.appendChild(alien);
        aliens.push({
            element: alien,
            ativo: true,
            posicaoAlien: 0
        });
    }
}

function iniciarJogo() {
    document.body.style.backgroundImage = backgrounds[faseAtual];
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    criarAliens();
    atualizarVidas();

    if (!temporizador) {
        temporizador = setInterval(atualizarTemporizador, 1000);
    }

    document.addEventListener('keydown', tratarTeclaPressionada);
    document.addEventListener('keyup', tratarTeclaSolta);
    document.addEventListener('keydown', function (e) {
        if (e.code === 'KeyP') {
            pausar();
        }
    });

    loopJogo();
}

function atualizarVidas() {
    vidasElement.textContent = `VIDAS: ${vidas}`;
}

function tratarTeclaPressionada(e) {
    teclasPressionadas[e.key] = true;

    if (e.code === 'Space') {
        dispararMissil();
    }
}

function tratarTeclaSolta(e) {
    teclasPressionadas[e.key] = false;
}

function pausar() {
    if (jogoPausado) {
        temporizador = setInterval(atualizarTemporizador, 1000);
        jogoPausado = false;
        overlay.style.display = 'none';
        mensagem.style.display = 'none';
    } else {
        clearInterval(temporizador);
        temporizador = null;
        jogoPausado = true;
        overlay.style.display = 'block';
        mensagem.style.display = 'block';
        mensagem.textContent = 'GAME PAUSED';
    }
}

function loopJogo() {
    if (!jogoPausado) {
        verificarColisaoNave();
        moverNave();
        moverMisseis();
        moverAliens();
        verificarColisoes();
    }
    requestAnimationFrame(loopJogo);
}

function moverNave() {
    if (teclasPressionadas['ArrowLeft'] && posicaoNave > -25) {
        posicaoNave -= velocidadeNave;
    }
    if (teclasPressionadas['ArrowRight'] && posicaoNave < 45) {
        posicaoNave += velocidadeNave;
    }
    nave.style.left = posicaoNave + '%';

    if (!missil1Disparado) {
        missil1.style.left = posicaoNave + '%';
    }
    if (!missil2Disparado) {
        missil2.style.left = posicaoNave + '%';
    }
}

function dispararMissil() {
    if (!missil1Disparado) {
        missil1Ativo = true;
        missil1Disparado = true;
        missil1.style.left = posicaoNave + '%';
        missil1.style.bottom = '60px';
        missil1.style.display = 'block';
    } else if (!missil2Disparado) {
        missil2Ativo = true;
        missil2Disparado = true;
        missil2.style.left = posicaoNave + '%';
        missil2.style.bottom = '60px';
        missil2.style.display = 'block';
    }
}

function moverMisseis() {
    if (missil1Ativo) {
        let posicaoAtual = parseInt(missil1.style.bottom);
        missil1.style.bottom = (posicaoAtual + velocidadeMissil) + 'px';

        if (posicaoAtual > 800) {
            missil1Ativo = false;
        }
    }

    if (missil2Ativo) {
        let posicaoAtual = parseInt(missil2.style.bottom);
        missil2.style.bottom = (posicaoAtual + velocidadeMissil) + 'px';

        if (posicaoAtual > 800) {
            missil2Ativo = false;
            resetarMisseis();
        }
    }
}

function resetarMisseis() {
    missil1Disparado = false;
    missil2Disparado = false;
    missil1.style.display = 'block';
    missil2.style.display = 'block';
    missil1.style.left = posicaoNave + '%';
    missil1.style.bottom = '20px';
    missil2.style.left = posicaoNave + '%';
    missil2.style.bottom = '20px';
}

function moverAliens() {
    aliens.forEach(alien => {
        if (alien.ativo) {
            alien.posicaoAlien += velocidadeDescida;
            alien.element.style.top = alien.posicaoAlien + 'px';
        }
    });
}

function verificarColisaoNave() {
    const naveRect = nave.getBoundingClientRect();

    aliens.forEach(alien => {
        if (alien.ativo) {
            const alienRect = alien.element.getBoundingClientRect();

            if (alienRect.bottom >= naveRect.top) {
                morreu();
                return;
            }
        }
    });
}

function morreu() {
    vidas--;
    atualizarVidas();

    if (vidas <= 0) {
        gameOver();
    } else {
        overlay.style.display = 'block';
        mensagem.style.display = 'block';
        mensagem.textContent = 'YOU LOSE';
        setTimeout(function () {
            overlay.style.display = 'none';
            mensagem.style.display = 'none';
        }, 500);
        criarAliens();
    }
}

function gameOver() {
    clearInterval(temporizador);
    temporizador = null;
    jogoPausado = true;

    overlay.style.display = 'block';
    mensagem.style.display = 'block';
    mensagem.textContent = 'GAME OVER';
}

function verificarColisoes() {
    aliens.forEach(alien => {
        if (alien.ativo) {
            const alienRect = alien.element.getBoundingClientRect();

            if (missil1Ativo) {
                const missil1Rect = missil1.getBoundingClientRect();
                if (colisao(missil1Rect, alienRect)) {
                    missil1Ativo = false;
                    alien.ativo = false;
                    alien.element.style.display = 'none';
                    missil1.style.display = 'none';
                    atualizarContadorAliens();
                    verificarFaseCompleta();
                }
            }

            if (missil2Ativo) {
                const missil2Rect = missil2.getBoundingClientRect();
                if (colisao(missil2Rect, alienRect)) {
                    missil2Ativo = false;
                    alien.ativo = false;
                    alien.element.style.display = 'none';
                    atualizarContadorAliens();
                    verificarFaseCompleta();
                    resetarMisseis();
                }
            }
        }
    });
}

function colisao(rect1, rect2) {
    return !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
    );
}

function atualizarContadorAliens() {
    aliensMortos++;
    const contador = document.getElementById('contador');
    contador.textContent = `ALIENS: ${aliensMortos}`;
}

function verificarFaseCompleta() {
    const aliensRestantes = aliens.filter(alien => alien.ativo).length;

    if (aliensRestantes === 0) {
        if (faseAtual === totalFases) {
            vitoria();
        } else {
            proximaFase();
        }
    }
}

function proximaFase() {
    faseAtual++;
    velocidadeDescida += 0.5;

    document.body.style.backgroundImage = backgrounds[faseAtual];

    criarAliens();
}

function vitoria() {
    clearInterval(temporizador);
    temporizador = null;
    jogoPausado = true;

    overlay.style.display = 'block';
    mensagem.style.display = 'block';
    mensagem.textContent = 'YOU WIN!';
}

function pararContador() {
    clearInterval(temporizador);
    temporizador = null;
}

window.onload = iniciarJogo;