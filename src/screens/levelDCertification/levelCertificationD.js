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
import videoExplanation_image from "../../assets/ilustrations/videoExplanation_image.svg";
const LevelCertificationD = () => {
  return (
    <Container fluid className="p-0 m-0">
      {/* --- HEADER --- */}
      <Row className="m-0 mb-5 LevelHeader">
        <LevelHeader
          title="IPMA Level D certification"
          subtitle="IPMA level D certification is a recognition of your knowledge about managing projects. To possess this, one needs to demonstrate the competences as described by the IPMA International Competence Baseline®"
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
                text="An IPMA Level D certification requires that the candidate has knowledge in the Competence Elements (CEs) related to project management. As such, they usually have broad project management knowledge and may work in a project team. Eligibility criteria include that there is no previous experience required and only knowledge regarding CEs related to project management are assessed."
              />
            </Col>,
          ]}
        />
      </Row>
      {/* VERTICAL TIME LINE */}
      <Row>
        <LevelInfo
          title="Steps to get certified"
          className="LevelInfo"
          subtitle={[
            <LevelVerticalTimeline
              step11
              step12
              step13
              step14
              step15
              step16
              step17
              step1Text="Application to obtain the certificate"
              step11Text="Express your interest by email or complete the booking form online."
              step12Text="Prepare and submit a comprehensive CV for initial certification."
              step13Text="CV is checked by an assessor to indicate, without any guarantees, if the level sought is attainable. "
              step14Text="If assessor’s feedback is positive, an invoice is issued."
              step15Text="The fees need to be paid before receiving the Certification documentation"
              step16Text="Fill in and submit the Self-Assessment and Application form including the referees
          "
              step17Text="Wait for your executive summary report to be assessed and the final approval decision for certification"
              step2Text="Written exam"
              step3Text="Certification result"
            />,
          ]}
        />
      </Row>
      {/* LEVEL COST */}
      <Row>
        <LevelInfo
          className="LevelInfo"
          title="Certification cost"
          subtitleClass="mx-20"
          subtitle={[
            <Col className="p-0 m-0">
              <TextComponent
                className="subtitle text-start"
                text="Total cost"
              />
            </Col>,

            <Col className="p-0 m-0">
              <TextComponent className="subtitle text-end" text="€800" />
            </Col>,
          ]}
        />
      </Row>
      {/* VIDEO EXPLANATION */}
      <Row>
        <LevelInfo className="LevelInfo video" title="Video explanation" />
        <Iframe src={videoExplanation_image} />
      </Row>
      {/* Downloadables */}
      <Row>
        <LevelInfo
          className="LevelInfo"
          title="Downloadables"
          subtitle={[
            <LevelDownload dwldText="Application form" href="#" marked />,
            <LevelDownload dwldText="Self-assessment form" href="#" marked />,
            <LevelDownload dwldText="Fee schedule" href="#" />,
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
      <Row>
        <LevelInfo
          className="LevelInfo"
          title="Submit scanned forms"
          subtitle={[
            <TextComponent
              className="subtitle"
              text="If you’ve downloaded and filled the forms in the downladables
            section above, Scan them and upload below"
            />,
            <LevelForm />,
          ]}
        />
      </Row>
    </Container>
  );
};

export default LevelCertificationD;
