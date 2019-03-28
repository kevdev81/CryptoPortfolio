import React from "react";
import ChartDisplay from "./ChartDisplay";
import MarketCapDisplay from "./MarketCapDisplay";
import { Button, Card, CardBody, CardHeader, Modal } from "reactstrap";
import BlogAuth from "../blogs/BlogAuth";

class MainDisplay extends React.Component {
  state = {
    showChart: true,
    showNotes: false,
    showModal: false
  };

  toggleComponent = () => {
    this.setState(prevState => ({
      showChart: !prevState.showChart,
      showNotes: !prevState.showNotes,
      showMarketCap: !prevState.showMarketCap
    }));
  };

  showModal = () => {
    this.setState({ showModal: true });
  };

  render() {
    return (
      <Card>
        <CardHeader>
          <Button outline color="info" onClick={this.toggleComponent}>
            Chart
          </Button>{" "}
          <Button outline color="info" onClick={this.toggleComponent}>
            Market Cap
          </Button>{" "}
          <Button color="primary" onClick={this.showModal}>
            Blogs
          </Button>
        </CardHeader>
        <hr />
        <CardBody>
          {this.state.showChart && (
            <div>
              <ChartDisplay />
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
