import Typewriter from "typewriter-effect";

function Main() {
  return (
    <div className="Main">
      <div className="main_box container">
        <div className="main_left">
          <img src="/main_logo.png" alt="" />
          <h3 className="main_title">IT-Outsourcing Company</h3>
          <h5 className="main_sub_title">
            <Typewriter
              options={{
                strings: ["Development and implementation ERP systems"],
                autoStart: true,
                loop: true,
              }}
            />
          </h5>
          <button>Contact</button>
        </div>
        <div className="main_right">
          <img src="/main.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Main;
