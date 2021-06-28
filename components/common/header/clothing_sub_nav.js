import { Container, Row, Col } from "react-bootstrap";
import style from "../../../styles/header.module.css";
import Image from "next/image";
import dresses from "../../../public/dresses.jpg";
import sneakers from "../../../public/sneakers.png";

export default function ClothingSubNav() {
  return (
    <Row className={style.clothing_sub_nav_content}>
      <Container fluid={true}>
        <Col>
          <Row className="">
            <Col>
              <h5 className="mb-4">Categories</h5>

              <Row>
                <Col>
                  <strong>See everything</strong>
                  <p className="mt-2">Dresses</p>
                  <p>Tops & T-shirts</p>
                  <p>Blouses & Shirts</p>
                  <p>Skirts</p>
                  <p>Shorts</p>
                </Col>
                <Col>
                  <strong>Gift cards</strong>
                  <p className="mt-2">Jeans</p>
                  <p>Pants</p>
                  <p>Combinations</p>
                  <p>Swimwear</p>
                  <p>Underwear</p>
                </Col>
              </Row>
            </Col>
            <Col>
              <h5>Criteria</h5>
              <p className="mt-3 pt-1">Organic</p>
              <p>Recycled</p>
              <p>Natural</p>
              <p>Made in France</p>
              <p>Made in europe</p>
              <p>Vegan</p>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col>
              <figure className="figure mt-4">
                <Image
                  src={dresses}
                  width={280}
                  height={290}
                  className=""
                  alt="A generic square placeholder image with rounded corners in a figure."
                />
                <figcaption className="figure-caption">Dresses</figcaption>
              </figure>
            </Col>

            <Col>
              <figure className="figure mt-4">
                <Image
                  src={sneakers}
                  width={280}
                  height={290}
                  className=""
                  alt="A generic square placeholder image with rounded corners in a figure."
                />
                <figcaption className="figure-caption">Sneakers</figcaption>
              </figure>
            </Col>
          </Row>
        </Col>
      </Container>
    </Row>
  );
}
