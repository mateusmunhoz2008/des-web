import React from 'react';
import { 
    ListContainer, 
    StockItem, 
    StockSymbol, 
    StockName, 
    StockPrice, 
    StockChange, 
    BuyButton,
    ListHeader 
} from './style';

const StockList = ({ stocks, selectedSymbol }) => {
    return (
        <ListContainer>
            <ListHeader>
                <h2>Ações Disponíveis</h2>
                <div className="quantity-control">
                    <span>Qtd:</span>
                    <input type="number" min="1" defaultValue="1" />
                </div>
            </ListHeader>
            {stocks.map(stock => (
                <StockItem key={stock.symbol} selected={selectedSymbol === stock.symbol}>
                    <StockSymbol>{stock.symbol}</StockSymbol>
                    <StockName>{stock.name}</StockName>
                    <StockPrice>R$ {stock.price}</StockPrice>
                    <StockChange change={parseFloat(stock.change)}>
                        {stock.change > 0 ? '+' : ''}{stock.change}%
                    </StockChange>
                    <BuyButton>Comprar</BuyButton>
                </StockItem>
            ))}
        </ListContainer>
    );
};

export default StockList;