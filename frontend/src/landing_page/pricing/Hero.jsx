import React from "react";
import pricingEquity from "../images/pricingEquity.svg";
import pricingMF from "../images/pricingMF.svg";
import intradayTrades from "../images/intradayTrades.svg";

const Hero = () => {
  return (
    <div className="container ">
      <div className="row p-5 mt-5 border-bottom text-center ">
        <h1>Pricing</h1>

        <h3 className="text-muted fs-5 mt-3">
          Free equity investment and flat 20 trade abd F&O trades{" "}
        </h3>

        <div className="row p-5 mt-5 text-center">
          <div className="col-4 p-4">
            <img src={pricingEquity} alt="pricing equity image" />

            <h1 className="fs-3">Free equity delivery</h1>
            <p className="text-muted">
              All equity delivery investment NSE are absolutely free for
              brokerage
            </p>
          </div>

          <div className="col-4 p-4">
            <img src={intradayTrades} alt="pricing equity image" />

            <h1 className="fs-3">Intraday and F & O trades</h1>
            <p className="text-muted">
              All Intraday delivery investment NSE are absolutely free for
              brokerage
            </p>
          </div>

          <div className="col-4 p-4">
            <img src={pricingMF} alt="pricing equity image" />

            <h1 className="fs-3">Free direct MF</h1>
            <p className="text-muted">
              All direct delivery investment NSE are absolutely free for
              brokerage
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
