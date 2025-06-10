const data_subjects = []
var idSubject = 0
function addSubject() {
    idSubject++;

    const form = document.querySelector('#formSubject');
    const input_descricao = form.querySelector('input[name="descricao"]');

    const subject = {
        id: idSubject,
        descricao: input_descricao.value
    };
    data_subjects.push(subject);

    const table = document.querySelector('#table_subject');
    const line = document.createElement('tr')
    
    const col_idSubject = document.createElement('td')   
    col_idSubject.textContent = idSubject
    const col_nome = document.createElement('td')
    col_nome.textContent = input_descricao.value
    
    line.appendChild(col_idSubject);
    line.appendChild(col_nome);
    table.appendChild(line);

    const select = document.querySelector('#select_subject');
    const op = document.createElement("option");
    op.value = subject.id;
    op.textContent = subject.descricao;
    select.appendChild(op);
    
    updateChart(); 
    
    form.reset();
}