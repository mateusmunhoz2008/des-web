import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import { 
    Container, 
    BoxIcon,
    BoxItem,
    Icon,
    Title, 
    SubTitle,
    Label,
    InputPassword,
    InputEmail,
    SendBox,
    Submit,
    LinkForgot,
} from "./style"

import logo_depen from '../../images/logo_depen.png';

export default function FormLogin() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    function Authenticate() {

        const user = {
            name: 'Mateus',
            email: email
        }
        navigate('/home', { state: { user: user }})
    }

    return (
        <Container>
            <BoxIcon>
                <div></div>
                <BoxItem>
                    <Icon src={logo_depen}/>
                </BoxItem>
                <div></div>
            </BoxIcon>
            <Title>Autenticação</Title>
            <SubTitle>Informe suas Credenciais</SubTitle>

            <Label>E-mail</Label>
            <InputEmail 
                id="email" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        
            <Label>Senha</Label>
            <InputPassword 
                id="password" 
                name="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            
            <SendBox>
                <Submit value="Autenticar" onClick={() => Authenticate() }/>
                <LinkForgot onClick={() => navigate('/reset')}> Esqueceu sua senha?</LinkForgot>
            </SendBox>
            
        </Container>
    )
} 