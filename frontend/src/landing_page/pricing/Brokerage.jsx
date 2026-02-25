import React from "react";

const Brokerage = () => {
  return (
    <div className="container ">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="">
            <h3 className="fs-5">Brokerage Calculator </h3>
          </a>

          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "13px" }}
            className="text-muted"
          >
            <li>
              Call & trades and bms auto squared additional charges of 58 Gst
              per order{" "}
            </li>
            <li>
              Digital & trades and bms auto squared additional charges of 58 Gst
              per order{" "}
            </li>
            <li>
              Physical & trades and bms auto squared additional charges of 58
              Gst per order{" "}
            </li>
            <li>
              for URI & trades and bms auto squared additional charges of 58 Gst
              per order{" "}
            </li>
            <li>
              for NRI & trades and bms auto squared additional charges of 58 Gst
              per order{" "}
            </li>
            <li>
              the account default & trades and bms auto squared additional
              charges of 58 Gst per order{" "}
            </li>
          </ul>
        </div>

        <div className="col-4 p-4">
          <a href="">
            {" "}
            <h3 className="fs-5"> List of Charges </h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;
