import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import "./KhujTheSearch.css";
// import SingleTheSearch from "../SingleTheSearch/SingleTheSearch";

const KhujTheSearch = () => {
  //   const [bookList, setBookList] = useState([]);
  const [book, setBook] = useState([]);
  const [input, setInput] = useState([]);

  const booksList = book.docs;
  const booksListLength = booksList?.length;

  const searchBook = () => {
    const inputText = document.getElementById("input-field");
    const searchText = inputText.value.toLowerCase();
    setInput(searchText);
    
    let author = booksList.author_name;
    let bookPublisher = booksList.publisher;
    console.log(author);
    console.log(bookPublisher);
    
        // book.author_name ? author = book.author_name[0] : '';
    

    
        // book.publisher ? bookPublisher = book.publisher[0] : '';
    
  };

  useEffect(() => {
    const url = `http://openlibrary.org/search.json?q=${input}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);

  // bookList.length ? errorDiv.style.display = 'none' : '';
  //bring book container from html
  // const bookContainer = document.getElementById('book-container');
  // bookContainer.textContent = '';
  // bookList.forEach(book => {

  //     const div = document.createElement('div');
  //     div.classList.add('col');
  // book.author_name ? author = book.author_name[0] : '';
  // book.publisher ? bookPublisher = book.publisher[0] : '';

  //     )
  //   }
  const urlImg = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;

  return (
    <div>
      <div className="mx-auto search-field">
        <h6 className="search-heading">If you can't find the cherished book. Search on input field</h6>
        <InputGroup className="mb-3">
          <Form.Control
            id="input-field"
            placeholder="Find your cherished book"
            aria-label="Find your cherished book"
            aria-describedby="basic-addon2"
          />
          <Button onClick={searchBook} id="search-btn basic-addon2" variant="outline-secondary">
            Search
          </Button>
        </InputGroup>
      </div>
      <hr />
      <div>
        {(`${booksListLength}` === 0) ? (
          <p>No results found</p>
        ) : (
          <div>
            <p>
              About ${booksListLength} results out of ${book.numFound}
            </p>
            <div>

            </div>
            {/* <div className="card rounded" style={{ heihgt: 450 }}>
              <img className="mx-auto mt-2 rounded" src={`${urlImg}`} alt="" />
              
              <div className="card-body mx-auto">
                <h4>h</h4>
                <p>Author:</p>
                <p>Publisher: </p>
                <p>First published: ${book.first_publish_year}</p>
              </div>
            </div> */}
            
            
          </div>
        )}
      </div>
    </div>
  );
};

export default KhujTheSearch;
