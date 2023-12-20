import books from "../data/books/books.json";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

const AllTheBooks = () => {
    return (
        <Container>
            <Row className="justify-content-center text-center mb-5 text-white" >
                <div className="jumbotron jumbotron-fluid">
                    <h2 id="fantasy">Fantasy</h2>
                </div>
            </Row>
            <Row className="justify-content-center" >
                {books.fantasy.map((book) => {
                    return (
                        <Col md={6} lg={3}>
                            <Card style={{ width: '18rem' }} className="mb-5">
                                <Card.Img variant="top" src={book.img} alt={book.title} style={{ height: '20rem' }} />
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text>
                                        categoria: {book.category}<br />
                                        prezzo : {book.price}€
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>


            <Row className="justify-content-center text-center mb-5 text-white" >
                <div className="jumbotron jumbotron-fluid">
                    <h2 id="history">History</h2>
                </div>
            </Row>
            <Row className="justify-content-center" >
                {books.history.map((book) => {
                    return (
                        <Col md={6} lg={3}>
                            <Card style={{ width: '18rem' }} className="mb-5">
                                <Card.Img variant="top" src={book.img} alt={book.title} style={{ height: '20rem' }} />
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text>
                                        categoria: {book.category}<br />
                                        prezzo : {book.price}€
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>

            
            <Row className="justify-content-center text-center mb-5 text-white" >
                <div className="jumbotron jumbotron-fluid">
                    <h2 id="horror">Horror</h2>
                </div>
            </Row>
            <Row className="justify-content-center" >
                {books.horror.map((book) => {
                    return (
                        <Col md={6} lg={3}>
                            <Card style={{ width: '18rem' }} className="mb-5">
                                <Card.Img variant="top" src={book.img} alt={book.title} style={{ height: '20rem' }} />
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text>
                                        categoria: {book.category}<br />
                                        prezzo : {book.price}€
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>


            <Row className="justify-content-center text-center mb-5 text-white" >
                <div className="jumbotron jumbotron-fluid">
                    <h2 id="romance">Romance</h2>
                </div>
            </Row>
            <Row className="justify-content-center" >
                {books.romance.map((book) => {
                    return (
                        <Col md={6} lg={3}>
                            <Card style={{ width: '18rem' }} className="mb-5">
                                <Card.Img variant="top" src={book.img} alt={book.title} style={{ height: '20rem' }} />
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text>
                                        categoria: {book.category}<br />
                                        prezzo : {book.price}€
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>


            <Row className="justify-content-center text-center mb-5 text-white" >
                <div className="jumbotron jumbotron-fluid">
                    <h2 id="scifi">Sci-fi</h2>
                </div>
            </Row>
            <Row className="justify-content-center" >
                {books.scifi.map((book) => {
                    return (
                        <Col md={6} lg={3}>
                            <Card style={{ width: '18rem' }} className="mb-5">
                                <Card.Img variant="top" src={book.img} alt={book.title} style={{ height: '20rem' }} />
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text>
                                        categoria: {book.category}<br />
                                        prezzo : {book.price}€
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default AllTheBooks;