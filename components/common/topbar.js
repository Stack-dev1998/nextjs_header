import style from "../../styles/topbar.module.css";

export default function Topbar() {
  return (
    <div className={style.topbar}>
      <p className="p-2 text-center small ">
        <font>
          <font>📦 Free returns. </font>
          <font>Free delivery from 120 € (metropolitan France)</font>
        </font>
      </p>
    </div>
  );
}
