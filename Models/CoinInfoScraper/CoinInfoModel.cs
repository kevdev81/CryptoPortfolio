﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoPortfolio.Web.Api.Models.CoinInfoScraper
{
    public class CoinInfoModel
    {
        public string Name { get; set; }
        public string MarketCap { get; set; }
        public string Price { get; set; }
        public string Volume { get; set; }
        public string CirculatingSupply { get; set; }
        public string Change { get; set; }
    }
}
