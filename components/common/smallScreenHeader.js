import { useRouter } from "next/router";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Topbar from "./topbar";
export default function SmallScreenHeader() {
  return (
    <div>
      <Topbar />
      <Navbar bg="white" variant="light" className="py-0">
        <Container style={{ maxWidth: "95%" }}>
          <Nav>
            <Nav.Link href="#pricing">
              <FontAwesomeIcon
                style={{
                  color: "#252525",
                  fontSize: "25px",
                  letterSpacing: "20px",
                }}
                icon={faBars}
              />
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
            <Nav.Link href="#home" style={{ fontWeight: "500" }} className={""}>
              <img
                alt="account icon"
                aria-hidden="true"
                className="mb-1 "
                style={{ width: "16px", height: "16px", marginRight: "-20px" }}
                data-src="https://d134ahucujhb7v.cloudfront.net/packs/media/images/icons/account-ad0870bcd9e3d16a478d888dd8964f68.svg"
                src="https://d134ahucujhb7v.cloudfront.net/packs/media/images/icons/account-ad0870bcd9e3d16a478d888dd8964f68.svg"
              ></img>
            </Nav.Link>
            <Nav.Link
              href="#features"
              style={{ fontWeight: "500" }}
              className={""}
            >
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
            </Nav.Link>
            <Nav.Link
              href="#features"
              style={{ fontWeight: "500" }}
              className="pl-4 text_light_black"
            >
              <img
                aria-label="icon"
                aria-hidden="true"
                className="mb-1 "
                style={{ width: "16px", height: "16px" }}
                data-src="https://d134ahucujhb7v.cloudfront.net/packs/media/images/icons/basket-e62023f179854c2a5c85e6663158d9a9.svg"
                src="https://d134ahucujhb7v.cloudfront.net/packs/media/images/icons/basket-e62023f179854c2a5c85e6663158d9a9.svg"
              ></img>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
