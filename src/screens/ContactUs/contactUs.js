import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import LevelHeader from "../../elements/levelCertification/levelHeader";

const ContactUs = () => {
  return (
    <Container fluid className="m-0 p-0">
      {/* --- HEADER -- */}
      <Row className="m-0 mb-5 p-0 LevelHeader">
        <LevelHeader
          title="Contact Us"
          subtitle="Fill the form below with your message and email address and we will get back to you as soon as possible."
          href="#"
        />
      </Row>
      {/* --- CONTACT FORM --- */}
      <Row style={{ padding: "0 20%" }}>
        <form
          className="LevelForm"
          style={{
            borderBottom: "1.5px solid rgba(4,21,31,0.4)",
            paddingBottom: "30px",
          }}
        >
          <input
            className="LevelInput"
            type="text"
            placeholder="Enter your fullname here"
          />
          <input
            className="LevelInput"
            type="e-mail"
            placeholder="Enter your email here"
          />
          <textarea
            name="message"
            id="contactMessage"
            className="LevelInput"
            // cols="30"
            // rows="20"
            style={{ height: "168px" }}
            placeholder="Enter your message here"
          ></textarea>
          <input className="LevelSubmit" type="submit" value="Submit" />
        </form>
      </Row>
      <Row
        style={{
          padding: "0 20%",
          justifyContent: "center",
        }}
      >
        <span
          className="title-s contactSpan"
          style={{
            width: "40%",
            textAlign: "right",
            borderRight: "1.5px solid rgba(4,21,31,0.4",
          }}
        >
          Call: +1 267 277 6244
        </span>
        <span className="title-s contactSpan" style={{ width: "50%" }}>
          Email: Support@ipmaireland.com
        </span>
      </Row>
    </Container>
  );
};
export default ContactUs;
