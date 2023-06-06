import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import * as Redux from 'react-redux';

import { store } from './redux';

import App from "App";
import reportWebVitals from "./reportWebVitals";

import { SoftUIControllerProvider } from "context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Redux.Provider store={store}>
    <Router>
      <SoftUIControllerProvider>
        <App />
      </SoftUIControllerProvider>
    </Router>
  </Redux.Provider>
);
reportWebVitals();
