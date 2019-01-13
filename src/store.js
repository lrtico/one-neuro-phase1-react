import { createStore, combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import testsSelectedReducer from "../src/reducers/reducerTests";
import appendixReducer from "../src/reducers/reducerAppendix";

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  testsSelectedReducer, //tests selected by user
  appendixReducer //data needed to be shown on the appendix view
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

export default store;
