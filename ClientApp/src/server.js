import axios from "axios";

export function getCoinBaseBTC() {
  return axios
    .get("https://api.coinbase.com/v2/prices/BTC-USD/spot")
    .then(res => res.data)
    .catch(error => {
      console.log(error);
    });
}
export function getCoinBaseETH() {
  return axios
    .get("https://api.coinbase.com/v2/prices/ETH-USD/spot")
    .then(res => res.data)
    .catch(error => {
      console.log(error);
    });
}
export function getCoinBaseXRP() {
  return axios
    .get("https://api.coinbase.com/v2/prices/XRP-USD/spot")
    .then(res => res.data)
    .catch(error => {
      console.log(error);
    });
}
