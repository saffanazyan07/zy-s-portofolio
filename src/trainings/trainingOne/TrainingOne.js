import React from "react";
import "./TrainingOne.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ScrollToTopButton from "../../containers/topbutton/Top";

export default function TrainingOne() {
    return (
      <>
        <Header />
<>
<div className="timeline">
  <div className="containerTimeline left">
    <div className="contentTimeline">
      <h2>2017</h2>
      <p>Lorem ipsum..</p>
    </div>
  </div>
  <div className="containerTimeline right">
    <div className="contentTimeline">
      <h2>2016</h2>
      <p>Lorem ipsum..</p>
    </div>
  </div>
  <div className="containerTimeline left">
    <div className="contentTimeline">
      <h2>2017</h2>
      <p>Lorem ipsum..</p>
    </div>
  </div>
  <div className="containerTimeline left">
    <div className="contentTimeline">
      <h2>2017</h2>
      <p>Lorem ipsum..</p>
    </div>
  </div>
  <div className="containerTimeline left">
    <div className="contentTimeline">
      <h2>2017</h2>
      <p>Lorem ipsum..</p>
    </div>
  </div>
</div>
</>

        <Footer />
        <ScrollToTopButton />
      </>
    );
}

