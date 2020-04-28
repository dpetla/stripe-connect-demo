import React from "react";
import { getQueryVariable } from "../utils";
import * as api from "../api";

const clientId = "ca_HAv2EguIKHiLIP0gg8erASOM3NoWAqdV";

export default function Signup() {
  const code = getQueryVariable("code");
  if (code) {
    console.log(code);

    api
      .userToken(code)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <a
      className="pointer f6 dim link br1 ph3 pv2 mr5 mt3 mb2 dib white bg-mid-gray fr"
      href={
        `https://connect.stripe.com/express/oauth/authorize?` +
        `redirect_uri=http://localhost:3000/&client_id=${clientId}` +
        `&state={STATE_VALUE}` +
        `&suggested_capabilities[]=transfers` +
        `&suggested_capabilities[]=card_payments`
      }
    >
      Signup
    </a>
  );
}
