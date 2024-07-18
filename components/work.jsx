import React from "react";

function Work() {
  return (
    <div className="Work">
      <div className="work_box">
        <div className="work_top container">
          <h3 className="work_title">How we work!</h3>
        </div>
        <div className="work_bottom container_2">
          <div className="work_card">
            <div className="work_card_top">
              <img src="/work_img_1.png" alt="" />
            </div>
            <div className="work_card_bottom">
              <h6 className="work_card_title">Contact</h6>
              <p className="work_card_text">
                Send us your project request or project idea.
              </p>
            </div>
          </div>
          <div className="work_card">
            <div className="work_card_top">
              <img src="/work_img_2.png" alt="" />
            </div>
            <div className="work_card_bottom">
              <h6 className="work_card_title">Analysis</h6>
              <p className="work_card_text">
                We will contact you to clarify your project requirements.
              </p>
            </div>
          </div>
          <div className="work_card">
            <div className="work_card_top">
              <img src="/work_img_3.png" alt="" />
            </div>
            <div className="work_card_bottom">
              <h6 className="work_card_title">Offer</h6>
              <p className="work_card_text">
                We will provide you with our free, non-binding application.
              </p>
            </div>
          </div>
          <div className="work_card">
            <div className="work_card_top">
              <img src="/work_img_4.png" alt="" />
            </div>
            <div className="work_card_bottom">
              <h6 className="work_card_title">Team</h6>
              <p className="work_card_text">
                We provide a team for your requirements.
              </p>
            </div>
          </div>
          <div className="work_card">
            <div className="work_card_top">
              <img src="/work_img_5.png" alt="" />
            </div>
            <div className="work_card_bottom">
              <h6 className="work_card_title">Start</h6>
              <p className="work_card_text">
                You will get to know the team and we'll get started.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
