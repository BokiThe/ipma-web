import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import LevelHeader from "./levelHeader";
import LevelInfo from "./levelInfo";

const LevelCertification = (props) => {
  const width = window.innerWidth;
  return (
    <Container
      fluid
      style={{
        width: width,
      }}
    >
      <Row>
        <LevelHeader
          title="IPMA Level A certification"
          subtitle="An IPMA certification Level A for project management requires that the candidate has acted in a very complex project environment that has a strategic impact on the organisation. "
          href="#"
        />
      </Row>
      {/*--- LEVEL INFO ---*/}
      <Row style={{ padding: "0px 50px" }}>
        <LevelInfo
          title="Level info and certification criteria"
          subtitle="An IPMA certification Level A for project management requires that the candidate has acted in a very complex project environment that has a strategic impact on the organisation. Eligibility criteria include that within the last twelve years, the candidate needs to have a minimum of five years’ experience as a project manager in a responsible leadership function in very complex project of which at least three years were at a strategic level."
        />
      </Row>
    </Container>
  );
};

export default LevelCertification;
