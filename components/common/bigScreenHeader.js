// imported components
import { useState } from "react";
import TopMessage from "./TopMessage";
import FirstNavbar from "./FirstNavbar";
import SecondNavbar from "./SecondNavbar";
//big screen header
export default function BigScreenHeader() {
  const [isOpen, setIsOpen] = useState(true);
  const openMenu = () => {};
  return (
    <div id="main_header">
      {isOpen ? (
        <TopMessage
          hideMenu={() => {
            setIsOpen(!isOpen);
          }}
        />
      ) : null}

      <FirstNavbar />
      <SecondNavbar />
    </div>
  );
}
