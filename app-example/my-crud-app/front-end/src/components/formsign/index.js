import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import {
    Image,
    FormBox,
    Title,
    Info,
    Form,
    InputEmail,
    Submit,

} from "./style"

import logo_depen from '../../images/logo_depen.png';

export default function FormSign() {

    const [email, setEmail] = useState('')
    const navigate = useNavigate();

    return (
        <>
            <div>
                <Image class="icon-depen" src={logo_depen} />
            </div>
            <FormBox>
                <Title>Criar conta</Title>
                <Info>Informe seu e-mail, nome e senha</Info>
                <Form>
                    <InputEmail 
                        id="email" 
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <Submit value="Enviar" onClick={() => navigate('/')}/>
                </Form>
            </FormBox>
        </>
    )
}