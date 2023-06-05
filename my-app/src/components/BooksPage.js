import React from "react";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import BookItem from "./BookItem";
import Banner from "./Banner";

function BooksPage() {
  const [booksArray, setBooksArray] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((resp) => resp.json())
      .then((books) => setBooksArray(books));
  }, []);
  return (
    <div>
      <NavBar />
      <Banner
        pageTitle="Books"
        subTitle="Read Some Books"
        background="https://a.cdn-hotels.com/gdcs/production81/d60/e414d9a4-df1b-4e19-976f-b83e8a1b2c8d.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
      />
      <div className="container m-auto px-2 mt-10 mb-10">
        <div className="grid grid-cols-3 gap-3">
          {booksArray.map((book) => (
            <BookItem
              key={book.id}
              title={book.name}
              image={book.image}
              description={book.description}
              purchaseUrl={book.purchaseUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BooksPage;
