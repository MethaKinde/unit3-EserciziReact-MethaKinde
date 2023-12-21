
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./MyNav.css";

import fantasy from '../data/books/fantasy.json';
import history from '../data/books/history.json';
import horror from '../data/books/horror.json';
import romance from '../data/books/romance.json';
import scifi from '../data/books/scifi.json';


const MyNav = ({onSelectCategory}) => {
    const handleCategorySelect = (category) => {
        onSelectCategory(category)
      }

    return (
        <Navbar collapseOnSelect expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img src='/assets/logoLibreria.png' alt="logo Libreria" /> EpiBook MK Edition
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link href='#home'>Home</Nav.Link>
                        <Nav.Link href='#About'>About</Nav.Link>
                        <Nav.Link href='#fantasy#'><button onClick={() => handleCategorySelect(fantasy)}>Fantasy</button></Nav.Link>
                        <Nav.Link href='#history#'><button onClick={() => handleCategorySelect(history)}>History</button></Nav.Link>
                        <Nav.Link href='#horror#'><button onClick={() => handleCategorySelect(horror)}>Horror</button></Nav.Link>
                        <Nav.Link href='#romance#'><button onClick={() => handleCategorySelect(romance)}>Romance</button></Nav.Link>
                        <Nav.Link href='#scifi#'><button onClick={() => handleCategorySelect(scifi)}>Sci-fi</button></Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNav;