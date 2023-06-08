import React from "react";
import { useState } from "react";
import BookItem from "./BookItem";
import Banner from "./Banner";
import Pagination from "./Pagination";
import BookForm from "./BookForm";
import PageTransition from "./PageTransition";
import SearchSort from "./SearchSort";


function BooksPage({ booksArray, setBooksArray, searchTerm, setSearchTerm }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = booksArray.slice(indexOfFirstPost, indexOfLastPost);


  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };



  const filteredItems = currentPosts.filter((book) => {
    return (
      book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <PageTransition>
      <Banner
        pageTitle="Books"
        subTitle="Expand your Korean language library."
        background="https://a.cdn-hotels.com/gdcs/production158/d375/8bd96051-345f-497d-90ae-caa8a2a14983.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
      />
      <div>
        <SearchSort setSearchTerm={setSearchTerm}/>
      </div>
      {/* <div className="search container m-auto px-2 pt-10 pb-10">
        <input
          onChange={handleChange}
          type="text"
          className="searchTerm"
          placeholder="Enter Book Name"
        />
      </div> */}

      <div className="container m-auto px-2 pb-20">
        <div className="column-div">
          {filteredItems.map((book) => (
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
          array={filteredItems}
          postsPerPage={postsPerPage}
        />
      </div>
      <BookForm array={booksArray} setArray={setBooksArray} />
    </PageTransition>
  );
}

export default BooksPage;
