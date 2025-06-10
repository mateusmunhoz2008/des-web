function ex05() {
    const form = document.querySelector('#form05');
    const input = form.querySelector('input[name="in_05"]').value;
    try {
        const jsonObj = JSON.parse(input);
        const constructedObj = new construtora(jsonObj);
        const result = resolve05(constructedObj);
        document.getElementById('output').textContent = result;
    } catch (e) {
        document.getElementById('output').textContent = 'JSON inválido';
    }
    form.reset();
}

function resolve05(obj) {
    let output = '';
    for (const [key, value] of Object.entries(obj)) {
        output += `${key}: ${value}\n`;
    }
    return output;
}

function construtora(data) {
    for (const [key, value] of Object.entries(data)) {
        this[key] = value;
    }
}