import { Container, Row, Col } from "react-bootstrap";
import style from "../../../styles/header.module.css";
import Image from "next/image";
import news from "../../../public/news.jpg";

export default function NewArrivalsSubNav() {
  return (
    <Row className={style.new_arrivals_sub_nav_content}>
      <Container fluid={true}>
        <Col>
          <Row>
            <Col md={5}>
              <h5 className="mb-4">New arrivals</h5>
              <p className="mt-2">All the news</p>
              <p>T-Shirts & Polos</p>
              <p>Shirts</p>
              <p>Jeans</p>
              <p>Pants</p>
              <p>Sweaters & Sweatshirts</p>
            </Col>
            <Col md={5}>
              <h5>By brand</h5>
              <p className="mt-3 pt-1"> Knowledge Cotton Apparel</p>
              <p>Nudie jeans </p>
              <p>Thinking Mu </p>
              <p> Hopaal</p>
              <p>Veja</p>
              <p>Bask in the Sun</p>
            </Col>
            <Col md={2}></Col>
          </Row>
        </Col>
        <Col>
          <figure className="figure mt-4 float-right mr-4">
            <Image
              src={news}
              width={550}
              height={290}
              className=""
              alt="A generic square placeholder image with rounded corners in a figure."
            />
            <figcaption className="figure-caption">the news</figcaption>
          </figure>
        </Col>
      </Container>
    </Row>
  );
}
