import React from "react";
import { Field } from "redux-form";
import SectionSubTitle from "../SectionSubTitle";
import SectionSubHeader from "../SectionSubHeader";
import ButtonToggle from "../ButtonToggle";
import MaterialIcon from "react-google-material-icons";

const Test = ({ testFromState, ...props }) => {
  console.log("testsSelected props, ", props);
  return (
    <div>
      {testFromState.map((t, i) => (
        <div key={i}>
          <SectionSubHeader subHeader={t.DomainName} />
          <div className="flex">
            <SectionSubTitle subTitleBold={t.Abbreviation} />
            <ButtonToggle buttonToggleLabel="Remove test" />
          </div>
          <div className="test-desc">
            <p>{t.Descriptions}</p>
            <hr />
            {t.TestIndexes.map((t, i) => (
              <div key={i}>
                <SectionSubHeader subHeader={t.IndexName} />
                <p>{t.IndexDescription}</p>
                {t.IndexConditions.map((t, i) => (
                  <div key={i}>
                    <h5>{t.Condition}</h5>
                    <div className="flex test__list">
                      <MaterialIcon icon="arrow_right" />
                      <p>{t.ConditionDescription}</p>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            ))}
            {t.ParentScaleTitles.length > 0
              ? t.ParentScaleTitles.map((t, i) => (
                  <div key={i}>
                    <div className="test-table-heading">
                      <SectionSubHeader subHeader={t.ParentScaleName} />
                    </div>
                    <div className="test-table">
                      <div className="table__row table__header">
                        <div>Subtest</div>
                        <div>Score</div>
                        <div>Description</div>
                      </div>
                      {t.SubTests.map((t, i) => (
                        <div key={i} className="table__row">
                          <div>{t.Name}</div>
                          <div>
                            <Field
                              component="input"
                              type="text"
                              name={`${t.ParentScaleTitleId}-${t.Name}-score`}
                            />
                          </div>
                          <div>{t.Description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              : null}
            {t.SubTests.length > 0 ? (
              <div className="test-table">
                <div className="table__row table__header">
                  <div>Subtest</div>
                  <div>Score</div>
                  <div>Description</div>
                </div>
                {t.SubTests.map((t, i) => (
                  <div key={i} className="table__row">
                    <div>{t.Name}</div>
                    <div>
                      <Field
                        component="input"
                        type="text"
                        name={`${t.Name}-score`}
                      />
                    </div>
                    <div>{t.Description}</div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          {t.ParentGroupScales.map((t, i) => (
            <div key={i}>
              <SectionSubTitle subTitleBold={t.ParentGroupScaleName} />
              {t.ParentGroupSubScales.map((t, i) => (
                <div key={i}>
                  {t.ParentScaleTitles.map((t, i) => (
                    <div key={i}>
                      <div className="test-table-heading">
                        <SectionSubHeader subHeader={t.ParentScaleName} />
                      </div>
                      <div className="test-table">
                        <div className="table__row table__header">
                          <div>Subtest</div>
                          <div>Score</div>
                          <div>Description</div>
                        </div>
                        {t.SubTests.map((t, i) => (
                          <div key={i} className="table__row">
                            <div>{t.Name}</div>
                            <div>
                              <Field
                                component="input"
                                type="text"
                                name={`${t.Name}-score`}
                              />
                            </div>
                            <div>{t.Description}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
          {t.ParentGroupSubScales.length > 0
            ? t.ParentGroupSubScales.map((t, i) => (
                <div key={i}>
                  <SectionSubTitle subTitleBold={t.ParentGroupSubScaleName} />
                  {t.ParentScaleTitles.map((t, i) => (
                    <div key={i}>
                      <div className="test-table-heading">
                        <SectionSubHeader subHeader={t.ParentScaleName} />
                      </div>
                      <div className="test-table">
                        <div className="table__row table__header">
                          <div>Scale</div>
                          <div>Score</div>
                          <div>Common Characteristics of High Scorers</div>
                        </div>
                        {t.SubTests.map((t, i) => (
                          <div key={i} className="table__row">
                            <div>{t.Name}</div>
                            <div>
                              <Field
                                component="input"
                                type="text"
                                name={`${t.Name}-score`}
                              />
                            </div>
                            <div>{t.Description}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))
            : null}
          {t.TestScoringTableHeaders.length > 0
            ? t.TestScoringTableHeaders.map((t, i) => (
                <div key={i}>
                  <p>{t.Description}</p>
                  {t.TestScoringTableScores.map((t, i) => (
                    <div className="test-table" key={i}>
                      <div className="table__row table__header">
                        <div>{t.Col1}</div>
                        <div>{t.Col2}</div>
                        <div>{t.Col3}</div>
                        <div>{t.Col4}</div>
                      </div>
                      <div className="table__row">
                        <div>{t.Col1}</div>
                        <div>{t.Col2}</div>
                        <div>{t.Col3}</div>
                        <div>{t.Col4}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ))
            : null}
          {t.TestSummaries.length > 0
            ? t.TestSummaries.map((t, i) => (
                <div key={i}>
                  <SectionSubHeader subHeader="Summary" />
                  <p>{t.Descriptions}</p>
                </div>
              ))
            : null}
        </div>
      ))}
    </div>
  );
};

export default Test;
