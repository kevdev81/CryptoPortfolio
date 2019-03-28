import React from "react";
import { Chart } from "./Chart";

class ChartDisplay extends React.Component {
  componentDidMount() {
    Chart();
  }
  render() {
    return (
      <div>
        <Chart />
      </div>
    );
  }
}

export default ChartDisplay;
