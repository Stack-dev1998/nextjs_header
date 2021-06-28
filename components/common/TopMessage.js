import style from "../../styles/topbar.module.css";
import { Container } from "react-bootstrap";
export default function Topbar(props) {
  return (
    <ul className={style.nav}>
      <Container fluid={true}>
        <li>📦 Free returns. Free delivery from 120 € (metropolitan France)</li>
        <li>
          <a href="#">
            {" "}
            <span onClick={props.hideMenu}>&#10006;</span>{" "}
          </a>
        </li>
      </Container>
    </ul>
  );
}
