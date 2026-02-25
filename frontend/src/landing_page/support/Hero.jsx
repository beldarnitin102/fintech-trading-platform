import React from "react";

const Hero = () => {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal </h4>

        <a href="">Track Ticket</a>
      </div>

      <div className="row p-5 m-3">
        <div className="col-6 p-5 ">
          <h1 className="fs-3">
            Serch for an answer or browe help topis to create a ticket{" "}
          </h1>
          <input type="text" placeholder="how do i activate F & O" />
          <br />
          <a href="">Track account Opening</a>
          <a href="">Track Segment activation day marginkite user manual</a>
          <a href="">Intrenet margin </a>
          <a href="">Kite user manual</a>
        </div>

        <div className="col-6 p-5 ">
          <h1>Featured </h1>

          <ol>
            <li>
              <a href="">Current takeovers and selisting january 2024</a>
            </li>
            <li>
              <a href="">Latest Infraday leverages MIS</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Hero;
