import { Container, Navbar, Nav } from "react-bootstrap";
import style from "../../../styles/header.module.css";
export default function Problems() {
  return (
    <div className={style.problems_sub_menu_content}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item ">
          <u>
            <a href="#" style={{ textDecoration: "none", color: "black" }}>
              What is the problem ?
            </a>{" "}
            <span>&#10095;</span>
          </u>
        </li>

        <li className="list-group-item">
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            Why does fashion pollute?{" "}
          </a>
        </li>
        <li className="list-group-item">
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            What's the problem with fashion wages?
          </a>
        </li>
        <li className="list-group-item">
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            What is the problem with dyes?
          </a>
        </li>
        <li className="list-group-item">
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            What is the problem with Greenwashing?
          </a>
        </li>
        <li className="list-group-item">
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            What's wrong with faded jeans?
          </a>
        </li>
      </ul>
    </div>
  );
}
