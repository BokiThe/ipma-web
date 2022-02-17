import React from "react";
import DataTable from "react-data-table-component";
import { TableDatas } from "../../objects/objects";
import SubHeader from "./subHeader";

import "./individualsList.css";

const columns = [
  {
    name: "Certificate",
    selector: (row) => row.certificate,
    sortable: true,
  },
  {
    name: "Surname",
    selector: (row) => row.surname,
    sortable: true,
  },
  {
    name: "First name",
    selector: (row) => row.firstName,
    sortable: true,
  },
  {
    name: "Location",
    selector: (row) => row.location,
    sortable: true,
  },
  {
    name: "Detail",
    selector: (row) => row.detail,
  },
];

const data = TableDatas;

const TableData = () => {
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const filterData = data.filter(
    (item) =>
      item.firstName &&
      item.firstName.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <SubHeader
        onFilter={(e) => setFilterText(e.target.value)}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);
  return (
    <DataTable
      columns={columns}
      data={filterData}
      pagination
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      paginationPerPage={20}
      paginationResetDefaultPage={resetPaginationToggle}
      paginationComponentOptions={{
        rangeSeparatorText: "of",
        RowsPerPage: 20,
        noRowsPerPage: true,
        selectAllRowsItem: true,
        selectAllRowsItemText: "All",
      }}
      paginationIconFirstPage=""
      paginationIconLastPage=""
      responsive
    />
  );
};

export default TableData;
