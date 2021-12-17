import React from "react";
import ReactDOM from "react-dom";
import App from "./container/App";
import { StateProvider } from "./StateContext/StateProvider";
import reducer, { initState } from "./StateContext/reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
