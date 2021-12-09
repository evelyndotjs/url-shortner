import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Navigation from "./Components/Navigation";
import Introduction from "./Components/Introduction";
import Shortener from "./Components/Shortener";

ReactDOM.render(
  <div>
    {/* <App /> */}
    <Navigation />
    <Introduction />
    <Shortener />
  </div>,
  document.getElementById("root")
);
