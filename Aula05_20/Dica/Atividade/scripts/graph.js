function drawChart() {
    const counts = {
        'Assuntos': data_subjects.length,
        'Regionais': data_regionals.length,
        'Relatórios': data_reports.length,
        'Agentes': data_agents.length
    };

    const chartData = [
        ['Tipo', 'Quantidade', { role: 'style' }],
        ['Assuntos', counts['Assuntos'], '#007bff'],
        ['Regionais', counts['Regionais'], '#ffc107'],
        ['Relatórios', counts['Relatórios'], '#dc3545'],
        ['Agentes', counts['Agentes'], '#28a745']
    ];

    const options = {
        title: 'Total de Cadastros por Tipo',
        legend: { position: 'none' },
        hAxis: {
            title: 'Tipos de Cadastro',
            minValue: 0
        },
        vAxis: {
            title: 'Quantidade'
        },
        chartArea: { width: '80%', height: '70%' },
    };

    const data = google.visualization.arrayToDataTable(chartData);
    const chart = new google.visualization.ColumnChart(document.getElementById('chart'));
    chart.draw(data, options);
}

function updateChart() {
    drawChart();
}

document.addEventListener('DOMContentLoaded', function() {
    drawChart();
});