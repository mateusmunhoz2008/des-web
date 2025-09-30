import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { OrbitProgress } from "react-loading-indicators";
import UserContext  from '../../contexts/UserContext'
import { Client, setToken}  from '../../api/client';
import { setPermissions } from '../../service/PermissionService'
import { setDataUser } from '../../service/UserService'
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
    MsgBox,
    SendBox,
    Submit,
    LinkForgot,
} from "./style"

import logo_depen from '../../images/logo_depen.png';

export default function FormLogin() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [load, setLoad] = useState(false)
    const [view, setView] = useState(false)
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    function Authenticate() {

        const user = { email: email , password: password }

        setView(false)
        setLoad(true) 
        setTimeout(() => {
             Client.post('auth/login', user).then(res => {
                const load = res.data
                console.log(load)
                // Context
                setUser(load.user)
                // Local Storage
                setDataUser(load.user)
                setToken(load.token.value)
                setPermissions(load.permissions)
                navigate('/cursos')
            })
            .catch(function(error) {
                setView(true)
                console.log(error)
            })
            .finally( () => {
                setLoad(false)
            })

        }, 1000)
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
            {
                load 
                ?
                    <Container className="d-flex justify-content-center mt-5">
                        <OrbitProgress variant="spokes" color="#32cd32" size="medium" text="" textColor="" />
                    </Container>
                :
                    <>
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
                        
                        {
                            view
                            ?
                                <MsgBox>
                                    <p>Usuário e Senha Inválidos!</p>
                                </MsgBox>
                            :
                                ''
                        }
                        
                        <SendBox>
                            <Submit value="Autenticar" onClick={() => Authenticate() }/>
                            <LinkForgot onClick={() => navigate('/login')}> Esqueceu sua senha?</LinkForgot>
                        </SendBox>
                    </>
            }
        </Container>
    )
} 