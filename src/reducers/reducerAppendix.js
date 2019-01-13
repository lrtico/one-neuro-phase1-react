import { ADD_APPENDIX, REMOVE_APPENDIX_SUBTEST } from "../actions/constants";

const initialState = {
  appendices: []
};

const appendixReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_APPENDIX_SUBTEST:
      console.log("Remove appendix case: ", action.payload);

      //Two options. Either remove the subtest or the entire test
      // let value = "Validity Scales";
      // let arr = ["Validity Scales", "Clinical Scales"];
      // arr = arr.filter(item => item !== value);
      // console.log("arr", arr);
      // pass a function to map
      //const map1 = array1.map(item => console.log(item));
      let removedTest = state.appendices;
      removedTest.forEach(function(item) {
        item.SubTests = item.SubTests.filter(
          subtest => subtest !== action.payload.SubTests[0]
        );
      });

      console.log("state after removing subtest = ", state);

      return { appendices: removedTest };

    case ADD_APPENDIX:
      //Find the index of the test in state by matching it to the payload's test
      const idx = state.appendices.findIndex(
        t => t.Abbreviation === action.payload.Abbreviation
      );
      const hasTest = state.appendices.some(
        t => t.Abbreviation === action.payload.Abbreviation
      );

      console.log(
        `
          - Action payload = ${JSON.stringify(action.payload)}
          - Action SubTests payload = ${JSON.stringify(
            action.payload.SubTests[0]
          )}
          - Index of the matching test in state (-1 if none) = ${idx}
          - State = ${JSON.stringify(state)}
          - Result of hasTest = ${hasTest}
        `
      );

      //If the state already has the test that was sent by the dispatch,
      //I want to insert the payload's subtest string into the existing test's SubTest array
      //let updateSubtestArray = state.appendices.filter();

      //First, check and see if the abbreviations match. if they do, then check and see if the subtest is there.
      //If it is, remove it. If it isn't, add it.
      //If the abbreviations don't match, add a whole new object with the entire payload.

      let newData = state.appendices.map(item => {
        if (item.Abbreviation === action.payload.Abbreviation) {
          item.SubTests.push(action.payload.SubTests[0]);
          return item;
        }
        return item;
      });
      console.log("New array for ADD_APPENDIX mutation: ", newData);

      return hasTest
        ? { appendices: newData }
        : { appendices: [...state.appendices, action.payload] };

    // case 'update': {
    //   state.byHash[action.id] = {
    //     ...state.byHash[action.id],
    //     ...action.payload
    //   }
    //   return {
    //     ...state
    //   }
    // }

    // case 'add': {
    //   return {
    //     byId: [ ...state.byId, action.id],
    //     byHash: {
    //       ...state.byHash,
    //       [action.id]: action.payload
    //     }
    //   }
    // }

    // state = {
    //   appendices: [
    //     {
    //       Name: "test name",
    //       Abbreviation: "TSCC",
    //       SubTests: [ "Validity Scale", "Clinical Scale" ]
    //     },
    //     {
    //       Name: "test name",
    //       Abbreviation: "MMPI-A",
    //       SubTests: [ "Clinical" ]
    //     }
    //   ]
    // };

    // return hasTest
    //   ? {
    //       appendices: [
    //         ...state.appendices,
    //         ...state.appendices[idx].SubTests[0].concat(
    //           action.payload.SubTests
    //         )
    //       ]
    //     }
    //   : {
    //       appendices: [...state.appendices, action.payload]
    //     };

    // return hasTest && hasSubTest
    //   ? state.filter(t => t.Abbreviation !== action.payload.Abbreviation)
    //   : hasTest && !hasSubTest
    //   ? [...state, ...state[idx].SubTests, action.payload.SubTests[0]]
    //   : [...state, action.payload];

    // return hasTest && hasSubTest && subTestLength() === 1 //Does the state have the test and Subtest(only that one)?
    //   ? state.filter(t => t.Id !== action.payload.Id) //True && true && true, so remove the entire object from the appendix array
    //   : hasTest && hasSubTest //False, so does the state have the test and the Subtest?
    //   ? state[idx]
    //       .map(t => t.SubTests)
    //       .filter(t => t !== action.payload.ParentScaleName) //True, so we remove the subtest from the appendix array
    //   : hasTest && !hasSubTest //False, so does the state have the test but not the Subtest?
    //   ? [...state, ...state[idx].SubTests, action.payload.ParentScaleName] //True, so we add the Subtest to the array
    //   : [...state, action.payload]; //False, must not have the test or the Subtest so we add a new object to the state

    default:
      return state;
  }
};

export default appendixReducer;
