import React, { useState } from 'react';
import SingleBook from './SingleBook';

const BookList = ({ books }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const getSearchQuery = (query) => {
        setSearchQuery(query);
    };

    // Filtra i libri in base alla stringa di ricerca
    const filteredBooks = books
        .flatMap((category) => category.books) // Unisce gli array di libri in una singola lista
        .filter((book) =>
            book.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

    return (
        <div>
            <SearchBar getSearchQuery={getSearchQuery} />
            {filteredBooks.map((book, index) => (
                <SingleBook key={index} book={book} />
            ))}
        </div>
    );
};

const SearchBar = ({ getSearchQuery }) => {
    const handleSearch = (e) => {
        getSearchQuery(e.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Cerca per titolo"
            onChange={handleSearch}
        />
    );
};

export default BookList;
