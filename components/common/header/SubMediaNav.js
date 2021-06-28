import { Container, Navbar, Nav } from "react-bootstrap";
import style from "../../../styles/header.module.css";
import ToBeginSubMenu from "./to_begin_sub_menu";
import ProblemsSubMenu from "./problems_sub_menu";
import SheetsSubMenu from "./sheets_sub_menu";
import ReviewsSubMenu from "./reviews_sub_menu";
import SurveysSubMenu from "./surveys_sub_menu";
export default function SubMediaNav() {
  return (
    <Navbar className={style.media_sub_nav_content} style={{ height: "50px" }}>
      <Container fluid={true}>
        <Nav className=" ">
          <div className={style.to_begin_sub_menu}>
            <Nav.Item>
              <Nav.Link
                href="/clothing"
                style={{ fontSize: "14px" }}
                className={`px-3 color_black ${style.to_begin_sub_menu_btn}`}
              >
                To begin
              </Nav.Link>
            </Nav.Item>
            <ToBeginSubMenu />
          </div>

          <div className={style.problems_sub_menu}>
            <Nav.Item>
              <Nav.Link
                href="/clothing"
                style={{ fontSize: "14px" }}
                className={`px-3 color_black ${style.problems_sub_menu_btn}`}
              >
                What is the problem?
              </Nav.Link>
            </Nav.Item>
            <ProblemsSubMenu />
          </div>

          <div className={style.sheets_sub_menu}>
            <Nav.Item>
              <Nav.Link
                href="/clothing"
                style={{ fontSize: "14px" }}
                className={`px-3 color_black ${style.sheets_sub_menu_btn}`}
              >
                Practical sheets
              </Nav.Link>
            </Nav.Item>
            <SheetsSubMenu />
          </div>

          <div className={style.reviews_sub_menu}>
            <Nav.Item>
              <Nav.Link
                href="/clothing"
                style={{ fontSize: "14px" }}
                className={`px-3 color_black ${style.reviews_sub_menu_btn}`}
              >
                Our reviews
              </Nav.Link>
            </Nav.Item>
            <ReviewsSubMenu />
          </div>

          <div className={style.surveys_sub_menu}>
            <Nav.Item>
              <Nav.Link
                href="/clothing"
                style={{ fontSize: "14px" }}
                className={`px-3 color_black ${style.surveys_sub_menu_btn}`}
              >
                The serveys
              </Nav.Link>
            </Nav.Item>
            <SurveysSubMenu />
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}
