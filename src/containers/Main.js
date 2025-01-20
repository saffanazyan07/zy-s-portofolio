import React from "react";
import Greeting from "./greeting/Greeting";
import Training from "./training/Training";
import Contact from "../containers/contact/Contact";

import "./Main.scss";

const Main = () => {
  return (
    <>
      <Greeting />
      <Training />
      <Contact />
    </>
  );
};

export default Main;
