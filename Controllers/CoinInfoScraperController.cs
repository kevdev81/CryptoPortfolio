using AngleSharp.Html.Parser;
using CryptoPortfolio.Web.Api.Controllers.Temp;
using CryptoPortfolio.Web.Api.Models.CoinInfoScraper;
using CryptoPortfolio.Web.Api.Models.Responses;
using CryptoPortfolio.Web.Api.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace CryptoPortfolio.Web.Api.Controllers
{
    [Route("api/coinscraper")]
    public class CoinInfoScraperController : BaseApiController
    {
        private readonly ICoinInfoScraperService _coinInfoScraperService;

        CoinInfoScraperService coinInfoScraperService = new CoinInfoScraperService();

        public CoinInfoScraperController(ICoinInfoScraperService coinInfoScraperService,
            ILogger<CoinInfoScraperController> logger
            ) : base(logger)
        {
            _coinInfoScraperService = coinInfoScraperService;
        }

        [HttpGet]
        public ActionResult<SuccessResponse> GetCoinInfoScraper()
        {
            ActionResult results = null;

            var webClient = new WebClient();
            var html = webClient.DownloadString("https://coinmarketcap.com/");

            var parser = new HtmlParser();
            var document = parser.ParseDocument(html);
            var table = document.QuerySelector(".table");

            var rows = table.QuerySelectorAll("tr").Skip(1);

            foreach (var row in rows)
            {
                var coinInfoModel = new CoinInfoModel();

                coinInfoModel.Name = row.QuerySelector("td:nth-child(2)").TextContent;
                coinInfoModel.MarketCap = row.QuerySelector("td:nth-child(3)").TextContent;
                coinInfoModel.Price = row.QuerySelector("td:nth-child(4)").TextContent;
                coinInfoModel.Volume = row.QuerySelector("td:nth-child(5)").TextContent;
                coinInfoModel.CirculatingSupply = row.QuerySelector("td:nth-child(6)").TextContent;
                coinInfoModel.Change = row.QuerySelector("td:nth-child(7)").TextContent;

                int addCoinInfo = _coinInfoScraperService.InsertCoinInfoScraper(coinInfoModel);
            }

            return Ok(results);
        }

        [HttpGet("ping")]
        public ActionResult<string> Ping()
        {
            return Ok("Ping test");
        }
    }
}
