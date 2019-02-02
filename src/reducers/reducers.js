import C from "../actions/constants";

export const patientAge = (state = "", action) => {
  if (action.type === C.ADD_PATIENT_AGE) {
    return action.payload;
  } else {
    return state;
  }
};
