import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { Image } from "./style"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import DropTitle from "../droptitle";
import logo_depen from '../../images/logo_depen.png';

function NavigationBar() {

  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user;
  
  function goToHome(route) {
        navigate('/home', { state: { user: user }})
  }

  function goToPolice(route) {
        navigate('/police', { state: { user: user }})
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <Image src={logo_depen} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={() => goToHome()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#555" class="bi bi-file-text" viewBox="0 0 16 16">
                <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"/>
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"/>
              </svg>
              <span className="ms-1 fw-bolder">Relatórios</span>
            </Nav.Link>
            <Nav.Link onClick={() => goToPolice()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#555" class="bi bi-person-badge" viewBox="0 0 16 16">
                <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492z"/>
              </svg>
              <span className="ms-1 fw-bolder">Policiais</span>
            </Nav.Link>
          </Nav>
          <NavDropdown title={<DropTitle text={user.name} />} id="navbarScrollingDropdown" className="me-4">
              <NavDropdown.Item href="#" className="me-5">{user.email}</NavDropdown.Item>
              <NavDropdown.Item href="/" className="me-5">Sair</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

