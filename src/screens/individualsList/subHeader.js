import React from "react";
import magnifyingGlass_icon from "../../assets/icons/magnifyingGlass_icon.svg";
import download_icon from "../../assets/icons/download_icon.svg";
import filter_icon from "../../assets/icons/filter_icon.svg";
import "./individualsList.css";
import Button from "../../elements/button/button";

const SubHeader = ({ filterText, onFilter }) => {
  const magnifyingGlass = (
    <img src={magnifyingGlass_icon} alt="magnifyingGlass_icon" />
  );
  return (
    <div className="filterContainer">
      <input
        type="search"
        name="filterByName"
        id="FilterByName"
        placeholder="Search for someone"
        value={filterText}
        onChange={onFilter}
      />
      <Button
        className="btnFilter"
        text={[
          "Download",
          <img
            style={{ paddingLeft: "15px", color: "black", alignSelf: "center" }}
            src={download_icon}
            alt="download_icon"
          />,
        ]}
      />
      <Button
        className="btnFilter"
        text={[
          "Filters",
          <img
            style={{ paddingLeft: "15px", color: "black", alignSelf: "center" }}
            src={filter_icon}
            alt="filter_icon"
          />,
        ]}
      />
    </div>
  );
};

export default SubHeader;
