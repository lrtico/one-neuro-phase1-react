import C from "../actions/constants";

export const patientAge = (state = "", action) => {
  if (action.type === C.ADD_PATIENT_AGE) {
    return action.payload;
  } else {
    return state;
  }
};

export const dsmSelectedCodes = (state = [], action) => {
  // console.log(`
  //   for each code in state:
  //   =======================
  //   Item's index: ${state.map(code => JSON.stringify(code))}
  // `);
  switch (action.type) {
    case C.ADD_DSM_CODE:
      return [...state, action.payload];

    case C.REMOVE_DSM_CODE:
      return state.filter((code, i) => i !== action.payload);

    default:
      return state;
  }
};

export const errors = (state = [], action) => {
  switch (action.type) {
    case C.ADD_ERROR:
      return [...state, action.payload];
    case C.CLEAR_ERROR:
      return state.filter((error, i) => i !== action.payload);
    default:
      return state;
  }
};
