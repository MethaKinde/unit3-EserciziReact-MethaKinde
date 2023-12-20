import { Container, Row } from "react-bootstrap";
import "./Welcome.css"

const Welcome = () => {
    return (
        <Container className="text-center">
            <Row>
                <h1>Welcome to my EpiBooks!</h1>
                <p>Our list books</p>
            </Row>
        </Container>
    )
}


export default Welcome;