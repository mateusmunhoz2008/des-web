import { useNavigate, useLocation } from 'react-router-dom';
import { Image } from "./style"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo_depen from '../../images/logo_depen.png';

function NavigationBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user;

  return (
    <Navbar expand="lg"  style={{ backgroundColor: '#222124' }} variant="dark">
      <Container fluid>
        <Image src={logo_depen} onClick={() => navigate('/home', { state: { user: user }})} />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <NavDropdown title={user.name} id="navbarScrollingDropdown" className="me-4" menuVariant="dark" style={{ color: 'white' }} >
              <NavDropdown.Item href="#" className="me-5">{user.email}</NavDropdown.Item>
              <NavDropdown.Item href="/" className="me-5">Sair</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

