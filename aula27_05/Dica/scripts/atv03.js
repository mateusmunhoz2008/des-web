function ex03() {
    const form = document.querySelector('#form03')
    const input = form.querySelector('input[name="in_03"]').value
    const numeros = input.split(' ').map(Number)
    const resultado = resolve03(numeros)
    document.getElementById('output').innerHTML = `${resultado.join('<br>')}`
    form.reset();
}

function resolve03(numeros) {
    return numeros.map(isEven)
}

function isEven(val) {
    return val % 2 == 0 ? 'PAR' : 'ÍMPAR'
}