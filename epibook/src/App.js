import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
//import AllTheBooks from './components/AllTheBooks';
import { Container } from 'react-bootstrap';
import BookList from './components/BookList';

import fantasy from './data/books/fantasy.json';
import history from './data/books/history.json';
import horror from './data/books/horror.json';
import romance from './data/books/romance.json';
import scifi from './data/books/scifi.json';




function App() {
  const [selectedCategory, setSelectedCategory] = React.useState(fantasy);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
  }

  return (
    <>
      <MyNav onSelectCategory={handleCategorySelect} />
      <Container>
        <Welcome />
        {/* <AllTheBooks /> */}
        <BookList books={selectedCategory} />
      </Container>
    </>
  );
}

export default App;
