import React from "react";
import * as coinbaseSvc from "../../server";
import { Badge } from "reactstrap";

class CoinBase extends React.Component {
  state = {
    btcSpot: "",
    ethSpot: "",
    xrpSpot: ""
  };
  componentDidMount() {
    coinbaseSvc
      .getCoinBaseBTC()
      .then(this.onGetBTCSuccess)
      .catch(this.onGetFail);
    coinbaseSvc
      .getCoinBaseETH()
      .then(this.onGetETHSuccess)
      .catch(this.onGetFail);
    coinbaseSvc
      .getCoinBaseXRP()
      .then(this.onGetXRPSuccess)
      .catch(this.onGetFail);
  }
  onGetBTCSuccess = data => {
    this.setState({ btcSpot: data.data });
    console.log(data.data);
  };
  onGetETHSuccess = data => {
    this.setState({ ethSpot: data.data });
    console.log(data.data);
  };
  onGetXRPSuccess = data => {
    this.setState({ xrpSpot: data.data });
    console.log(data.data);
  };
  render() {
    return (
      //   <Card>
      //     <CardBody>
      <div className="textWhite">
        <div className="col-lg">
          <Badge color="info" style={{ color: "black" }}>
            {this.state.btcSpot.base}
          </Badge>
          <br />${this.state.btcSpot.amount}
        </div>
        <div className="col-lg">
          <Badge color="info" style={{ color: "black" }}>
            {this.state.ethSpot.base}
          </Badge>
          <br />${this.state.ethSpot.amount}
        </div>
        <div className="col-lg">
          <Badge color="info" style={{ color: "black" }}>
            {this.state.xrpSpot.base}
          </Badge>
          <br />${this.state.xrpSpot.amount}
        </div>
      </div>
      //     </CardBody>
      //   </Card>
    );
  }
}

export default CoinBase;
