import { ADD_TEST, REMOVE_TEST } from "./constants";

export const addTest = testSelected => ({
  type: ADD_TEST,
  payload: testSelected
});

export const removeTest = test => ({
  type: REMOVE_TEST,
  payload: test
});
