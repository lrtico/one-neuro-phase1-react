import React from "react";
import { Field } from "redux-form";
import ReactHtmlParser from "react-html-parser";
import "./Test.css";
import SectionSubTitle from "../SectionSubTitle";
import SectionSubHeader from "../SectionSubHeader";
import ButtonToggle from "../ButtonToggle";
import MaterialIcon from "react-google-material-icons";
// import HtmlParser from "react-html-parser/lib/HtmlParser";

const replaceField = (condition, idx, a) => {
  //Redux Form can't parse embedded <Field>s so we have to construct
  //our own string including Field componentsand return it to the UI
  let str = condition;
  let i = idx;
  let abbr = a;
  console.log(`
    *** The replaceField() string passed in is ${str}.
    The id of the clicked test condition is ${i}.
    The Abbreviation is ${abbr}.
  `);

  //Strip out the first part of the condition string to capture the name of the test
  let output = str.substring(0, str.indexOf("<"));

  let score = (
    <Field
      name={`${i}-${a.toLowerCase()}-fsiq-score`}
      type="text"
      component="input"
    />
  );
  let percentile = (
    <Field
      name={`${i}-${a.toLowerCase()}-fsiq-percentile`}
      type="text"
      component="input"
    />
  );
  let rank = (
    <Field
      name={`${i}-${a.toLowerCase()}-fsiq-rank`}
      type="text"
      component="input"
    />
  );

  return (
    <span>
      {output}
      {score}
      {", ("}
      {percentile}
      {" percentile)"}
      {", which falls within in the "}
      {rank} {"range of functioning."}
    </span>
  );
};

const Test = ({ testFromState, ...props }) => {
  console.log("testsSelected props, ", testFromState);
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
            {t.TestIndexes.map((t, i) => (
              <div key={i}>
                {t.IndexName === "General Ability Index" ? (
                  <div className="test__list">
                    <SectionSubHeader subHeader={t.IndexName} />
                    <p>
                      {ReactHtmlParser(t.IndexDescription)}{" "}
                      <span>
                        Client scored a{" "}
                        <Field
                          name={`${t.Id}-${
                            testFromState[0].Abbreviation
                          }-gai-score`}
                          type="text"
                          component="input"
                        />
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

                {t.IndexConditions.length > 0
                  ? t.IndexConditions.map((t, i) => (
                      <div key={t.Id}>
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
                          <p>
                            {t.Condition === "If FSIQ is meaningful" ||
                            t.Condition === "If GIA is meaningful"
                              ? replaceField(
                                  t.ConditionDescription,
                                  t.Id,
                                  testFromState[i].Abbreviation
                                )
                              : t.ConditionDescription}
                          </p>
                        </div>
                        <hr />
                      </div>
                    ))
                  : null}
              </div>
            ))}
            {t.ParentScaleTitles.length > 0
              ? t.ParentScaleTitles.map(t => (
                  <div key={t.Id}>
                    <div className="test-table-heading">
                      <div className="flex has-toggle-child">
                        <h6 className="h7">
                          {ReactHtmlParser(t.ParentScaleName)}
                        </h6>
                        <Field
                          name={`${t.Id}-${t.ParentScaleName.toLowerCase()
                            .replace(/ /g, "-")
                            .replace("<span>", "")
                            .replace("</span>", "")}`}
                          type="checkbox"
                          component="input"
                        />
                      </div>
                      {t.ParentScaleDescription !== null &&
                      t.ParentScaleDescription.indexOf("<") !== -1 ? (
                        <div className="test__list">
                          {/* {ReactHtmlParser(t.ParentScaleDescription)} */}
                          <p>
                            <span>(Client) demonstrated a relatively</span>
                            <Field
                              name={`${
                                t.Id
                              }-${testFromState[0].Abbreviation.toLowerCase().replace(
                                / /g,
                                "-"
                              )}-${t.ParentScaleName.toLowerCase()
                                .replace(/ /g, "-")
                                .replace("<span>", "")
                                .replace(
                                  "</span>",
                                  ""
                                )}-inconsistent-consistent`}
                              type="text"
                              component="input"
                            />
                            <span>
                              (inconsistent/consistent) performance on the
                              subtests.
                            </span>
                          </p>
                          <p>
                            <span>(Client) received a Composite score of </span>
                            <Field
                              name={`${
                                t.Id
                              }-${testFromState[0].Abbreviation.toLowerCase().replace(
                                / /g,
                                "-"
                              )}-${t.ParentScaleName.toLowerCase()
                                .replace(/ /g, "-")
                                .replace("<span>", "")
                                .replace("</span>", "")}-composite-score`}
                              type="text"
                              component="input"
                            />
                            <span>&nbsp;(</span>
                            <Field
                              name={`${
                                t.Id
                              }-${testFromState[0].Abbreviation.toLowerCase().replace(
                                / /g,
                                "-"
                              )}-${t.ParentScaleName.toLowerCase()
                                .replace(/ /g, "-")
                                .replace("<span>", "")
                                .replace("</span>", "")}-composite-percentile`}
                              type="text"
                              component="input"
                            />
                            <span>
                              &nbsp; percentile), which falls within in
                              the&nbsp;
                            </span>
                            <Field
                              name={`${
                                t.Id
                              }-${testFromState[0].Abbreviation.toLowerCase().replace(
                                / /g,
                                "-"
                              )}-${t.ParentScaleName.toLowerCase()
                                .replace(/ /g, "-")
                                .replace("<span>", "")
                                .replace("</span>", "")}-composite-range`}
                              type="text"
                              component="input"
                            />
                            <span>
                              {" "}
                              range of functioning compared to other adults
                              (his/her) age.
                            </span>
                          </p>
                        </div>
                      ) : null}
                    </div>
                    <div className="test-table">
                      <div className="table__row table__header">
                        <div
                          className={
                            t.SubTests.length > 0 &&
                            t.SubTests[0].Description == null
                              ? "table__row__cell--wide"
                              : null
                          }
                        >
                          {testFromState[0].SubTestType}
                        </div>
                        <div>Score</div>
                        <div>Description</div>
                      </div>
                      {t.SubTests.map(t => (
                        <div key={t.Id} className="table__row">
                          <div
                            className={
                              t.Description == null
                                ? "table__row__cell--wide"
                                : null
                            }
                          >
                            {ReactHtmlParser(t.Name)}
                          </div>
                          <div>
                            <Field
                              component="input"
                              type="text"
                              name={`${
                                t.ParentScaleTitleId
                              }-${t.Name.toLowerCase()
                                .replace("/", "-")
                                .replace(/ /g, "-")}-score`}
                            />
                          </div>
                          <div>
                            {t.Description == null ? (
                              <Field
                                component="input"
                                type="text"
                                name={`${
                                  t.ParentScaleTitleId
                                }-${t.Name.toLowerCase().replace(
                                  / /g,
                                  "-"
                                )}-percentile-rank`}
                              />
                            ) : (
                              ReactHtmlParser(t.Description)
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              : null}
            {t.SubTests.length > 0 ? (
              <div className="test-table">
                <div className="table__row table__header">
                  <div>{testFromState[i].SubTestType}</div>
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
                        name={`${t.Id}-${t.Name.toLowerCase()
                          .replace(/[/]/g, "-")
                          .replace(/[,/]/g, "")
                          .replace(/[’]/g, "")
                          .replace(/ /g, "-")}-score`}
                      />
                    </div>
                    <div>{ReactHtmlParser(t.Description)}</div>
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
                              <div>{testFromState[i].SubTestType}</div>
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
                  <h6>
                    {t.ParentGroupSubScaleName === "Full Scale"
                      ? null
                      : t.ParentGroupSubScaleName}
                  </h6>
                  {t.ParentScaleTitles.map((t, i) => (
                    <div key={i}>
                      {t.SubTests.length > 0 ? (
                        <div>
                          <div className="flex has-toggle-child">
                            <h6 className="h7">{t.ParentScaleName}</h6>
                            <Field
                              name={`${t.Id}-${t.ParentScaleName.toLowerCase()
                                .replace(/[/]/g, "-")
                                .replace(/ /g, "-")}`}
                              type="checkbox"
                              component="input"
                            />
                          </div>
                          <p>{t.ParentScaleDescription}</p>
                          <div className="test-table">
                            <div className="table__row table__header">
                              <div>
                                {t.Id === 85
                                  ? "Index"
                                  : testFromState[0].SubTestType}
                              </div>
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
                                    name={`${t.Id}-${t.Name.toLowerCase()
                                      .replace(/[/]/g, "-")
                                      .replace(/[,/]/g, "")
                                      .replace(/[’]/g, "")
                                      .replace(/ /g, "-")}-score`}
                                  />
                                </div>
                                <div>{ReactHtmlParser(t.Description)}</div>
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
                            name={`${t.Id}-${t.ParentScaleName.toLowerCase()
                              .replace(/[/]/g, "-")
                              .replace(/[,/]/g, "")
                              .replace(/[’]/g, "")
                              .replace(/ /g, "-")}`}
                            type="checkbox"
                            component="input"
                          />
                        </div>
                        <p>{t.ParentScaleDescription}</p>
                      </div>
                      <div className="test-table">
                        <div className="table__row table__header">
                          <div>{testFromState[0].SubTestType}</div>
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
                                name={`${t.Id}-${t.Name.toLowerCase()
                                  .replace(/[/]/g, "-")
                                  .replace(/[,/]/g, "")
                                  .replace(/[’]/g, "")
                                  .replace(/ /g, "-")}-score`}
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
                              <div>{testFromState[0].SubTestType}</div>
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
                                    name={`${t.Id}-${t.Name.toLowerCase()
                                      .replace(/[/]/g, "-")
                                      .replace(/[,/]/g, "")
                                      .replace(/[’]/g, "")
                                      .replace(/ /g, "-")}-score`}
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
                    {t.TableHeaderRowTitles.Col6 == null ? null : (
                      <div>{t.TableHeaderRowTitles.Col6}</div>
                    )}
                  </div>
                  {t.TestScoringTableScores.map((t, i) => (
                    <div key={t.Id} className="table__row">
                      {t.Col1 == null ? ( //Does Col1 = null?
                        <div /> //...then add a blank div
                      ) : t.Col1 === "<Field>" ? ( //Does Col1 = "<Field>"?
                        <div>
                          <Field
                            name={`${t.Id}-${testFromState[
                              i
                            ].Abbreviation.toLowerCase().replace(
                              / /g,
                              "-"
                            )}-${testFromState[
                              i
                            ].TestScoringTableDetails[0].TableHeaderRowTitles.Col1.toLowerCase().replace(
                              / /g,
                              "-"
                            )}`}
                            type="text"
                            component="input"
                          />
                        </div> //...then add a Redux Form Field component
                      ) : (
                        <div>{t.Col1}</div>
                      ) //Fallback to insert string from DB
                      }
                      {t.Col2 == null ? ( //Does Col2 = null?
                        <div /> //...then add a blank div
                      ) : t.Col2 === "<Field>" ? ( //Does Col2 =2 "<Field>"?
                        <div>
                          <Field
                            name={`${t.Id}-${testFromState[
                              i
                            ].Abbreviation.toLowerCase().replace(
                              / /g,
                              "-"
                            )}-${testFromState[
                              i
                            ].TestScoringTableDetails[0].TableHeaderRowTitles.Col2.toLowerCase().replace(
                              / /g,
                              "-"
                            )}`}
                            type="text"
                            component="input"
                          />
                        </div> //...then add a Redux Form Field component
                      ) : (
                        <div>{t.Col2}</div>
                      ) //Fallback to insert string from DB
                      }
                      {t.Col3 == null ? ( //Does Col3 = null?
                        <div /> //...then add a blank div
                      ) : t.Col3 === "<Field>" ? ( //Does Col3 = "<Field>"?
                        <div>
                          <Field
                            name={`${t.Id}-${testFromState[
                              i
                            ].Abbreviation.toLowerCase().replace(
                              / /g,
                              "-"
                            )}-${testFromState[
                              i
                            ].TestScoringTableDetails[0].TableHeaderRowTitles.Col3.toLowerCase().replace(
                              / /g,
                              "-"
                            )}`}
                            type="text"
                            component="input"
                          />
                        </div> //...then add a Redux Form Field component
                      ) : (
                        <div>{t.Col3}</div>
                      ) //Fallback to insert string from DB
                      }
                      {t.Col4 == null ? ( //Does Col4 = null?
                        <div /> //...then add a blank div
                      ) : t.Col4 === "<Field>" ? ( //Does Col4 = "<Field>"?
                        <div>
                          <Field
                            name={`${t.Id}-${testFromState[
                              i
                            ].Abbreviation.toLowerCase().replace(
                              / /g,
                              "-"
                            )}-${testFromState[
                              i
                            ].TestScoringTableDetails[0].TableHeaderRowTitles.Col4.toLowerCase().replace(
                              / /g,
                              "-"
                            )}`}
                            type="text"
                            component="input"
                          />
                        </div> //...then add a Redux Form Field component
                      ) : (
                        <div>{t.Col4}</div>
                      ) //Fallback to insert string from DB
                      }
                      {t.Col5 == null ? null : t.Col5 === "<Field>" ? ( //Does Col5 = null? //...then skip it //Does Col5 = "<Field>"?
                        <div>
                          <Field
                            name={`${t.Id}-${testFromState[
                              i
                            ].Abbreviation.toLowerCase().replace(
                              / /g,
                              "-"
                            )}-${testFromState[
                              i
                            ].TestScoringTableDetails[0].TableHeaderRowTitles.Col5.toLowerCase().replace(
                              / /g,
                              "-"
                            )}`}
                            type="text"
                            component="input"
                          />
                        </div> //...then add a Redux Form Field component
                      ) : (
                        <div>{t.Col5}</div>
                      ) //Fallback to insert string from DB
                      }
                      {t.Col6 == null ? null : t.Col6 === "<Field>" ? ( //Does Col6 = null? //...then skip it //Does Col6 = "<Field>"?
                        <div>
                          <Field
                            name={`${t.Id}-${testFromState[
                              i
                            ].Abbreviation.toLowerCase().replace(
                              / /g,
                              "-"
                            )}-${testFromState[
                              i
                            ].TestScoringTableDetails[0].TableHeaderRowTitles.Col6.toLowerCase().replace(
                              / /g,
                              "-"
                            )}`}
                            type="text"
                            component="input"
                          />
                        </div> //...then add a Redux Form Field component
                      ) : (
                        <div>{t.Col6}</div>
                      ) //Fallback to insert string from DB
                      }
                    </div>
                  ))}
                </div>
              ))
            : null}
          {t.TestSummaries.length > 0
            ? t.TestSummaries.map((t, i) => (
                <div key={i}>
                  <SectionSubHeader subHeader="Summary" />
                  {/* <p className="test__list">
                    {ReactHtmlParser(t.Descriptions)}
                  </p> */}
                  <p className="test__list">
                    <span>
                      Overall, (client’s) performance on the&nbsp;
                      {testFromState[0].Abbreviation} provided a snapshot into
                      (his/her) various cognitive abilities and strengths.
                      (He/She) demonstrated well-developed&nbsp;
                    </span>
                    <Field
                      name={`${
                        t.Id
                      }-${testFromState[0].Abbreviation.toLowerCase().replace(
                        / /g,
                        "-"
                      )}-summary-abilities`}
                      type="text"
                      component="input"
                    />
                    <span> abilities.</span>
                  </p>
                  <p className="test__list">
                    <span>
                      However, (he/she) also evidenced relative challenges
                      with&nbsp;
                    </span>
                    <Field
                      name={`${
                        t.Id
                      }-${testFromState[0].Abbreviation.toLowerCase().replace(
                        / /g,
                        "-"
                      )}-summary-challenges`}
                      type="text"
                      component="input"
                    />
                    <span>
                      . These challenges should continue to be monitored and
                      evaluated so as to help (him/her) continue to perform at
                      (his/her) best.
                    </span>
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
