import React from "react";
import BookItem from "./BookItem";

function PopularBooks({ topThreeBooks, booksArray, setBooksArray }) {
  return (
    <div className="main-div">
      <h2 className="home-divider">
        <span className="home-divider-textbox">Popular Books</span>
      </h2>
      <div className="column-div">
        {topThreeBooks.map((book) => (
          <BookItem
            book={book}
            key={book.id}
            id={book.id}
            title={book.name}
            image={book.image}
            description={book.description}
            purchaseUrl={book.purchaseUrl}
            likes={book.likes}
            setBooksArray={setBooksArray}
            booksArray={booksArray}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularBooks;
