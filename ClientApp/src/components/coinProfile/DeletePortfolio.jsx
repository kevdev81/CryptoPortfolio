import React from "react";
import { Button } from "reactstrap";
import { handleDeletePortfolio } from "./coinProfileService";

class DeletePortfolio extends React.Component {
  deletePortfolio = () => {
    handleDeletePortfolio(this.props.portfolioId)
      .then(this.onDeletePortfolioSuccess)
      .catch(this.onDeletePortfolioError);
  };

  render() {
    return (
      <Button color="danger" onClick={this.deletePortfolio}>
        Delete
      </Button>
    );
  }
}

export default DeletePortfolio;
