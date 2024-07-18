import React from "react";
import { useContext } from "react";
import DataContext from "@/context/context";

function Tools() {
  const { tools_elements, tools, colorchanger } = useContext(DataContext);
  return (
    <div className="Tools">
      <div className="tools_box container">
        <h3 className="tools_title">Tools</h3>
        <div className="filter_box">
          <div className="input_box">
            <input
              htmlFor="frontend"
              onClick={() => colorchanger("frontend")}
              type="radio"
              name="group"
              id="frontend"
            />
            <label htmlFor="frontend" onClick={() => colorchanger("frontend")}>
              Frontend
            </label>
          </div>
          <div className="input_box">
            <input
              onClick={() => colorchanger("backend")}
              type="radio"
              name="group"
              id="backend"
            />
            <label htmlFor="backend" onClick={() => colorchanger("backend")}>
              Backend
            </label>
          </div>
          <div className="input_box">
            <input
              onClick={() => colorchanger("devops")}
              type="radio"
              name="group"
              id="devops"
            />
            <label htmlFor="devops" onClick={() => colorchanger("devops")}>
              Devops
            </label>
          </div>
          <div className="input_box">
            <input
              onClick={() => colorchanger("testing")}
              type="radio"
              name="group"
              id="testing"
            />
            <label htmlFor="testing" onClick={() => colorchanger("testing")}>
              Testing
            </label>
          </div>
          <div className="input_box">
            <input
              onClick={() => colorchanger("ui")}
              type="radio"
              name="group"
              id="ui"
            />
            <label htmlFor="ui" onClick={() => colorchanger("ui")}>
              UX/UI
            </label>
          </div>
          <div className="input_box">
            <input
              onClick={() => colorchanger("infra")}
              type="radio"
              name="group"
              id="infrastructure"
            />
            <label
              htmlFor="infrastructure"
              onClick={() => colorchanger("infra")}
            >
              Infrastructure
            </label>
          </div>
          <div className="input_box">
            <input
              onClick={() => colorchanger("mobile")}
              type="radio"
              name="group"
              id="mobile"
            />
            <label htmlFor="mobile" onClick={() => colorchanger("mobile")}>
              Mobile
            </label>
          </div>
        </div>
        <div className="tools_cards">
          {tools_elements.map((item) => (
            <div
              style={
                tools !== "" && tools !== item.type
                  ? { background: "transparent", opacity: "0.5" }
                  : {}
              }
              key={item.id}
              className={
                tools == item.type ? "tools_card active" : "tools_card"
              }
            >
              <img src={item.img} alt="" />
              <h6 className="tools_card_title">{item.title}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tools;
