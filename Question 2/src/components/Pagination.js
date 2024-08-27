import React from "react";
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  padding: 8px 16px;
  margin: 0 5px;
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: ${(props) => props.theme.colors.lightText};
    cursor: not-allowed;
  }
`;

const PageInfo = styled.div`
  margin: 0 10px;
  font-size: 1rem;
`;

const Pagination = ({ page, setPage, totalPages }) => {
  return (
    <PaginationContainer>
      <PageButton onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </PageButton>
      <PageInfo>
        {page} of {totalPages}
      </PageInfo>
      <PageButton
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;
