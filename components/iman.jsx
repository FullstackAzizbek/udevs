import React from "react";

function Iman() {
  return (
    <div className="Iman">
      <div className="sms_box container">
        <div className="sms_left">
          <img src="/iman_logo.png" alt="" />
          <div className="deliver_logo_box">
            <img src="/iman_logo_2.png" alt="" />
            Finance
          </div>
          <img src="/imanapp.png" alt="" className="iman_extra" />
          <p className="deliver_text">
            Iman - It is a mutual financing platform based on the principles of
            Islamic Finance. Buyers, sellers and investors meet here.
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
          </div>
        </div>
        <div className="sms_right">
          <img src="/imanapp.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Iman;
