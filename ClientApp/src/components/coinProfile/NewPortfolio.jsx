import React from "react";
import { CardBody, Button } from "reactstrap";
import PortfolioForm from "./PortfolioForm";

class NewPortfolio extends React.Component {
  state = {
    showForm: false,
    submit: true
  };

  toggle = () => {
    this.setState(prevState => ({
      showForm: !prevState.showForm
    }));
  };

  render() {
    return (
      <CardBody>
        {!this.state.showForm ? (
          <React.Fragment>
            <div className="newPortfolioForm">
              <h3>Create a new profile?</h3>
              <Button color="info" onClick={this.toggle}>
                Sure
              </Button>{" "}
              <Button onClick={this.props.toggleShow}>Nope</Button>
            </div>
          </React.Fragment>
        ) : (
          <PortfolioForm submit={this.state.submit} />
        )}
      </CardBody>
    );
  }
}

export default NewPortfolio;
