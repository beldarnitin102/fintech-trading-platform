import React from "react";
import smallcaseLogo from "../images/smallcaseLogo.png";
import streakLogo from "../images/streakLogo.png";
import sensibullLogo from "../images/sensibullLogo.svg";
import zerodhaFundhouse from "../images/zerodhaFundhouse.png";
import goldenpiLogo from "../images/goldenpiLogo.png";
import dittoLogo from "../images/dittoLogo.png";

const Universe = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The zeroda Universe</h1>

        <p>
          Extend your trading and investment experience even further with our
          partner platform{" "}
        </p>

        <div className="col-4 p-3 mt-5">
          <img src={smallcaseLogo} alt="" />

          <p className="text-small text-muted">Thematic investment platform </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src={streakLogo}
            alt=""
            className="img-fluid"
            style={{ height: "60px" }}
          />

          <p className="text-small text-muted">Algo & statergy platform </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src={sensibullLogo} alt="" />

          <p className="text-small text-muted">Option trading platform </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src={zerodhaFundhouse}
            alt=""
            className="img-fluid"
            style={{ height: "60px" }}
          />

          <p className="text-small text-muted">Assets management </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src={goldenpiLogo} alt="" />

          <p className="text-small text-muted">Bonds trading platform </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src={dittoLogo}
            alt=""
            className="img-fluid"
            style={{ height: "60px" }}
          />

          <p className="text-small text-muted">Insurance</p>
        </div>

        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
};

export default Universe;
