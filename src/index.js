import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { creatStore } from "redux";
import { BrowserRouter, Route } from "react-router-dom";

import "./index.css";
import reducers from "./reducers";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

const store = creatStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
