import { useNavigate } from 'react-router';
import { Container } from './style';
import FormLogin from '../../components/formlogin';
import ImageLogin from '../../components/imagelogin';

export default function Login() {

    const navigate = useNavigate();

    return (
        <Container>
            <ImageLogin />
            <FormLogin />
        </Container>
    )

}