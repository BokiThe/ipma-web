import React from "react";
import download_icon from "../../assets/icons/download_icon.svg";
import filter_icon from "../../assets/icons/filter_icon.svg";
import "../individualsList/individualsList.css";
import Button from "../../elements/button/button";

const SubHeader = ({ filterText, onFilter, onExport }) => {
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
        key={1}
        className="btnFilter"
        onClick={onExport}
        text={[
          "Download",
          <img
            style={{
              paddingLeft: "15px",
              color: "black",
              alignSelf: "center",
            }}
            src={download_icon}
            alt="download_icon"
          />,
        ]}
      />

      <Button
        key={2}
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
