import React from "react";
import largestBroker from "../images/largestBroker.svg";

const Award = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src={largestBroker} alt="award Image"></img>
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Largest stock Broker in India</h1>
          <p className="mb-5">
            2+ million Zeroda clients contribute to over 15% of all volumes in
            India daily by trading and investing in :
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives </p>
                </li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPos</p>
                </li>
                <li>
                  <p>Direct mutual funds </p>
                </li>
                <li>
                  <p>Bonds and Goals </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Award;
