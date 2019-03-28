using System;

namespace CryptoPortfolio.Web.Api.Models.Responses
{
    public abstract class BaseResponse
    {
        public bool IsSuccessful { get; set; }

        public string TransactionId { get; set; }

        public BaseResponse()
        {
            // This Tx ID is fake and only for demo purposes.
            this.TransactionId = Guid.NewGuid().ToString();
        }
    }
}