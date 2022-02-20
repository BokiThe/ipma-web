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
const ReCertificationAC = () => {
  return (
    <Container fluid style={{ width: "100vw" }}>
      <Row className="m-0 mb-5">
        <LevelHeader
          title="Re-certification for level A-C"
          subtitle="Certified project managers (certificate holders) of all levels must apply for and pass the re-certification process after the specfied number of years to retain their certification."
          href="#"
        />
      </Row>
      {/*--- LEVEL INFO ---*/}
      <Row>
        <LevelInfo
          className="LevelInfo"
          title="Criteria for re-certification"
          subtitle={[
            <Col className="p-0">
              <TextComponent
                className="subtitle"
                text="With a recertification you extend the validity of your certificate for another 5 years. By doing so in the last 5 years, you prove that you have gained sufficient practical experience in the management of projects, programmes and/or portfolios to maintain your competence in these areas and that you have attended a sufficient number of further training activities to keep your relevant expertise up-to-date."
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
              step1Text="Demonstrate competency"
              step11
              step12
              step15
              step16
              step17
              step18
              step11Text="Demonsrate that you have a certificate of the appropriate level, which must not have expired for more than 6 months, in exceptional cases and with comprehensible justification, the maximum period is 12 months."
              step12Text="Demonsrate that you have gained at least 30 months of practical experience in project, programme and/or portfolio management in the 5 years since the last (re)certification."
              step15Text="The fees need to be paid before receiving the Certification documentation"
              step16Text="Complete and submit the Executive Summary Report by using any of our pre-designed templates. Check them out here."
              step17Text="Fill in and submit the Self-Assessment and Application form including the referees"
              step18Text="Wait for your executive summary report to be assessed and the final approval decision for certification"
              step2Text="Fill re-certification form"
              step3Text="Optional step - Change certificate"
            />,
          ]}
        />
      </Row>

      {/* LEVEL COST */}
      <Row>
        <LevelInfo
          className="LevelInfo"
          title="Re-certification cost"
          subtitleClass="mx-20"
          subtitle={[
            <Col className="p-0 m-0">
              <TextComponent className="subtitle" text="IPMA® Level A" />
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

export default ReCertificationAC;
