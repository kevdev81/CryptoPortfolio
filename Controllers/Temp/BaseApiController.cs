using CryptoPortfolio.Web.Api.Interfaces;
using CryptoPortfolio.Web.Api.Models.Responses;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Net;

namespace CryptoPortfolio.Web.Api.Controllers.Temp
{
    [ApiController]
    public abstract class BaseApiController : ControllerBase
    {
        protected ILogger Logger { get; set; }

        public BaseApiController(ILogger logger)
        {
            logger.LogInformation($"Controller Firing {this.GetType().Name} ");
            Logger = logger;
        }

        public OkObjectResult Ok200(BaseResponse response)
        {
            return base.Ok(response);
        }

        public CreatedResult Created201(IItemResponse response)
        {
            string url = Request.Path + "/" + response.Item.ToString();

            return base.Created(url, response);
        }

        public NotFoundObjectResult NotFound404(BaseResponse response)
        {
            return base.NotFound(response);
        }

        public ObjectResult StatusCode(HttpStatusCode code, string errorMessage)
        {
            return StatusCode((int)code, new ErrorResponse(errorMessage));
        }

        public ObjectResult CustomReponse(HttpStatusCode code, BaseResponse response)
        {
            return StatusCode((int)code, response);
        }
    }
}