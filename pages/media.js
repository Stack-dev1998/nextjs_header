import Head from "next/head";

import Header from "../components/common/bigScreenHeader";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div style={{ height: "500px", background: "black" }}>
        <h1>Media page goes here...</h1>
      </div>
    </div>
  );
}
