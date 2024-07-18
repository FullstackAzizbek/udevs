import React from "react";

function Direction() {
  return (
    <div className="Direction container">
      <div className="direction_top">
        <h3 className="direction_title">Our services</h3>
      </div>
      <div className="direction_bottom">
        <div className="direction_card">
          <img src="/users.png" alt="" />
          <h6 className="direction_sub_title">Team</h6>
        </div>
        <div className="direction_card">
          <img src="/phone.png" alt="" />
          <h6 className="direction_sub_title">
            Development of mobile applications
          </h6>
        </div>
        <div className="direction_card">
          <img src="/erp.png" alt="" />
          <h6 className="direction_sub_title">
            Development and implementation ERP systems
          </h6>
        </div>
        <div className="direction_card">
          <img src="/clone.png" alt="" />
          <h6 className="direction_sub_title">
            User interface, User experience design
          </h6>
        </div>
        <div className="direction_card">
          <img src="/settings.png" alt="" />
          <h6 className="direction_sub_title">
            Optimization IT consulting infrastructure
          </h6>
        </div>
        <div className="direction_card">
          <img src="/monitor.png" alt="" />
          <h6 className="direction_sub_title">IT consulting</h6>
        </div>
      </div>
    </div>
  );
}

export default Direction;
