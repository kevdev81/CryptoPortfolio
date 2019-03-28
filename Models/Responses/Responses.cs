using CryptoPortfolio.Web.Api.Models.Responses;

namespace CryptoPortfolio.Web.Api.Models.Responses
{
    public class SuccessResponse : BaseResponse
    {
        public SuccessResponse()
        {
            this.IsSuccessful = true;
        }
    }
}