import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LevelHeader from "../../elements/levelCertification/levelHeader";
import { latestNews } from "../../objects/objects";
import Pagination from "react-js-pagination";
import CardLatestNews from "./CardLatestNews";
const LatestNews = () => {
  const [news] = useState(latestNews);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(8);

  //  get current news
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <Container fluid className="p-0 m-0">
      {/* HEADER */}
      <Row className="p-0 m-0">
        <LevelHeader
          className="LevelHeader"
          title="Latest news"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu nisi amet in pellentesque. Imperdiet ac amet arcu lectus in sodales tristique varius libero. Consectetur molestie turpis quis lorem rhoncus u lectus."
          href="#"
        />
      </Row>
      {/* --- NEWS CARDS --- */}
      <Row style={{ padding: "10% 10% 0 10%", margin: "0" }}>
        {currentNews.map((news, index) => {
          return (
            <Col key={index} className="col-3">
              <CardLatestNews
                src={news.src}
                title={news.title}
                subtitle={news.subtitle}
                href={news.href}
                linkText={news.linkText}
              />
            </Col>
          );
        })}
      </Row>
      <Pagination
        activePage={currentPage}
        itemsCountPerPage={newsPerPage}
        totalItemsCount={news.length}
        pageRangeDisplayed={news.length}
        onChange={handlePageChange.bind(this)}
      />
    </Container>
  );
};
export default LatestNews;
