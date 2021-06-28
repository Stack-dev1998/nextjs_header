import { useState } from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import style from "../../styles/header.module.css";

import SubManAndWomenNav from "./header/SubManAndWomenNav";
import SubMediaNav from "./header/SubMediaNav";

export default function SecondNavbar() {
  return (
    <Navbar className="bg-white " style={{ height: "50px" }} sticky="top">
      <Container fluid={true}>
        <Nav activeKey="/" className="d-flex   align-items-center">
          <div className={style.man_and_women_sub_nav}>
            <Nav.Item>
              <Nav.Link
                href="/women"
                className={`px-3 color_black ${
                  (style.font_size, style.man_and_women_sub_nav_btn)
                }`}
              >
                Women
              </Nav.Link>
            </Nav.Item>
            <SubManAndWomenNav />
          </div>
          <div className={style.man_and_women_sub_nav}>
            <Nav.Item>
              <Nav.Link
                href="/women"
                className={`px-3 color_black ${
                  (style.font_size, style.man_and_women_sub_nav_btn)
                }`}
              >
                Men
              </Nav.Link>
            </Nav.Item>
            <SubManAndWomenNav />
          </div>
          <div className={style.media_sub_nav}>
            <Nav.Item>
              <Nav.Link
                href="/women"
                className={`px-3 color_black ${
                  (style.font_size, style.media_sub_nav_btn)
                }`}
              >
                The media
              </Nav.Link>
            </Nav.Item>
            <SubMediaNav />
          </div>
        </Nav>

        <div id="logo" className="px-3">
          <img
            className={style.logo_img}
            alt="Logo image"
            data-src="https://d134ahucujhb7v.cloudfront.net/packs/media/images/wedressfair-logo-9af9192ef5fdc7098391ddfb0dae0b2e.svg"
            src="https://d134ahucujhb7v.cloudfront.net/packs/media/images/wedressfair-logo-9af9192ef5fdc7098391ddfb0dae0b2e.svg"
          ></img>
        </div>

        <Nav activeKey="/home" className="d-flex justify-content-end">
          <Nav.Link
            href="#home"
            className={`px-3 color_black ${style.font_size}`}
          >
            To log in
          </Nav.Link>
          <Nav.Link
            href="#features"
            className={`px-3 color_black ${style.font_size}`}
          >
            <span className={style.nav_text_with_icons}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="pl-3 pr-1 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </span>
            <span className="pl-2 ml-1"> Favorites</span>
          </Nav.Link>
          <Nav.Link
            href="#features"
            className={`px-3 color_black ${style.font_size}`}
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
  );
}
