import React from "react";
import TableData from "./dataTable";
import LevelHeader from "../../elements/levelCertification/levelHeader";
import { AssessorsData } from "../../objects/objects";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const AssessorsList = () => {
  return (
    <Container fluid className="p-0 m-0">
      <Row className="m-0 mb-5 p-0 LevelHeader">
        <LevelHeader
          title="Certified assessors list"
          subtitle="Below is a list of all the actively certified assesors under IPMA Ireland"
          href="#"
        />
      </Row>
      <Row className="m-0 p-0 ">
        <TableData data={AssessorsData} />
      </Row>
    </Container>
  );
};
export default AssessorsList;
