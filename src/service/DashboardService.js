import axios from 'axios';

export const dashboardApiCall = () => {
       var options = {
            method: 'POST',
            url: process.env.REACT_APP_AUTH0_TOKEN_URL,
            headers: {'content-type': 'application/json'},
            data: {
              grant_type: 'client_credentials',
              client_id: process.env.REACT_APP_AUTH0_DASHBOARD_CLIENT_ID,
              client_secret: process.env.REACT_APP_AUTH0_DASHBOARD_CLIENT_SECRET,
              audience: process.env.REACT_APP_AUTH0_DASHBOARD_API_IDENTIFIER
            }
          };
          axios.request(options).then(function (response) {
            sessionStorage.setItem("DASHBOARD_ACCESS_TOKEN", response.data.access_token);
            var options = {
                        method: 'GET',
                        url: 'http://dhobhighat-dev-1236471683.us-east-1.elb.amazonaws.com:8900/dashboard/getMessage',
                        headers: {authorization: 'Bearer '+sessionStorage.getItem("DASHBOARD_ACCESS_TOKEN")}
                      };

                      axios.request(options).then(function (response) {
                        console.log(response.data);
                      }).catch(function (error) {
                        console.error(error);
                      });
          }).catch(function (error) {
            console.error(error);
          });
    }