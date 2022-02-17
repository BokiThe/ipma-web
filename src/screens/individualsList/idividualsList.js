import React from "react";
import TableData from "./dataTable";
import LevelHeader from "../../elements/levelCertification/levelHeader";
import { TableDatas } from "../../objects/objects";

const IndividualList = () => {
  return (
    <>
      <LevelHeader
        title="Certified individuals list"
        subtitle="Below is a list of all the actively certified individuals under IPMA Ireland"
        href="#"
      />

      <TableData data={TableDatas} />
    </>
  );
};
export default IndividualList;
