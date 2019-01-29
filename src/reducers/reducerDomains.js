import C from "../actions/constants";
import { combineReducers } from "redux";

//Handing showing domains
const showDomains = (state = false, action) => {
  switch (action.type) {
    case C.SHOW_DOMAIN:
      return true;

    case C.HIDE_DOMAIN:
      return false;

    default:
      return state;
  }
};

//Handing showing sub-domains
const showSubDomains = (state = false, action) => {
  switch (action.type) {
    case C.SHOW_SUBDOMAIN:
      return true;

    case C.HIDE_SUBDOMAIN:
      return false;

    default:
      return state;
  }
};

//Handing showing tests
const showTests = (state = false, action) => {
  switch (action.type) {
    case C.SHOW_TESTS:
      return true;

    case C.HIDE_TESTS:
      return false;

    default:
      return state;
  }
};

//Handing showing the summary
const showSummary = (state = false, action) => {
  switch (action.type) {
    case C.SHOW_SUMMARY:
      return true;

    case C.HIDE_SUMMARY:
      return false;

    default:
      return state;
  }
};

export default combineReducers({
  showDomains,
  showSubDomains,
  showTests,
  showSummary
});
