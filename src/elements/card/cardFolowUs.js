import React from "react";
import TextComponent from "../text/text";
import Link from "../text/link";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import facebook_icon from "../../assets/icons/facebook_icon.svg";
import twitter_icon from "../../assets/icons/twitter_icon.svg";
import linkedln_icon from "../../assets/icons/linkedln_icon.svg";
import youtube_icon from "../../assets/icons/youtube_icon.svg";
import "./card.css";
// TODO: ask for icons how to import them like img or like icons from fon awsome ??
const CardFolowUs = (props) => {
  return (
    <div className={props.className}>
      <TextComponent className="title-m" text={props.title} />
      <div className="titleBorder">
        <div className="filler"></div>
      </div>

      <Row className="mt-3 mb-3">
        <Link
          className="socialIcons"
          href={props.iconHrefFB}
          linkText={[<Image src={facebook_icon} alt="facebook_icon" />]}
        />

        <Link
          className="socialIcons"
          href={props.iconHrefTW}
          linkText={[<Image src={twitter_icon} alt="twitter_icon" />]}
        />

        <Link
          className="socialIcons"
          href={props.iconHrefLN}
          linkText={[<Image src={linkedln_icon} alt="linkedln_ikon" />]}
        />

        <Link
          className="socialIcons"
          href={props.iconHrefYT}
          linkText={[<Image src={youtube_icon} alt="youtube_icon" />]}
        />
      </Row>
      <Link
        className="cardLink"
        href={props.cardHref1}
        linkText={props.cardText1}
      />
      <Link
        className="cardLink"
        href={props.cardHref2}
        linkText={props.cardText2}
      />
    </div>
  );
};
export default CardFolowUs;
