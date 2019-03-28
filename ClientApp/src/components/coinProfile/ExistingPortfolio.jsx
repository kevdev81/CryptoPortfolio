import React from "react";
import { CardBody, Button, Modal, CardHeader } from "reactstrap";
import { handleGetPortfolioById } from "./coinProfileService";
import PortfolioForm from "./PortfolioForm";
import DeletePortfolio from "./DeletePortfolio";

class ExistingPortfolio extends React.Component {
  state = {
    portfolioId: null,
    portfolioData: [],
    submit: true
  };

  handleInputChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  getExistingPortfolioInfo = () => {
    if (this.state.portfolioId) {
      handleGetPortfolioById(this.state.portfolioId)
        .then(data => this.onGetPortfolioSuccess(data))
        .catch(this.onGetPortfolioError);
    }
  };
  onGetPortfolioSuccess = data => {
    this.setState({ portfolioData: data });
  };
  onGetPortfolioError = () => {
    console.log("There was an error retreiving your portfolio.");
  };

  showModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <CardBody>
        {!this.state.portfolioData.id && (
          <React.Fragment>
            <div align="right">
              <Button
                onClick={this.props.toggle}
                color="muted"
                size="sm"
                className="closeBtn"
              >
                &times;
              </Button>
            </div>
            <h2>{this.props.portfolioData}</h2>
            <label>Input your portfolio code :</label>
            <br />
            <input
              className="form-control"
              name="portfolioId"
              value={this.state.portfolioId}
              onChange={this.handleInputChange}
            />
            <div>
              <Button
                block
                color="info"
                onClick={this.getExistingPortfolioInfo}
              >
                Submit
              </Button>
            </div>
          </React.Fragment>
        )}
        {this.state.portfolioData.id && (
          <React.Fragment>
            <CardHeader>Portfolio Data:</CardHeader>
            <CardBody style={{ overflow: "auto !important" }}>
              <p>For portfolio code #{this.state.portfolioData.id}</p>
              Coin:
              <p>{this.state.portfolioData.coinId}</p>
              Exchange:
              <p>{this.state.portfolioData.exchangeId}</p>
              Price:
              <p>{this.state.portfolioData.price}</p>
              Quantity:
              <p>{this.state.portfolioData.quantity}</p>
              Created Date:
              <p>{this.state.portfolioData.dateCreated}</p>
            </CardBody>
            <div align="center">
              <Button onClick={this.showModal}>Edit</Button>{" "}
              <DeletePortfolio portfolioId={this.state.portfolioId} />
            </div>
            <Modal isOpen={this.state.isOpen}>
              <PortfolioForm portfolioId={this.state.portfolioId} />
            </Modal>
          </React.Fragment>
        )}
      </CardBody>
    );
  }
}

export default ExistingPortfolio;
