export const renderStockList = (stocks) => {
  return `
    <table>
      <thead>
        <tr>
          <th>Ação</th>
          <th>Último Preço</th>
          <th>Variação (%)</th>
          <th>Volume</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        ${stocks.map(stock => `
          <tr>
            <td>
              <strong>${stock.symbol}</strong><br>
              <small>${stock.name}</small>
            </td>
            <td>R$ ${stock.price.toFixed(2)}</td>
            <td class="${stock.variation >= 0 ? 'positive' : 'negative'}">
              ${stock.variation >= 0 ? '+' : ''}${stock.variation.toFixed(2)}%
            </td>
            <td>${Math.floor(Math.random() * 10000)}</td>
            <td>
              <button class="buy-btn" data-symbol="${stock.symbol}">
                Comprar
              </button>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
};