import { createStore, combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import testsSelectedReducer from "../src/reducers/reducerTests";

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  testsSelectedReducer
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

export default store;
