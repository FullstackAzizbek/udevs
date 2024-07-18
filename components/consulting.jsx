import React from "react";

function Consulting() {
  return (
    <div className="Consulting">
      <div className="consulting_box container">
        <h3 className="consulting_title">IT consulting</h3>
        <img src="/consulting_img.png" alt="" className="consulting_extra" />
        <div className="consulting_bottom">
          <div className="consulting_left">
            <p className="consulting_text">
              We can improve the qualifications of your employees thereby
              increasing the efficiency of your company
            </p>
            <div className="consulting_cards">
              <div className="consulting_card">
                <img src="/frontend.png" alt="" />
                <h6 className="consulting_card_title">Frontend</h6>
              </div>
              <div className="consulting_card">
                <img src="/backend.png" alt="" />
                <h6 className="consulting_card_title">Backend</h6>
              </div>
              <div className="consulting_card">
                <img src="/liner.png" alt="" />
                <h6 className="consulting_card_title">Architechture</h6>
              </div>
              <div className="consulting_card">
                <img src="/cheksiz.png" alt="" />
                <h6 className="consulting_card_title">DevOps</h6>
              </div>
              <div className="consulting_card">
                <img src="clone2.png" alt="" />
                <h6 className="consulting_card_title">UX/UI</h6>
              </div>
              <div className="consulting_card">
                <img src="pencil.png" alt="" />
                <h6 className="consulting_card_title">QA</h6>
              </div>
            </div>
          </div>
          <div className="consulting_right">
            <img src="/consulting_img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consulting;
