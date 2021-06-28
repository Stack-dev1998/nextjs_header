import { Container, Navbar, Nav } from "react-bootstrap";
import style from "../../../styles/header.module.css";
export default function SurveysSubMenu() {
  return (
    <div className={style.surveys_sub_menu_content}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item ">
          <u>
            <a href="#" style={{ textDecoration: "none", color: "black" }}>
              The surveys
            </a>{" "}
            <span>&#10095;</span>
          </u>
        </li>

        <li className="list-group-item">
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            Labels and social audits: what do they verify?
          </a>
        </li>
        <li className="list-group-item">
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            Fashion salaries
          </a>
        </li>
        <li className="list-group-item">
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            From seed to garment !
          </a>
        </li>
        <li className="list-group-item">
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            The fundamentals of the ILO
          </a>
        </li>
        <li className="list-group-item">
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            Understanding the challenge of transport in the fashion industry
          </a>
        </li>
      </ul>
    </div>
  );
}
