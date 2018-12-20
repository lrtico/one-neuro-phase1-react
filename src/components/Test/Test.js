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
            <div style={{ marginBottom: "9px" }}>
              {ReactHtmlParser(t.Descriptions)}
            </div>
            {/* <hr /> */}
            {t.TestIndexes.map((t, i) => (
              <div key={i}>
                {t.IndexName === "General Ability Index" ? (
                  <div className="test__list">
                    <SectionSubHeader subHeader={t.IndexName} />
                    <p>
                      {t.IndexDescription}{" "}
                      <span>
                        Client scored a{" "}
                        <Field name="gai-score" type="text" component="input" />
                        .
                      </span>
                    </p>
                  </div>
                ) : (
                  <div>
                    <SectionSubHeader subHeader={t.IndexName} />
                    <p>{t.IndexDescription}</p>
                  </div>
                )}

                {t.IndexConditions.map((t, i) => (
                  <div key={i}>
                    <div className="flex flex--center-vertical has-toggle-child">
                      <h5>{t.Condition}</h5>
                      <Field
                        name={`${t.Id}-${t.Condition.toLowerCase().replace(
                          / /g,
                          "-"
                        )}`}
                        type="checkbox"
                        component="input"
                      />
                    </div>
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
                      <div className="flex has-toggle-child">
                        <h6 className="h7">{t.ParentScaleName}</h6>
                        <Field
                          name={`${
                            t.Id
                          }-${t.ParentScaleName.toLowerCase().replace(
                            / /g,
                            "-"
                          )}`}
                          type="checkbox"
                          component="input"
                        />
                      </div>
                      {t.ParentScaleDescription !== null ? (
                        <div className="test__list">
                          {ReactHtmlParser(t.ParentScaleDescription)}
                        </div>
                      ) : null}
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
                              name={`${
                                t.ParentScaleTitleId
                              }-${t.Name.toLowerCase().replace(
                                / /g,
                                "-"
                              )}-score`}
                            />
                          </div>
                          <div>{ReactHtmlParser(t.Description)}</div>
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
                        name={`${
                          t.ParentScaleTitleId
                        }-${t.Name.toLowerCase().replace(/ /g, "-")}-score`}
                      />
                    </div>
                    <div>{t.Description}</div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          {t.ParentGroupScales.map(t => (
            <div key={t.Id}>
              <h5>{t.ParentGroupScaleName}</h5>
              {t.ParentScaleTitles.length > 0
                ? t.ParentScaleTitles.map(t => (
                    <div key={t.Id}>
                      {t.SubTests.length > 0 ? (
                        <div>
                          <div className="flex has-toggle-child">
                            <h6 className="h7">{t.ParentScaleName}</h6>
                            <Field
                              name={`${
                                t.Id
                              }-${t.ParentScaleName.toLowerCase().replace(
                                / /g,
                                "-"
                              )}`}
                              type="checkbox"
                              component="input"
                            />
                          </div>
                          {t.ParentScaleDescription == null ? null : (
                            <p>{t.ParentScaleDescription}</p>
                          )}
                          <div className="test-table">
                            <div className="table__row table__header">
                              <div>Scale</div>
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
                                    name={`${
                                      t.Id
                                    }-${t.Name.toLowerCase().replace(
                                      / /g,
                                      "-"
                                    )}-score`}
                                  />
                                </div>
                                <div>{t.Description}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div>
                          <h6>{t.ParentScaleName}</h6>
                          <p>{t.ParentScaleDescription}</p>
                        </div>
                      )}
                    </div>
                  ))
                : null}
              {t.ParentGroupSubScales.map((t, i) => (
                <div key={i}>
                  <h6>{t.ParentGroupSubScaleName}</h6>
                  {t.ParentScaleTitles.map((t, i) => (
                    <div key={i}>
                      {t.SubTests.length > 0 ? (
                        <div>
                          <div className="flex has-toggle-child">
                            <h6 className="h7">{t.ParentScaleName}</h6>
                            <Field
                              name={`${
                                t.Id
                              }-${t.ParentScaleName.toLowerCase().replace(
                                / /g,
                                "-"
                              )}`}
                              type="checkbox"
                              component="input"
                            />
                          </div>
                          <p>{t.ParentScaleDescription}</p>
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
                                    name={`${
                                      t.Id
                                    }-${t.Name.toLowerCase().replace(
                                      / /g,
                                      "-"
                                    )}-score`}
                                  />
                                </div>
                                <div>{t.Description}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div>
                          <h6>{t.ParentScaleName}</h6>
                          <p>{t.ParentScaleDescription}</p>
                        </div>
                      )}
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
                        <div className="flex has-toggle-child">
                          <h6 className="h7">{t.ParentScaleName}</h6>
                          <Field
                            name={`${
                              t.Id
                            }-${t.ParentScaleName.toLowerCase().replace(
                              / /g,
                              "-"
                            )}`}
                            type="checkbox"
                            component="input"
                          />
                        </div>
                        <p>{t.ParentScaleDescription}</p>
                      </div>
                      <div className="test-table">
                        <div className="table__row table__header">
                          <div>Scale</div>
                          <div>Score</div>
                          <div>Description</div>
                        </div>
                        {t.SubTests.map((t, i, ParentScaleName) => (
                          <div key={i} className="table__row">
                            <div>{t.Name}</div>
                            <div>
                              <Field
                                component="input"
                                type="text"
                                name={`${
                                  t.Id
                                }-${ParentScaleName}-${t.Name.toLowerCase().replace(
                                  / /g,
                                  "-"
                                )}-score`}
                              />
                            </div>
                            <div>{ReactHtmlParser(t.Description)}</div>
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
                  <h5>{t.Name}</h5>
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
                          <div className="test-table-heading">
                            <div className="flex has-toggle-child">
                              <h6 className="h7">{t.ParentScaleName}</h6>
                              <Field
                                name={`${
                                  t.Id
                                }-${t.ParentScaleName.toLowerCase().replace(
                                  / /g,
                                  "-"
                                )}`}
                                type="checkbox"
                                component="input"
                              />
                            </div>
                            {t.ParentScaleDescription !== null ? (
                              <div className="test__list">
                                {ReactHtmlParser(t.ParentScaleDescription)}
                              </div>
                            ) : null}
                          </div>
                          <div className="test-table">
                            <div className="table__row table__header">
                              <div>Scale</div>
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
                                    name={`${
                                      t.Id
                                    }-${t.Name.toLowerCase().replace(
                                      / /g,
                                      "-"
                                    )}-score`}
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
          {t.TestScoringTableDetails !== null
            ? t.TestScoringTableDetails.map(t => (
                <div key={t.Id} className="test-table test-table--fourCols">
                  <div className="flex has-toggle-child">
                    <h6 className="h7">{t.Name}</h6>
                  </div>
                  <p>{t.Description}</p>
                  {t.ScoreHeader == null ? null : <p>{t.ScoreHeader}</p>}
                  <div className="table__row table__header">
                    {t.TableHeaderRowTitles.Col1 == null ? (
                      <div />
                    ) : (
                      <div>{t.TableHeaderRowTitles.Col1}</div>
                    )}
                    {t.TableHeaderRowTitles.Col2 == null ? (
                      <div />
                    ) : (
                      <div>{t.TableHeaderRowTitles.Col2}</div>
                    )}
                    {t.TableHeaderRowTitles.Col3 == null ? (
                      <div />
                    ) : (
                      <div>{t.TableHeaderRowTitles.Col3}</div>
                    )}
                    {t.TableHeaderRowTitles.Col4 == null ? (
                      <div />
                    ) : (
                      <div>{t.TableHeaderRowTitles.Col4}</div>
                    )}
                    {t.TableHeaderRowTitles.Col5 == null ? null : (
                      <div>{t.TableHeaderRowTitles.Col5}</div>
                    )}
                  </div>
                  {t.TestScoringTableScores.map(t => (
                    <div key={t.Id} className="table__row">
                      {t.Col1 == null ? <div /> : <div>{t.Col1}</div>}
                      {t.Col2 == null ? <div /> : <div>{t.Col2}</div>}
                      {t.Col3 == null ? <div /> : <div>{t.Col3}</div>}
                      {t.Col4 == null ? <div /> : <div>{t.Col4}</div>}
                      {t.Col5 == null ? null : <div>{t.Col5}</div>}
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
