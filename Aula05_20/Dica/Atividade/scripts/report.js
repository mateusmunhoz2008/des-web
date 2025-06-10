const data_reports = [];
let idReport = 0;

function addReport() {
    idReport++;

    const form = document.querySelector('#formReport');
    const input_data = form.querySelector('input[name="data"]');
    const select_subject = form.querySelector('select[name="assunto"]');
    const select_agent = form.querySelector('select[name="agente"]');

    const report = {
        id: idReport,
        data: input_data.value,
        subject_id: select_subject.value,
        agent_id: parseInt(select_agent.value)
    };
    data_reports.push(report);

    const table = document.querySelector('#table_report');
    const line = document.createElement('tr');
    
    const col_id = document.createElement('td');
    col_id.textContent = idReport;
    const col_data = document.createElement('td');
    col_data.textContent = input_data.value;
    const col_subject = document.createElement('td');
    col_subject.textContent = data_subjects[report.subject_id - 1].descricao;
    const col_agent = document.createElement('td');
    col_agent.textContent = data_agents[report.agent_id - 1].nome;

    line.appendChild(col_id);
    line.appendChild(col_data);
    line.appendChild(col_subject);
    line.appendChild(col_agent);
    table.appendChild(line);
    
    updateChart(); 

    form.reset();
}