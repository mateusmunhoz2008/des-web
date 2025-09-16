import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, CardTitle, CardValue, Icon, CardsContainer } from './style';

function NavigationCards() {
    const navigate = useNavigate();
    const location = useLocation();
    const user = location.state?.user;

    return (
        <CardsContainer>
            <Card onClick={() => navigate('/portfolio', { state: { user: user }})}>
                <CardTitle>Carteira <Icon>💰</Icon></CardTitle>
                <CardValue>
                    Seus investimentos
                </CardValue>
            </Card>
            <Card onClick={() => navigate('/market', { state: { user: user }})}>
                <CardTitle>Ações <Icon>🪙</Icon></CardTitle>
                <CardValue>
                    PETR4, VAL3, ITUB4
                </CardValue>
            </Card>
        </CardsContainer>
    );
}

export default NavigationCards;