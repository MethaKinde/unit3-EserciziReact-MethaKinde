import React from "react";
import books from "../data/books/books.json";
import  Container  from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Welcome.css"

class Welcome extends React.Component {
    state = {libroSelezionato: books.fantasy[0]};
    

    render(){
        return(
            <Container>
                <Row className="justify-content-center" >
                    <div className="jumbotron jumbotron-fluid">
                        <h1>Fantasy</h1>
                    </div>
                </Row>
                <Row className="justify-content-center" >
                    {books.fantasy.map((book) => {
                        return (
                            <Col md={6} lg={4}>
                                <Card style={{ width: '18rem' }} className="mb-5">
                                    <Card.Img variant="top" src={book.img} alt={book.title} style={{ height: '20rem'}}/>
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


}


export default Welcome;