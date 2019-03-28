import React from "react";
import { Badge, Button, Alert } from "reactstrap";
import {
  handleCreatePortfolio,
  handleUpdatePortfolio
} from "./coinProfileService";

class PortfolioForm extends React.Component {
  state = {
    coinId: null,
    exchangeId: null,
    price: null,
    quantity: null,
    id: this.props.portfolioId
  };

  handleInputChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  submitPortfolio = () => {
    if (this.state) {
      handleCreatePortfolio(this.state)
        .then(data => this.onSubmitPortfolioSuccess(data))
        .catch(this.onSubmitPortfolioError);
    }
  };
  onSubmitPortfolioSuccess = data => {
    let alert = (
      <Alert color="info">
        You have successfully {this.props.submit ? "created" : "updated"} a
        portfolio.
        <br />
        <br />
        This is your portfolio #<h1>{data.item}</h1>
        <br />
        Please save your portfolio # so that you can access your portfolio.
      </Alert>
    );
    this.setState({ alert });
  };
  onSubmitPortfolioError = () => {
    console.log("There was an error submitting your portfolio.");
  };

  updatePortfolio = () => {
    handleUpdatePortfolio(this.state)
      .then(this.onUpdatePortfolioSuccess)
      .catch(this.onUpdatePortfolioError);
  };
  onUpdatePortfolioSuccess = () => {
    console.log("Your portfolio was successfully updated.");
  };
  onUpdatePortfolioError = () => {
    console.log("There was an error updating your portfolio.");
  };

  render() {
    return (
      <form className="newPortfolioForm">
        {this.state.alert}
        <div align="right">
          <Button color="muted" size="sm" className="closeBtn">
            &times;
          </Button>
        </div>
        <h1>
          <Badge color="info">{this.props.activeCoin}</Badge>
        </h1>
        <div className="form-group">
          <label>Coin :</label>
          <br />
          <select
            className="form-control"
            onChange={this.handleInputChange}
            name="coinId"
            value={this.state.coinId}
          >
            <option>Select</option>
            <option value="1">Bitcoin</option>
            <option value="2">Ethereum</option>
            <option value="3">Ripple</option>
          </select>
        </div>
        <div className="form-group">
          <label>Exchange :</label>
          <br />
          <select
            className="form-control"
            onChange={this.handleInputChange}
            name="exchangeId"
            value={this.state.exchangeId}
          >
            <option>Select</option>
            <option value="1">Coinbase</option>
            <option value="2">Kraken</option>
            <option value="3">Bitstamp</option>
            <option value="4">Poloniex</option>
            <option value="5">Bittrex</option>
            <option value="6">Binance</option>
            <option value="7">BitMex</option>
            <option value="8">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Purchase Price :</label>
          <br />
          <input
            className="form-control"
            placeholder="$"
            name="price"
            type="decimal"
            value={this.state.price}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Quantity :</label>
          <br />
          <input
            className="form-control"
            name="quantity"
            type="decimal"
            value={this.state.quantity}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          {this.props.submit ? (
            <Button color="info" onClick={this.submitPortfolio}>
              Submit
            </Button>
          ) : (
            <Button color="warning" onClick={this.updatePortfolio}>
              Update
            </Button>
          )}{" "}
          <Button>Reset</Button>
        </div>
      </form>
    );
  }
}

export default PortfolioForm;
