import React from "react";
import Card from "react-bootstrap/Card";

const OrgCard = (props) => {
  return (
    <Card style={{ border: "none" }}>
      <Card.Img
        style={{ border: "1px solid #04151F", borderRadius: "8px 8px 0 0" }}
        variant="top"
        src={props.ImgSrc}
      />
      <Card.Body
        className="text-center"
        style={{ backgroundColor: "#04151F", borderRadius: "0 0 8px 8px" }}
      >
        <Card.Text style={{ color: "white", fontSize: "12px" }}>
          {props.fullName}
        </Card.Text>
        <Card.Text style={{ color: "white", fontSize: "12px" }}>
          {props.jobTitle}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default OrgCard;
