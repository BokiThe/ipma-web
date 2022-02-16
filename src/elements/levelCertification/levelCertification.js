import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LevelHeader from "./levelHeader";
import LevelInfo from "./levelInfo";
import TextComponent from "../text/text";
import Iframe from "../Iframe/iframe";
const LevelCertification = () => {
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

      <LevelInfo
        className="LevelInfo"
        title="Level info and certification criteria"
        subtitle={[
          <Col>
            <TextComponent
              className="subtitle"
              text="An IPMA certification Level A for project management requires that the candidate has acted in a very complex project environment that has a strategic impact on the organisation. Eligibility criteria include that within the last twelve years, the candidate needs to have a minimum of five years’ experience as a project manager in a responsible leadership function in very complex project of which at least three years were at a strategic level."
            />
          </Col>,
        ]}
      />
      {/* Faq component */}

      {/* LEVEL COST */}
      <LevelInfo
        className="LevelInfo"
        title="Certification cost"
        subtitleClass="mx-20"
        subtitle={[
          <Col>
            <TextComponent className="subtitle" text="Total cost" />
          </Col>,

          <Col>
            <TextComponent className="subtitle text-end" text="€2’150" />
          </Col>,
        ]}
      />
      {/* VIDEO EXPLANATION */}

      <LevelInfo
        className="LevelInfo"
        title="Video explanation"
        subtitle={[
          <Iframe
            height="400px"
            src="https://www.youtube.com/embed/kTc6BgrwNbg"
          />,
        ]}
      />
    </Container>
  );
};

export default LevelCertification;
