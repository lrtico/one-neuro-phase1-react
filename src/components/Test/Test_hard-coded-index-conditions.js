import React from "react";
import { Field } from "redux-form";
import ReactHtmlParser from "react-html-parser";
import "./Test.css";
import SectionSubTitle from "../SectionSubTitle";
import SectionSubHeader from "../SectionSubHeader";
import ButtonToggle from "../ButtonToggle";
import MaterialIcon from "react-google-material-icons";
// import HtmlParser from "react-html-parser/lib/HtmlParser";

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
                  ? t.IndexConditions.map(t => {
                      if (t.Condition === "If FSIQ is meaningful") {
                        return (
                          <div key={t.Id}>
                            <div className="flex flex--center-vertical has-toggle-child">
                              <h5>{t.Condition}</h5>
                              <Field
                                name={`${
                                  t.Id
                                }-${t.Condition.toLowerCase().replace(
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
                                <span>
                                  Overall, (client) demonstrated a consistent
                                  performance on the&nbsp;
                                  {testFromState[0].Abbreviation} and received a
                                  Full-Scale IQ (FSIQ) score of
                                </span>
                                <Field
                                  name={`${
                                    t.Id
                                  }-${testFromState[0].Abbreviation.toLowerCase().replace(
                                    / /g,
                                    "-"
                                  )}-fsiq-score`}
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
                                  )}-fsiq-percentile`}
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
                                  )}-fsiq-range`}
                                  type="text"
                                  component="input"
                                />
                                <span> range of functioning.</span>
                              </p>
                            </div>
                          </div>
                        );
                      } else if (t.Condition === "If FSIQ is NOT meaningful") {
                        return (
                          <div key={t.Id}>
                            <div className="flex flex--center-vertical has-toggle-child">
                              <h5>{t.Condition}</h5>
                              <Field
                                name={`${
                                  t.Id
                                }-${t.Condition.toLowerCase().replace(
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
                                Overall, (client) demonstrated an inconsistent
                                performance on the{" "}
                                {testFromState[0].Abbreviation}. As a result,
                                (his/her) Full-Scale score cannot be interpreted
                                meaningfully due to the significant
                                discrepancies between subtests that constitute
                                (his/her) Full-Scale score (FSIQ). Therefore, in
                                order to better understand (his/her) cognitive
                                strengths and weaknesses, a more in-depth look
                                at all of (client’s) individual subtest scores
                                is warranted.
                              </p>
                            </div>
                            <hr />
                          </div>
                        );
                      } else if (t.Condition === "If GIA is meaningful") {
                        return (
                          <div key={t.Id}>
                            <div className="flex flex--center-vertical has-toggle-child">
                              <h5>{t.Condition}</h5>
                              <Field
                                name={`${
                                  t.Id
                                }-${t.Condition.toLowerCase().replace(
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
                                <span>
                                  Overall, (client) demonstrated a consistent
                                  performance on the&nbsp;
                                  {testFromState[0].Abbreviation} and received a
                                  General Intellectual Ability (GIA) score of
                                </span>
                                <Field
                                  name={`${
                                    t.Id
                                  }-${testFromState[0].Abbreviation.toLowerCase().replace(
                                    / /g,
                                    "-"
                                  )}-gia-score`}
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
                                  )}-gia-percentile`}
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
                                  )}-gia-range`}
                                  type="text"
                                  component="input"
                                />
                                <span> range of functioning.</span>
                              </p>
                            </div>
                          </div>
                        );
                      } else if (t.Condition === "If GIA is NOT meaningful") {
                        return (
                          <div key={t.Id}>
                            <div className="flex flex--center-vertical has-toggle-child">
                              <h5>{t.Condition}</h5>
                              <Field
                                name={`${
                                  t.Id
                                }-${t.Condition.toLowerCase().replace(
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
                                Overall, (client) demonstrated an inconsistent
                                performance on the{" "}
                                {testFromState[0].Abbreviation}. As a result,
                                (his/her) GIA score cannot be interpreted
                                meaningfully due to the significant
                                discrepancies between the seven clusters.
                                Therefore, in order to better understand
                                (his/her) cognitive strengths and weaknesses, a
                                more in-depth look at all of (client’s)
                                individual subtest scores is warranted.
                              </p>
                            </div>
                            <hr />
                          </div>
                        );
                      }
                      return false;
                    })
                  : null}
              </div>
            ))}
            {t.ParentScaleTitles.length > 0
              ? t.ParentScaleTitles.map((t, i) => (
                  <div key={i}>
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
                      {t.ParentScaleDescription !== null ? (
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
                            <span>performance on the subtests.</span>
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
                            {t.Name}
                          </div>
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
                        name={`${t.Id}-${t.Name.toLowerCase().replace(
                          / /g,
                          "-"
                        )}-score`}
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
                                    name={`${
                                      t.Id
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
                                name={`${t.Id}-${t.Name.toLowerCase().replace(
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
