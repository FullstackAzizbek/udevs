import React from "react";

function Uiux() {
  return (
    <div className="Uiux">
      <div className="uiux_box container">
        <h3 className="uiux_title">UI / UX design</h3>
        <img src="/uiux.png" alt="" className="uiux_extra" />
        <div className="uiux_bottom">
          <div className="uiux_left">
            <p className="uiux_text">
              Our company takes a human-centered approach to design
            </p>
            <div className="uiux_cards">
              <div className="uiux_card">
                <img src="/ux.png" alt="" />
                <h6 className="uiux_card_title">UX</h6>
              </div>
              <div className="uiux_card">
                <img src="/paint.png" alt="" />
                <h6 className="uiux_card_title">UI</h6>
              </div>
              <div className="uiux_card">
                <img src="/proto.png" alt="" />
                <h6 className="uiux_card_title">Prototyping</h6>
              </div>
              <div className="uiux_card">
                <img src="/phone.png" alt="" />
                <h6 className="uiux_card_title">Mobile Design</h6>
              </div>
              <div className="uiux_card">
                <img src="/monitor.png" alt="" />
                <h6 className="uiux_card_title">Web Design</h6>
              </div>
              <div className="uiux_card">
                <img src="/planet.png" alt="" />
                <h6 className="uiux_card_title">Atomic Design</h6>
              </div>
            </div>
            <h5 className="uiux_sub_title">Technologies</h5>
            <div className="uiux_lang_cards">
              <div className="uiux_lang_card">
                <img src="/figma.png" alt="" />
                <h6 className="uiux_lang_card_title">Figma</h6>
              </div>
              <div className="uiux_lang_card">
                <img src="/sketch.png" alt="" />
                <h6 className="uiux_lang_card_title">Sketch</h6>
              </div>
              <div className="uiux_lang_card">
                <img src="/lottie.png" alt="" />
                <h6 className="uiux_lang_card_title">Lottie</h6>
              </div>
              <div className="uiux_lang_card">
                <img src="/photoshop.png" alt="" />
                <h6 className="uiux_lang_card_title">Illustrator</h6>
              </div>
            </div>
          </div>
          <div className="uiux_right">
            <img src="/uiux.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Uiux;
