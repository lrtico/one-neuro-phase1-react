import { ADD_APPENDIX, REMOVE_APPENDIX_SUBTEST } from "../actions/constants";

const initialState = {
  appendices: [
    {
      Abbreviation: "WISC-V",
      Name: "Wechsler Intelligence Scale for Children – Fifth Edition",
      Description: "",
      Id: 1,
      isSelected: false,
      ParentGroupScales: [
        {
          Id: 1,
          ParentGroupScaleName:
            "General Intelligence & Overall Cognitive Functioning",
          ParentGroupScaleDescription:
            "Wechsler Intelligence Scale for Children, Fifth Edition (WISC-V)",
          ParentScaleTitles: [
            //These objects are shown through action creators onBlur event changing the isSelected flag, adding the scaled score in the payload and using it to change the PercentileRank and Range values in state
            {
              Id: 1,
              ParentScaleName: "Verbal Comprehension",
              CompositeScore: null,
              PercentileRank: "",
              Range: "",
              isSelected: false
            },
            {
              Id: 2,
              ParentScaleName: "Visual Spatial",
              CompositeScore: null,
              PercentileRank: "",
              Range: "",
              isSelected: false
            },
            {
              Id: 3,
              ParentScaleName: "Fluid Reasoning",
              CompositeScore: null,
              PercentileRank: "",
              Range: "",
              isSelected: false
            },
            {
              Id: 4,
              ParentScaleName: "Working Memory",
              CompositeScore: null,
              PercentileRank: "",
              Range: "",
              isSelected: false
            },
            {
              Id: 5,
              ParentScaleName: "Processing Speed",
              CompositeScore: null,
              PercentileRank: "",
              Range: "",
              isSelected: false
            },
            {
              Id: 6,
              ParentScaleName: "Full Scale IQ",
              CompositeScore: null,
              PercentileRank: "",
              Range: "",
              isSelected: false
            }
          ],
          Col1Header: "Index",
          Col2Header: "Composite Score",
          Col3Header: "Percentile Rank",
          Col4Header: "Range",
          Col5Header: "",
          Col6Header: ""
        }
      ],
      ParentGroupSubTests: [
        {
          Id: 1,
          ParentGroupScaleName:
            "Verbal and Language-Mediated Tasks and Abilities",
          ParentGroupScaleDescription: "",
          ParentGroupSubScales: [
            {
              ParentGroupSubScaleName: "Verbal Comprehension",
              ParentGroupSubScaleDescription:
                "WISC-V Verbal Comprehension Subtests Score Summary",
              SubTests: [
                //These objects are shown through action creators onBlur event changing the isSelected flag, adding the scaled score in the payload and using it to change the PercentileRank and Range values in state
                {
                  Id: 1,
                  Name: "Similarities",
                  ScaledScore: "",
                  PercentileRank: "",
                  Range: "",
                  isSelected: false
                },
                {
                  Id: 2,
                  Name: "Vocabulary",
                  ScaledScore: "",
                  PercentileRank: "",
                  Range: "",
                  isSelected: false
                },
                {
                  Id: 3,
                  Name: "Information",
                  ScaledScore: "",
                  PercentileRank: "",
                  Range: "",
                  isSelected: false
                },
                {
                  Id: 4,
                  Name: "Comprehension",
                  ScaledScore: "",
                  PercentileRank: "",
                  Range: "",
                  isSelected: false
                }
              ]
            }
          ],
          Col1Header: "Subtest",
          Col2Header: "Scaled Score",
          Col3Header: "Percentile Rank",
          Col4Header: "Range",
          Col5Header: "",
          Col6Header: ""
        },
        {
          Id: 2,
          ParentGroupScaleName:
            "Nonverbal and Visually-Mediated Tasks and Abilities",
          ParentGroupScaleDescription: "",
          ParentGroupSubScales: [
            {
              ParentGroupSubScaleName: "Visual Spatial",
              ParentGroupSubScaleDescription:
                "WISC-V Visual Spatial Subtests Score Summary",
              SubTests: [
                //These objects are shown through action creators onBlur event changing the isSelected flag, adding the scaled score in the payload and using it to change the PercentileRank and Range values in state
                {
                  Id: 3,
                  Name: "Block Design",
                  ScaledScore: "",
                  PercentileRank: "",
                  Range: "",
                  isSelected: false
                },
                {
                  Id: 4,
                  Name: "Vocabulary",
                  ScaledScore: "",
                  PercentileRank: "",
                  Range: "",
                  isSelected: false
                }
              ]
            },
            {
              ParentGroupSubScaleName: "Fluid Reasoning",
              ParentGroupSubScaleDescription:
                "WISC-V Fluid Reasoning Subtests Score Summary",
              SubTests: [
                //These objects are dynmaically added through action creators onBlur event
                {
                  Id: 5,
                  Name: "Matrix Reasoning",
                  ScaledScore: "",
                  PercentileRank: "",
                  Range: "",
                  isSelected: false
                },
                {
                  Id: 6,
                  Name: "Figure Weights",
                  ScaledScore: "",
                  PercentileRank: "",
                  Range: "",
                  isSelected: false
                },
                {
                  Id: 7,
                  Name: "Picture Concepts",
                  ScaledScore: "",
                  PercentileRank: "",
                  Range: "",
                  isSelected: false
                },
                {
                  Id: 8,
                  Name: "Arithmetic",
                  ScaledScore: "",
                  PercentileRank: "",
                  Range: "",
                  isSelected: false
                }
              ]
            }
          ],
          Col1Header: "Subtest",
          Col2Header: "Scaled Score",
          Col3Header: "Percentile Rank",
          Col4Header: "Range",
          Col5Header: "",
          Col6Header: ""
        },
        {
          Id: 3,
          ParentGroupScaleName: "Executive Functions",
          ParentGroupScaleDescription: "",
          ParentGroupSubScales: [
            {
              ParentGroupSubScaleName: "Working Memory",
              ParentGroupSubScaleDescription:
                "WISC-V Working Memory Subtests Score Summary",
              SubTests: [
                //These objects are shown through action creators onBlur event changing the isSelected flag, adding the scaled score in the payload and using it to change the PercentileRank and Range values in state
                {
                  Id: 9,
                  Name: "Digit Span",
                  ScaledScore: "",
                  PercentileRank: "",
                  Range: "",
                  isSelected: false
                },
                {
                  Id: 10,
                  Name: "Picture Span",
                  ScaledScore: "",
                  PercentileRank: "",
                  Range: "",
                  isSelected: false
                },
                {
                  Id: 11,
                  Name: "Letter-Number Sequencing",
                  ScaledScore: "",
                  PercentileRank: "",
                  Range: "",
                  isSelected: false
                }
              ]
            },
            {
              ParentGroupSubScaleName: "Processing Speed",
              ParentGroupSubScaleDescription:
                "WISC-V Processing Speed Subtests Score Summary",
              SubTests: [
                //These objects are shown through action creators onBlur event changing the isSelected flag, adding the scaled score in the payload and using it to change the PercentileRank and Range values in state
                {
                  Id: 12,
                  Name: "Coding",
                  ScaledScore: "",
                  PercentileRank: "",
                  Range: "",
                  isSelected: false
                },
                {
                  Id: 13,
                  Name: "Symbol Search",
                  ScaledScore: "",
                  PercentileRank: "",
                  Range: "",
                  isSelected: false
                },
                {
                  Id: 14,
                  Name: "Cancellation",
                  ScaledScore: "",
                  PercentileRank: "",
                  Range: "",
                  isSelected: false
                }
              ]
            }
          ],
          Col1Header: "Subtest",
          Col2Header: "Scaled Score",
          Col3Header: "Percentile Rank",
          Col4Header: "Range",
          Col5Header: "",
          Col6Header: ""
        }
      ]
    },
    {
      Abbreviation: "TSCC",
      Name: "Trauma Symptom Checklist for Children",
      Description: "",
      Id: 2,
      isSelected: false,
      ParentGroupScales: [
        {
          Id: 2,
          ParentGroupScaleName: "",
          ParentGroupScaleDescription: "",
          ParentScaleTitles: [
            //These objects are shown through action creators onBlur event changing the isSelected flag, adding the scaled score in the payload and using it to change the PercentileRank and Range values in state
            {
              Id: 7,
              ParentScaleName: "Underresponse",
              TScore: "",
              Range: "",
              isSelected: false
            },
            {
              Id: 8,
              ParentScaleName: "Hyperresponse",
              TScore: "",
              Range: "",
              isSelected: false
            },
            {
              Id: 9,
              ParentScaleName: "Anxiety",
              TScore: "",
              Range: "",
              isSelected: false
            },
            {
              Id: 10,
              ParentScaleName: "Depression",
              TScore: "",
              Range: "",
              isSelected: false
            },
            {
              Id: 11,
              ParentScaleName: "Anger",
              TScore: "",
              Range: "",
              isSelected: false
            },
            {
              Id: 12,
              ParentScaleName: "Posttraumatic Stress",
              TScore: "",
              Range: "",
              isSelected: false
            },
            {
              Id: 13,
              ParentScaleName: "Dissociation",
              TScore: "",
              Range: "",
              isSelected: false
            },
            {
              Id: 14,
              ParentScaleName: "Overt Dissociation",
              TScore: "",
              Range: "",
              isSelected: false
            },
            {
              Id: 15,
              ParentScaleName: "Fantasy",
              TScore: "",
              Range: "",
              isSelected: false
            },
            {
              Id: 16,
              ParentScaleName: "Sexual Concerns",
              TScore: "",
              Range: "",
              isSelected: false
            },
            {
              Id: 17,
              ParentScaleName: "Sexual Preoccupation",
              TScore: "",
              Range: "",
              isSelected: false
            },
            {
              Id: 18,
              ParentScaleName: "Sexual Distress",
              TScore: "",
              Range: "",
              isSelected: false
            }
          ],
          Col1Header: "Scale",
          Col2Header: "T-Score",
          Col3Header: "Range",
          Col4Header: "",
          Col5Header: "",
          Col6Header: ""
        }
      ],
      ParentGroupSubTests: []
    }
  ]
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
          - Action payload = should be true to toggle test's isSelected value
          - Action SubTests payload = should be true to toggle subtest's isSelected value
          - Action payload's id = ${action.payload.Id}
          - Index of the matching test in state (-1 if none) = ${idx}
          - Result of hasTest = ${hasTest}
        `
      );

      //If the state already has the test that was sent by the dispatch,
      //I want to insert the payload's subtest string into the existing test's SubTest array
      //let updateSubtestArray = state.appendices.filter();

      //First, check and see if the abbreviations match. if they do, then check and see if the subtest is there.
      //If it is, remove it. If it isn't, add it.
      //If the abbreviations don't match, add a whole new object with the entire payload.

      // let newData = state.appendices.map(item => {
      //   if (item.Abbreviation === action.payload.Abbreviation) {
      //     item.SubTests.push(action.payload.SubTests[0]);
      //     return item;
      //   }
      //   return item;
      // });
      //console.log("New array for ADD_APPENDIX mutation: ", newData);

      // return hasTest
      //   ? { appendices: newData }
      //   : { appendices: [...state.appendices, action.payload] };
      return state;

    default:
      return state;
  }
};

export default appendixReducer;
