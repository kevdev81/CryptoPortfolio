import axios from "axios";

export const handleCreatePortfolio = formData => {
  const config = {
    method: "POST",
    data: JSON.stringify(formData),
    url: `https://localhost:44391/api/cryptoPortfolio`,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json"
    }
  };
  return axios(config)
    .then(data => {
      return data.data;
    })
    .catch(() => console.log("Error"));
};

export const handleGetPortfolioById = id => {
  const config = {
    method: "GET",
    url: `https://localhost:44391/api/cryptoPortfolio/${id}`,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json"
    }
  };
  return axios(config)
    .then(data => {
      return data.data.item;
    })
    .catch(() => console.log("Error"));
};

export const handleUpdatePortfolio = updatedData => {
  const config = {
    method: "PUT",
    data: JSON.stringify(updatedData),
    url: `https://localhost:44391/api/cryptoPortfolio/${updatedData.id}`,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json"
    }
  };
  return axios(config)
    .then(data => {
      return data;
    })
    .catch(() => console.log("Error"));
};

export const handleDeletePortfolio = id => {
  const config = {
    method: "DELETE",
    url: `https://localhost:44391/api/cryptoPortfolio/${id}`,
    crossdomain: true
  };
  return axios(config)
    .then(data => {
      return data;
    })
    .catch(() => console.log("Error"));
};

// export const handleDelete = id => {
//   const config = {
//     method: "DELETE",
//     url: helpers.API_HOST_PREFIX + `/api/address/${id}`,
//     crossdomain: true
//   };

//   return axios(config)
//     .then(helpers.onGlobalSuccess)
//     .then(() => {
//       return id;
//     })
//     .catch(helpers.onGlobalError);
// };

// export const handleGetAll = () => {
//   const config = {
//     method: "GET",
//     url: helpers.API_HOST_PREFIX + "/api/address",
//     crossdomain: true,
//     headers: {
//       "Content-Type": "application/json"
//     }
//   };

//   return axios(config)
//     .then(helpers.onGlobalSuccess)
//     .then(data => {
//       return data;
//     })
//     .catch(helpers.onGlobalError);
// };
