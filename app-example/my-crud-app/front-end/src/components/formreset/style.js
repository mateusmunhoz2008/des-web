import styled from 'styled-components';

export const Image = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 12px;
`

export const FormBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 440px;
    height: 240px;
    background-color: #3e3d42;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
`

export const Title = styled.h1`
    font-size: 30px;
    color: white;
    margin: 10px 0px;
`

export const Info = styled.p`
    text-align: justify;
    color: white;
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 100%;
`

export const InputEmail = styled.input.attrs({ type: 'email' })`
    outline: none;
    width: 90%;
    height: 30px;
    margin: 15px 0px;
    border: 1px solid #555;
    border-radius: 7px;
    padding-left: 10px;
    align-self: center;
`

export const Submit = styled.input.attrs({ type: 'submit' })`
    margin: 0px;
    width: 40%;
    height: 35px;
    border: 0px;
    background-color: #c8a971;
    cursor: grab;
    font-size: 16px;
    font-weight: 700;
    color: white;
    align-self: center;

    &:hover {
        opacity: 0.7;
    }
`