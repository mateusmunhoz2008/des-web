import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-rows: 1fr 2fr;
    min-width: 100%;
    min-height: 100vh;
    box-sizing: border-box;

    @media (max-width: 800px) {
        grid-template-columns: 1fr; 
    }
`;