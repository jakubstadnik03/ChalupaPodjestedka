import React from "react";
import Footer from "./components/Footer";
import NavbarComponent from "./components/Navbar";
import Reference from "./components/Reference";

const References = () => {
  return (
    <>
      <NavbarComponent background={true} />
      <Reference />
      <Footer />
    </>
  );
};

export default References;
