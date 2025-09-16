import styled from 'styled-components';
import logo_depen from '../../images/logo_depen.png';

export const Container = styled.div`
    
    background-image: url( ${logo_depen});
    background-repeat: no-repeat;
    background-color: #3e3d42;
    background-size: 600px;
    background-position: center;
    border-left: 1px solid #CCC;

    @media (max-width: 800px) {
        background-size: 100px;
    }
`