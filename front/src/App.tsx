import React from "react";
import logo from "./logo.svg";
import "./App.css";

import {
  Link,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to={"/calendar"}>Calend&aacute;rio</Link>
        <Link to={"/feed"}>Not&iacute;cias</Link>
        <Link to={"/donation"}>Doa&ccedil;&otilde;es</Link>
        {/* <Link to={"/manager"} /> */}
      </nav>
      <div id="outlet">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
