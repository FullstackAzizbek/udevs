import React from "react";

function Development() {
  return (
    <div className="Development">
      <div className="development_box container">
        <h3 className="development_title">
          Development of mobile applications
        </h3>
        <img src="/development_img.png" alt="" className="development_extra" />
        <div className="development_bottom">
          <div className="development_bottom_left">
            <p className="development_text">
              In collaboration with startups, we have learned how to create a
              creative and functional user interface for mobile applications.
            </p>
            <div className="development_cards">
              <div className="development_card">
                <img src="/apple.png" alt="" />
                <h6 className="development_card_title">IOS</h6>
              </div>
              <div className="development_card">
                <img src="/android.png" alt="" />
                <h6 className="development_card_title">Android</h6>
              </div>
              <div className="development_card">
                <img src="/system_phone.png" alt="" />
                <h6 className="development_card_title">Crossplatform</h6>
              </div>
            </div>
            <h4 className="development_sub_title">Technologies</h4>
            <div className="development_lang_cards">
              <div className="development_lang_card">
                <img src="/swift.png" alt="" />
                <h6 className="development_card_title">Swift</h6>
              </div>
              <div className="development_lang_card">
                <img src="/kotlin.png" alt="" />
                <h6 className="development_card_title">Kotlin</h6>
              </div>
              <div className="development_lang_card">
                <img src="/flutter.png" alt="" />
                <h6 className="development_card_title">Flutter</h6>
              </div>
            </div>
          </div>
          <div className="development_bottom_right">
            <img src="/development_img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Development;
