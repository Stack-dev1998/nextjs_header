import BigScreenHeader from "../components/common/bigScreenHeader";
import SmallScreenHeader from "../components/common/smallScreenHeader";
export default function Home() {
  return (
    <div>
      <div className="big_screen_header">
        <BigScreenHeader />
      </div>
      <div className="small_screen_header">
        <SmallScreenHeader />
      </div>
      <div style={{ height: "500px", background: "black" }}>
        <h1>main section goes here...</h1>
      </div>
    </div>
  );
}
