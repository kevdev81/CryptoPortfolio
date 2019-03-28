using CryptoPortfolio.Web.Api.Interfaces;

namespace CryptoPortfolio.Web.Api.Models.Responses
{
    public class ItemResponse<T> : SuccessResponse, IItemResponse
    {
        public T Item { get; set; }

        object IItemResponse.Item { get { return this.Item; } }
    }
}
