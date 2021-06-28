import { Link } from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Navbar, Nav } from "react-bootstrap";

import style from "../../styles/header.module.css";

export default function NavbarMenu() {
  const router = useRouter();
  return (
    <Navbar
      style={{ fontSize: "12px", height: "34px", backgroundColor: "#eee" }}
    >
      <Container fluid={true} style={{ height: "34px" }}>
        <div style={{ width: "33.33%" }}></div>
        <Nav
          style={{ width: "33.33%" }}
          activeKey="/home"
          className="d-flex justify-content-center"
        >
          <Nav.Link className="color_black px-3" href="#home">
            Our charter
          </Nav.Link>
          <Nav.Link className="color_black px-3" href="#features">
            The project
          </Nav.Link>
          <Nav.Link className="color_black px-3" href="#pricing">
            Help & Contact
          </Nav.Link>
        </Nav>

        <Nav
          style={{ width: "33.33%" }}
          activeKey="/home"
          className="d-flex justify-content-end align-items-center"
        >
          <Nav.Link
            className={`px-3  ${
              router.pathname === "/" ? style.link_with_icon : null
            }`}
            style={{ color: "black" }}
            as={Link}
            href="/"
          >
            The shop
          </Nav.Link>
          <Nav.Link
            className={`px-3 ${
              router.pathname === "/media" ? style.link_with_icon : null
            }`}
            style={{ color: "black" }}
            as={Link}
            href="/"
          >
            The media
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
