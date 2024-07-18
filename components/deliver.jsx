import React from "react";

function Deliver() {
  return (
    <div className="Deliver">
      <div className="deliver_box container">
        <div className="deliver_left">
          <img src="/deliver_img.png" alt="" />
        </div>
        <div className="deliver_right">
          <h3 className="deliver_title">Delever</h3>
          <div className="deliver_logo_box">
            <img src="/car.png" alt="" />
            Delivery
          </div>
          <img src="/deliver_img.png" alt="" className="deliver_extra" />
          <p className="deliver_text">
            Delever - Delivery service automation targeted at both consumers and
            restaurants.
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

export default Deliver;
