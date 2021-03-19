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
    </div>
  );
}
