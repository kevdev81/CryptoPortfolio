import React from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

class Chart extends React.Component {
  render() {
    return (
      <div className="widget">
        <TradingViewWidget
          symbol="COINBASE:BTCUSD"
          theme={Themes.DARK}
          locale="en"
          height="468vh"
          width="50vw"
        />
      </div>
    );
  }
}

export default Chart;

// class Chart extends Component {
//   componentDidMount() {
//     window.tvAsyncInit = function() {
//       console.log("tvAsyncInit firing");
//       window.TV.init({
//         autosize: true,
//         symbol: "COINBASE:BTCUSD",
//         interval: "D",
//         timezone: "Etc/UTC",
//         theme: "Dark",
//         style: "1",
//         locale: "en",
//         toolbar_bg: "#f1f3f6",
//         enable_publishing: false,
//         allow_symbol_change: true,
//         container_id: "tradingview_12359"
//       });
//     };
//   }

//   (function(d, s, id) {
//     _logger(`attempting to add ${id} to page`);
//     var js,
//       fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) {
//       _logger(`Found ${id} on page already`);
//       window.fbAsyncInit();
//     }
//     js = d.createElement(s);
//     js.id = id;
//     js.src = "//connect.facebook.net/en_US/sdk.js";
//     fjs.parentNode.insertBefore(js, fjs);

//     _logger(`script ${id} added to page`);
//   })(document, "script", "facebook-jssdk");
// }

// }

// export const Chart = React.createReactClass({
//   UNSAFE_componentWillMount() {
//     const script = document.createElement("script");
//     script.type = "text/javascript";
//     script.onload = () => {
//       this.setState({
//         isLoaded: true
//       });
//       console.log("hello");
//     };
//     script.src = "https://s3.tradingview.com/tv.js";
//     script.innerHTML = {
//       autosize: true,
//       symbol: "COINBASE:BTCUSD",
//       interval: "D",
//       timezone: "Etc/UTC",
//       theme: "Dark",
//       style: "1",
//       locale: "en",
//       toolbar_bg: "#f1f3f6",
//       enable_publishing: false,
//       allow_symbol_change: true,
//       container_id: "tradingview_12359"
//     };
//     document.head.appendChild(script);
//   },

//   getInitialState() {
//     return {
//       isLoaded: false
//     };
//   },

//   render() {
//     return (
//       <div>
//         {this.state.isLoaded ? <div>Loaded!</div> : <div>Loading...</div>}
//       </div>
//     );
//   }
// });

// // export default class Chart extends React.PureComponent {
// //   constructor(props) {
// //     super(props);
// //     this._ref = React.createRef();
// //   }

// //   render() {
// //     return (
// //       <div class="tradingview-widget-container" ref={this._ref}>
// //         <div class="tradingview-widget-container__widget" />
// //       </div>
// //     );
// //   }
// //   componentDidMount() {
// //     const script = document.createElement("script");
// //     script.src = "https://s3.tradingview.com/tv.js";
// //     script.async = true;
// //     script.innerHTML = {
// //       autosize: true,
// //       symbol: "COINBASE:BTCUSD",
// //       interval: "D",
// //       timezone: "Etc/UTC",
// //       theme: "Dark",
// //       style: "1",
// //       locale: "en",
// //       toolbar_bg: "#f1f3f6",
// //       enable_publishing: false,
// //       allow_symbol_change: true,
// //       container_id: "tradingview_12359"
// //     };
// //     this._ref.current.appendChild(script);
// //   }
// // }

// // export default class Tabsshow extends React.PureComponent {
// //   constructor(props) {
// //     super(props);
// //     this._ref = React.createRef();
// //   }
// //   render() {
// //     return (
// //       <div class="tradingview-widget-container" ref={this._ref}>
// //         <div class="tradingview-widget-container__widget" />
// //       </div>
// //     );
// //   }
// //   componentDidMount() {
// //     const script = document.createElement("script");
// //     script.src =
// //       "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
// //     script.async = true;
// //     script.innerHTML /* JSON-ENCODED SETTINGS STRING FROM EMBED CODE */ = this._ref.current.appendChild(
// //       script
// //     );
// //   }
// // }
