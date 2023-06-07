import React, {useState} from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Pagination from "./Pagination";
import OtherResourcesItem from "./OtherResourcesItem"
import OtherResourcesForm from "./OtherResourcesForm";

function OtherResourcesPage({linksArray, setLinksArray}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = linksArray.slice(indexOfFirstPost, indexOfLastPost);
    
    const paginate = ({ selected }) => {
        setCurrentPage(selected + 1);
      };

    return  (
    <div>
        <NavBar />
        <Banner
        pageTitle="Other Resources"
        subTitle="Find Some Tips and Tricks"
        background="https://a.cdn-hotels.com/gdcs/production125/d653/a01517ea-0ec0-4639-b862-33922c62f04a.jpg"
    />
      <div className="container m-auto px-2 mt-20 mb-20">
        <div className="grid grid-cols-3 gap-3">
          {currentPosts.map((link) => (
            <OtherResourcesItem 
                link={link}
                key={link.id}
                name={link.name}
                description={link.description}
                image={link.image}
                likes={link.likes}
                setLinksArray={setLinksArray}
                linksArray={linksArray}
            />
          ))}
        </div>
     <Pagination
          paginate={paginate}
          array={linksArray}
          postsPerPage={postsPerPage}
        />
    </div>

    <OtherResourcesForm
          paginate={paginate}
          array={linksArray}
          postsPerPage={postsPerPage}
    />
    </div>
    )
}


export default OtherResourcesPage