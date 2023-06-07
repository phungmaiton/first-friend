import React from "react";
import BookItem from "./BookItem";

function PopularBooks({ topThreeBooks, booksArray, setBooksArray }) {
  return (
    <div className="container m-auto px-2 pt-20">
      <div className="grid grid-cols-1 px-8 sm:grid-cols-2 gap-8 lg:grid-cols-3 gap-10">
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
