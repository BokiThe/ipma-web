import React from "react";
import DataTable from "react-data-table-component";

import SubHeader from "./subHeader";
import CostumPagination from "../../elements/costumPagination/costumPagination";

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

const TableData = (props) => {
  const data = props.data;
  const [filterText, setFilterText] = React.useState("");

  const filterData = data.filter(
    (item) =>
      item.firstName &&
      item.firstName.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    return (
      <SubHeader
        onFilter={(e) => setFilterText(e.target.value)}
        filterText={filterText}
      />
    );
  }, [filterText]);
  return (
    <DataTable
      columns={columns}
      data={filterData}
      pagination
      paginationComponent={CostumPagination}
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      paginationPerPage={20}
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
