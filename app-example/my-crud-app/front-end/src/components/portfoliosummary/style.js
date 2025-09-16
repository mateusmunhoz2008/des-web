import styled from 'styled-components';

export const PortfolioContainer = styled.div`
    background-color: #2a2a2e;
    padding: 15px;
    border-radius: 8px;
`;

export const PortfolioHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    color: #c8a971;
    border-bottom: 1px solid #3e3d42;
    padding-bottom: 10px;

    h2 {
        margin: 0;
        font-size: 1.5rem;
    }
`;

export const PortfolioValue = styled.div`
    text-align: right;
    font-weight: bold;
`;

export const ProfitLoss = styled.span`
    display: block;
    font-size: 0.9rem;
    color: ${props => props.positive ? '#00B746' : '#EF403C'};
`;

export const PortfolioItem = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #333337;
    border-radius: 5px;

    div {
        display: flex;
        flex-direction: column;

        strong {
            color: #c8a971;
            font-size: 1.1rem;
        }

        span {
            font-size: 0.9rem;
            color: #ddd;
        }
    }
`;