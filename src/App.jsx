import {} from "react";
import "./App.css";
import Navbar_ from "./components/navbar_";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/hero";
import Postpropfree from "./components/postpropfree";
import { WhyUs } from "./components/WhyUs";
import { Explore } from "./components/explore";
import { Footer } from "./components/footer";
import { Discover } from "./components/Discover";
import { Services } from "./components/services";
import { Spotlight } from "./components/spotlight";

function App() {
  return (
    <div>
      <Navbar_ />
      <br />
      <br />
      <Hero />
      <br/><br/>
      <Postpropfree /><br/><br/>
      <Services />
      <Spotlight />
      <br />
      <br />
      <br />
      <Discover />
      <br />
      <br />
      <br />
      <Explore />
      <br />
      <WhyUs />
      <br />
      <Footer />
    </div>
  );
}

export default App;
