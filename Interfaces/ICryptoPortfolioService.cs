using CryptoPortfolio.Web.Api.Models.CryptoPortfolio;

namespace CryptoPortfolio.Web.Api.Services
{
    public interface ICryptoPortfolioService
    {
        int Create(CryptoPortfolioInsertRequest req);

        void Delete(int? id);

        CryptoPortfolioModel Get(int? id);

        void Update(CryptoPortfolioUpdateRequest req);
    }
}