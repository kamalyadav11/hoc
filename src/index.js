import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.css";
import reducers from "./reducers";
// import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import CommentList from "./components/CommentList";
import CommentBox from "./components/CommentBox";
import Header from "./components/Header";

const store = createStore(reducers, applyMiddleware(promise));
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={CommentList} exact />
          <Route path="/post" component={CommentBox} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
