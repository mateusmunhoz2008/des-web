let segundos = 0;
let minutos = 0;
let horas = 0;
let temporizador;

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
let velocidadeMissil = 5;

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

function iniciarJogo() {
    if (!temporizador) {
        temporizador = setInterval(atualizarTemporizador, 1000);
    }

    document.addEventListener('keydown', tratarTeclaPressionada);
    document.addEventListener('keyup', tratarTeclaSolta);
    
    loopJogo();
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

function loopJogo() {
    moverNave();
    moverMisseis();
    requestAnimationFrame(loopJogo);
}

function moverNave() {
    if (teclasPressionadas['ArrowLeft'] && posicaoNave > -45) {
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
    } else {
        
    }
}

function moverMisseis() {
    if (missil1Ativo) {
        let posicaoAtual = parseInt(missil1.style.bottom);
        missil1.style.bottom = (posicaoAtual + velocidadeMissil) + 'px';

        if (posicaoAtual > 650) {
            missil1Ativo = false;
        }
    }

    if (missil2Ativo) {
        let posicaoAtual = parseInt(missil2.style.bottom);
        missil2.style.bottom = (posicaoAtual + velocidadeMissil) + 'px';

        if (posicaoAtual > 650) {
            missil2Ativo = false;
        }
    }
}

function pararContador() {
    clearInterval(temporizador);
    temporizador = null;
}

window.onload = iniciarJogo;