import { ADD_TEST } from "./constants";

export const addTest = testSelected => ({
  type: ADD_TEST,
  payload: testSelected
});
