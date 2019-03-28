import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card
} from "reactstrap";
// import tradingView from "./carouselItem/tradingView";
import NotePad from "../notePad/NotePad";

const items = [
  //   {
  //     src: "https://s3.tradingview.com/tv.js"
  //     // src: `<div class="tradingview-widget-container">
  //     //   <div id="tradingview_907a1"></div>
  //     //   <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/COINBASE-BTCUSD/" rel="noopener" target="_blank"><span class="blue-text">BTCUSD chart</span></a> by TradingView</div>
  //     //   <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
  //     //   <script type="text/javascript">
  //     //   new TradingView.widget(
  //     //   {
  //     //   "autosize": true,
  //     //   "symbol": "COINBASE:BTCUSD",
  //     //   "interval": "60",
  //     //   "timezone": "America/Los_Angeles",
  //     //   "theme": "Dark",
  //     //   "style": "1",
  //     //   "locale": "en",
  //     //   "toolbar_bg": "#f1f3f6",
  //     //   "enable_publishing": false,
  //     //   "allow_symbol_change": true,
  //     //   "container_id": "tradingview_907a1"
  //     // }
  //     //   );
  //     //   </script>
  //     // </div>`
  //   },
  //   {
  //     src: tradingView
  //   },
  //   {
  //     src: <NotePad />
  //   },
  //   {
  //     src:
  //       "https://mybroadband.co.za/news/wp-content/uploads/2018/01/Coinbase-logo.jpg"
  //   },
  {
    src:
      "https://cryptocurrency.how/wp-content/uploads/cache/images/Kraken/Kraken-1098268484.png"
  }
];

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = false;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
          className="carouselItem"
        >
          <img className="carouselImg" src={item.src} alt={item.altText} />
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <Card className="carousel">
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
      </Card>
    );
  }
}

export default Example;
