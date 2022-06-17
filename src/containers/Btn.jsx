import React from "react";
import svgIcon from "./my-svg.svg";
import { createButton } from "react-social-login-buttons";
import { createSvgIcon } from "react-social-login-buttons";



const config = {
    text: "Log in with Facebook",
    icon: createSvgIcon(svgIcon),
    iconFormat: name => `fa fa-${name}`,
    style: { background: "#3b5998" },
    activeStyle: { background: "#293e69" }
};
/** My Facebook login button. */
const MyFacebookLoginButton = createButton(config);

export default MyFacebookLoginButton;