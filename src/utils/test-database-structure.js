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



"Overall, (client) demonstrated a consistent performance on the WISC-V and received a Full-Scale IQ (FSIQ) score of <input type=\"text\" id=\"txtWASI4FullScaleIQScore\" /> (<input type=\"text\" id=\"txtWASI4FullScaleIQPercentile\" /> percentile), which falls within in the <input type=\"text\" id=\"txtWASI4FullScaleIQRange\" /> range of functioning."

"Overall, (client) demonstrated a consistent performance on the WISC-V and received a Full-Scale IQ (FSIQ) score of <Field
name={`${t.Id}-${testFromState[0].Abbreviation.toLowerCase().replace(/ /g, '-')}-fsiq-score`} type='text' component='input'/> (<Field name={`${t.Id}-${testFromState[0].Abbreviation.toLowerCase().replace(/ /g, '-')}-fsiq-percentile`} type='text' component='input'/> percentile), which falls within in the <Field name={`${t.Id}-${testFromState[0].Abbreviation.toLowerCase().replace(/ /g, '-')}-fsiq-range`} type='text' component='input'/> range of functioning."





"Overall, (client) demonstrated a consistent performance on the WISC-V and received a Full-Scale IQ (FSIQ) score of <Field> (<Field> percentile), which falls within in the <Field> range of functioning."