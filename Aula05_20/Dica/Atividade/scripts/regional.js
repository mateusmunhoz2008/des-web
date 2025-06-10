const data_regionals = []
var idRegional = 0
function addRegional() {
    idRegional++

    const form = document.querySelector('#formRegional')
    const input_sigla = form.querySelector('input[name="sigla"]')
    const input_cidade = form.querySelector('input[name="cidade"]')

    const regional = {
        id: idRegional,
        sigla: input_sigla.value,
        cidade: input_cidade.value
    };
    data_regionals.push(regional);

    const table = document.querySelector('#table_regional');
    const line = document.createElement('tr')
    
    const col_idRegional = document.createElement('td')   
    col_idRegional.textContent = idRegional
    const col_sigla = document.createElement('td')
    col_sigla.textContent = input_sigla.value
    const col_cidade = document.createElement('td')
    col_cidade.textContent = input_cidade.value
    
    line.appendChild(col_idRegional);
    line.appendChild(col_sigla);
    line.appendChild(col_cidade);
    table.appendChild(line);

    const select = document.querySelector('#select_regional');
    const op = document.createElement("option");
    op.textContent = input_sigla.value + " - " + input_cidade.value;
    op.value = idRegional;
    select.appendChild(op);

    updateChart(); 
    
    form.reset()
}