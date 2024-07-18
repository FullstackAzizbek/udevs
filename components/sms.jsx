import React from "react";

function Sms() {
  return (
    <div className="Sms">
      <div className="sms_box container">
        <div className="sms_left">
          <h3 className="deliver_title">Smsuz.uz</h3>
          <div className="deliver_logo_box">
            <img src="/envelope.png" alt="" />
            Notification
          </div>
          <img className="sms_extra" src="/sms.png" alt="" />
          <p className="deliver_text">
            Smsuz.uz - It is a platform for bulk SMS messaging.
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
          <img src="/sms.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Sms;
