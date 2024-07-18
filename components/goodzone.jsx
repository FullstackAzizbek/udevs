import React from "react";

function Goodzone() {
  return (
    <div className="Goodzone">
      <div className="deliver_box container">
        <div className="deliver_left">
          <img src="/goodzone_app.png" alt="" />
        </div>
        <div className="deliver_right">
          <img src="/goodzone_logo.png" alt="" />
          <div className="deliver_logo_box">
            <img src="/goodzone_img.png" alt="" />
            E-Commerce
          </div>
          <img src="/goodzone_app.png" alt="" className="goodzone_extra" />
          <p className="deliver_text">
            Goodzone - Internet shop of household appliances in Uzbekistan.
          </p>
          <h5 className="deliver_sub_title">What we did?</h5>
          <div className="deliver_cards">
            <div className="deliver_card">
              <img src="/globus.png" alt="" />
              <h6 className="deliver_card_title">Website</h6>
            </div>
            <div className="deliver_card">
              <img src="/adminpanel.png" alt="" />
              <h6 className="deliver_card_title">Admin Panel</h6>
            </div>
            <div className="deliver_card">
              <img src="/cross.png" alt="" />
              <h6 className="deliver_card_title">Crossplatform</h6>
            </div>
            <div className="deliver_card">
              <img src="/monitor.png" alt="" />
              <h6 className="deliver_card_title">Web design</h6>
            </div>
            <div className="deliver_card">
              <img src="/phone.png" alt="" />
              <h6 className="deliver_card_title">Mobile design</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goodzone;
