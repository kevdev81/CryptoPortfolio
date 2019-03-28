using System.Collections.Generic;

namespace CryptoPortfolio.Web.Api.Models.Responses
{
    public class ItemsResponse<T> : SuccessResponse
    {
        public List<T> Items { get; set; }
    }
}
