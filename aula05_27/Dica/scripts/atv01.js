function ex01() {
    const form = document.querySelector('#form01')
    const input = form.querySelector('input[name="in_01"]').value
    const numeros = input.split(' ').map(Number)
    media=resolve01(...numeros)
    document.getElementById('output').textContent = `Média: ${media.toFixed(2)}`
    form.reset()
}

function resolve01() {
    if (arguments.length === 0) {
        return 0
    }

    let soma = 0
    
    for (let i = 0; i < arguments.length; i++) {
        const numero = Number(arguments[i])
        
        soma += numero
    }
    
    const media = soma / arguments.length
    
    return media
}