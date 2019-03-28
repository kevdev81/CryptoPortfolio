import React from "react";
import Chart from "./Chart";
import MarketCapDisplay from "./MarketCapDisplay";
import { Button, Card, CardBody, CardHeader, Modal } from "reactstrap";
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
      <Card>
        <CardHeader>
          <Button outline color="info" onClick={this.showChart}>
            Chart
          </Button>{" "}
          <Button outline color="info" onClick={this.showMarketCap}>
            Market Cap
          </Button>{" "}
          <Button color="primary" onClick={this.showModal}>
            Blogs
          </Button>
        </CardHeader>
        <CardBody>
          {this.state.showChart && (
            <div>
              <Chart />
            </div>
          )}
          {this.state.showMarketCap && (
            <div>
              <MarketCapDisplay />
            </div>
          )}
        </CardBody>
        <Modal isOpen={this.state.showModal}>
          <BlogAuth />
        </Modal>
      </Card>
    );
  }
}

export default MainDisplay;
