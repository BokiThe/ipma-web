import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LevelHeader from "../../elements/levelCertification/levelHeader";
import LevelInfo from "../../elements/levelCertification/levelInfo";
import TextComponent from "../../elements/text/text";
import Iframe from "../../elements/Iframe/iframe";
import LevelDownload from "../../elements/levelCertification/levelDownload";
import LevelForm from "../../elements/levelCertification/levelForm";
import LevelVerticalTimeline from "../../elements/levelCertification/levelTimeLine";
const LevelCertificationA = () => {
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
      {/* VERTICAL TIME LINE */}
      <LevelInfo title="Steps to get certified" className="LevelInfo" />
      <LevelVerticalTimeline
        step1Text="Application to obtain the certificate"
        step11Text="Express your interest by email or complete the booking form online."
        step12Text="Prepare and submit a comprehensive CV for initial certification.
        "
        step13Text="CV is checked by an assessor to indicate, without any guarantees, if the level sought is attainable. "
        step14Text="If assessor’s feedback is positive, an invoice is issued."
        step15Text="The fees need to be paid before receiving the Certification documentation
        "
        step16Text="Complete and submit the Executive Summary Report by using any of our pre-designed templates. Check them out here.
        "
        step17Text="Fill in and submit the Self-Assessment and Application form including the referees
        "
        step18Text="Wait for your executive summary report to be assessed and the final approval decision for certification
        "
        step2Text="Full report preparation and submission"
        step3Text="Interview process"
      />

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

export default LevelCertificationA;
