import React from 'react';
import Card from "react-bootstrap/Card";

class SingleBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
        };
    }

    handleToggleSelection = () => {
        this.setState((prevState) => ({
            selected: !prevState.selected,
        }));
    };

    render() {
    
        const title = this.props.book.title;
        const cover = this.props.book.img;
        const { selected } = this.state;

        return (
            <Card
                style={{ width: '18rem', border: selected ? '2px solid green' : 'none' }}
                onClick={this.handleToggleSelection}
            >
                <Card.Img variant="top" src={cover} alt={title} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
            </Card>
        );
    }
}

export default SingleBook;
