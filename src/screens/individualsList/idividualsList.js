import React from "react";
import TableData from "./dataTable";
import LevelHeader from "../../elements/levelCertification/levelHeader";
import { TableDatas } from "../../objects/objects";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const IndividualList = () => {
  return (
    <Container fluid className="m-0 p-0">
      <Row className="p-0 m-0 LevelHeader">
        <LevelHeader
          title="Certified individuals list"
          subtitle="Below is a list of all the actively certified individuals under IPMA Ireland"
          href="#"
        />
      </Row>
      <Row className="p-0 m-0">
        <TableData data={TableDatas} />
      </Row>
    </Container>
  );
};
export default IndividualList;
