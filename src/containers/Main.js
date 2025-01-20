import React from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Training from "./training/Training";
import Footer from "../components/footer/Footer";
import ScrollToTopButton from "./topbutton/Top";
import Contact from "../containers/contact/Contact";

import "./Main.scss";

const Main = () => {
  return (
    <>
      <Header />
      <Greeting />
      <Training />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Main;
