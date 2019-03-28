using System;

namespace CryptoPortfolio.Web.Api.Models.CryptoPortfolio
{
    public class CryptoPortfolioModel
    {
        public int Id { get; set; }
        public int CoinId { get; set; }
        public int ExchangeId { get; set; }
        public Decimal Price { get; set; }
        public Decimal Quantity { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }
    }
}