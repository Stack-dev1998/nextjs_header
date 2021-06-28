import { Container, Navbar, Nav } from "react-bootstrap";
import style from "../../../styles/header.module.css";
export default function ToBeginSubMenu(props) {
  return (
    <div className={style.to_begin_sub_menu_content}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item ">
          <u>
            <a href="#" style={{ textDecoration: "none", color: "black" }}>
              To start well{" "}
            </a>
            <span>&#10095;</span>
          </u>
        </li>

        <li className="list-group-item">
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            The BA-BA of Ethical Fashion
          </a>
        </li>
        <li className="list-group-item">
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            What is an ethical and eco-responsible fashion brand?
          </a>
        </li>
        <li className="list-group-item">
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            3 steps to recognize an eco-responsible garment
          </a>
        </li>
        <li className="list-group-item">
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            Eco-responsible materials
          </a>
        </li>
        <li className="list-group-item">
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            What is the point of choosing organic clothing?
          </a>
        </li>
      </ul>
    </div>
  );
}
