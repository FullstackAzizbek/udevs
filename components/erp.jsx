import React from "react";

function Erp() {
  return (
    <div className="Erp">
      <div className="erp_box container">
        <h3 className="erp_title">ERP systems</h3>
        <div className="erp_bottom">
          <div className="erp_bottom_left">
            <img src="/erp_img.png" alt="" />
          </div>
          <div className="erp_bottom_right">
            <p className="erp_text">
              IT Systems of any level of complexity at a convenient time for you
            </p>
            <div className="erp_cards">
              <div className="erp_card">
                <img src="/camera.png" alt="" />
                <h6 className="erp_card_title">ERP</h6>
              </div>
              <div className="erp_card">
                <img src="/edu.png" alt="" />
                <h6 className="erp_card_title">eLearning</h6>
              </div>
              <div className="erp_card">
                <img src="/boat.png" alt="" />
                <h6 className="erp_card_title">E-Commerce</h6>
              </div>
              <div className="erp_card">
                <img src="/bill.png" alt="" />
                <h6 className="erp_card_title">POS</h6>
              </div>
              <div className="erp_card">
                <img src="/envelope.png" alt="" />
                <h6 className="erp_card_title">Sms / Email</h6>
              </div>
              <div className="erp_card">
                <img src="/warehouse.png" alt="" />
                <h6 className="erp_card_title">Warehouse</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Erp;
