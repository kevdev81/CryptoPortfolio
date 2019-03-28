import React, { Component } from "react";
import NavBar from "./components/navbar/NavBar";
// import Carousel from "./components/carousel/Carousel";
import MainDisplay from "./components/mainDisplay/MainDisplay";
import PriceWatch from "./components/priceWatch/PriceWatch";
import CoinProfile from "./components/coinProfile/CoinProfile";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <NavBar />
        <div className="appBody">
          <div className="appMainDisplay">
            <MainDisplay />
          </div>
          <div className="appCoinProfile">
            <CoinProfile />
          </div>
          <div className="appPriceWatch">
            <PriceWatch />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
