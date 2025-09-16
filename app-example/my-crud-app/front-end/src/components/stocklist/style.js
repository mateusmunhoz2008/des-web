import styled from 'styled-components';

export const ListContainer = styled.div`
    background-color: #2a2a2e;
    padding: 15px;
    border-radius: 8px;
    max-height: 80vh;
    overflow-y: auto;
`;

export const ListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    color: #c8a971;

    h2 {
        margin: 0;
        font-size: 1.5rem;
    }

    .quantity-control {
        display: flex;
        align-items: center;
        gap: 10px;

        input {
            width: 50px;
            padding: 5px;
            background-color: #3e3d42;
            border: 1px solid #555;
            color: white;
            border-radius: 4px;
        }
    }
`;

export const StockItem = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
    gap: 10px;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    background-color: ${props => props.selected ? '#3e3d42' : '#333337'};
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #3e3d42;
    }
`;

export const StockSymbol = styled.span`
    font-weight: bold;
    color: #c8a971;
`;

export const StockName = styled.span`
    font-size: 0.9rem;
    color: #ddd;
`;

export const StockPrice = styled.span`
    text-align: right;
    font-weight: bold;
`;

export const StockChange = styled.span`
    text-align: right;
    color: ${props => props.change >= 0 ? '#00B746' : '#EF403C'};
    font-weight: bold;
`;

export const BuyButton = styled.button`
    background-color: #c8a971;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.8;
    }
`;