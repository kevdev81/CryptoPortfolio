import React from "react";
import CoinBase from "./CoinBase";

class PriceWatch extends React.Component {
  state = {
    filteredArr: [],
    arrComponent: []
  };

  distinctList = arr => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (!newArr.includes(arr[i])) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  };

  render() {
    return (
      <div className="priceWatch container col-sm-12">
        <div className="row col-sm-12">
          <h1 className="textWhite priceWatchItem">CoinBase</h1> <br />
          <CoinBase />
          <h1 className="textWhite priceWatchItem">Kraken</h1> <br />
          <CoinBase />
        </div>
      </div>
    );
  }
}

export default PriceWatch;
