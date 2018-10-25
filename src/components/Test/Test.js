import React from "react";
import { Field } from "redux-form";
import ReactHtmlParser from "react-html-parser";
import "./Test.css";
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
            <div>{ReactHtmlParser(t.Descriptions)}</div>
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
                      <p>{ReactHtmlParser(t.ConditionDescription)}</p>
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
            <div key={t.Id}>
              <h5>{t.ParentGroupScaleName}</h5>
              {t.ParentGroupSubScales.map((t, i) => (
                <div key={i}>
                  <h6>{t.ParentGroupSubScaleName}</h6>
                  {t.ParentScaleTitles.map((t, i) => (
                    <div key={i}>
                      <div>
                        <h6>{t.ParentScaleName}</h6>
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
                  <h5>{t.ParentGroupSubScaleName}</h5>
                  {t.ParentScaleTitles.map((t, i) => (
                    <div key={i}>
                      <div>
                        <h6>{t.ParentScaleName}</h6>
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
          {t.TestModules.length > 0
            ? t.TestModules.map((t, i) => (
                <div key={i}>
                  <SectionSubTitle subTitleBold={t.Name} />
                  <p>{t.Descriptions}</p>
                  {t.ParentGroupScales.map((t, i) => (
                    <div key={i}>
                      <div className="test-table-heading">
                        <SectionSubHeader subHeader={t.ParentGroupScaleName} />
                      </div>
                      {t.ParentScaleTitles.map((t, i) => (
                        <div key={i}>
                          <SectionSubHeader
                            subHeader={t.ParentGroupScaleName}
                          />
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
                  ))}
                </div>
              ))
            : null}

          {t.TestSummaries.length > 0
            ? t.TestSummaries.map((t, i) => (
                <div key={i}>
                  <SectionSubHeader subHeader="Summary" />
                  <p className="test__list">
                    {ReactHtmlParser(t.Descriptions)}
                  </p>
                </div>
              ))
            : null}
        </div>
      ))}
    </div>
  );
};

export default Test;
