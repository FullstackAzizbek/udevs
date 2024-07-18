import React from "react";

function Optimization() {
  return (
    <div className="Optimization">
      <div className="optimization_box container">
        <h3 className="optimization_title">Optimization Infrastructure</h3>
        <div className="optimization_bottom">
          <div className="optimization_bottom_left">
            <img src="/erp_img.png" alt="" />
          </div>
          <div className="optimization_bottom_right">
            <p className="optimization_text">
              Our experienced professionals will help you optimize your
              infrastructure
            </p>
            <div className="optimization_cards">
              <div className="optimization_card">
                <img src="/liner.png" alt="" />
                <h6 className="optimization_card_title">Architechture</h6>
              </div>
              <div className="optimization_card">
                <img src="/weather.png" alt="" />
                <h6 className="optimization_card_title">Auto testing</h6>
              </div>
              <div className="optimization_card">
                <img src="/light.png" alt="" />
                <h6 className="optimization_card_title">Stress testing</h6>
              </div>
              <div className="optimization_card">
                <img src="/diagram.png" alt="" />
                <h6 className="optimization_card_title">Load testing</h6>
              </div>
              <div className="optimization_card">
                <img src="/cheksiz.png" alt="" />
                <h6 className="optimization_card_title">Devops</h6>
              </div>
              <div className="optimization_card">
                <img src="/cloud.png" alt="" />
                <h6 className="optimization_card_title">Cloud</h6>
              </div>
              <div className="optimization_card">
                <img src="/try.png" alt="" />
                <h6 className="optimization_card_title">CI / CD</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Optimization;
