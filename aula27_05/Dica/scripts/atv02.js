const ex02 = () => {
    const form = document.querySelector('#form02');
    const input = form.querySelector('input[name="in_02"]').value
    const numeros = input.split(' ').map(Number)
    const media = resolve02(...numeros)
    document.getElementById('output').textContent = `Média: ${media.toFixed(2)}`;
    form.reset();
};

const resolve02 = (...args) => {
    if (args.length === 0) {
        return 0;
    }

    const soma = args.reduce((total, num) => total + Number(num), 0);
    return soma / args.length;
};