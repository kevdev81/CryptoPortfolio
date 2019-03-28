import React from "react";
import { Card, CardBody, CardHeader, Button, Modal } from "reactstrap";
import NewPortfolio from "./NewPortfolio";
import ExistingPortfolio from "./ExistingPortfolio";

class CoinProfile extends React.Component {
  state = {
    hasExistingPortfolio: false,
    isOpen: false
  };
  toggle = () => {
    this.setState(prevState => ({
      hasExistingPortfolio: !prevState.hasExistingPortfolio
    }));
  };
  toggleShow = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };
  render() {
    return (
      <Card className="coinProfile">
        <CardBody>
          {!this.state.hasExistingPortfolio ? (
            <React.Fragment>
              <div className="createPortfolioOption">
                <h3>Do you have an existing portfolio?</h3>
                <Button onClick={this.toggle}>Yes</Button>{" "}
                <Button color="info" onClick={this.toggleShow}>
                  No
                </Button>
                <Modal isOpen={this.state.isOpen}>
                  <NewPortfolio
                    toggleShow={this.toggleShow}
                    toggle={this.toggle}
                  />
                </Modal>
              </div>
            </React.Fragment>
          ) : (
            <ExistingPortfolio toggle={this.toggle} />
          )}
        </CardBody>
      </Card>
    );
  }
}

export default CoinProfile;
