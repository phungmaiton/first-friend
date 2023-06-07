import React from "react";
import NavBar from "./NavBar";
import { useState } from "react";
import BookItem from "./BookItem";
import Banner from "./Banner";
import Pagination from "./Pagination";
import BookForm from "./BookForm";
import Footer from "./Footer";

function BooksPage({ booksArray, setBooksArray }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = booksArray.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  return (
    <div>
      <NavBar />
      <Banner
        pageTitle="Books"
        subTitle="Read Some Books"
        background="https://a.cdn-hotels.com/gdcs/production81/d60/e414d9a4-df1b-4e19-976f-b83e8a1b2c8d.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
      />

      <div className="container m-auto px-2 pt-20 pb-20">
        <div className="grid grid-cols-1 px-8 sm:grid-cols-2 gap-8 lg:grid-cols-3 gap-10 ">
          {currentPosts.map((book) => (
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
        <Pagination
          paginate={paginate}
          array={booksArray}
          postsPerPage={postsPerPage}
        />
      </div>
      <BookForm array={booksArray} setArray={setBooksArray} />
      <Footer />
    </div>
  );
}

export default BooksPage;
