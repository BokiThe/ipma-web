import React from "react";
import DataTable from "react-data-table-component";
import ModalShow from "./modalShow";
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
    cell: (el, index) => {
      return <ModalShow data={el} />;
    },
  },
];

const TableData = (props) => {
  const data = props.data;
  const convertArrayOfObjectsToCSV = (array) => {
    let result;

    const columnDelimiter = ",";
    const lineDelimiter = "\n";
    const keys = Object.keys(props.data[0]);

    result = "";
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    array.forEach((item) => {
      let ctr = 0;
      keys.forEach((key) => {
        if (ctr > 0) result += columnDelimiter;

        result += item[key];

        ctr++;
      });
      result += lineDelimiter;
    });

    return result;
  };
  const downloadCSV = (array) => {
    const link = document.createElement("a");
    let csv = convertArrayOfObjectsToCSV(array);
    if (csv == null) return;

    const filename = "export.csv";

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`;
    }

    link.setAttribute("href", encodeURI(csv));
    link.setAttribute("download", filename);
    link.click();
  };
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
        onExport={() => downloadCSV(props.data)}
      />
    ); //TODO:: solution for downloading files
  }, [filterText]);
  return (
    <DataTable
      columns={columns}
      data={filterData}
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      pagination
      paginationComponent={CostumPagination}
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
