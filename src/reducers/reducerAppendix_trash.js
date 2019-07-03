import C from "../actions/constants";
import { combineReducers } from "redux";

const initialState = {
  tests: []
};

export const domains = (state = initialState, action) => {
  switch (action.type) {
    case C.REMOVE_APPENDIX_DOMAIN:
      console.log("Remove appendix case: ", action.payload);

      //Two options. Either remove the subtest or the entire test
      // let value = "Validity Scales";
      // let arr = ["Validity Scales", "Clinical Scales"];
      // arr = arr.filter(item => item !== value);
      // console.log("arr", arr);
      // pass a function to map
      //const map1 = array1.map(item => console.log(item));
      let removedTest = state.tests;
      removedTest.forEach(function(item) {
        item.DomainsOverall = item.DomainsOverall.filter(
          domain =>
            domain.parentScaleName !==
            action.payload.DomainsOverall[0].parentScaleName
        );
      });

      console.log("state after removing subtest = ", state);

      return { tests: removedTest };

    case C.ADD_APPENDIX_DOMAIN:
      //Find the index of the test in state by matching it to the payload's test
      console.log("Reducer Appendix state = ", state);
      let idx = state.tests.findIndex(
        t => t.Abbreviation === action.payload.Abbreviation
      );
      const hasTest = state.tests.some(
        t => t.Abbreviation === action.payload.Abbreviation
      );

      console.log(
        `
          - Action payload = ${JSON.stringify(action.payload)}
          - Action DomainsOverall payload = ${JSON.stringify(
            action.payload.DomainsOverall[0]
          )}
          - Action payload's id = ${action.payload.Id}
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

      let newData = state.tests.map(item => {
        if (item.Abbreviation === action.payload.Abbreviation) {
          item.DomainsOverall.push(action.payload.DomainsOverall[0]);
          return item;
        }
        return item;
      });
      console.log("New array for ADD_APPENDIX mutation: ", newData);

      return hasTest
        ? { tests: newData }
        : { tests: [...state.tests, action.payload] };

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

// export const subtests = (state = initialState, action) => {
//   switch (action.type) {
//     case C.ADD_APPENDIX_SUBTEST:
//       let hasParentScale;

//       //True false variable: Is the "test" (eg, WJ-IV ACH) already in state by comparing it to the payload's test
//       const hasTest = state.tests.some(
//         t => t.Abbreviation === action.payload.Abbreviation
//       );

//       //Number variable: I need to know which index of the state matches the payload's test
//       const tidx = state.tests
//         .map(t => t.Abbreviation)
//         .indexOf(action.payload.Abbreviation);

//       //True false variable: Is the parentScale (eg, Basic Reading Skills) already in state by comparing it to the payload
//       if (tidx >= 0) {
//         hasParentScale = state.tests[tidx].ParentScale.some(
//           t =>
//             t.ParentScaleTitle ===
//             action.payload.ParentScale[0].ParentScaleTitle
//         );
//       }

//       // const hasParentScale = state.tests.some(
//       //   t =>
//       //     t.ParentScale[0].ParentScaleTitle ===
//       //     action.payload.ParentScale[0].ParentScaleTitle
//       // );

//       // const hasParentScale = state.tests.map(test =>
//       //   test.ParentScale.some(
//       //     p =>
//       //       p.ParentScaleTitle ===
//       //       action.payload.ParentScale[0].ParentScaleTitle
//       //   )
//       // );

//       //Number variable: I need to know which ParentScale to put the payload into if hasTest and hasParentScale are true
//       // const idx = state.tests
//       //   .map(t => t.ParentScale[0].ParentScaleTitle)
//       //   .indexOf(action.payload.ParentScale[0].ParentScaleTitle);
//       // const idx = state.tests
//       //   .map(test => test.ParentScale.map(p => p.ParentScaleTitle))
//       //   .indexOf(action.payload.ParentScale[0].ParentScaleTitle);

//       console.log(
//         `
//           - Action payload = ${JSON.stringify(action.payload)}
//           - Action DomainsOverall payload = ${JSON.stringify(
//             action.payload.ParentScale[0].SubTests[0]
//           )}
//           - Action payload Test Name = ${action.payload.TestName}
//           - Action payload's id = ${action.payload.Id}
//           - Result of hasTest = ${hasTest}
//           - Result of hasParentScale = ${hasParentScale}
//           - Result of tidx (-1 means the "test" isn't there) = ${tidx}
//         `
//       );

//       //If the state already has the test that was sent by the dispatch,
//       //I want to insert the payload's subtest string into the existing test's SubTest array
//       //let updateSubtestArray = state.appendices.filter();

//       //First, check and see if the abbreviations match. if they do, then check and see if the subtest is there.
//       //If it is, remove it. If it isn't, add it.
//       //If the abbreviations don't match, add a whole new object with the entire payload.

//       // let newData = state.tests.map(item => {
//       //   if (item.Abbreviation === action.payload.Abbreviation) {
//       //     item.SubTests.push(action.payload.SubTests[0]);
//       //     return item;
//       //   }
//       //   return item;
//       // });
//       // console.log("New array for ADD_APPENDIX mutation: ", newData);

//       // return !hasTest
//       //   ? //the wj-iv isn't in state (hastest = false) so we add a new object after keeping any existing test objects
//       //     { tests: [...state.tests, action.payload] }
//       //   : hasTest && !hasParentScale
//       //   ? //the wj-iv is in state (hastest = true) but the basic reading parentscale isn't (hasParentscale = false) so we create an entirely new array to replace state
//       //     {
//       //       tests: [
//       //         ...state.tests,
//       //         ...state.tests[tidx].ParentScale,
//       //         action.payload.ParentScale[0]
//       //       ]
//       //     }
//       //   : {
//       //       Lastly, if the test is in state (true) and the parentScale is there too (true) we inject the payload into the existing parentScale
//       //       tests: [
//       //         ...state.tests,
//       //         ...state.tests[tidx].ParentScale[0],
//       //         action.payload.ParentScale[0].SubTests[0]
//       //       ]
//       //     };

//       //The "Test" (eg, WJ-IV ACH) is in state (hastest = true) but the ParentScale (eg, Basic Reading Skills) isn't (hasParentscale = false), so we create an entirely new array to replace state
//       let addNewParentScale = state.tests.map(item => {
//         if (item.Abbreviation === action.payload.Abbreviation) {
//           item.ParentScale.push(action.payload.ParentScale[0]);
//           return item;
//         }
//         return item;
//       });

//       //The "Test" (eg, WJ-IV ACH) is in state (hastest = true) and the ParentScale (eg, Basic Reading Skills) is too(hasParentscale = true), so we inject the payload's subtest into the correct ParentScale object

//       //Jackson, create a number variable (pidx) to map over the ParentScale arr
//       let addToExistingParentScale = state.tests.map(item => {
//         if (item.Abbreviation === action.payload.Abbreviation) {
//           item.ParentScale.map(p =>
//             p.ParentScaleTitle ===
//             action.payload.ParentScale[0].ParentScaleTitle
//               ? item.ParentScale.push(action.payload.ParentScale[0].SubTests[0])
//               : item
//           );
//           return item;
//         }
//         return item;
//       });

//       return !hasTest
//         ? { tests: [...state.tests, action.payload] }
//         : hasTest && !hasParentScale
//         ? { tests: addNewParentScale }
//         : { tests: addToExistingParentScale };
//     default:
//       return state;
//   }
// };
//Check out video on composing reducers
//I'm thinking I have one tree called tests. It's an array of the tests. In the array of test objects there is an abbreviation key/value and a ParentScale key with values of Id, ParentScaleTitle, and Subtests. The Subtests value is an array with values of Id and name.

export const allTests = (state = [], action) => {
  switch (action.type) {
    case C.ADD_APPENDIX_TEST:
      //True false variable: Is the "test" (eg, WJ-IV ACH) already in state by comparing it to the payload's test
      const hasTest = state.some(
        t => t.Abbreviation === action.payload.Abbreviation
      );
      console.log("hasTest = ", hasTest);

      return hasTest
        ? allParentScales(state, action)
        : [...state, test(null, action)];
    default:
      return state;
  }
};

export const test = (state = null, action) =>
  action.type === C.ADD_APPENDIX_TEST ? action.payload : state;

export const allParentScales = (state, action) => {
  console.log("allParentScale state = ", state);

  //True false variable: Is the "ParentScale" (eg, Basic Reading Skills) is already in state by comparing it to the payload's test
  const hasParentScale = state.some(test =>
    test.ParentScale.some(
      p => p.ParentScaleTitle === action.payload.ParentScale[0].ParentScaleTitle
    )
  );
  console.log("hasParentScale = ", hasParentScale);

  return hasParentScale
    ? allSubTests(state, action)
    : [...state, state.ParentScale.push(action.payload.ParentScale[0])];

  // switch (action.type) {
  //   case C.ADD_APPENDIX_PARENTSCALE:
  //     return hasParentScale
  //       ? allSubTests(state, action)
  //       : [...state, ParentScale(null, action)];
  //   default:
  //     return state;
  // }
};

// export const ParentScale = (state = null, action) =>
//   action.type === C.ADD_APPENDIX_PARENTSCALE
//     ? action.payload.ParentScale[0]
//     : state;

export const allSubTests = (state, action) => {
  console.log("allSubTests state = ", state);

  //Create an array of the matching ParentScale to the payload
  // const matchParentScale = state.filter(
  //   test =>
  //     test.ParentScale.ParentScaleTitle ===
  //     action.payload.ParentScale[0].ParentScaleTitle
  // );
  const matchParentScale = state.map(test => test.ParentScale).flat();
  console.log("matchParentScale = ", matchParentScale);

  //True false variable: Is the "SubTest" (eg, Word Attack) already in state by comparing it to the payload's test
  // const hasSubTest = matchParentScale.some(p =>
  //   p.Subtests.some(
  //     s => s.name === action.payload.ParentScale[0].SubTests[0].name
  //   )
  // );
  const hasSubTest = false;

  console.log("hasSubTest = ", hasSubTest);
  return hasSubTest
    ? [...state]
    : [
        state.ParentScale[0].SubTests[0].push(
          action.payload.ParentScale[0].SubTests[0]
        )
      ];
  // switch (action.type) {
  //   case C.ADD_APPENDIX_SUBTEST:
  //     return hasSubTest ? [...state] : [...state, SubTest(null, action)];
  //   default:
  //     return state;
  // }
};

export const SubTest = (state = null, action) =>
  action.type === C.ADD_APPENDIX_SUBTEST
    ? action.payload.ParentScale[0].SubTests[0]
    : state;

const appendix = combineReducers({
  domains,
  // subtests,
  Tests: allTests
});

export default appendix;
