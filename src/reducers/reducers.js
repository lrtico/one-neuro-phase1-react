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

//Manage adding individual bits of data to the copy forward array
// export const copyForward = (state = {}, action) => {
//   console.log(`
//     copyForward initial state:
//     ==========================
//     ${JSON.stringify(state)}
//   `);
//   let n = action.payload;
//   let newState = { ...state, ...n };
//   console.log(`
//     copyForward new state:
//     ==========================
//     ${JSON.stringify(newState)}
//   `);
//   console.log("copyForward action, ", n);
//   if (action.type === C.ADD_COPY_FORWARD_DATA) {
//     return newState;
//   } else {
//     return state;
//   }
// };

//Manage all copy forward objects in the array
// export const allCopyForward = (state = [], action) => {
//   // console.log(`
//   //   copyForward state:
//   //   =======================
//   //   ${state.map(item => JSON.stringify(item))}
//   // `);
//   console.log("allCopyForward, ", action);
//   switch (action.type) {
//     case C.ADD_COPY_FORWARD_DATA:
//       return [...state, copyForward(null, action)];

//     default:
//       return state;
//   }
// };
