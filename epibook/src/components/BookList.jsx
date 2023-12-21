import React from 'react';
import SingleBook from './SingleBook';
import { Col, Form, Row } from 'react-bootstrap'

class BookList extends React.Component {
    state = {
      searchQuery: '',
    }
  
    render() {
      return (
        <>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label className='text-white'>Cerca un Libro</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Scrivi il titolo qua"
                  value={this.state.searchQuery}
                  onChange={(e) => this.setState({ searchQuery: e.target.value })}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {this.props.books.filter((b) =>
                b.title.toLowerCase().includes(this.state.searchQuery)
              )
              .map((b) => (
                <Col xs={12} sm={6} md={4} lg={3} key={b.asin}>
                  <SingleBook book={b} />
                </Col>
              ))}
          </Row>
        </>
      )
    }
  }

export default BookList;
