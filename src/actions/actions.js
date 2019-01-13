import {
  ADD_TEST,
  REMOVE_TEST,
  ADD_APPENDIX,
  REMOVE_APPENDIX_SUBTEST
} from "./constants";

export const addTest = testSelected => ({
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
