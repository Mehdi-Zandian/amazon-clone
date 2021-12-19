import React from "react";
import ReactDOM from "react-dom";
import App from "./container/App";
import { StateProvider } from "./StateContext/StateProvider";
import reducer, { initState } from "./StateContext/reducer";
// Auth0 Setup
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-azz532cq.us.auth0.com"
      clientId="fxQkJG9ze57QKNzATQk6VGOZzpzCFLLv"
      redirectUri={window.location.origin}
    >
      <StateProvider initialState={initState} reducer={reducer}>
        <App />
      </StateProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
