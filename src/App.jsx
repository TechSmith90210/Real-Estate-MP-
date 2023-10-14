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

function App() {
  return (
    <div>
      <Navbar_ />
      {/* <Hero /> */}
      {/* <Postpropfree /> */}
      <Services/>
      {/* <WhyUs /> */}
      {/* zaid will send design */}
      {/* <Discover /> */}
      {/* <Explore /> */}
      <br />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
