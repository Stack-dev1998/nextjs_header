import { useState } from "react";
import { useRouter } from "next/router";
import { Link } from "next/link";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import style from "../../styles/header.module.css";
import Topbar from "./topbar"; //top bar imported

//big screen header
export default function BigScreenHeader() {
  const [menAndWomenMenu, setMenAndWomenMenu] = useState(false);
  const [mediaMenu, setMediaMenu] = useState(false);
  const router = useRouter();
  return (
    <div>
      <Topbar />
      <Navbar bg="light" variant="light" className="py-0">
        <Container>
          <Nav className={style.second_nav}>
            <Nav.Link href="#home" className="pl-4 ml-4 small text-dark">
              Our charter
            </Nav.Link>
            <Nav.Link href="#features" className="pl-4 ml-1 small  text-dark">
              The project
            </Nav.Link>
            <Nav.Link href="#pricing" className="pl-4 ml-1 small  text-dark">
              Help & Contact
            </Nav.Link>
          </Nav>

          <br></br>

          <Nav className="float-right">
            <Nav.Link
              as={Link}
              href="/media"
              className="pl-4 small text-dark  "
              style={router.pathname === "/" ? { fontWeight: "bold" } : null}
            >
              <span style={{ display: "block", marginBottom: "-5px" }}>
                The shop
              </span>
              {router.pathname === "/" ? (
                <span
                  style={{
                    display: "block",
                    marginBottom: "-18px",
                    textAlign: "center",
                  }}
                >
                  <FontAwesomeIcon
                    style={{ color: "white", fontSize: "30px" }}
                    icon={faCaretUp}
                  />
                </span>
              ) : null}
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/media"
              className="pl-4 small text-dark"
              style={
                router.pathname === "/media" ? { fontWeight: "bold" } : null
              }
            >
              <span style={{ display: "block", marginBottom: "-5px" }}>
                The media
              </span>
              {router.pathname === "/media" ? (
                <span
                  style={{
                    display: "block",
                    marginBottom: "-18px",
                    textAlign: "center",
                  }}
                >
                  <FontAwesomeIcon
                    style={{ color: "white", fontSize: "30px" }}
                    icon={faCaretUp}
                  />
                </span>
              ) : null}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Navbar bg="white" variant="light">
        <Container>
          <Nav>
            <Nav.Link
              href="#home"
              style={{ fontWeight: "500" }}
              className={
                ("py-0" + style.text_light_black, style.menAndWomenMenu)
              }
              onMouseOver={() => {
                setMenAndWomenMenu(true);
              }}
              onMouseOut={() => {
                setMenAndWomenMenu(false);
              }}
            >
              Women
            </Nav.Link>
            <Nav.Link
              href="#features"
              style={{ marginLeft: "32px", fontWeight: "500" }}
              className={
                ("pl-4 ml-4" + style.text_light_black, style.menAndWomenMenu)
              }
              onMouseOver={() => {
                setMenAndWomenMenu(true);
              }}
              onMouseOut={() => {
                setMenAndWomenMenu(false);
              }}
            >
              Man
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              style={{ marginLeft: "32px", fontWeight: "500" }}
              className={
                ("pl-4" + style.text_light_black, style.menAndWomenMenu)
              }
              onMouseOver={() => {
                setMediaMenu(true);
              }}
              onMouseOut={() => {
                setMediaMenu(false);
              }}
            >
              The media
            </Nav.Link>
          </Nav>
          <br></br>
          <Nav className="m-auto">
            <img
              alt="Logo image"
              class="mx-auto lazyloaded"
              data-src="https://d134ahucujhb7v.cloudfront.net/packs/media/images/wedressfair-logo-9af9192ef5fdc7098391ddfb0dae0b2e.svg"
              src="https://d134ahucujhb7v.cloudfront.net/packs/media/images/wedressfair-logo-9af9192ef5fdc7098391ddfb0dae0b2e.svg"
            ></img>
          </Nav>
          <Nav className="float-right">
            <Nav.Link
              href="#home"
              style={{ fontWeight: "500" }}
              className={"pl-4" + style.text_light_black}
            >
              To log in
            </Nav.Link>
            <Nav.Link
              href="#features"
              style={{ fontWeight: "500" }}
              className={"pl-4 " + style.text_light_black}
            >
              <span className={style.nav_text_with_icons}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className=" pl-3 pr-1 py-0 small"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </span>
              <span className="pl-2 ml-1"> Favorites</span>
            </Nav.Link>
            <Nav.Link
              href="#features"
              style={{ fontWeight: "500" }}
              className="pl-4 text_light_black"
            >
              <span sclassName={style.nav_text_with_icons}>
                <img
                  aria-label="icon"
                  aria-hidden="true"
                  className="mb-1 "
                  style={{ width: "16px", height: "16px" }}
                  data-src="https://d134ahucujhb7v.cloudfront.net/packs/media/images/icons/basket-e62023f179854c2a5c85e6663158d9a9.svg"
                  src="https://d134ahucujhb7v.cloudfront.net/packs/media/images/icons/basket-e62023f179854c2a5c85e6663158d9a9.svg"
                ></img>
              </span>
              <span className=""> Basket</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {menAndWomenMenu ? (
        <Navbar
          bg="light"
          variant="light"
          style={{
            marginTop: "-10px",
            position: "absolute",
            width: "100%",
            zIndex: "1",
          }}
          className={"py-0 " + style.sub_menu}
        >
          <Container>
            <Nav>
              <Nav.Link href="#pricing">Clothing</Nav.Link>
              <Nav.Link href="#pricing" className="ml-3">
                New Arrivals
              </Nav.Link>
              <Nav.Link href="#pricing" className="ml-3">
                Footwear
              </Nav.Link>
              <Nav.Link href="#pricing" className="ml-3">
                Accessories
              </Nav.Link>
              <Nav.Link href="#pricing" className="ml-3">
                Brands
              </Nav.Link>
              <Nav.Link href="#pricing" className="ml-3">
                Outlet
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      ) : null}
      {mediaMenu ? (
        <Navbar
          bg="light"
          variant="light"
          style={{
            marginTop: "-10px",
            position: "absolute",
            width: "100%",
            zIndex: "1",
          }}
          className={"py-0 " + style.sub_menu}
        >
          <Container>
            <Nav>
              <Nav.Link href="#pricing">Clothing</Nav.Link>
              <Nav.Link href="#pricing" className="ml-3">
                To begin
              </Nav.Link>
              <Nav.Link href="#pricing" className="ml-3">
                What is the problem?
              </Nav.Link>
              <Nav.Link href="#pricing" className="ml-3">
                Practical sheets
              </Nav.Link>
              <Nav.Link href="#pricing" className="ml-3">
                Our reviews
              </Nav.Link>
              <Nav.Link href="#pricing" className="ml-3">
                The suveys
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      ) : null}
    </div>
  );
}
