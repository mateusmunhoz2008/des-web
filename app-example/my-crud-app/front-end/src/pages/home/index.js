import { useNavigate } from 'react-router';
import { Container } from './style';
import NavigationBar from '../../components/navigationbar';
import NavigationCards from '../../components/navigationcards';

export default function Login() {

    const navigate = useNavigate();

    return (
        <Container>
            <NavigationBar />
            <NavigationCards />
        </Container>
    )
}