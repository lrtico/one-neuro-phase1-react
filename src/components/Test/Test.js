import React from "react";
import { Field } from "redux-form";
//import ReactHtmlParser from "react-html-parser";
import "./Test.css";
import SectionSubTitle from "../SectionSubTitle";
import SectionSubHeader from "../SectionSubHeader";
import Textarea from "../Textarea/Textarea";
import MaterialIcon from "react-google-material-icons";
import { onlyNums, onlyNumsAndRangeCharacters } from "../../utils/Normalize";
// import HtmlParser from "react-html-parser/lib/HtmlParser";

const replaceField = (condition, idx, a) => {
  //Redux Form can't parse embedded <Field>s so we have to construct
  //our own string including Field components and return it to the UI
  let str = condition;
  let i = idx;
  //let abbr = a;
  // console.log(`
  //   *** The replaceField() string passed in is ${str}.
  //   The id of the clicked test condition is ${i}.
  //   The Abbreviation is ${abbr}.
  // `);

  //Strip out the first part of the condition string to capture the name of the test
  let output = str.substring(0, str.indexOf("<"));

  let score = (
    <Field
      name={`${i}-${a
        .toLowerCase()
        .replace(/\(|\)/g, "")
        .replace(/ /g, "-")}-fsiq-score`}
      type="text"
      component="input"
      maxLength={3}
      normalize={onlyNums}
    />
  );
  let percentile = (
    <Field
      name={`${i}-${a
        .toLowerCase()
        .replace(/\(|\)/g, "")
        .replace(/ /g, "-")}-fsiq-percentile`}
      type="text"
      component="input"
      maxLength={3}
      normalize={onlyNums}
    />
  );
  let rank = (
    <Field
      name={`${i}-${a
        .toLowerCase()
        .replace(/\(|\)/g, "")
        .replace(/ /g, "-")}-fsiq-rank`}
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

const createMarkup = text => {
  return { __html: text };
};

const Test = ({ testFromState, ...props }) => {
  // console.log("testsFromState Tests Component's props, ", testFromState);
  return (
    <div>
      {testFromState.map((t, i) => (
        <div key={i}>
          <SectionSubHeader subHeader={t.DomainName} />
          <div className="flex">
            <SectionSubTitle
              subTitleBold={t.Name}
              subtitleAbbreviation={t.Abbreviation}
            />
            {/* <ButtonToggle buttonToggleLabel="Remove test" /> */}
          </div>
          <div className="test-desc">
            <div
              style={{ marginBottom: "9px" }}
              dangerouslySetInnerHTML={createMarkup(t.Descriptions)}
            />
            {t.TestIndexes.map((t, i) => (
              <div key={i}>
                {t.IndexName === "General Ability Index" ? (
                  <div className="test__list">
                    <SectionSubHeader subHeader={t.IndexName} />
                    <p>
                      <span
                        dangerouslySetInnerHTML={createMarkup(
                          t.IndexDescription
                        )}
                      />
                      .{" "}
                      {t.HasInput && (
                        <span>
                          Client name's GAI places him/her in the{" "}
                          <Field
                            name={`${
                              t.Id
                            }-${testFromState[0].Abbreviation.toLowerCase()}-gai-range`}
                            type="text"
                            component="input"
                          />
                          range and at the{" "}
                          <Field
                            name={`${
                              t.Id
                            }-${testFromState[0].Abbreviation.toLowerCase()}-gai-percentile`}
                            type="text"
                            component="input"
                          />
                          percentile.
                        </span>
                      )}
                    </p>
                  </div>
                ) : t.IndexName === "General Conceptual Ability" ? (
                  <div>
                    <SectionSubHeader subHeader={t.IndexName} />
                    <div className="test__list">
                      CLIENT NAME's GCA score on the DAS-II places him/her in
                      the{" "}
                      <Field
                        name={`${
                          t.Id
                        }-${testFromState[0].Abbreviation.toLowerCase()}-gca-range`}
                        type="text"
                        component="input"
                      />{" "}
                      range DAS-II GCA score of
                      <Field
                        name={`${
                          t.Id
                        }-${testFromState[0].Abbreviation.toLowerCase()}-gca-score`}
                        type="text"
                        component="input"
                      />
                      {", "}
                      <Field
                        name={`${
                          t.Id
                        }-${testFromState[0].Abbreviation.toLowerCase()}-gca-percentile`}
                        type="text"
                        component="input"
                      />{" "}
                      percentile while his/her Special Nonverbal Composite SNC
                      score placed in the{" "}
                      <Field
                        name={`${
                          t.Id
                        }-${testFromState[0].Abbreviation.toLowerCase()}-snc-range`}
                        type="text"
                        component="input"
                      />{" "}
                      range DAS-II SNC score of{" "}
                      <Field
                        name={`${
                          t.Id
                        }-${testFromState[0].Abbreviation.toLowerCase()}-snc-score`}
                        type="text"
                        component="input"
                      />
                      {", "}
                      <Field
                        name={`${
                          t.Id
                        }-${testFromState[0].Abbreviation.toLowerCase()}-snc-percentile`}
                        type="text"
                        component="input"
                      />{" "}
                      percentile.
                    </div>
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
                        <h6
                          className="h7"
                          dangerouslySetInnerHTML={createMarkup(
                            t.ParentScaleName
                          )}
                        />
                        <Field
                          name={`${t.Id}-${t.ParentScaleName.toLowerCase()
                            .replace(/ /g, "-")
                            .replace("<span>", "")
                            .replace("</span>", "")
                            .replace(/\(|\)/g, "")}`}
                          type="checkbox"
                          component="input"
                          onChange={event =>
                            props.handleAppendixAdd(
                              t.Id,
                              t.ParentScaleName,
                              testFromState[i].Abbreviation,
                              testFromState[i].Name,
                              event
                            )
                          }
                        />
                      </div>
                      {t.HasInput ? (
                        <div className="test__list">
                          {/* {ReactHtmlParser(t.ParentScaleDescription)} */}
                          <p>
                            <span>(Client) demonstrated a relatively</span>
                            <span className="has-toggle-child">
                              <Field
                                name={`${
                                  t.Id
                                }-${testFromState[0].Abbreviation.toLowerCase().replace(
                                  / /g,
                                  "-"
                                )}-${t.ParentScaleName.toLowerCase()
                                  .replace(/ /g, "-")
                                  .replace("<span>", "")
                                  .replace("</span>", "")
                                  .replace(/\(|\)/g, "")}-inconsistent`}
                                type="checkbox"
                                component="input"
                              />
                              <span className="has-toggle-child--label">
                                inconsistent
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
                                  .replace("</span>", "")
                                  .replace(/\(|\)/g, "")}-consistent`}
                                type="checkbox"
                                component="input"
                              />
                              <span className="has-toggle-child--label">
                                consistent
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
                                  .replace("</span>", "")
                                  .replace(/\(|\)/g, "")}-freehand-performance`}
                                type="text"
                                component="input"
                              />
                            </span>
                            <span> performance on the subtests.</span>
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
                                .replace("</span>", "")
                                .replace(/\(|\)/g, "")}-composite-score`}
                              type="text"
                              component="input"
                              maxLength={3}
                              normalize={onlyNums}
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
                                .replace("</span>", "")
                                .replace(/\(|\)/g, "")}-composite-percentile`}
                              type="text"
                              component="input"
                              maxLength={3}
                              normalize={onlyNums}
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
                                .replace("</span>", "")
                                .replace(/\(|\)/g, "")}-composite-range`}
                              type="text"
                              component="input"
                            />
                            <span>
                              {" "}
                              range of functioning compared to other individuals
                              (his/her) age.
                            </span>
                          </p>
                        </div>
                      ) : (
                        <div
                          dangerouslySetInnerHTML={createMarkup(
                            t.ParentScaleDescription
                          )}
                        />
                      )}
                    </div>
                    <div className="test-table">
                      <div className="table__row table__header">
                        <div
                          className={
                            t.SubTests.length > 0 &&
                            t.SubTests.Description == null
                              ? "table__row__cell--wide"
                              : null
                          }
                        >
                          {testFromState[i].SubTestType}
                        </div>
                        <div
                          className={
                            testFromState[i].ScoreType === "T-Score"
                              ? "table__row__cell--wide"
                              : null
                          }
                        >
                          {testFromState[i].ScoreType}
                        </div>
                        <div>{testFromState[i].DescriptionType}</div>
                      </div>
                      {t.SubTests.map(t => (
                        <div key={t.Id} className="table__row">
                          <div
                            className={
                              t.Description == null
                                ? "table__row__cell--wide"
                                : null
                            }
                            dangerouslySetInnerHTML={createMarkup(t.Name)}
                          />
                          <div>
                            <Field
                              component="input"
                              type="text"
                              name={`${t.Id}-${t.Name.toLowerCase()
                                .replace("<sup>", "")
                                .replace("</sup>", "")
                                .replace("/", "-")
                                .replace(" – ", "-")
                                .replace(/ /g, "-")
                                .replace("{", "")
                                .replace("}", "")
                                .replace(/\(|\)/g, "")}-score`}
                              maxLength={3}
                              normalize={onlyNums}
                              onBlur={event =>
                                props.handleAppendixSubtestAdd(
                                  t.Id,
                                  t.Name,
                                  testFromState[i].ParentScaleTitles[0]
                                    .ParentScaleName,
                                  testFromState[i].Abbreviation,
                                  event
                                )
                              }
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
                              <span
                                dangerouslySetInnerHTML={createMarkup(
                                  t.Description
                                )}
                              />
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
                {t.SubTests.map(t => (
                  <div key={t.Id} className="table__row">
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
                        maxLength={3}
                        normalize={onlyNums}
                        onBlur={event =>
                          props.handleAppendixSubtestAdd(
                            t.Id,
                            t.Name,
                            testFromState[i].Name,
                            testFromState[i].Abbreviation,
                            event
                          )
                        }
                      />
                    </div>
                    <div
                      dangerouslySetInnerHTML={createMarkup(t.Description)}
                    />
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
                              onClick={event =>
                                props.handleAppendixAdd(
                                  t.Id,
                                  t.ParentScaleName,
                                  testFromState[i].Abbreviation,
                                  testFromState[i].Name,
                                  event
                                )
                              }
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
                            {t.SubTests.map(t => (
                              <div key={t.Id} className="table__row">
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
                                    maxLength={3}
                                    normalize={onlyNums}
                                    onBlur={event =>
                                      props.handleAppendixSubtestAdd(
                                        t.Id,
                                        t.Name,
                                        testFromState[i].ParentGroupScales[0]
                                          .ParentScaleTitles[0].ParentScaleName,
                                        testFromState[i].Abbreviation,
                                        event
                                      )
                                    }
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
              {t.ParentGroupSubScales.map(t => (
                <div key={t.Id}>
                  <h6>
                    {t.ParentGroupSubScaleName === "Full Scale"
                      ? null
                      : t.ParentGroupSubScaleName}
                  </h6>
                  {t.ParentScaleTitles.map(t => (
                    <div key={t.Id}>
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
                              onClick={event =>
                                props.handleAppendixAdd(
                                  t.Id,
                                  t.ParentScaleName,
                                  testFromState[i].Abbreviation,
                                  testFromState[i].Name,
                                  event
                                )
                              }
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
                            {t.SubTests.map(t => (
                              <div key={t.Id} className="table__row">
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
                                    maxLength={3}
                                    normalize={onlyNums}
                                    onBlur={event =>
                                      props.handleAppendixSubtestAdd(
                                        t.Id,
                                        t.Name,
                                        testFromState[i].ParentGroupScales[0]
                                          .ParentGroupSubScales[0]
                                          .ParentScaleTitles[0].ParentScaleName,
                                        testFromState[i].Abbreviation,
                                        event
                                      )
                                    }
                                  />
                                </div>
                                <div
                                  dangerouslySetInnerHTML={createMarkup(
                                    t.Description
                                  )}
                                />
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
            ? t.ParentGroupSubScales.map(t => (
                <div key={t.Id}>
                  <h5>{t.ParentGroupSubScaleName}</h5>
                  {t.ParentScaleTitles.map(t => (
                    <div key={t.Id}>
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
                            onClick={event =>
                              props.handleAppendixAdd(
                                t.Id,
                                t.ParentScaleName,
                                testFromState[i].Abbreviation,
                                testFromState[i].Name,
                                event
                              )
                            }
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
                        {t.SubTests.map(t => (
                          <div key={t.Id} className="table__row">
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
                                maxLength={3}
                                normalize={onlyNums}
                                onBlur={event =>
                                  props.handleAppendixSubtestAdd(
                                    t.Id,
                                    t.Name,
                                    testFromState[i].ParentGroupSubScales[0]
                                      .ParentScaleTitles[0].ParentScaleName,
                                    testFromState[i].Abbreviation,
                                    event
                                  )
                                }
                              />
                            </div>
                            <div
                              dangerouslySetInnerHTML={createMarkup(
                                t.Description
                              )}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))
            : null}
          {t.TestModules.length > 0
            ? t.TestModules.map(t => (
                <div key={t.Id}>
                  <h5>{t.Name}</h5>
                  <p>{t.Descriptions}</p>
                  {t.ParentGroupScales.map(t => (
                    <div key={t.Id}>
                      <div className="test-table-heading">
                        <SectionSubHeader subHeader={t.ParentGroupScaleName} />
                      </div>
                      {t.ParentScaleTitles.map(t => (
                        <div key={t.Id}>
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
                                onClick={event =>
                                  props.handleAppendixAdd(
                                    t.Id,
                                    t.ParentScaleName,
                                    testFromState[i].Abbreviation,
                                    testFromState[i].Name,
                                    event
                                  )
                                }
                              />
                            </div>
                            {t.ParentScaleDescription !== null ? (
                              <div
                                className="test__list"
                                dangerouslySetInnerHTML={createMarkup(
                                  t.ParentScaleDescription
                                )}
                              />
                            ) : null}
                          </div>
                          <div className="test-table">
                            <div className="table__row table__header">
                              <div>{testFromState[0].SubTestType}</div>
                              <div>Score</div>
                              <div>Description</div>
                            </div>
                            {t.SubTests.map(t => (
                              <div key={t.Id} className="table__row">
                                <div>{t.Name}</div>
                                <div>
                                  <Field
                                    component="input"
                                    type="text"
                                    name={`${t.Id}-${t.Name.toLowerCase()
                                      .replace(/[/]/g, "-")
                                      .replace(/[,/]/g, "")
                                      .replace(/[’]/g, "")
                                      .replace(/ /g, "-")
                                      .replace(/\(|\)/g, "")}-score`}
                                    maxLength={3}
                                    normalize={onlyNums}
                                    onBlur={event =>
                                      props.handleAppendixSubtestAdd(
                                        t.Id,
                                        t.Name,
                                        testFromState[i].TestModules[0]
                                          .ParentGroupScales[0]
                                          .ParentScaleTitles[0].ParentScaleName,
                                        testFromState[i].Abbreviation,
                                        event
                                      )
                                    }
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
                  {t.TestScoringTableScores.map(t => (
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
                            maxLength={3}
                            normalize={onlyNums}
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
                            maxLength={3}
                            normalize={onlyNums}
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
                            maxLength={5}
                            normalize={onlyNumsAndRangeCharacters}
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
                            maxLength={5}
                            normalize={onlyNumsAndRangeCharacters}
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
                            maxLength={3}
                            normalize={onlyNums}
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
                            maxLength={3}
                            normalize={onlyNums}
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
            ? t.TestSummaries.map(t => (
                <div key={t.Id}>
                  <SectionSubHeader subHeader="Summary" />
                  {/* <p className="test__list">
                    {ReactHtmlParser(t.Descriptions)}
                  </p> */}
                  <p className="test__list">
                    <span>
                      Overall, (client’s) performance on the&nbsp;
                      {testFromState[0].Abbreviation} provided a snapshot into
                      (his/her) various cognitive abilities and strengths.
                      (He/She) demonstrated well-developed
                    </span>
                  </p>
                  <div
                    className="flex"
                    style={{ marginBottom: 36, alignItems: "flex-end" }}
                  >
                    <Field
                      name={`${
                        t.Id
                      }-${testFromState[0].Abbreviation.toLowerCase().replace(
                        / /g,
                        "-"
                      )}-summary-abilities`}
                      type="text"
                      component={Textarea}
                      classes="domain__test__summary-textarea"
                      rows="1"
                    />
                    <span>&nbsp;abilities.</span>
                  </div>
                  <p className="test__list">
                    <span>
                      However, (he/she) also evidenced relative challenges with
                    </span>
                  </p>
                  <div style={{ marginBottom: 36 }}>
                    <Field
                      name={`${
                        t.Id
                      }-${testFromState[0].Abbreviation.toLowerCase().replace(
                        / /g,
                        "-"
                      )}-summary-challenges`}
                      type="text"
                      component={Textarea}
                      classes="domain__test__summary-textarea"
                      rows="1"
                    />
                  </div>
                  <p>
                    These challenges should continue to be monitored and
                    evaluated so as to help (him/her) continue to perform at
                    (his/her) best.
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
