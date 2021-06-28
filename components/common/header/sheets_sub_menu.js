import { Container, Navbar, Nav } from "react-bootstrap";
import style from "../../../styles/header.module.css";
export default function Sheets() {
  return (
    <div className={style.sheets_sub_menu_content}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item ">
          <u>
            <a href="#" style={{ textDecoration: "none", color: "black" }}>
              Practical sheets
            </a>{" "}
            <span>&#10095;</span>
          </u>
        </li>

        <li className="list-group-item">
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            50 textile materials decrypted
          </a>
        </li>
        <li className="list-group-item">
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            9 labels for ethical fashion
          </a>
        </li>
        <li className="list-group-item">
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            4 tools for responsible consumption!
          </a>
        </li>
        <li className="list-group-item">
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            The ethical fashion glossary
          </a>
        </li>
        <li className="list-group-item">
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            The anti green-washing guide
          </a>
        </li>
        <li className="list-group-item">
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            Our ethical fashion brands
          </a>
        </li>
      </ul>
    </div>
  );
}
