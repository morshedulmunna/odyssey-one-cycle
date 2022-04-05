import React from "react";
import { Link } from "react-router-dom";
import "./Error404.css";
const Error404 = () => {
  return (
    <div className="Error">
      <h1 id="forOfor">404</h1>
      <div class="cloak__wrapper">
        <div class="cloak__container">
          <div class="cloak"></div>
        </div>
      </div>
      <div class="infoError">
        <h2>We can't find that page</h2>
        <p>
          We're fairly sure that page used to be here, but seems to have gone
          missing. We do apologise on it's behalf.
        </p>
        <Link id="homePAge" to="./">
          Home Page{" "}
        </Link>
      </div>
    </div>
  );
};

export default Error404;
