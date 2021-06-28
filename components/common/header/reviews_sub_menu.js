import { Container, Navbar, Nav } from "react-bootstrap";
import style from "../../../styles/header.module.css";
export default function Reviews() {
  return (
    <div className={style.reviews_sub_menu_content}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item ">
          <u>
            <a href="#" style={{ textDecoration: "none", color: "black" }}>
              Our opinion on ...
            </a>{" "}
            <span>&#10095;</span>
          </u>
        </li>

        <li className="list-group-item">
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            Our opinions on the eco-responsible approach of brands
          </a>
        </li>
        <li className="list-group-item">
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            Fair sales, is it possible?
          </a>
        </li>
        <li className="list-group-item">
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            Why buying this on sale is not a good idea
          </a>
        </li>
      </ul>
    </div>
  );
}
