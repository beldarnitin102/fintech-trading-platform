import React from "react";
import logo from "./images/logo.svg";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src={logo} alt="logo" style={{ width: "50%" }}></img>
            <p>2010-2014, not zeroda broking lts All right reserved</p>
          </div>
          <div className="col">
            <p>Company</p>
            <a className="mb-2" href="About ">
              About
            </a>
            <br />
            <a className="mb-2" href="About ">
              Products{" "}
            </a>{" "}
            <br />
            <a className="mb-2" href="About ">
              Pricing
            </a>{" "}
            <br />
            <a className="mb-2" href="About ">
              Referal Program
            </a>{" "}
            <br />
            <a href="About ">careers</a> <br />
            <a href="About ">Zeroda.tech</a>
            <br />
            <a href="About "> Press & Media</a> <br />
            <a href="About "> Zeroda Cares </a> <br />
          </div>
          <div className="col">
            <p>Support</p>
            <a href="About ">contact</a>
            <br />
            <a href="About ">support portal </a> <br />
            <a href="About ">z-correct blog</a> <br />
            <a href="About ">List of charges </a> <br />
            <a href="About "> Downloads & resources </a>
            <br />
          </div>
          <div className="col">
            <p>Account</p>
            <a href="About ">open an account </a>
            <br />
            <a href="About ">Fund transfer </a> <br />
            <a href="About ">60 day-challange </a> <br />
          </div>
        </div>
        <br />
        <div className="mt-5 text-small text-muted">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            labore explicabo odio officiis, soluta tenetur quo, ratione alias
            exercitationem mollitia magni, ipsam non ab eveniet assumenda qui.
            Perspiciatis, officia cupiditate.
          </p>

          <br />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            adipisci fugit dolor neque modi voluptates debitis, laboriosam
            cumque autem quod animi est eum facere pariatur? Facilis ea
            explicabo officia perspiciatis?
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
