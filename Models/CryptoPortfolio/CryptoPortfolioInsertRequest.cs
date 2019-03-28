using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoPortfolio.Web.Api.Models.CryptoPortfolio
{
    public class CryptoPortfolioInsertRequest
    {
        public int CoinId { get; set; }
        public int ExchangeId { get; set; }
        public Decimal Price { get; set; }
        public Decimal Quantity { get; set; }
    }
}
