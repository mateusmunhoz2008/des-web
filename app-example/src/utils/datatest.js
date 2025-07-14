const initialStocks = [
  { symbol: 'PETR4', name: 'Petrobras', price: 32.50, variation: 1.2 },
  { symbol: 'VALE3', name: 'Vale', price: 68.90, variation: -0.5 },
  { symbol: 'MGLU3', name: 'Magazine Luiza', price: 4.15, variation: 3.1 },
  { symbol: 'ITUB4', name: 'Itaú Unibanco', price: 32.75, variation: 0.8 },
  { symbol: 'BBDC4', name: 'Bradesco', price: 15.20, variation: -1.2 },
  { symbol: 'BBAS3', name: 'Banco do Brasil', price: 56.30, variation: 0.5 },
];

export const generateStockData = () => {
  return initialStocks.map(stock => ({ ...stock }));
};

export const updateStockPrices = (currentStocks) => {
  return currentStocks.map(stock => {
    const randomChange = (Math.random() * 2 - 1) * 1.5;
    const newPrice = stock.price * (1 + randomChange / 100);
    const newVariation = stock.variation + randomChange;
    
    return {
      ...stock,
      price: parseFloat(newPrice.toFixed(2)),
      variation: parseFloat(newVariation.toFixed(2))
    };
  });
};