import React from 'react';
import Card from "react-bootstrap/Card";

class SingleBook extends React.Component {
    state = {
        selected: false,
    }

    render() {
        return (
            <Card
                onClick={() => this.setState({ selected: !this.state.selected })}
                style={{ border: this.state.selected ? '3px solid red' : 'none' }}
                className='mt-5'
            >
                <Card.Img variant="top" src={this.props.book.img} />
                <Card.Body>
                    <Card.Title style={{ color: 'black' }}>
                        {this.props.book.title}
                    </Card.Title>
                    <Card.Text>
                        categoria: {this.props.book.category}<br />
                        prezzo : {this.props.book.price}€
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default SingleBook;
