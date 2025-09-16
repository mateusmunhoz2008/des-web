import React from 'react';
import { Container } from './style';
import NavigationBar from '../../components/navigationbar';
import { portfolio } from '../../utils/datatest';

export default function Portfolio() {
  return (
    <Container>
      <NavigationBar />
      <h1 style={{ color: 'white', margin: '20px' }}>Minha Carteira</h1>
      
      <div style={{ margin: '20px', color: 'white' }}>
        {portfolio.map((item, index) => (
          <div key={index} style={{ 
            backgroundColor: '#222124',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '10px'
          }}>
            <h3>{item.symbol} - {item.name}</h3>
            <p>Quantidade: {item.quantity}</p>
            <p>Preço: R$ {item.price}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}