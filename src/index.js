import React from "react";
import "./app.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import store from "./store";
import showResults from "./showResults";
import WizardForm from "./WizardForm";
import Grid from "./components/Grid";
import PageTrans from "./components/PageTrans";
import Hamburger from "./components/Hamburger";

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Grid />
      <PageTrans />
      <Hamburger />
      <WizardForm onSubmit={showResults} />
      <Values form="wizard" />
    </div>
  </Provider>,
  rootEl
);
