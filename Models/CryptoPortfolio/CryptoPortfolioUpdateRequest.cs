using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoPortfolio.Web.Api.Models.CryptoPortfolio
{
    public class CryptoPortfolioUpdateRequest : CryptoPortfolioInsertRequest
    {
        public int Id { get; set; }
    }
}
