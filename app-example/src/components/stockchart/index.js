import Chart from 'chart.js/auto';

export const renderStockChart = (stocks) => {
  // Criamos um canvas que será usado pelo Chart.js
  return `
    <canvas id="stockChart" height="300"></canvas>
    <script>
      (function() {
        const ctx = document.getElementById('stockChart').getContext('2d');
        const labels = ${JSON.stringify(stocks.map(s => s.symbol))};
        const data = ${JSON.stringify(stocks.map(s => s.price))};
        const colors = ${JSON.stringify(stocks.map(s => s.variation >= 0 ? '#4CAF50' : '#F44336'))};
        
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'Preço das Ações',
              data: data,
              backgroundColor: colors,
              borderColor: colors,
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                callbacks: {
                  label: function(context) {
                    return 'R$ ' + context.raw.toFixed(2);
                  }
                }
              }
            },
            scales: {
              y: {
                beginAtZero: false,
                ticks: {
                  callback: function(value) {
                    return 'R$ ' + value.toFixed(2);
                  }
                }
              }
            }
          }
        });
      })();
    </script>
  `;
};