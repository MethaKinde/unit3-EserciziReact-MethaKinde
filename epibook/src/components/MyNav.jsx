
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./MyNav.css"


const MyNav = (props) => {
    console.log(props);

    return (
        <Navbar collapseOnSelect expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img src='/assets/logoLibreria.png' alt="logo Libreria" /> EpiBook MK Edition
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link href='#menu'>Home</Nav.Link>
                        <Nav.Link href='#prezzi'>About</Nav.Link>
                        <Nav.Link href='#mappa'>Browse</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNav;