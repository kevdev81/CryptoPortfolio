import React from "react";
import { Card, Button, CardBody } from "reactstrap";

class BlogAuth extends React.Component {
  render() {
    return (
      <Card className="form-group">
        <h1>{this.props.portfolioData}</h1>
        <label>Input your portfolio code :</label>
        <br />
        <input className="form-control" />
        <CardBody>
          <Button block color="info">
            Submit
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default BlogAuth;
