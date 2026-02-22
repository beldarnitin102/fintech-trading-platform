import React from "react";
import nithinKamath from "../images/nithinKamath.jpg";

const Team = () => {
  return (
    <div>
      <div className="container">
        <div className="row p-5 mt-5 mb-5 border-top">
          <h1 className="text-center "> People </h1>
        </div>

        <div className="row p-5 text-muted fs-6" style={{ lineHeight: "1.8" }}>
          <div className="col-6 p-5 text-center">
            <img
              src={nithinKamath}
              alt="Hero Image"
              className="mb-5"
              style={{ borderRadius: "100%", width: "60%" }}
            ></img>

            <h4 className="mt-5">Nithin Kamath</h4>
            <h6>Founder,CEO</h6>
          </div>
          <div className="col-6 p-5">
            <p>
              Nithin, ipsum dolor sit amet consectetur adipisicing elit.
              Suscipit consectetur, inventor delectus reprehenderit amet iure
              cumque?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              noblaborum architecto, cumque at qui minus atque alias?
            </p>
            <br />

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. earum,
              animi cupiditate, labore recusandae laboriosam illo natus?
            </p>

            <p className="me-3">
              connect on{" "}
              <a className="me-3" href="">
                Homepage
              </a>
              <a href="">TradingQnA</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
