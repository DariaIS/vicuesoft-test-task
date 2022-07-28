import React from "react";

import { Header, Main, Footer } from "@components/scss";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Home: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
