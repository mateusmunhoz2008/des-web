import styled from 'styled-components';

export const ChartContainer = styled.div`
    background-color: #3e3d42;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin: 10px;
    
    h3 {
        margin-top: 0;
        color: #c8a971;
        text-align: center;
        margin-bottom: 15px;
    }

    .chart-container {
        width: 100%;
        height: 400px;
    }

    .current-price {
        margin-top: 15px;
        font-size: 18px;
        font-weight: bold;
        color: #c8a971;
        text-align: center;
    }
`;