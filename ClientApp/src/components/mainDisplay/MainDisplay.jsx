import React from "react";
import Chart from "./Chart";
import MarketCap from "./MarketCap";
import { Button, Modal } from "reactstrap";
import BlogAuth from "../blogs/BlogAuth";

class MainDisplay extends React.Component {
  state = {
    showChart: true,
    showMArketCap: false,
    showModal: false
  };

  toggleComponent = () => {
    this.setState(prevState => ({
      showChart: !prevState.showChart,
      showMarketCap: !prevState.showMarketCap
    }));
  };

  showChart = () => {
    this.setState({
      showChart: true,
      showMarketCap: false
    });
  };

  showMarketCap = () => {
    this.setState({
      showChart: false,
      showMarketCap: true
    });
  };

  showModal = () => {
    this.setState({ showModal: true });
  };

  render() {
    return (
      <div style={{ objectFit: "contain" }}>
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.03)" }}>
          <h1 style={{ marginLeft: "12%" }}>
            <Button outline color="info" onClick={this.showChart}>
              Chart
            </Button>{" "}
            <Button outline color="info" onClick={this.showMarketCap}>
              Market Cap
            </Button>{" "}
            <Button color="info" onClick={this.showModal}>
              Blogs
            </Button>
          </h1>
        </div>
        <div className="widget">
          {this.state.showChart ? (
            <div>
              <Chart />
            </div>
          ) : (
            <MarketCap />
          )}
        </div>
        <Modal isOpen={this.state.showModal}>
          <BlogAuth />
        </Modal>
      </div>
    );
  }
}

export default MainDisplay;
