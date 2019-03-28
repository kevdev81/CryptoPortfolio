using CryptoPortfolio.Web.Api.Models.CoinInfoScraper;

namespace CryptoPortfolio.Web.Api.Services
{
    public interface ICoinInfoScraperService
    {
        int InsertCoinInfoScraper(CoinInfoModel model);
    }
}