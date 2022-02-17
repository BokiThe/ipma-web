import React from "react";

const SubHeader = ({ filterText, onFilter }) => {
  return (
    <>
      <input
        type="search"
        name="filterByName"
        id="FilterByName"
        placeholder="Search for someone"
        value={filterText}
        onChange={onFilter}
      />
    </>
  );
};

export default SubHeader;
