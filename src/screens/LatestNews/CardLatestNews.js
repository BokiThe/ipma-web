import React from "react";
import Card from "react-bootstrap/Card";
import TextComponent from "../../elements/text/text";
import Link from "../../elements/text/link";
import Badge from "react-bootstrap/Badge";

const CardLatestNews = (props) => {
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const dayMonth = `${day} ${month}`;
  return (
    <Card style={{ border: "none", marginBottom: "50px" }}>
      <Badge
        bg="dark"
        style={{
          position: "absolute",
          top: "-4px",
          left: "-4px",
          padding: "15px 20px",
        }}
      >
        {dayMonth}
      </Badge>
      <Card.Img
        variant="top"
        src={props.src}
        style={{ border: "1px solid #04151F", borderRadius: "8px" }}
      />
      <Card.Body style={{ padding: "10px 0" }}>
        <Card.Title>
          <TextComponent className="title-xs" text={props.title} />
        </Card.Title>
        <Card.Text>
          <TextComponent className="subtitle" text={props.subtitle} />
        </Card.Text>
        <Link
          className="LevelLink"
          href={props.href}
          linkText={props.linkText}
        />
      </Card.Body>
    </Card>
  );
};
export default CardLatestNews;
