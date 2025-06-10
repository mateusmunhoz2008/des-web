const data_agents = [];
var idAgent = 0;

function addAgent() {
    idAgent++;

    const form = document.querySelector('#formAgent');
    const input_nome = form.querySelector('input[name="nome"]');
    const select_regional = form.querySelector('select[name="regional"]');

    const agent = {
        id: idAgent,
        nome: input_nome.value,
        regional_id: select_regional.value
    };
    data_agents.push(agent);

    const table = document.querySelector('#table_agent');
    const line = document.createElement('tr')
    
    const col_idAgent = document.createElement('td')   
    col_idAgent.textContent = idAgent
    const col_nome = document.createElement('td')
    col_nome.textContent = input_nome.value
    const col_regional = document.createElement('td')
    col_regional.textContent = data_regionals[select_regional.value - 1].cidade

    line.appendChild(col_idAgent);
    line.appendChild(col_nome);
    line.appendChild(col_regional);
    table.appendChild(line);

    const select = document.querySelector('#select_agent');
    const op = document.createElement("option");
    op.value = idAgent;
    op.textContent = `${agent.nome}`;
    select.appendChild(op);

    updateChart(); 
    
    form.reset();
}