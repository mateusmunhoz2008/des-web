function ex04() {
    const form = document.querySelector('#form04');
    const input = form.querySelector('input[name="in_04"]').value;
    const numbers = input.split(',').map(Number);
    const result = resolve04(...numbers);
    document.getElementById('output').textContent = result.length > 0 
        ? `Números perfeitos: ${result.join(', ')}` 
        : 'Nenhum número perfeito encontrado';
    form.reset();
}

function resolve04(...args) {
    return args.filter(filter_perfeito);
}

const filter_perfeito = (val) => {
    if (val <= 1) return false;
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(val); i++) {
        if (val % i === 0) {
            sum += i;
            const otherDivisor = val / i;
            if (otherDivisor !== i) sum += otherDivisor;
        }
    }
    return sum === val;
}