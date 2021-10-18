import { Box } from "@chakra-ui/layout";
import React, { useState } from "react";

function Pagination({ postsPerpage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerpage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Box
      style={{
        margin: "30px auto 10px",
        textAlign: "center",
      }}
    >
      <ul className="pagination ">
        {pageNumbers.map((number) => (
          <li className="page-item" key={number}>
            <a
              className="page-link"
              href="javascript:void(0)"
              onClick={() => paginate(number)}
              style={{
                color: "#046494",
              }}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default Pagination;
