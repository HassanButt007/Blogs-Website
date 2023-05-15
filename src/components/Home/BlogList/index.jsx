import React, { useState } from 'react';
import BlogItem from './BlogItem';
import './styles.css';
import ReactPaginate from "react-paginate"

const BlogList = ({ blogs }) => {

  const [users, setUsers] = useState(blogs);
  const [pageNumber, setpageNumber] = useState(0);

  const userPerPage = 3;
  const pageVisited = pageNumber * userPerPage;

  const displayUsers = users.slice(pageVisited, pageVisited + userPerPage)
  .map((blog) => {
    return(
      <BlogItem blog={blog} />
    );
  })

  const pageCount = Math.ceil(users.length / userPerPage);
  const changePage = ({selected}) => {
    setpageNumber(selected);
  }

  return (
    <div className='blogList-wrap'>
      {displayUsers}

      <ReactPaginate 
      previousLable= {"Prev"}
      nextLable= {"Next"}
      pageCount = {pageCount}
      onPageChange={changePage}
      containerClassName={"paginationbuttons"}
      previousLinkClassName={"prev-link"}
      nextLinkClassName={"next-link"}
      disabledClassName={"disbaledButn"}
      activeClassName={"paginationActve"}
      
      />

    </div>
  );
};

export default BlogList;
