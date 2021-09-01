import React from "react";
import websitePageHOC from "../../src/wrappers/WebsitePage/hoc";

function Login() {
  return <h1>Login, dude</h1>;
}

export default websitePageHOC(Login, {
  pageWrapperProps: {
    seoProps: {
      headTitle: "Login",
    },
    menuProps: {
      display: false,
    },
  },
});
