import { Container, Navbar, Nav } from "react-bootstrap";
import style from "../../../styles/header.module.css";
import ClothingSubNav from "./clothing_sub_nav";
import NewArrivalsSubNav from "./new_arrivals_sub_nav";

export default function SubManAndWomenMenu() {
  return (
    <Navbar
      className={style.man_and_women_sub_nav_content}
      style={{ height: "50px" }}
    >
      <Container fluid={true}>
        <Nav>
          <div className={style.clothing_sub_nav}>
            <Nav.Item>
              <Nav.Link
                href="/clothing"
                style={{ fontSize: "14px" }}
                className={`px-3 color_black ${style.clothing_sub_nav_btn}`}
              >
                Clothing
              </Nav.Link>
            </Nav.Item>
            <ClothingSubNav />
          </div>

          <div className={style.new_arrivals_sub_nav}>
            <Nav.Item>
              <Nav.Link
                href="/new-arrivals"
                style={{ fontSize: "14px" }}
                className={`px-3 color_black ${style.new_arrivals_sub_nav_btn}`}
              >
                New Arrivals
              </Nav.Link>
            </Nav.Item>
            <NewArrivalsSubNav />
          </div>

          <Nav.Item>
            <Nav.Link
              href="/women"
              className={`px-3 color_black ${style.font_size}`}
            >
              Footwear
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="/women"
              className={`px-3 color_black ${style.font_size}`}
            >
              Accessories
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              href="/women"
              className={`px-3 color_black ${style.font_size}`}
            >
              Brands
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="/women"
              className={`px-3 color_black ${style.font_size}`}
            >
              Outlet
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}
