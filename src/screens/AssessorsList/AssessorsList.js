import React from "react";
import TableData from "./dataTable";
import LevelHeader from "../../elements/levelCertification/levelHeader";
import { AssessorsData } from "../../objects/objects";
import Container from "react-bootstrap/Container";

const AssessorsList = () => {
  return (
    <Container fluid className="p-0 m-0">
      <LevelHeader
        title="Certified assessors list"
        subtitle="Below is a list of all the actively certified assesors under IPMA Ireland"
        href="#"
      />

      <TableData data={AssessorsData} />
    </Container>
  );
};
export default AssessorsList;
