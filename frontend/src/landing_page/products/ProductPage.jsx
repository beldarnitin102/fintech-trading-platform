import React from "react";
import Hero from "./Hero";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";
import Universe from "./Universe";
import kite from "../images/kite.png";
import coin from "../images/coin.png";
import varsity from "../images/varsity.png";
import console from "../images/console.png";
import kiteconnect from "../images/kiteconnect.png";

const ProductPage = () => {
  return (
    <div>
      <Hero />
      <LeftSection
        imageURL={kite}
        productName="Kite"
        productDescription="our ultra fast flagshio trading platform with streming market data and advance technique used elegant ui and more enjoy kite exprerience seams in Android and iOS devices  "
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageURL={console}
        productName="Console"
        productDescription="The central idea for zeroda dashboard platform with streming market data and advance technique used elegant ui and more enjoy kite exprerience seams in Android and iOS devices  "
        learnMore=""
      />

      <LeftSection
        imageURL={coin}
        productName="Coin"
        productDescription="our Coin fast flagshio trading platform with streming market data and advance technique used elegant ui and more enjoy kite exprerience seams in Android and iOS devices  "
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageURL={kiteconnect}
        productName="Kite Connect API"
        productDescription="Build a powerful trading dashboard of platform with streming market data and advance technique used elegant ui and more enjoy kite exprerience seams in Android and iOS devices  "
        learnMore=""
      />

      <LeftSection
        imageURL={varsity}
        productName="varsity mobile"
        productDescription="our varsity fast flagshio trading platform with streming market data and advance technique used elegant ui and more enjoy kite exprerience seams in Android and iOS devices  "
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <br /><br /><br />
    <p className="text-center mp-5">Want to know more about technology stack ? check out the zeroda tech blog.</p>
      <Universe />
    </div>
  );
};

export default ProductPage;
