import {
  ADD_TEST,
  REMOVE_TEST,
  ADD_APPENDIX,
  REMOVE_APPENDIX_SUBTEST,
  ADD_RECOMMENDATION
} from "./constants";
import C from "./constants";

export const addTest = testSelected => ({
  //Any logic goes here...
  type: ADD_TEST,
  payload: testSelected
});

export const removeTest = test => ({
  type: REMOVE_TEST,
  payload: test
});

export const addAppendix = data => ({
  type: ADD_APPENDIX,
  payload: data
});

export const removeAppendixSubTest = data => ({
  type: REMOVE_APPENDIX_SUBTEST,
  payload: data
});

export const addRecommendation = name => ({
  type: ADD_RECOMMENDATION,
  payload: name
});

export const removeRecommendation = name => ({
  type: REMOVE_RECOMMENDATION,
  payload: name
});
