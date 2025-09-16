import React from 'react';
import { Container } from './style';
import StockList from '../../components/stocklist';
import Chart from '../../components/chart';
import PortfolioSummary from '../../components/portfoliosummary';
import NavigationBar from '../../components/navigationbar';
import { stocks } from '../../utils/datatest';
import { portfolio } from '../../utils/datatest';

export default function Market() {

    const selectedStock = stocks[0];

    return (
        <>
            <NavigationBar />
            <Container>
                <StockList
                    stocks={stocks}
                    selectedSymbol={selectedStock.symbol}
                />
                <Chart
                    symbol={selectedStock.symbol}
                    currentPrice={selectedStock.price}
                />
                <PortfolioSummary portfolio={portfolio}/>
            </Container>
        </>

    );
}