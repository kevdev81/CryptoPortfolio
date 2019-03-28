using CryptoPortfolio.Web.Api.Interfaces;
using CryptoPortfolio.Web.Api.Models.CoinInfoScraper;
using CryptoPortfolio.Web.Api.Models.CryptoPortfolio;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoPortfolio.Web.Api.Services
{
    public class CryptoPortfolioService : ICryptoPortfolioService
    {
        private static string connString = "Server=.\\SQLEXPRESS;Database=CryptoPortfolio;Trusted_Connection=True;";

        private static CryptoPortfolioModel Mapper(IDataReader reader)
        {
            CryptoPortfolioModel cryptoPortfolio = new CryptoPortfolioModel();
            cryptoPortfolio.Id = (int)reader["Id"];
            cryptoPortfolio.CoinId = (int)reader["CoinId"];
            cryptoPortfolio.ExchangeId = (int)reader["ExchangeId"];
            cryptoPortfolio.Price = (Decimal)reader["Price"];
            cryptoPortfolio.Quantity = (Decimal)reader["Quantity"];

            return cryptoPortfolio;
        }

        public CryptoPortfolioModel Get(int? id)
        {
            CryptoPortfolioModel cryptoPortfolio = new CryptoPortfolioModel();

            using (SqlConnection con = new SqlConnection(connString))
            {
                SqlCommand cmd = new SqlCommand("dbo.CryptoPortfolio_GetById", con);
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@Id", id);

                con.Open();
                SqlDataReader reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    cryptoPortfolio = Mapper(reader);
                };
            }
            return cryptoPortfolio;
        }

        public int Create(CryptoPortfolioInsertRequest req)
        {
            int id = 0;
            using (SqlConnection con = new SqlConnection(connString))
            {
                SqlCommand cmd = new SqlCommand("dbo.CryptoPortfolio_Insert", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@CoinId", req.CoinId);
                cmd.Parameters.AddWithValue("@ExchangeId", req.ExchangeId);
                cmd.Parameters.AddWithValue("@Price", req.Price);
                cmd.Parameters.AddWithValue("@Quantity", req.Quantity);

                SqlParameter outputParam = cmd.Parameters.Add("@Id", SqlDbType.Int);
                outputParam.Direction = ParameterDirection.Output;

                con.Open();
                cmd.ExecuteNonQuery();
                id = int.Parse(outputParam.Value.ToString());
                con.Close();
            }
            return id;
        }

        public void Update(CryptoPortfolioUpdateRequest req)
        {
            using (SqlConnection con = new SqlConnection(connString))
            {
                SqlCommand cmd = new SqlCommand("dbo.CryptoPortfolio_Update", con);
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@Id", req.Id);
                cmd.Parameters.AddWithValue("@CoinId", req.CoinId);
                cmd.Parameters.AddWithValue("@ExchangeId", req.ExchangeId);
                cmd.Parameters.AddWithValue("@Price", req.Price);
                cmd.Parameters.AddWithValue("@Quantity", req.Quantity);

                con.Open();
                cmd.ExecuteNonQuery();
                con.Close();
            }
        }

        public void Delete(int? id)
        {
            using (SqlConnection con = new SqlConnection(connString))
            {
                SqlCommand cmd = new SqlCommand("dbo.CryptoPortfolio_Delete", con);
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@Id", id);

                con.Open();
                cmd.ExecuteNonQuery();
                con.Close();
            }
        }
    }
}
