import React from "react";
import Navbar_ from "../components/navbar_";
import {} from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "../components/hero";
import Postpropfree from "../components/postpropfree";
import { WhyUs } from "../components/WhyUs";
import { MapExplore } from "../components/mapexplore";
import { Footer } from "../components/footer";
import { Discover } from "../components/Discover";
import { Services } from "../components/services";
import { Spotlight } from "../components/spotlight";

export const HomePage = () => {
  return (
    <div>
      <Navbar_ />
      <br />
      <br />
      <Hero />
      <br />
      <br />
      <Postpropfree />
      <br />
      <br />
      <Services />
      <Spotlight />
      <br />
      <br />
      <br />
      <Discover />
      <br />
      <br />
      <br />
      <MapExplore />
      <br />
      <WhyUs />
      <br />
      <Footer />
    </div>
  );
};
