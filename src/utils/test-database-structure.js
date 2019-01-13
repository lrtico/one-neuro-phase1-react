tests: [
  {
    name: "",
    abbreviation: "",
    description: "",
    indexes: [
      {
        indexTitle: "",
        indexDescription: "",
        indexConditions: [
          {
            indexCondition: ""
          }
        ]
      }
    ],
    compositeScore: number,
    compositeScorePercentile: number,
    compositeScoreRange: "",
    parentScaleCategoryTitle: "",
    parentScaleCategoryTitleDescription: "",
    parentScaleGroupTitle: "",
    parentScaleGroupTitleDescription: "",
    parentScaleTitle: "",
    parentScaleDescription: "",
    subtests: [
      {
        subtestTableHeader: [
          {
            subtestTableHeaderName: "",
            subtestTableHeaderScore: "",
            subtestTableHeaderDescription: ""
          }
        ],
        subtestName: "",
        subTestScore: number,
        subTestDescription: ""
      }
    ],
    subtestPerformance: "",
    summary: "",
    summaryInput: "",
    scoringTable: [
      {
        scoringTableTitle: "",
        scoringTableHeader: [
          {
            scoringTableHeaderName: "",
            scoringTableHeaderScore: ""
          }
        ],
        scoringTableName,
        scoringTableScore
      }
    ],
    TestScoringTableDetails: [
      {
        Id: 4,
        Name: null,
        Description: null,
        TestId: 18,
        TableHeaderRowTitles: [
          {
            Name: "Oral measure",
            Id: "some #"
          },
          {
            Name: "Percentile",
            Id: "some #"
          },
          {
            Name: "Age level equivalency",
            Id: "some #"
          },
          {
            Name: "Grade level equivalency",
            Id: "some #"
          }
        ],
        TestScoringTableScores: [
          {
            Id: 33,
            Name: "Rate",
            Description: null,
            ScoringTableHeaderId: 4,
            OrderNumber: 2
          },
          {
            Id: 34,
            Name: "Accuracy",
            Description: null,
            ScoringTableHeaderId: 4,
            OrderNumber: 3
          }
        ]
      }
    ],
    IndexConditions: [
      {
          "Id": 5,
          "Condition": "If FSIQ is meaningful",
          "ConditionDescription": null,
          "ConditionDescriptionScore": "Overall, (client) demonstrated a consistent performance on the WAIS-IV and received a Full-Scale IQ (FSIQ) score of",
          "ConditionDescriptionPercentile": "(percentile),",
          "ConditionDescriptionRange": "which falls within in this range of functioning: ",
          "Score": null,
          "ScorePercentile": null,
          "ScoreRange": null,
          "IndexId": null
      },
      {
          "Id": 6,
          "Condition": "If FSIQ is NOT meaningful",
          "ConditionDescription": "Overall, (client) demonstrated an inconsistent performance on the WAIS-IV. As a result, (his/her) Full-Scale score cannot be interpreted meaningfully due to the significant discrepancies between the four Composite areas that constitute (his/her) Full-Scale score (FSIQ). Therefore, in order to better understand (his/her) cognitive strengths and weaknesses, a more in-depth look at all of (client’s) individual subtest scores is warranted.",
          "ConditionDescriptionScore": null,
          "ConditionDescriptionPercentile": null,
          "ConditionDescriptionRange": null,
          "Score": null,
          "ScorePercentile": null,
          "ScoreRange": null,
          "IndexId": null
      }
    ],
    ParentScaleTitles: [
      {
          "Id": 57,
          "ParentScaleName": "Verbal Comprehension",
          "ParentScaleDescription": null,
          "ParentScaleDescriptionPerformance": "(Client) demonstrated a relatively (consistent/inconsistent):",
          "ParentScaleDescriptionCompositeScore": "Specifically, (she/he) received a VCI Composite score of",
          "ParentScaleDescriptionPercentile": "(percentile),",
          "ParentScaleDescriptionRange": "which falls within in this range of functioning: ",
          "CreatedDate": null,
          "SubTests": [...subtests go here...]
      },
    ]
  }  
];
//When a Test's group of subtests title's checkbox is clicked...
state = {
  appendices: [
    {
      Name: "test name",
      Abbreviation: "test abbreviation",
      SubTests: ["subtest1 name", "subtest2 name"]
    },
    {
      Name: "test name",
      Abbreviation: "test abbreviation",
      SubTests: ["subtest1 name", "subtest2 name"]
    }
  ]
};

// has subtest?
// True = remove subtest from the Array
// if subtest.length = 0, remove the test...Array

// does appendix.name = payload.name ? true = does it have the subtest ? true = remove subtest then check length = 0 true = remove test if length > 0 null 

// does appendix.name = payload.name ? appendix.subtest[] = payload.subtest ? remove subtest : add subtest : add payload to appendix


//(hasTest checks the appendix Name and the payload's name)
//hasSubtest checks the appendix Subtest's array for the payload's subtest.parentScaleName
{
  hasTest && hasSubtest && appendix.subtest.length == 1     //Does the state have the test and Subtest(only that one)? 
  ? state.filter("remove the test object")                  //True, so remove the entire object from the appendix array
  : hasTest && hasSubtest                                   //False, so does the state have the test and the Subtest?
    ? state.filter("remove the subtest")                    //True, so we remove the subtest from the appendix array
    : hasTest && !hasSubtest                               //False, so does the state have the test but not the Subtest?
      ? [...state[indexofthetest].Subtest, action.payload.ParentScaleName] //True, so we add the Subtest to the array
      : [...state, action.payload]  //False, must not have the test or the Subtest so we add a new object to the state
}