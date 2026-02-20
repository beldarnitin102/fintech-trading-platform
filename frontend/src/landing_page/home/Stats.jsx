import React from "react";
import ecosystem from "../images/ecosystem.png";

const Stats = () => {
  return (
    <div className="container  p-5">
      <div className="row p-5">
        <div className="col-6 p-5">
         <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4" >Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3 crore customer trust zeroda with $3.5 lakh crores
            worth of equity investment
          </p>

          <h2 className="fs-4" >No spam or gimmicks</h2>
          <p className="text-muted">
            That's why 1.3 crore customer trust zeroda with $3.5 lakh crores
            worth of equity investment
          </p>

          <h2 className="fs-4">The zeroda universes</h2>
          <p className="text-muted">
            That's why 1.3 crore customer trust zeroda with $3.5 lakh crores
            worth of equity investment
          </p>

          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            That's why 1.3 crore customer trust zeroda with $3.5 lakh crores
            worth of equity investment
          </p>
        </div>

        <div className="col-6 p-5">
   p-5         <img
            src={ecosystem}
            alt="ecosystem Image"
            style={{ width: "90%" }}
          ></img>

          <div className="text-center  p-5">
            <a href="Explore our products " className="mx-5" style={{textDecoration:"none"}}>  Explore our products <i class="fa-solid fa-arrow-right"></i></a>
            <a href="Try kite"  style={{textDecoration:"none"}}>Try kite</a>
          </div>
        </div>
       </div>
    </div>
  );
};
  
export default Stats;
