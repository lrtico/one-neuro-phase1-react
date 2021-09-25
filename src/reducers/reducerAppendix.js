/* eslint-disable no-restricted-syntax */
/* eslint-disable no-case-declarations */
import { combineReducers } from 'redux';
import C from '../actions/constants';

// const initialState = {
//   tests: []
// };

// export const domains = (state = initialState, action) => {
//   switch (action.type) {
//     case C.REMOVE_APPENDIX_DOMAIN:
//       console.log("Remove appendix case: ", action.payload);

//       //Two options. Either remove the subtest or the entire test
//       // let value = "Validity Scales";
//       // let arr = ["Validity Scales", "Clinical Scales"];
//       // arr = arr.filter(item => item !== value);
//       // console.log("arr", arr);
//       // pass a function to map
//       //const map1 = array1.map(item => console.log(item));
//       let removedTest = state.tests;
//       removedTest.forEach(function(item) {
//         item.DomainsOverall = item.DomainsOverall.filter(
//           domain =>
//             domain.parentScaleName !==
//             action.payload.DomainsOverall[0].parentScaleName
//         );
//       });

//       console.log("state after removing subtest = ", state);

//       return { tests: removedTest };

//     case C.ADD_APPENDIX_DOMAIN:
//       //Find the index of the test in state by matching it to the payload's test
//       console.log("Reducer Appendix state = ", state);
//       let idx = state.tests.findIndex(
//         t => t.Abbreviation === action.payload.Abbreviation
//       );
//       const hasTest = state.tests.some(
//         t => t.Abbreviation === action.payload.Abbreviation
//       );

//       console.log(
//         `
//           - Action payload = ${JSON.stringify(action.payload)}
//           - Action DomainsOverall payload = ${JSON.stringify(
//             action.payload.DomainsOverall[0]
//           )}
//           - Action payload's id = ${action.payload.Id}
//           - Index of the matching test in state (-1 if none) = ${idx}
//           - State = ${JSON.stringify(state)}
//           - Result of hasTest = ${hasTest}
//         `
//       );

//       //If the state already has the test that was sent by the dispatch,
//       //I want to insert the payload's subtest string into the existing test's SubTest array
//       //let updateSubtestArray = state.appendices.filter();

//       //First, check and see if the abbreviations match. if they do, then check and see if the subtest is there.
//       //If it is, remove it. If it isn't, add it.
//       //If the abbreviations don't match, add a whole new object with the entire payload.

//       let newData = state.tests.map(item => {
//         if (item.Abbreviation === action.payload.Abbreviation) {
//           item.DomainsOverall.push(action.payload.DomainsOverall[0]);
//           return item;
//         }
//         return item;
//       });
//       console.log("New array for ADD_APPENDIX mutation: ", newData);

//       return hasTest
//         ? { tests: newData }
//         : { tests: [...state.tests, action.payload] };

//     // case 'update': {
//     //   state.byHash[action.id] = {
//     //     ...state.byHash[action.id],
//     //     ...action.payload
//     //   }
//     //   return {
//     //     ...state
//     //   }
//     // }

//     // case 'add': {
//     //   return {
//     //     byId: [ ...state.byId, action.id],
//     //     byHash: {
//     //       ...state.byHash,
//     //       [action.id]: action.payload
//     //     }
//     //   }
//     // }

//     // state = {
//     //   appendices: [
//     //     {
//     //       Name: "test name",
//     //       Abbreviation: "TSCC",
//     //       SubTests: [ "Validity Scale", "Clinical Scale" ]
//     //     },
//     //     {
//     //       Name: "test name",
//     //       Abbreviation: "MMPI-A",
//     //       SubTests: [ "Clinical" ]
//     //     }
//     //   ]
//     // };

//     // return hasTest
//     //   ? {
//     //       appendices: [
//     //         ...state.appendices,
//     //         ...state.appendices[idx].SubTests[0].concat(
//     //           action.payload.SubTests
//     //         )
//     //       ]
//     //     }
//     //   : {
//     //       appendices: [...state.appendices, action.payload]
//     //     };

//     // return hasTest && hasSubTest
//     //   ? state.filter(t => t.Abbreviation !== action.payload.Abbreviation)
//     //   : hasTest && !hasSubTest
//     //   ? [...state, ...state[idx].SubTests, action.payload.SubTests[0]]
//     //   : [...state, action.payload];

//     // return hasTest && hasSubTest && subTestLength() === 1 //Does the state have the test and Subtest(only that one)?
//     //   ? state.filter(t => t.Id !== action.payload.Id) //True && true && true, so remove the entire object from the appendix array
//     //   : hasTest && hasSubTest //False, so does the state have the test and the Subtest?
//     //   ? state[idx]
//     //       .map(t => t.SubTests)
//     //       .filter(t => t !== action.payload.ParentScaleName) //True, so we remove the subtest from the appendix array
//     //   : hasTest && !hasSubTest //False, so does the state have the test but not the Subtest?
//     //   ? [...state, ...state[idx].SubTests, action.payload.ParentScaleName] //True, so we add the Subtest to the array
//     //   : [...state, action.payload]; //False, must not have the test or the Subtest so we add a new object to the state

//     default:
//       return state;
//   }
// };

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

export const allTests = (state = [], action) => {
  switch (action.type) {
    case C.ADD_APPENDIX_TEST:
      // True false variable: Is the "test" (eg, WJ-IV ACH) already in state by comparing it to the payload's test
      const hasTest = state.some((t) => t.Abbreviation === action.payload.Abbreviation);
      console.log('hasTest = ', hasTest);

      // The WJ-IV is in state already, so we test to see if the payload's parent scale is in state...
      // If it is, then add the payload's subtest to the existing parent scale's subtest array

      console.log('Appendix state before match logic, state =', state, 'action =', action);
      // console.log(
      //   `
      //     - Action payload = ${JSON.stringify(action.payload)}
      //   `
      // );

      // let foo = state.map((item, i) =>
      //   item.ParentScale.map(parentscale => {
      //     console.log("foo ParentScale, ", parentscale);
      //     if (
      //       parentscale.ParentScaleTitle ===
      //       action.payload.ParentScale[0].ParentScaleTitle
      //     ) {
      //       console.log("ParentScaleTitle match", parentscale.ParentScaleTitle);
      //       parentscale.SubTests.push(
      //         action.payload.ParentScale[0].SubTests[0]
      //       );
      //       console.log("After appendix does match, ", state);
      //       return parentscale;
      //     } else {
      //       console.log(
      //         "ParentScaleTitle doesn't match, ",
      //         parentscale.ParentScaleTitle
      //       );
      //       state[i].ParentScale.push(action.payload.ParentScale[0]);
      //       console.log("After appendix doesn't match, ", state);
      //       return parentscale;
      //     }
      //   })
      // );

      /*
        Take an object from the parent scale array
        - If the payload's parent scale title = the iterated state's item's parent scale title, add the
          payload to the subtest array in the parent scale array
        - If the payload's parent scale title = the current iterated state's parent scale title && the
          payload's parent scale title doesn't match any of the other iterated state's parent scale titles,
          add a new parent scale title object to the state array
      */

      if (hasTest) {
        for (const item of state) {
          console.log('Test Name = ', item.TestName);

          if (
            item.ParentGroupSubScales !== undefined &&
            item.TestName === action.payload.TestName
          ) {
            console.log('ParentGroupSubScales.length > 0 Wax on');
            // for (let subscale of item.ParentGroupSubScales) {
            //   console.log("ParentGroupSubScales for loop begin...", subscale);

            // If this subscale.ParentGroupSubScaleName = action.payload.ParentGroupSubScales[0].ParentGroupSubScaleName
            // Then I need to test the state for the payload's parentScaleName
            // If that returns true, put the payload into that object's SubTests array
            // If it's falsy, keep testing until it returns true or there's no match
            // If there's no match at all, add the payload as a new parentScale
            // or...
            // If this subscale.ParentGroupSubScaleName != action.payload.parentGroupSubScaleName
            // keep testing the other ParentGroupSubScales

            item.ParentGroupSubScales.forEach((p, i) => {
              console.log('%d: %s', i, p);
              if (
                p.ParentGroupSubScaleName ===
                action.payload.ParentGroupSubScales[0].ParentGroupSubScaleName
              ) {
                // Yes, the ParentGroupSubScale exists, next check if the parent scales exist
                p.ParentScale.map((parentscale, i) => {
                  console.log(
                    'state.ParentGroupSubScale.ParentScale mapped, ',
                    `${parentscale} subscale ${i}`,
                  );
                  if (
                    parentscale.ParentScaleTitle ===
                    action.payload.ParentGroupSubScales[0].ParentScale[0].ParentScaleTitle
                  ) {
                    console.log(
                      'ParentScaleTitle match',
                      `${parentscale.ParentScaleTitle} parentgroupsubscale.parentscale ${i}`,
                    );
                    parentscale.SubTests.push(
                      action.payload.ParentGroupSubScales[0].ParentScale[0].SubTests[0],
                    );
                    console.log('After appendix does match, ', state);
                    return parentscale;
                  }
                  if (i + 1 !== p.ParentScale.length) {
                    // it's not the last subscale so exit this parent scale and go to the next
                    console.log(
                      "There's more ParentGroupSubScales to test, so exit this ParentGroupSubScale",
                      i + 1,
                    );
                    return parentscale;
                  }
                  if (item.Abbreviation !== action.payload.Abbreviation) {
                    console.log(
                      "The payload is a test that isn't in state yet, so we exit and test the next item in state",
                      +' ParentGroupSubScale ',
                      +i,
                    );
                    return parentscale;
                  }
                  console.log(
                    "ParentScaleTitle doesn't match and this subscale is the last in the parent scale array so we add a new object to the ParentScale array, ",
                    parentscale.ParentScaleTitle,
                  );
                  p.ParentScale.push(action.payload.ParentGroupSubScales[0].ParentScale[0]);
                  console.log("After appendix doesn't match, ", state);
                  return parentscale;
                }); // end map
              } else if (i + 1 !== item.ParentGroupSubScales.length) {
                // it doesn't match and it's not the last ParentGroupSubScale so exit this parent scale and go to the next
                console.log("There's more ParentGroupSubScales to test, so exit this one", i + 1);
                return p;
              } else {
                // It doesn't match, and since there aren't any more items in the ParentGroupSubScales array, it's not there so add it as a new object in the array
                console.log(
                  "ParentGroupSubScales[0].ParentGroupSubScaleName doesn't match and this ParentGroupSubScale is the last in the ParentGroupSubScales array, so add a new object to the ParentGroupSubScales array ",
                  p.ParentGroupSubScaleName,
                );
                item.ParentGroupSubScales.push(action.payload.ParentGroupSubScales[0]);
                console.log("After appendix doesn't match, ", state);
                return p;
              }
            }); // end forEach
          } // End of state.ParentGroupSubScales iteration

          if (item.ParentGroupScales !== undefined && item.TestName === action.payload.TestName) {
            console.log('ParentGroupScales.length > 0 Wax on');
            item.ParentGroupScales.forEach((p, i) => {
              console.log('%d: %s', i, p);
              if (
                p.ParentGroupScaleName === action.payload.ParentGroupScales[0].ParentGroupScaleName
              ) {
                // Yes, the ParentGroupScale exists/matches the payload
                console.log("item.ParentGroupScaleName = payload's ParentGroupScaleName");

                // Now check if the payload has a ParentScaleTitle or ParentGroupSubScale subtest
                if (
                  p.ParentScaleTitles !== undefined &&
                  action.payload.ParentGroupScales[0].ParentScaleTitles.length > 0
                ) {
                  // Yes, there is a ParentScaleTitles array and in state and the payload so we run the logic to figure out what to do with the payload
                  p.ParentScaleTitles.forEach((parentTitle, pstIdx) => {
                    console.log(
                      "iterated ParentGroupSubScale's and the ParentScaleTitles exists in state, so iterate the ParentScaleTitles array",
                      `${parentTitle} parentTitle ${pstIdx}`,
                    );
                    if (
                      parentTitle.ParentScaleName ===
                      action.payload.ParentGroupScales[0].ParentScaleTitles[0].ParentScaleName
                    ) {
                      console.log(
                        'ParentGroupScale.ParentScaleTitle.ParentScaleName match',
                        parentTitle.ParentScaleName,
                      );
                      // Yes the parentscaletitle matches, so I need to map over the subtests to determine if the payload's subtest is already in state
                      parentTitle.SubTests.map((subTest, sIdx) => {
                        console.log('state SubTests mapped, ', `${subTest} item ${i}`);
                        if (
                          subTest.Name ===
                          action.payload.ParentGroupScales[0].ParentScaleTitles[0].SubTests[0].name
                        ) {
                          // The subtest is already in state, so exit the loop
                          console.log(
                            'ParentGroupScale.ParentScaleTitles.SubTest already exists',
                            `${subTest.name} item ${i}`,
                          );
                          return subTest;
                        }
                        if (sIdx + 1 !== parentTitle.SubTests.length) {
                          // No match, but it's not the last item so exit this SubTest and go to the next one
                          console.log("There's more items to test, so exit this item", sIdx + 1);
                          return subTest;
                        }
                        console.log("SubTest isn't in the state, so we add it, ", subTest.name);
                        parentTitle.SubTests.push(
                          action.payload.ParentGroupScales[0].ParentScaleTitles[0].SubTests[0],
                        );
                        console.log(
                          'After adding ParentGroupScale.ParentScaleTitles.SubTest to appendix state, ',
                          state,
                        );
                        return subTest;
                      }); // end ParentScaleTitles.SubTests map
                    } else if (pstIdx + 1 !== p.ParentScaleTitles.length) {
                      // it's not the last ParentScaleTitle so exit this ParentScaleTitle and go to the next
                      console.log(
                        'There are more ParentGroupScale.ParentScaleTitles to test, so exit this ParentScaleTitle',
                        pstIdx + 1,
                      );
                      return parentTitle;
                    } else if (item.Abbreviation !== action.payload.Abbreviation) {
                      console.log(
                        "The payload is a test that isn't in state yet, so we exit and test the next item in state",
                        +' ParentScaleTitle ',
                        +pstIdx,
                      );
                      return parentTitle;
                    } else if (
                      parentTitle.SubTests.some(
                        (t) =>
                          t.name ===
                          action.payload.ParentGroupScales[0].ParentScaleTitles[0].SubTests[0].name,
                      )
                    ) {
                      // Check if the subtest was added in the previous block of if conditions...
                      console.log(
                        "Yes, the subtest was just added so we're exiting the ParentGroupScales.ParentScaleTitles iteration",
                      );
                      return parentTitle;
                    } else {
                      console.log(
                        "ParentScaleTitle doesn't match and this ParentGroupScales.ParentScaleTitle is the last in the ParentScaleTitles array so we add a new ParentScaleTitle to the ParentScaleTitles array, ",
                        parentTitle.ParentScaleName,
                      );
                      p.ParentScaleTitles.push(
                        action.payload.ParentGroupScales[0].ParentScaleTitles[0],
                      );
                      console.log(
                        "After ParentGroupScales.ParentScaleTitles test doesn't match, ",
                        state,
                      );
                      return parentTitle;
                    }
                  }); // end ParentGroupScales.ParentScaleTitles forEach
                } else {
                  // This payload doesn't contain a ParentScaleTitles array, so next check if the ParentGroupSubScale.ParentGroupSubScaleName matches
                  p.ParentGroupSubScales.forEach((subscale, pgssIdx) => {
                    console.log(
                      "Enter ParentGroupSubScales iteration because ParentGroupScales.ParentScaleTitles doesn't exist in the payload, %d: %s",
                      pgssIdx,
                      subscale,
                    );
                    if (
                      subscale.ParentGroupSubScaleName ===
                      action.payload.ParentGroupScales[0].ParentGroupSubScales[0]
                        .ParentGroupSubScaleName
                    ) {
                      // Yes, the ParentGroupSubScale matches the payload
                      // ...next check if the ParentScaleTitle matches the payload
                      subscale.ParentScaleTitles.forEach((parentTitle, pstIdx) => {
                        console.log(
                          "iterated ParentGroupSubScale's ParentGroupSubScaleName matches the payload's, iterate the ParentScaleTitles array",
                          `${parentTitle} subscale ${pstIdx}`,
                        );
                        if (
                          parentTitle.ParentScaleName ===
                          action.payload.ParentGroupScales[0].ParentGroupSubScales[0]
                            .ParentScaleTitles[0].ParentScaleName
                        ) {
                          console.log(
                            'ParentGroupScale.ParentGroupSubScale.ParentScaleTitle.ParentScaleName match',
                            parentTitle.ParentScaleName,
                          );
                          // ///////////////////////////////////////
                          // Jackson, the parentscaletitle matches/exists, so I need to map over the subtests to determine if the payload's subtest is already in state...and refactor the map call above to a forEach method
                          parentTitle.SubTests.map((subTest, sIdx) => {
                            console.log('state SubTests mapped, ', `${subTest} item ${i}`);
                            if (
                              subTest.Name ===
                              action.payload.ParentGroupScales[0].ParentGroupSubScales[0]
                                .ParentScaleTitles[0].SubTests[0].name
                            ) {
                              // The subtest is already in state, so exit the loop
                              console.log(
                                'ParentGroupScale.ParentGroupSubScale.ParentScaleTitles.SubTest already exists',
                                `${subTest.name} item ${i}`,
                              );
                              return subTest;
                            }
                            if (sIdx + 1 !== parentTitle.SubTests.length) {
                              // No match, but it's not the last item so exit this SubTest and go to the next one
                              console.log(
                                "There's more items to test, so exit this item",
                                sIdx + 1,
                              );
                              return subTest;
                            }
                            console.log("SubTest isn't in the state, so we add it, ", subTest.name);
                            parentTitle.SubTests.push(
                              action.payload.ParentGroupScales[0].ParentGroupSubScales[0]
                                .ParentScaleTitles[0].SubTests[0],
                            );
                            console.log(
                              'After adding ParentGroupScale.ParentGroupSubScale.ParentScaleTitles.SubTest to appendix state, ',
                              state,
                            );
                            return subTest;
                          }); // end SubTests map
                          // ///////////////////////////////////////
                        } else if (pstIdx + 1 !== subscale.ParentScaleTitles.length) {
                          // it's not the last ParentScaleTitle so exit this ParentScaleTitle and go to the next
                          console.log(
                            "There's more ParentScaleTitles to test, so exit this ParentScaleTitle",
                            pstIdx + 1,
                          );
                          return parentTitle;
                        } else if (item.Abbreviation !== action.payload.Abbreviation) {
                          console.log(
                            "The payload is a test that isn't in state yet, so we exit and test the next item in state",
                            +' ParentGroupSubScale ',
                            +pstIdx,
                          );
                          return parentTitle;
                        } else if (
                          parentTitle.SubTests.some(
                            (t) =>
                              t.name ===
                              action.payload.ParentGroupScales[0].ParentGroupSubScales[0]
                                .ParentScaleTitles[0].SubTests[0].name,
                          )
                        ) {
                          // Check if the subtest was added in the previous block of if conditions...
                          console.log(
                            "Yes, the subtest was just added so we're exiting the ParentScaleTitles iteration",
                          );
                          return parentTitle;
                        } else {
                          console.log(
                            "ParentScaleTitle doesn't match and this ParentScaleTitle is the last in the ParentScaleTitles array so we add a new ParentScaleTitle to the ParentScaleTitles array, ",
                            parentTitle.ParentScaleName,
                          );
                          subscale.ParentScaleTitles.push(
                            action.payload.ParentGroupScales[0].ParentGroupSubScales[0]
                              .ParentScaleTitles[0],
                          );
                          console.log("After ParentScaleTitles test doesn't match, ", state);
                          return parentTitle;
                        }
                      }); // end ParentScaleTitles forEach
                    } else if (pgssIdx + 1 !== p.ParentGroupSubScales.length) {
                      // it doesn't match and it's not the last ParentGroupSubScale so exit this parent scale and go to the next
                      console.log(
                        "There's more ParentGroupSubScales to test, so exit this one",
                        i + 1,
                      );
                      return p;
                    } else {
                      // It doesn't match, and since there aren't any more items in the ParentGroupSubScales array, it's not there so add it as a new object in the array
                      console.log(
                        "ParentGroupSubScales[0].ParentGroupSubScaleName doesn't match and this ParentGroupSubScale is the last in the ParentGroupSubScales array, so add a new object to the ParentGroupSubScales array ",
                        p.ParentGroupSubScaleName,
                      );
                      p.ParentGroupSubScales.push(
                        action.payload.ParentGroupScales[0].ParentGroupSubScales[0],
                      );
                      console.log("After appendix doesn't match, ", state);
                      return p;
                    }
                  }); // end ParentGroupSubScales forEach
                }
              } else if (i + 1 !== item.ParentGroupScales.length) {
                // it doesn't match and it's not the last ParentGroupScale so exit this ParentGroupScale and go to the next
                console.log('There are more ParentGroupScales to test, so exit this one', i + 1);
                return p;
              } else {
                // It doesn't match, and since there aren't any more items in the ParentGroupScales array, it's not there so add it as a new ParentGroupScale in the ParentGroupScales array
                console.log(
                  "ParentGroupScales[0].ParentGroupScaleName doesn't match and this ParentGroupScale is the last in the ParentGroupScales array, so add a new object to the ParentGroupScales array ",
                  p.ParentGroupScaleName,
                );
                item.ParentGroupScales.push(action.payload.ParentGroupScales[0]);
                console.log(
                  "After there aren't any more items in the ParentGroupScales array so we added a new object in the ParentGroupScales array, ",
                  state,
                );
                return p;
              }
            }); // end ParentGroupScales forEach
          } // End of state.ParentGroupScales iteration

          if (item.SubTests !== undefined && item.TestName === action.payload.TestName) {
            item.SubTests.map((subTest, i) => {
              console.log('state SubTests mapped, ', `${subTest} item ${i}`);
              if (
                item.SubTests.some((subtest) => subtest.Name === action.payload.SubTests[0].Name)
              ) {
                // The subtest is already in state, so exit the loop
                console.log(
                  'SubTest already exists',
                  `${subTest.Name} = ${action.payload.SubTests[0].Name}`,
                );
                return subTest;
              }
              if (i + 1 < item.SubTests.length) {
                // No match, but it's not the last item so exit this SubTest and go to the next one
                console.log("There's more items to test, so exit this item", i + 1);
                return subTest;
              }
              console.log("SubTest isn't in the state, so we add it, ", subTest.Name);
              item.SubTests.push(action.payload.SubTests[0]);
              console.log('After adding SubTest to appendix state, ', state);
              return subTest;
            });
          } // end of state.SubTests iteration

          if (
            item.ParentScale !== undefined &&
            action.payload.ParentScale !== undefined &&
            item.TestName === action.payload.TestName &&
            action.payload.TestIndexes === undefined
          ) {
            item.ParentScale.map((parentscale, i) => {
              console.log('state ParentScale mapped, ', `${parentscale} item ${i}`);
              if (parentscale.ParentScaleTitle === action.payload.ParentScale[0].ParentScaleTitle) {
                // The subtest's parent scale is already in state, add this payload's subtest to that parent scale
                console.log('ParentScaleTitle match', `${parentscale.ParentScaleTitle} item ${i}`);
                parentscale.SubTests.push(action.payload.ParentScale[0].SubTests[0]);
                console.log('After appendix does match, ', state);
                return parentscale;
              }
              if (i + 1 !== item.ParentScale.length) {
                // No match, but it's not the last item so exit this parent scale and go to the next one
                console.log("There's more items to test, so exit this item", i + 1);
                return parentscale;
              }
              if (item.Abbreviation !== action.payload.Abbreviation) {
                console.log(
                  "The payload's abbreviation doesn't match this state's item abbreviation so we exit this item and go to the next item in state,",
                  +' item ',
                  +i,
                );
                return parentscale;
              }
              console.log(
                "ParentScaleTitle doesn't match and this item is the last in the parent scale array, ",
                parentscale.ParentScaleTitle,
              );
              item.ParentScale.push(action.payload.ParentScale[0]);
              console.log("After appendix doesn't match, ", state);
              return parentscale;
            });
          } // end of state.ParentScales iteration

          if (item.TestModules !== undefined && item.TestName === action.payload.TestName) {
            console.log('TestModules.length > 0 Wax on');
            // First, check if the TestModule Name is the same as the payload's TestModule[0].Name
            // If falsy and there more items in the TestModules array, exit this item and start over with the next item <<end>>
            // If falsy (no more items), add the payload as a new item in the TestModules array. <<end>>
            // If true (match TestModule[i].Name), then test the state for the payload's ParentScaleTitles[0].ParentScaleName
            // If that returns true, put the payload into that object's SubTests array
            // If it's falsy, keep testing until it returns true or there's no match
            // If there's no match at all, add the payload as a new parentScale
            // or...
            // If this subscale.ParentGroupSubScaleName != action.payload.parentGroupSubScaleName
            // keep testing the other ParentGroupSubScales

            item.TestModules.forEach((tm, i) => {
              console.log('%d: %s', i, tm);

              const hasTestModule = item.TestModules.some(
                (t) => t.Name === action.payload.TestModules[0].Name,
              );
              console.log("TestModule's Name exists, ", hasTestModule);

              if (tm.Name === action.payload.TestModules[0].Name) {
                // Yes, the TestModule exists, next check if the parentGroupScale exist
                tm.ParentGroupScales.forEach((parentGroupScale, pgsIdx) => {
                  console.log(
                    'TestModule already exists in state, initiate state.TestModules.ParentGroupScales forEach loop, ',
                    parentGroupScale + pgsIdx,
                  );
                  if (
                    parentGroupScale.ParentGroupScaleName ===
                    action.payload.TestModules[0].ParentGroupScales[0].ParentGroupScaleName
                  ) {
                    // Yes, the ParentGroupScale exists, so we map over the ParentScaleTitles
                    console.log(
                      'ParentGroupScaleName match',
                      `${parentGroupScale.ParentGroupScaleName} parentgroupsubscale.parentscale ${pgsIdx}`,
                    );
                    parentGroupScale.ParentScaleTitles.map((title, pstIdx) => {
                      console.log(
                        'state.ParentGroupScale.ParentScaleTitles mapped, ',
                        `${title} subscale ${pstIdx}`,
                      );
                      if (
                        title.ParentScaleTitle ===
                        action.payload.TestModules[0].ParentGroupScales[0].ParentScaleTitles[0]
                          .ParentScaleTitle
                      ) {
                        console.log(
                          'ParentScaleTitles.ParentScaleTitle match',
                          title.ParentScaleTitle,
                          pstIdx,
                        );
                        title.SubTests.push(
                          action.payload.TestModules[0].ParentGroupScales[0].ParentScaleTitles[0]
                            .SubTests[0],
                        );
                        console.log('After ParentScaleTitle does match, ', state);
                        return title;
                      }
                      if (pstIdx + 1 !== parentGroupScale.ParentScaleTitles.length) {
                        // it's not the last title item so exit this item and go to the next
                        console.log(
                          "There's more parentGroupScale.ParentScaleTitles to test, so exit this title",
                          pstIdx + 1,
                        );
                        return title;
                      }
                      if (item.Abbreviation !== action.payload.Abbreviation) {
                        console.log(
                          "The payload is a test that isn't in state yet, so we exit and test the next item in state",
                          +' parentGroupScale.ParentScaleTitles ',
                          +pstIdx,
                        );
                        return title;
                      }
                      console.log(
                        "title doesn't match and this title is the last in the parentGroupScale.ParentScaleTitles array so we add a new object to the parentGroupScale.ParentScaleTitles array, ",
                        title.ParentScaleName,
                      );
                      parentGroupScale.ParentScaleTitles.push(
                        action.payload.TestModules[0].ParentGroupScales[0].ParentScaleTitles[0],
                      );
                      console.log("After title doesn't match, ", state);
                      return title;
                    }); // end map
                  } else if (pgsIdx + 1 !== tm.ParentGroupScales.length) {
                    // No, it doesn't match and it's not the last ParentGroupScale so exit this ParentGroupScale and go to the next one
                    return parentGroupScale;
                  } else {
                    // It doesn't match, and since there aren't any more items in the ParentGroupScale array, it's not there so add it as a new object in the array
                    console.log(
                      "Payload's ParentGroupScales[0].ParentGroupScaleName doesn't match and this ParentGroupScale is the last in the ParentGroupScales array, so add a new object to the ParentGroupScales array ",
                      parentGroupScale.ParentGroupScaleName,
                    );
                    tm.ParentGroupScales.push(action.payload.TestModules[0].ParentGroupScales[0]);
                    console.log("After ParentGroupScales check doesn't match, ", state);
                    return parentGroupScale;
                  }
                }); // end ParentGroupScales forEach iteration
              } else if (i + 1 !== item.TestModules.length) {
                // it doesn't match and it's not the last TestModule so exit this TestModule and go to the next one
                console.log("There's more TestModules to test, so exit this one", i + 1);
                return tm;
              }
              if (hasTestModule) {
                console.log(
                  'The payload is a Module that is already in state, so we exit the loop',
                  +tm.Name,
                  +i,
                );
                return tm;
              }
              // It doesn't match, and since there aren't any more items in the TestModules array, it's not there so add it as a new object in the array
              console.log(
                "TestModules[0].Name doesn't match and this TestModule is the last in the TestModules array, so add a new object to the TestModules array ",
                tm.Name,
              );
              item.TestModules.push(action.payload.TestModules[0]);
              console.log("After TestModule check doesn't match, ", state);
              return tm;
            }); // end TestModule forEach iteration
          } // End of state.TestModules iteration

          if (
            item.TestScoringTableScores !== undefined &&
            item.TestName === action.payload.TestName
          ) {
            // map over TestScoringTableScores array
            item.TestScoringTableScores.map((tableScore, i) => {
              console.log('state tableScore mapped, ', `${tableScore} item ${i}`);
              // if the iterated item's "name" = the payload's name, it's already there so exit
              if (tableScore.name === action.payload.TestScoringTableScores[0].name) {
                console.log(
                  "The iterated item's name = the payload's name, it's already there so exit to map ",
                  tableScore,
                );
                return tableScore;
              }
              if (i + 1 !== item.TestScoringTableScores.length) {
                // No match, but there are more items to check, so exit and check the next one
                console.log("There's more items to test, so exit this item", i + 1);
                return tableScore;
              }
              return item.TestScoringTableScores.push(action.payload.TestScoringTableScores[0]);
            });
          } // end of TestScoringTableScores iteration

          if (
            item.TestIndexes !== undefined &&
            item.Abbreviation === action.payload.Abbreviation &&
            action.payload.TestIndexes !== undefined
          ) {
            // map over TestIndexes array
            item.TestIndexes.map((t, i) => {
              console.log('state TestIndexes mapped, ', `${t} indexName ${i}`);
              // if the iterated item's "name" = the payload's name, it's already there so exit
              if (t.IndexName === action.payload.TestIndexes[0].IndexName) {
                console.log(
                  "The iterated indexName's name = the payload's indexName, it's already there so exit to map ",
                  t,
                );
                return t;
              }
              if (action.payload.TestIndexes[0].IndexName === 'General Conceptual Ability (GCA)') {
                // Special case for the DAS-II General Conceptual Ability, exit the loop
                console.log(
                  "Special case for the DAS-II General Conceptual Ability, it's in state so we can exit the loop",
                );
                return t;
              }
              if (i + 1 !== item.TestIndexes.length) {
                // No match, but there are more items to check, so exit and check the next one
                console.log("There's more TestIndexes to test, so exit this item", i + 1);
                return t;
              }
              return item.TestIndexes.push(action.payload.TestIndexes[0]);
            });
          } // end of TestIndexes iteration

          if (
            item.ParentScale === undefined &&
            item.Abbreviation === action.payload.Abbreviation &&
            item.TestIndexes !== undefined &&
            action.payload.ParentScale !== undefined
          ) {
            // The subtest's parent scale is already in state, add this payload's subtest to that parent scale
            console.log(
              "No ParentScale, but there is a TestIndex so we stick the parentscale inside that matched IndexName's item",
              action.payload.ParentScale[0].ParentScaleTitle,
            );
            const ParentScale = [];
            ParentScale.push(action.payload.ParentScale[0]);
            console.log('constant created to hold the payload , ', ParentScale);
            return [{ ...item, ParentScale }];
          } // end of ParentScale empty but TestIndexes not empty iteration

          if (
            item.ParentScale !== undefined &&
            item.ParentGroupScales === undefined &&
            action.payload.ParentGroupScales !== undefined &&
            item.Abbreviation === action.payload.Abbreviation
          ) {
            console.log(
              'ParentScale exists but payload is ParentGroupScales so add ParentGroupScales to state now!',
            );
            const ParentGroupScales = [];
            ParentGroupScales.push(action.payload.ParentGroupScales[0]);
            console.log(
              "There aren't any item.ParentGroupScales so we added a new key and a new object in the key's array, state =",
              state,
            );
            return [{ ...item, ParentGroupScales }];
          } // end of ParentGroupScale empty but ParentScale not empty iteration
        }
      }

      console.log('state outside for loop call: ', state);

      return hasTest ? [...state] : [...state, action.payload];
    default:
      return state;
  }
};

// export const test = (state = null, action) =>
//   action.type === C.ADD_APPENDIX_TEST ? action.payload : state;

const appendix = combineReducers({
  Tests: allTests,
});

export default appendix;

// Latest idea is to go back to allskidays/skidays reducer functions and flatten the state. Create
// reducers for managing the tests and the parentscales. And a redcuer to handle the subtests.
// Then find a way to map over this shape in the appendix to create the UI. Good luck!
