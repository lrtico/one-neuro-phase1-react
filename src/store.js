import { createStore, combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import testsSelectedReducer from "../src/reducers/reducerTests";
import appendixReducer from "../src/reducers/reducerAppendix";
import recommendations from "../src/reducers/reducerRecommendation";
import domainBasedReports from "./reducers/reducerDomains";
import { matchedTests } from "./reducers/reducerTests";
import { patientAge } from "./reducers/reducers";

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  testsSelectedReducer, //tests selected by user
  appendixReducer, //data needed to be shown on the appendix view
  recommendations,
  domainBasedReports, //true false values to control components visibility when selecting a test
  matchedTests,
  patientAge
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

window.store = store;

export default store;
