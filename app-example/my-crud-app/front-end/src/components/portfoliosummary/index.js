import React from 'react';
import { 
    PortfolioContainer, 
    PortfolioItem, 
    PortfolioHeader,
    PortfolioValue,
    ProfitLoss 
} from './style';

const PortfolioSummary = ({ portfolio}) => {
    return (
        <PortfolioContainer>
            <PortfolioHeader>
                <h2>Sua Carteira</h2>
                <PortfolioValue>
                    Valor Total: R$ 5.842,50
                    <ProfitLoss positive={true}>
                        +842,50 (16,85%)
                    </ProfitLoss>
                </PortfolioValue>
            </PortfolioHeader>
            
            {portfolio.map(item => (
                <PortfolioItem key={item.symbol}>
                    <div>
                        <strong>{item.symbol}</strong>
                        <span>{item.name}</span>
                    </div>
                    <div>
                        <span>Qtd: {item.quantity}</span>
                        <span>Preço: R$ {item.price}</span>
                    </div>
                </PortfolioItem>
            ))}
        </PortfolioContainer>
    );
};

export default PortfolioSummary;