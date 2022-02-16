import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LevelHeader from "./levelHeader";
import LevelInfo from "./levelInfo";
import TextComponent from "../text/text";
import Iframe from "../Iframe/iframe";
import LevelDownload from "./levelDownload";
import LevelForm from "./levelForm";
const LevelCertification = () => {
  return (
    <Container fluid style={{ width: "100vw" }}>
      <Row className="m-0 mb-5">
        <LevelHeader
          title="IPMA Level A certification"
          subtitle="An IPMA certification Level A for project management requires that the candidate has acted in a very complex project environment that has a strategic impact on the organisation. "
          href="#"
        />
      </Row>
      {/*--- LEVEL INFO ---*/}
      <Row>
        <LevelInfo
          className="LevelInfo"
          title="Level info and certification criteria"
          subtitle={[
            <Col className="p-0">
              <TextComponent
                className="subtitle"
                text="An IPMA certification Level A for project management requires that the candidate has acted in a very complex project environment that has a strategic impact on the organisation. Eligibility criteria include that within the last twelve years, the candidate needs to have a minimum of five years’ experience as a project manager in a responsible leadership function in very complex project of which at least three years were at a strategic level."
              />
            </Col>,
          ]}
        />
      </Row>
      {/* Faq component */}

      {/* LEVEL COST */}
      <Row>
        <LevelInfo
          className="LevelInfo"
          title="Certification cost"
          subtitleClass="mx-20"
          subtitle={[
            <Col className="p-0 m-0">
              <TextComponent className="subtitle" text="Total cost" />
            </Col>,

            <Col className="p-0 m-0">
              <TextComponent className="subtitle text-end" text="€2’150" />
            </Col>,
          ]}
        />
      </Row>
      {/* VIDEO EXPLANATION */}
      <Row>
        <LevelInfo
          className="LevelInfo"
          title="Video explanation"
          subtitle={[
            <Iframe src="https://www.youtube.com/embed/kTc6BgrwNbg" />,
          ]}
        />
      </Row>
      {/* Downloadables */}
      <Row>
        <LevelInfo
          className="LevelInfo"
          title="Downloadables"
          subtitle={[
            <LevelDownload dwldText="Application form" href="#" marked />,
            <LevelDownload dwldText="Self-assessment form" href="#" marked />,
            <LevelDownload dwldText="Application form" href="#" />,
            <TextComponent
              className="subtitle-s"
              text={[
                'Note: Downloadables marked with "',
                <span style={{ color: "#ED3E3E" }}>***</span>,
                '" indicate that they are forms to be filled and submitted.',
              ]}
            />,
          ]}
        />
      </Row>
      {/* Submit scanned forms */}
      <LevelInfo
        className="LevelInfo"
        title="Submit scanned forms"
        subtitle={[<LevelForm />]}
      />
    </Container>
  );
};

export default LevelCertification;
