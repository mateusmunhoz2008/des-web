import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';
import { ChartContainer } from './style';

const CandleChart = ({ symbol, currentPrice }) => {
    const chartContainerRef = useRef(null);
    const chartRef = useRef(null);
    const candleSeriesRef = useRef(null);

    useEffect(() => {
        chartRef.current = createChart(chartContainerRef.current, {
            layout: {
                background: { color: '#2a2a2e' },
                textColor: '#c8a971',
            },
            grid: {
                vertLines: { color: '#3e3d42' },
                horzLines: { color: '#3e3a3e' },
            },
            width: chartContainerRef.current.clientWidth,
            height: chartContainerRef.current.clientHeight,
        });

        candleSeriesRef.current = chartRef.current.addCandlestickSeries({
            upColor: '#00B746',
            downColor: '#EF403C',
            borderDownColor: '#EF403C',
            borderUpColor: '#00B746',
            wickDownColor: '#EF403C',
            wickUpColor: '#00B746',
        });

        const sampleData = [
            { time: '2024-12-01', open: 28.10, high: 29.00, low: 27.80, close: 28.50 },
            { time: '2024-12-02', open: 28.50, high: 29.20, low: 28.00, close: 28.90 },
            { time: '2024-12-03', open: 28.90, high: 29.50, low: 28.60, close: 28.70 },
            { time: '2024-12-04', open: 28.70, high: 29.10, low: 28.10, close: 28.30 },
            { time: '2024-12-05', open: 28.30, high: 29.00, low: 28.00, close: 28.95 },
            { time: '2024-12-06', open: 28.95, high: 29.40, low: 28.70, close: 29.10 },
            { time: '2024-12-07', open: 29.10, high: 29.80, low: 28.90, close: 29.50 },
            { time: '2024-12-08', open: 29.50, high: 30.00, low: 29.10, close: 29.30 },
            { time: '2024-12-09', open: 29.30, high: 30.10, low: 28.90, close: 29.90 },
            { time: '2024-12-10', open: 29.90, high: 30.20, low: 29.40, close: 29.80 },
            { time: '2024-12-11', open: 29.80, high: 30.30, low: 29.60, close: 30.10 },
            { time: '2024-12-12', open: 30.10, high: 30.70, low: 29.90, close: 30.50 },
            { time: '2024-12-13', open: 30.50, high: 30.90, low: 30.10, close: 30.20 },
            { time: '2024-12-14', open: 30.20, high: 30.60, low: 29.80, close: 30.40 },
            { time: '2024-12-15', open: 30.40, high: 31.00, low: 30.00, close: 30.70 },
            { time: '2024-12-16', open: 30.70, high: 31.20, low: 30.40, close: 31.00 },
            { time: '2024-12-17', open: 31.00, high: 31.30, low: 30.80, close: 31.10 },
            { time: '2024-12-18', open: 31.10, high: 31.60, low: 30.90, close: 31.50 },
            { time: '2024-12-19', open: 31.50, high: 31.90, low: 31.20, close: 31.30 },
            { time: '2024-12-20', open: 31.30, high: 31.70, low: 30.90, close: 31.40 },
            { time: '2024-12-21', open: 31.40, high: 32.00, low: 31.00, close: 31.80 },
            { time: '2024-12-22', open: 31.80, high: 32.10, low: 31.20, close: 31.60 },
            { time: '2024-12-23', open: 31.60, high: 32.00, low: 31.10, close: 31.90 },
            { time: '2024-12-24', open: 31.90, high: 32.30, low: 31.50, close: 32.10 },
            { time: '2024-12-25', open: 32.10, high: 32.40, low: 31.70, close: 32.20 },
            { time: '2024-12-26', open: 32.20, high: 32.70, low: 31.90, close: 32.50 },
            { time: '2024-12-27', open: 32.50, high: 33.00, low: 32.10, close: 32.80 },
            { time: '2024-12-28', open: 32.80, high: 33.10, low: 32.30, close: 32.70 },
            { time: '2024-12-29', open: 32.70, high: 33.30, low: 32.50, close: 33.00 },
            { time: '2024-12-30', open: 33.00, high: 33.40, low: 32.60, close: 32.90 },
            { time: '2024-12-31', open: 32.90, high: 33.10, low: 32.20, close: 33.00 },
            { time: '2025-01-01', open: 30.50, high: 32.80, low: 30.20, close: 32.45 },
            { time: '2025-01-02', open: 32.50, high: 33.20, low: 31.80, close: 32.10 },
            { time: '2025-01-03', open: 32.20, high: 32.90, low: 31.50, close: 32.70 },
            { time: '2025-01-04', open: 32.70, high: 33.50, low: 32.30, close: 33.20 },
            { time: '2025-01-05', open: 33.20, high: 33.80, low: 32.90, close: 33.50 },
        ];

        candleSeriesRef.current.setData(sampleData);

        return () => {
            if (chartRef.current) {
                chartRef.current.remove();
                chartRef.current = null;
                candleSeriesRef.current = null;
            }
        };
    }, []);

    return (
        <ChartContainer>
            <h3>{symbol} - Gráfico de Candlestick</h3>
            <div ref={chartContainerRef} className="chart-container" />
            <div className="current-price">
                Preço atual: R$ {currentPrice}
            </div>
        </ChartContainer>
    );
};

export default CandleChart;