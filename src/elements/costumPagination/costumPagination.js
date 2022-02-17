import React from "react";
import Pagination from "react-js-pagination";
import "./costumePagination.css";

const CostumPagination = ({
  rowsPerPage,
  rowCount,
  onChangePage,
  onChangeRowsPerPage,
  currentPage,
}) => {
  return (
    <>
      <Pagination
        activePage={currentPage}
        itemsCountPerPage={rowsPerPage}
        totalItemsCount={rowCount}
        onChangeRowsPerPage={onChangeRowsPerPage}
        onChange={onChangePage}
      />
    </>
  );
};

export default CostumPagination;
