import { useEffect, useState } from "react";

import SumsubWebSdk from "@sumsub/websdk-react";

import "./SumsubSdk.scss";
import AccessTokenService from "../../services/AccessTokenService";

function SumsubSdk() {
  const [accessToken, setAccessToken] = useState(null);

  const accessTokenExpirationHandler = (accessToken) => {
    console.log(accessToken);
  };

  const messageHandler = (message) => {
    console.log(message);
  };

  const errorHandler = (error) => {
    console.error(error);
  };

  useEffect(() => {
    setTimeout(() => {
      AccessTokenService.getAccessToken({})
        .then((response) => {
          setAccessToken(response.data.token);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);
  }, []);

  if (accessToken) {
    return (
      <SumsubWebSdk
        accessToken={accessToken}
        expirationHandler={accessTokenExpirationHandler}
        config={{ lang: "en" }}
        // options={options}
        onMessage={messageHandler}
        onError={errorHandler}
      />
    );
  }
}

export default SumsubSdk;
