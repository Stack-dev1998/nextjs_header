import Head from "next/head";
import { useState, useEffect } from "react";
import BigScreenHeader from "../components/common/bigScreenHeader";
import SmallScreenHeader from "../components/common/smallScreenHeader";
export default function Home() {
  const useWindowDimensions = () => {
    const hasWindow = typeof window !== "undefined";

    function getWindowDimensions() {
      const width = hasWindow ? window.innerWidth : null;
      const height = hasWindow ? window.innerHeight : null;
      return {
        width,
        height,
      };
    }

    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      if (hasWindow) {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }
    }, [hasWindow]);

    return windowDimensions;
  };

  const { height, width } = useWindowDimensions();
  const breakpoint = 1022;
  return (
    <div>
      {width <= breakpoint ? <SmallScreenHeader /> : <BigScreenHeader />}
      <div style={{ height: "500px", background: "black" }}>
        <h1>Home page goes here...</h1>
      </div>
    </div>
  );
}
