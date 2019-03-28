using CryptoPortfolio.Web.Api.Controllers.Temp;
using CryptoPortfolio.Web.Api.Interfaces;
using CryptoPortfolio.Web.Api.Models.CryptoPortfolio;
using CryptoPortfolio.Web.Api.Models.Responses;
using CryptoPortfolio.Web.Api.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;

namespace CryptoPortfolio.Web.Api.Controllers
{
    [Route("api/cryptoPortfolio")]
    public class CryptoPortfolioController : BaseApiController
    {
        private readonly ICryptoPortfolioService _cryptoPortfolioService;

        public CryptoPortfolioController(ICryptoPortfolioService cryptoPortfolioService,
            ILogger<CryptoPortfolioController> logger
            ) : base(logger)
        {
            _cryptoPortfolioService = cryptoPortfolioService;
        }

        [HttpGet("{id:int}")]
        public ActionResult<ItemResponse<CryptoPortfolioModel>> Get(int id)
        {
            ItemResponse<CryptoPortfolioModel> response = null;
            ActionResult result = null;

            try
            {
                CryptoPortfolioModel cryptoPortfolio = _cryptoPortfolioService.Get(id);

                if (cryptoPortfolio == null)
                {
                    result = NotFound404(new ErrorResponse("No Portfolio Found."));
                }
                else
                {
                    response = new ItemResponse<CryptoPortfolioModel>();
                    response.Item = cryptoPortfolio;
                    result = Ok200(response);
                }
            }
            catch (Exception ex)
            {
                Logger.LogError(ex.ToString());
                result = StatusCode(500, new ErrorResponse(ex.Message.ToString()));
            }
            return result;
        }

        [HttpPost]
        public ActionResult<ItemResponse<int>> Create(CryptoPortfolioInsertRequest req)
        {
            ItemResponse<int> response = null;
            ActionResult result = null;

            try
            {
                int id = _cryptoPortfolioService.Create(req);
                if (id > 0)
                {
                    response = new ItemResponse<int>();
                    response.Item = id;
                    result = Ok200(response);
                }
                else
                {
                    result = NotFound404(new ErrorResponse("Request could not be completed."));
                }
            }
            catch (Exception ex)
            {
                Logger.LogError(ex.ToString());
                result = StatusCode(500, new ErrorResponse(ex.Message.ToString()));
            }
            return result;
        }

        [HttpPut("{id:int}")]
        public ActionResult<ItemResponse<SuccessResponse>> Update(CryptoPortfolioUpdateRequest req)
        {
            SuccessResponse response = new SuccessResponse();
            ActionResult result = null;

            try
            {
                _cryptoPortfolioService.Update(req);
                result = Ok200(response);
            }
            catch (Exception ex)
            {
                Logger.LogError(ex.ToString());
                result = StatusCode(500, new ErrorResponse(ex.Message.ToString()));
            }
            return result;
        }

        [HttpDelete("{id:int}")]
        public ActionResult<SuccessResponse> Delete(int id)
        {
            SuccessResponse response = new SuccessResponse();
            ActionResult result = null;

            try
            {
                _cryptoPortfolioService.Delete(id);
                result = Ok200(response);
            }
            catch (Exception ex)
            {
                Logger.LogError(ex.ToString());
                result = StatusCode(500, new ErrorResponse(ex.Message.ToString()));
            }
            return result;
        }
    }
}