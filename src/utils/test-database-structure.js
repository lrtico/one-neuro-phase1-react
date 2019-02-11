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

//Appendicies initial state
state = {
  appendicies: [
    {
      Abbreviation: "WISC-V",
      Name: "Wechsler Intelligence Scale for Children – Fifth Edition",
      Description: "",
      Id: 1,
      isSelected: false,
      ParentGroupScales: [
        {
          Id: 1,
          ParentGroupScaleName: "General Intelligence & Overall Cognitive Functioning",
          ParentGroupScaleDescription: "Wechsler Intelligence Scale for Children, Fifth Edition (WISC-V)",
          ParentScaleTitles: [ //These objects are shown through action creators onBlur event changing the isSelected flag, adding the scaled score in the payload and using it to change the PercentileRank and Range values in state
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
        },
      ],
      ParentGroupSubTests: [
        {
          Id: 1,
          ParentGroupScaleName: "Verbal and Language-Mediated Tasks and Abilities",
          ParentGroupScaleDescription: "",
          ParentGroupSubScales: [
            {
              ParentGroupSubScaleName: "Verbal Comprehension",
              ParentGroupSubScaleDescription: "WISC-V Verbal Comprehension Subtests Score Summary",
              SubTests: [ //These objects are shown through action creators onBlur event changing the isSelected flag, adding the scaled score in the payload and using it to change the PercentileRank and Range values in state
                {
                  Id: 1,
                  Name: "Similarities",
                  ScaledScore: number,
                  PercentileRank: "",
                  Range: "",
                  isSelected: false
                },
                {
                  Id: 2,
                  Name: "Vocabulary",
                  ScaledScore: number,
                  PercentileRank: "",
                  Range: "",
                  isSelected: false
                },
                {
                  Id: 3,
                  Name: "Information",
                  ScaledScore: null,
                  PercentileRank: "",
                  Range: "",
                  isSelected: false
                },
                {
                  Id: 4,
                  Name: "Comprehension",
                  ScaledScore: null,
                  PercentileRank: "",
                  Range: "",
                  isSelected: false
                }
              ],
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
          ParentGroupScaleName: "Nonverbal and Visually-Mediated Tasks and Abilities",
          ParentGroupScaleDescription: "",
          ParentGroupSubScales: [
            {
              ParentGroupSubScaleName: "Visual Spatial",
              ParentGroupSubScaleDescription: "WISC-V Visual Spatial Subtests Score Summary",
              SubTests: [ //These objects are shown through action creators onBlur event changing the isSelected flag, adding the scaled score in the payload and using it to change the PercentileRank and Range values in state
                {
                  Id: 3,
                  Name: "Block Design",
                  ScaledScore: null,
                  PercentileRank: "",
                  Range: "",
                  isSelected: false
                },
                {
                  Id: 4,
                  Name: "Vocabulary",
                  ScaledScore: null,
                  PercentileRank: "",
                  Range: "",
                  isSelected: false
                }
              ],
            },
            {
              ParentGroupSubScaleName: "Fluid Reasoning",
              ParentGroupSubScaleDescription: "WISC-V Fluid Reasoning Subtests Score Summary",
              SubTests: [ //These objects are dynmaically added through action creators onBlur event
                {
                  Id: 5,
                  Name: "Matrix Reasoning",
                  ScaledScore: null,
                  PercentileRank: "",
                  Range: "",
                  isSelected: false
                },
                {
                  Id: 6,
                  Name: "Figure Weights",
                  ScaledScore: null,
                  PercentileRank: "",
                  Range: "",
                  isSelected: false
                },
                {
                  Id: 7,
                  Name: "Picture Concepts",
                  ScaledScore: null,
                  PercentileRank: "",
                  Range: "",
                  isSelected: false
                },
                {
                  Id: 8,
                  Name: "Arithmetic",
                  ScaledScore: null,
                  PercentileRank: "",
                  Range: "",
                  isSelected: false
                }
              ],
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
              ParentGroupSubScaleDescription: "WISC-V Working Memory Subtests Score Summary",
              SubTests: [ //These objects are shown through action creators onBlur event changing the isSelected flag, adding the scaled score in the payload and using it to change the PercentileRank and Range values in state
                {
                  Id: 9,
                  Name: "Digit Span",
                  ScaledScore: null,
                  PercentileRank: "",
                  Range: "",
                  isSelected: false
                },
                {
                  Id: 10,
                  Name: "Picture Span",
                  ScaledScore: null,
                  PercentileRank: "",
                  Range: "",
                  isSelected: false
                },
                {
                  Id: 11,
                  Name: "Letter-Number Sequencing",
                  ScaledScore: null,
                  PercentileRank: "",
                  Range: "",
                  isSelected: false
                }
              ],
            },
            {
              ParentGroupSubScaleName: "Processing Speed",
              ParentGroupSubScaleDescription: "WISC-V Processing Speed Subtests Score Summary",
              SubTests: [ //These objects are shown through action creators onBlur event changing the isSelected flag, adding the scaled score in the payload and using it to change the PercentileRank and Range values in state
                {
                  Id: 12,
                  Name: "Coding",
                  ScaledScore: null,
                  PercentileRank: "",
                  Range: "",
                  isSelected: false
                },
                {
                  Id: 13,
                  Name: "Symbol Search",
                  ScaledScore: null,
                  PercentileRank: "",
                  Range: "",
                  isSelected: false
                },
                {
                  Id: 14,
                  Name: "Cancellation",
                  ScaledScore: null,
                  PercentileRank: "",
                  Range: "",
                  isSelected: false
                }
              ],
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
          ParentScaleTitles: [ //These objects are shown through action creators onBlur event changing the isSelected flag, adding the scaled score in the payload and using it to change the PercentileRank and Range values in state
            {
              Id: 7,
              ParentScaleName: "Underresponse",
              TScore: null,
              Range: "",
              isSelected: false
            },
            {
              Id: 8,
              ParentScaleName: "Hyperresponse",
              TScore: null,
              Range: "",
              isSelected: false
            },
            {
              Id: 9,
              ParentScaleName: "Anxiety",
              TScore: null,
              Range: "",
              isSelected: false
            },
            {
              Id: 10,
              ParentScaleName: "Depression",
              TScore: null,
              Range: "",
              isSelected: false
            },
            {
              Id: 11,
              ParentScaleName: "Anger",
              TScore: null,
              Range: "",
              isSelected: false
            },
            {
              Id: 12,
              ParentScaleName: "Posttraumatic Stress",
              TScore: null,
              Range: "",
              isSelected: false
            },
            {
              Id: 13,
              ParentScaleName: "Dissociation",
              TScore: null,
              Range: "",
              isSelected: false
            },
            {
              Id: 14,
              ParentScaleName: "Overt Dissociation",
              TScore: null,
              Range: "",
              isSelected: false
            },
            {
              Id: 15,
              ParentScaleName: "Fantasy",
              TScore: null,
              Range: "",
              isSelected: false
            },
            {
              Id: 16,
              ParentScaleName: "Sexual Concerns",
              TScore: null,
              Range: "",
              isSelected: false
            },
            {
              Id: 17,
              ParentScaleName: "Sexual Preoccupation",
              TScore: null,
              Range: "",
              isSelected: false
            },
            {
              Id: 18,
              ParentScaleName: "Sexual Distress",
              TScore: null,
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
        },
      ],
      ParentGroupSubTests: [],
    }
  ]
}

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


//Recommendation structure
recommendationList: [
  {
    id: 1,
    name: "ADHD",
    selected: false,
    recommendations: [
      {
        recommendationId: "adhd1",
        RecommendationDescription: "Similarly, CLIENT NAME would greatly benefit from continuing to learn and utilizing organizational techniques (i.e., making lists, brainstorming verbally, breaking down large tasks into smaller components) to help CLIENT NAME better manage CLIENT NAME work-related tasks."
      },
      {
        id: "adhd2",
        text: "CLIENT NAME may benefit from seeking out and utilizing individual therapeutic supports to help develop effective coping strategies to manage CLIENT NAME symptoms of anxiety and inattention, as well as build CLIENT NAME self-esteem."
      },
      {
        id: "adhd3",
        text: "CLIENT NAME may also benefit from participating in Neurofeedback to help CLIENT NAME better regulate CLIENT NAME symptoms of anxiety, agitation, and inattention. Neurofeedback is considered a natural treatment for improving attention and self-regulation for individuals who want to take a medication free approach to treatment or to enhance the effects of other treatments they are already receiving. With neurofeedback we are enhancing awareness of internal states by allowing the brain to witness its own EEG activity.  The goal is to allow the nervous system to calm down and reset itself onto a better path. It also addresses and better regulates symptoms of inattention and anxiety."
      },
      {
        id: "adhd4",
        text: "It is recommended that CLIENT NAME receive 50% extended testing time on tests and examinations to help CLIENT NAME illustrate CLIENT NAME knowledge base to the best of CLIENT NAME ability. Extended time would allow CLIENT NAME to take breaks, check CLIENT NAME work, access the full scope of the material presented to CLIENT NAME, and provide CLIENT NAME with the needed time to process the testing material."
      },
      {
        id: "adhd5",
        text: "CLIENT NAME is encouraged to utilize a schedule/planner daily to help CLIENT NAME keep track of important due dates and appointments."
      },
      {
        id: "adhd6",
        text: "Utilize a homework routine to help accomplish  nightly tasks. Example: Allow at most one hour after school to decompress before starting homework. Utilize an alarm to signal when the hour is up so not to lose track of time. To help stay motivated, reward CLIENT NAME during breaks by watching a preferred, short TV show or spending 15-30 minutes in a preferred activity."
      },
      {
        id: "adhd7",
        text: "CLIENT NAME's functional impairments also require that CLIENT NAME be allowed to take examinations in a distraction reduced environment."
      },
      {
        id: "adhd8",
        text: "Given that CLIENT NAME’s symptoms continue to negatively affect CLIENT NAME performance at work, CLIENT NAME may also benefit from a psychiatric consultation to assess whether medication may be an appropriate intervention at this time."
      },
      {
        id: "adhd9",
        text: "CLIENT NAME would benefit from a medication consultation to determine if psychiatric medication would be appropriate at this time to help CLIENT NAME better manage CLIENT NAME symptoms of inattention, anxiety, and agitation."
      },
      {
        id: "adhd10",
        text: "CLIENT NAME is encouraged to sit closer to teacher/speaker, also require that CLIENT NAME be allowed to take examinations in a distraction reduced environment to help guard against lapses in CLIENT NAME attention and concentration."
      },
      {
        id: "adhd11",
        text: "In addressing ADHD symptoms in preschool, children with ADHD commonly have a great need to touch and move. Giving them something to do with their hands and bodies while sitting in class can help them self-regulate, focus, and function better in the classroom. Teachers are encouraged to experiment with sensory strategies and tools, such as the following <ul><li>Velcro adhered to the underside of chair or desk— somewhere that CLIENT NAME can easily reach and discretely rub it to keep CLIENT NAME hands busy.</li><li>Seating options such as a rocking chair,exercise ball, or wiggle cushions.</li><li>Fidget toys (also called sensory toys). Consider looking for resources from companies such as Therapy Shoppe (www.therapyshoppe.com).</li></ul>"
      },
      {
        id: "adhd12",
        text: "CLIENT NAME would also benefit from having an end of the day study hall at school to help complete work."
      },
    ]
  }
]


