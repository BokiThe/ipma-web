import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextComponent from "../../elements/text/text";
import LevelHeader from "../../elements/levelCertification/levelHeader";
import LevelInfo from "../../elements/levelCertification/levelInfo";
import OrgCard from "../../elements/organisation structure/orgCard";
import {
  SchemeCommittee,
  ComplaintsAppealsCommittee,
  Assessors,
  NewCoAssessors,
  Adminstrations,
} from "../../objects/objects.js";

const OrganisationStructure = () => {
  return (
    <Container fluid className="p-0 m-0">
      {/* --- HEADER --- */}
      <Row className="m-0 mb-5 LevelHeader">
        <LevelHeader title="IPMA Ireland Organisation Structure" href="#" />
      </Row>
      {/* --- ORG INFO --- */}
      <Row>
        <LevelInfo
          className="LevelInfo"
          title="IPMA Ireland"
          subtitle={[
            <Col className="p-0">
              <TextComponent
                className="subtitle"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu nisi amet in pellentesque. Imperdiet ac amet arcu lectus in sodales tristique varius libero. Consectetur molestie turpis quis lorem rhoncus u lectus in sodales tristique varius libero rem rhoncus u lectus in sodales tristique varius libero wem rhoncus u lectus in sodales."
              />
            </Col>,
          ]}
        />
      </Row>
      {/* --- SRATEGIC MENAGEMENT --- */}
      <Row>
        <LevelInfo
          className="LevelInfo"
          title="Strategic Management"
          subtitle={[
            <TextComponent className="title-s" text="Scheme Committee" />,
            <Row className="p-0 m-0">
              {SchemeCommittee.map((profile, index) => {
                return (
                  <Col
                    key={index}
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12  p-3"
                  >
                    <OrgCard
                      ImgSrc={profile.imgSrc}
                      fullName={profile.fullName}
                      jobTitle={profile.jobTitle}
                    />
                  </Col>
                );
              })}
            </Row>,
            <TextComponent
              className="title-s"
              text="Complaints & Appeals Committee"
            />,
            <Row className="p-0 m-0">
              {ComplaintsAppealsCommittee.map((profile, index) => {
                return (
                  <Col
                    key={index}
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-3"
                  >
                    <OrgCard
                      ImgSrc={profile.imgSrc}
                      fullName={profile.fullName}
                      jobTitle={profile.jobTitle}
                    />
                  </Col>
                );
              })}
            </Row>,
          ]}
        />
      </Row>
      {/* --- Operational Management --- */}
      <Row>
        <LevelInfo
          className="LevelInfo"
          title="Operational Management"
          subtitle={[
            <TextComponent className="title-s" text="Assessors" />,
            <Row className="p-0 m-0">
              {Assessors.map((profile, index) => {
                return (
                  <Col
                    key={index}
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-3"
                  >
                    <OrgCard
                      ImgSrc={profile.imgSrc}
                      fullName={profile.fullName}
                      jobTitle={profile.jobTitle}
                    />
                  </Col>
                );
              })}
            </Row>,
            //New Co-Assessors
            <TextComponent className="title-s" text="New Co-Assessors" />,
            <Row className="p-0 m-0">
              {NewCoAssessors.map((profile, index) => {
                return (
                  <Col
                    key={index}
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-3"
                  >
                    <OrgCard
                      ImgSrc={profile.imgSrc}
                      fullName={profile.fullName}
                      jobTitle={profile.jobTitle}
                    />
                  </Col>
                );
              })}
            </Row>,
            //Adminstrations
            <TextComponent className="title-s" text="New Co-Assessors" />,
            <Row className="p-0 m-0">
              {Adminstrations.map((profile, index) => {
                return (
                  <Col
                    key={index}
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-3"
                  >
                    <OrgCard
                      ImgSrc={profile.imgSrc}
                      fullName={profile.fullName}
                      jobTitle={profile.jobTitle}
                    />
                  </Col>
                );
              })}
            </Row>,
          ]}
        />
      </Row>
    </Container>
  );
};
export default OrganisationStructure;
