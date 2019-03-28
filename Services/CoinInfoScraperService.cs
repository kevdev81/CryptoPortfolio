using CryptoPortfolio.Web.Api.Models.CoinInfoScraper;
using System.Data;
using System.Data.SqlClient;

namespace CryptoPortfolio.Web.Api.Services
{
    public class CoinInfoScraperService : ICoinInfoScraperService
    {
        private static string connString = "Server=.\\SQLEXPRESS;Database=CryptoPortfolio;Trusted_Connection=True;";

        public int InsertCoinInfoScraper(CoinInfoModel model)
        {
            int id = 0;

            using (SqlConnection con = new SqlConnection(connString))
            {
                SqlCommand command = new SqlCommand("dbo.CoinInfoScraper_Insert", con);
                command.CommandType = CommandType.StoredProcedure;
                con.Open();

                command.Parameters.Add(new SqlParameter("@Name", model.Name));
                command.Parameters.Add(new SqlParameter("@MarketCap", model.MarketCap));
                command.Parameters.Add(new SqlParameter("@Price", model.Price));
                command.Parameters.Add(new SqlParameter("@Volume", model.Volume));
                command.Parameters.Add(new SqlParameter("@CirculatingSupply", model.CirculatingSupply));
                command.Parameters.Add(new SqlParameter("@Change", model.Change));

                SqlParameter outputParameter = new SqlParameter();
                outputParameter.ParameterName = "@Id";
                outputParameter.SqlDbType = SqlDbType.Int;
                outputParameter.Direction = ParameterDirection.Output;
                command.Parameters.Add(outputParameter);

                command.ExecuteNonQuery();
                con.Close();

                id = (int)outputParameter.Value;
            }

            return id;
        }
    }
}