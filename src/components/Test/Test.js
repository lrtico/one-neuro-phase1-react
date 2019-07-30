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

const createNameIterator = (id, b = 0) => {
  let newId = id + b;
  return newId;
};

const ReplaceField = ({ d, i, a, n, tn, event, ...props }) => {
  //Redux Form can't parse embedded <Field>s so we have to construct
  //our own string including Field components and return it to the UI
  let str = d;
  let id = i;
  let abbr = a;
  let name = n;
  let testName = tn;
  console.log(`
    *** The replaceField() string passed in is ${str}.
    The id of the clicked test condition is ${id}.
    The Abbreviation is ${a}.
    The IndexName is ${name}.
    The TestName is ${testName}.
  `);

  //Strip out the first part of the condition string to capture the name of the test
  let output = str.substring(0, str.indexOf("<"));

  let score = (
    <Field
      name={`t${id}${abbr
        .toLowerCase()
        .replace(/\(|\)/g, "")
        .replace("-", "")
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join("")}${name
        .toLowerCase()
        .replace("<span>", "")
        .replace("</span>", "")
        .replace(/\(|\)/g, "")
        .replace("-", "")
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join("")}CompositeScore`}
      type="text"
      component="input"
      maxLength={3}
      normalize={onlyNums}
      onBlur={event =>
        props.handleAppendixTestIndexesAdd(id, testName, abbr, name, event)
      }
    />
  );
  let percentile = (
    <Field
      name={`t${id}${abbr
        .toLowerCase()
        .replace(/\(|\)/g, "")
        .replace("-", "")
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join("")}${name
        .toLowerCase()
        .replace("<span>", "")
        .replace("</span>", "")
        .replace(/\(|\)/g, "")
        .replace("-", "")
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join("")}CompositePercentile`}
      type="text"
      component="input"
      maxLength={3}
      normalize={onlyNums}
      onBlur={event =>
        props.handleAppendixTestIndexesAdd(id, testName, abbr, name, event)
      }
    />
  );
  let rank = (
    <Field
      name={`t${id}${abbr
        .toLowerCase()
        .replace(/\(|\)/g, "")
        .replace("-", "")
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join("")}${name
        .toLowerCase()
        .replace("<span>", "")
        .replace("</span>", "")
        .replace(/\(|\)/g, "")
        .replace("-", "")
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join("")}CompositeRange`}
      type="text"
      component="input"
      onBlur={event =>
        props.handleAppendixTestIndexesAdd(id, testName, abbr, name, event)
      }
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
            {t.TestIndexes.map((t, tiIdx) => (
              <div key={t.Id}>
                {t.IndexName === "General Ability Index" ? (
                  <div className="test__list">
                    <SectionSubHeader subHeader={t.IndexName} />
                    <p>
                      <span
                        dangerouslySetInnerHTML={createMarkup(
                          t.IndexDescription
                        )}
                      />{" "}
                      {t.HasInput && (
                        <span>
                          Client name received a Composite score of{" "}
                          <Field
                            name={`t${t.Id}${testFromState[
                              i
                            ].Abbreviation.toLowerCase()
                              .replace("-", "")
                              .split(" ")
                              .map(
                                word =>
                                  word.charAt(0).toUpperCase() + word.slice(1)
                              )
                              .join("")}GaiCompositeScore`}
                            type="text"
                            component="input"
                            maxLength={3}
                            normalize={onlyNums}
                            onBlur={event =>
                              props.handleAppendixTestIndexesAdd(
                                t.Id,
                                testFromState[i].Name,
                                testFromState[i].Abbreviation,
                                t.IndexName,
                                event
                              )
                            }
                          />
                          &nbsp;(
                          <Field
                            name={`t${t.Id}${testFromState[
                              i
                            ].Abbreviation.toLowerCase()
                              .replace("-", "")
                              .split(" ")
                              .map(
                                word =>
                                  word.charAt(0).toUpperCase() + word.slice(1)
                              )
                              .join("")}GaiPercentile`}
                            type="text"
                            component="input"
                            onBlur={event =>
                              props.handleAppendixTestIndexesAdd(
                                t.Id,
                                testFromState[i].Name,
                                testFromState[i].Abbreviation,
                                t.IndexName,
                                event
                              )
                            }
                          />
                          &nbsp; percentile), which falls within in the&nbsp;
                          <Field
                            name={`t${t.Id}${testFromState[
                              i
                            ].Abbreviation.toLowerCase()
                              .replace("-", "")
                              .split(" ")
                              .map(
                                word =>
                                  word.charAt(0).toUpperCase() + word.slice(1)
                              )
                              .join("")}GaiRange`}
                            type="text"
                            component="input"
                            onBlur={event =>
                              props.handleAppendixTestIndexesAdd(
                                t.Id,
                                testFromState[i].Name,
                                testFromState[i].Abbreviation,
                                t.IndexName,
                                event
                              )
                            }
                          />
                          range of functioning compared to other individuals
                          (his/her) age.
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
                        name={`t${t.Id}${testFromState[
                          i
                        ].Abbreviation.toLowerCase()
                          .replace("-", "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}GcaRange`}
                        type="text"
                        component="input"
                        onBlur={event =>
                          props.handleAppendixTestIndexesAdd(
                            t.Id,
                            testFromState[i].Name,
                            testFromState[i].Abbreviation,
                            t.IndexName,
                            event
                          )
                        }
                      />{" "}
                      range DAS-II (GCA score of
                      <Field
                        name={`t${t.Id}${testFromState[
                          i
                        ].Abbreviation.toLowerCase()
                          .replace("-", "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}GcaScore`}
                        type="text"
                        component="input"
                        onBlur={event =>
                          props.handleAppendixTestIndexesAdd(
                            t.Id,
                            testFromState[i].Name,
                            testFromState[i].Abbreviation,
                            t.IndexName,
                            event
                          )
                        }
                      />
                      {", "}
                      <Field
                        name={`t${t.Id}${testFromState[
                          i
                        ].Abbreviation.toLowerCase()
                          .replace("-", "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}GcaPercentile`}
                        type="text"
                        component="input"
                        onBlur={event =>
                          props.handleAppendixTestIndexesAdd(
                            t.Id,
                            testFromState[i].Name,
                            testFromState[i].Abbreviation,
                            t.IndexName,
                            event
                          )
                        }
                      />{" "}
                      percentile) while his/her Special Nonverbal Composite SNC
                      score placed in the{" "}
                      <Field
                        name={`t${t.Id}${testFromState[
                          i
                        ].Abbreviation.toLowerCase()
                          .replace("-", "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}SncRange`}
                        type="text"
                        component="input"
                        onBlur={event =>
                          props.handleAppendixTestIndexesAdd(
                            t.Id,
                            testFromState[i].Name,
                            testFromState[i].Abbreviation,
                            t.IndexName,
                            event
                          )
                        }
                      />{" "}
                      range (DAS-II SNC score of{" "}
                      <Field
                        name={`t${t.Id}${testFromState[
                          i
                        ].Abbreviation.toLowerCase()
                          .replace("-", "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}SncScore`}
                        type="text"
                        component="input"
                        onBlur={event =>
                          props.handleAppendixTestIndexesAdd(
                            t.Id,
                            testFromState[i].Name,
                            testFromState[i].Abbreviation,
                            t.IndexName,
                            event
                          )
                        }
                      />
                      {", "}
                      <Field
                        name={`t${t.Id}${testFromState[
                          i
                        ].Abbreviation.toLowerCase()
                          .replace("-", "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}SncPercentile`}
                        type="text"
                        component="input"
                        onBlur={event =>
                          props.handleAppendixTestIndexesAdd(
                            t.Id,
                            testFromState[i].Name,
                            testFromState[i].Abbreviation,
                            t.IndexName,
                            event
                          )
                        }
                      />{" "}
                      percentile).
                    </div>
                  </div>
                ) : (
                  <div>
                    <SectionSubHeader subHeader={t.IndexName} />
                    <p>{t.IndexDescription}</p>
                  </div>
                )}

                {t.IndexConditions.length > 0
                  ? t.IndexConditions.map(t => (
                      <div key={t.Id}>
                        <div className="flex flex--center-vertical has-toggle-child">
                          <h5>{t.Condition}</h5>
                          <Field
                            name={`t${t.Id}${t.Condition.toLowerCase()
                              .replace("-", "")
                              .split(" ")
                              .map(
                                word =>
                                  word.charAt(0).toUpperCase() + word.slice(1)
                              )
                              .join("")}`}
                            type="checkbox"
                            component="input"
                          />
                        </div>
                        <div className="flex test__list">
                          <MaterialIcon icon="arrow_right" />
                          <p>
                            {t.Condition === "If FSIQ is meaningful" ||
                            t.Condition === "If GIA is meaningful" ? (
                              <ReplaceField
                                d={t.ConditionDescription}
                                i={t.Id}
                                a={testFromState[i].Abbreviation}
                                n={
                                  testFromState[i].TestIndexes[tiIdx].IndexName
                                }
                                tn={testFromState[i].Name}
                                handleAppendixTestIndexesAdd={
                                  props.handleAppendixTestIndexesAdd
                                }
                              />
                            ) : (
                              t.ConditionDescription
                            )}
                          </p>
                        </div>
                        <hr />
                      </div>
                    ))
                  : null}
              </div>
            ))}
            {t.ParentScaleTitles.length > 0
              ? t.ParentScaleTitles.map((t, idx) => (
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
                          name={`t${t.Id}${testFromState[
                            i
                          ].Abbreviation.toLowerCase()
                            .replace(/ /g, "")
                            .replace("-", "")
                            .split(" ")
                            .map(
                              word =>
                                word.charAt(0).toUpperCase() + word.slice(1)
                            )
                            .join("")}${t.ParentScaleName.toLowerCase()
                            .replace("<span>", "")
                            .replace("-", " ")
                            .replace("</span>", "")
                            .replace(":", "")
                            .replace("  ", " ")
                            .replace(/\(|\)/g, "")
                            .split(" ")
                            .map(
                              word =>
                                word.charAt(0).toUpperCase() + word.slice(1)
                            )
                            .join("")}`}
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
                      {/* {t.ParentScaleDescription !== null && (
                        <div>{t.ParentScaleDescription}</div>
                      )} */}
                      {t.HasInput ? (
                        <div className="test__list">
                          {/* {ReactHtmlParser(t.ParentScaleDescription)} */}
                          <p>
                            <span>(Client) demonstrated a relatively</span>
                            <span className="has-toggle-child">
                              <Field
                                name={`t${t.Id}${testFromState[
                                  i
                                ].Abbreviation.toLowerCase()
                                  .replace(/ /g, "")
                                  .replace("-", "")
                                  .split(" ")
                                  .map(
                                    word =>
                                      word.charAt(0).toUpperCase() +
                                      word.slice(1)
                                  )
                                  .join("")}${t.ParentScaleName.toLowerCase()
                                  .replace("<span>", "")
                                  .replace("-", " ")
                                  .replace("</span>", "")
                                  .replace(":", "")
                                  .replace("  ", " ")
                                  .replace(/\(|\)/g, "")
                                  .split(" ")
                                  .map(
                                    word =>
                                      word.charAt(0).toUpperCase() +
                                      word.slice(1)
                                  )
                                  .join("")}Inconsistent`}
                                type="checkbox"
                                component="input"
                              />
                              <span className="has-toggle-child--label">
                                inconsistent
                              </span>
                              <Field
                                name={`t${t.Id}${testFromState[
                                  i
                                ].Abbreviation.toLowerCase()
                                  .replace(/ /g, "")
                                  .replace("-", "")
                                  .split(" ")
                                  .map(
                                    word =>
                                      word.charAt(0).toUpperCase() +
                                      word.slice(1)
                                  )
                                  .join("")}${t.ParentScaleName.toLowerCase()
                                  .replace("<span>", "")
                                  .replace("</span>", "")
                                  .replace("-", " ")
                                  .replace(":", "")
                                  .replace("  ", " ")
                                  .replace(/\(|\)/g, "")
                                  .split(" ")
                                  .map(
                                    word =>
                                      word.charAt(0).toUpperCase() +
                                      word.slice(1)
                                  )
                                  .join("")}Consistent`}
                                type="checkbox"
                                component="input"
                              />
                              <span className="has-toggle-child--label">
                                consistent
                              </span>
                              <Field
                                name={`t${t.Id}${testFromState[
                                  i
                                ].Abbreviation.toLowerCase()
                                  .replace(/ /g, "")
                                  .replace("-", "")
                                  .split(" ")
                                  .map(
                                    word =>
                                      word.charAt(0).toUpperCase() +
                                      word.slice(1)
                                  )
                                  .join("")}${t.ParentScaleName.toLowerCase()
                                  .replace("<span>", "")
                                  .replace("</span>", "")
                                  .replace("-", " ")
                                  .replace(":", "")
                                  .replace("  ", " ")
                                  .replace(/\(|\)/g, "")
                                  .split(" ")
                                  .map(
                                    word =>
                                      word.charAt(0).toUpperCase() +
                                      word.slice(1)
                                  )
                                  .join("")}FreehandPerformance`}
                                type="text"
                                component="input"
                              />
                            </span>
                            <span> performance on the subtests.</span>
                          </p>
                          <p>
                            <span>(Client) received a Composite score of </span>
                            <Field
                              name={`t${t.Id}${testFromState[
                                i
                              ].Abbreviation.toLowerCase()
                                .replace(/ /g, "")
                                .replace("-", "")
                                .split(" ")
                                .map(
                                  word =>
                                    word.charAt(0).toUpperCase() + word.slice(1)
                                )
                                .join("")}${t.ParentScaleName.toLowerCase()
                                .replace("<span>", "")
                                .replace("</span>", "")
                                .replace("-", " ")
                                .replace(":", "")
                                .replace("  ", " ")
                                .replace(/\(|\)/g, "")
                                .split(" ")
                                .map(
                                  word =>
                                    word.charAt(0).toUpperCase() + word.slice(1)
                                )
                                .join("")}CompositeScore`}
                              type="text"
                              component="input"
                              maxLength={3}
                              normalize={onlyNums}
                              onBlur={event =>
                                props.handleAppendixTestIndexesAdd(
                                  t.Id,
                                  testFromState[i].Name,
                                  testFromState[i].Abbreviation,
                                  t.ParentScaleName,
                                  event
                                )
                              }
                            />
                            <span>&nbsp;(</span>
                            <Field
                              name={`t${
                                t.Id
                              }${testFromState[0].Abbreviation.toLowerCase()
                                .replace(/ /g, "")
                                .replace("-", "")
                                .split(" ")
                                .map(
                                  word =>
                                    word.charAt(0).toUpperCase() + word.slice(1)
                                )
                                .join("")}${t.ParentScaleName.toLowerCase()
                                .replace("<span>", "")
                                .replace("</span>", "")
                                .replace("-", " ")
                                .replace(":", "")
                                .replace("  ", " ")
                                .replace(/\(|\)/g, "")
                                .split(" ")
                                .map(
                                  word =>
                                    word.charAt(0).toUpperCase() + word.slice(1)
                                )
                                .join("")}CompositePercentile`}
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
                              name={`t${
                                t.Id
                              }${testFromState[0].Abbreviation.toLowerCase()
                                .replace(/ /g, "")
                                .replace("-", "")
                                .split(" ")
                                .map(
                                  word =>
                                    word.charAt(0).toUpperCase() + word.slice(1)
                                )
                                .join("")}${t.ParentScaleName.toLowerCase()
                                .replace("<span>", "")
                                .replace("</span>", "")
                                .replace("-", " ")
                                .replace(":", "")
                                .replace("  ", " ")
                                .replace(/\(|\)/g, "")
                                .split(" ")
                                .map(
                                  word =>
                                    word.charAt(0).toUpperCase() + word.slice(1)
                                )
                                .join("")}CompositeRange`}
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
                            (t.SubTests.length > 0 &&
                              t.SubTests[0].Description === null) ||
                            (t.Id !== 163 && t.SubTests[0].Description === "")
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
                        {testFromState[i].Abbreviation === "Beery VMI" ||
                        (testFromState[i].Abbreviation === "D-KEFS" &&
                          (t.ParentScaleName ===
                            "Color-Word Interference Test" ||
                            t.ParentScaleName === "Twenty Questions" ||
                            t.ParentScaleName ===
                              "Color-Word Interference Test" ||
                            t.ParentScaleName === "Word Context Test" ||
                            t.ParentScaleName === "Tower Test")) ? (
                          <div />
                        ) : (
                          <div>{testFromState[i].DescriptionType}</div>
                        )}
                      </div>
                      {t.SubTests.map((t, index) => (
                        <div key={t.Id} className="table__row">
                          <div
                            className={
                              t.Name !== "Beery-Motor Coordination" &&
                              (t.Description === null || t.Description === "")
                                ? "table__row__cell--wide"
                                : null
                            }
                            dangerouslySetInnerHTML={createMarkup(t.Name)}
                          />
                          <div>
                            <Field
                              component="input"
                              type="text"
                              name={`t${t.Id}${t.Name.replace("<sup>", "")
                                .replace("</sup>", "")
                                .replace("/", "")
                                .replace(" – ", " ")
                                .replace("{", "")
                                .replace("}", "")
                                .replace("-", " ")
                                .replace(":", "")
                                .replace(/\(|\)/g, "")
                                .split(" ")
                                .map(
                                  word =>
                                    word.charAt(0).toUpperCase() + word.slice(1)
                                )
                                .join("")}Score`}
                              maxLength={3}
                              normalize={onlyNums}
                              onBlur={event =>
                                props.handleAppendixParentScaleTitleSubtestAdd(
                                  t.Id,
                                  testFromState[i].Name,
                                  t.Name,
                                  testFromState[i].ParentScaleTitles[idx]
                                    .ParentScaleName,
                                  testFromState[i].Abbreviation,
                                  event,
                                  t.ParentScaleTitleId
                                )
                              }
                            />
                          </div>
                          <div>
                            {testFromState[i].Abbreviation !== "Beery VMI" &&
                            (testFromState[i].Abbreviation !== "D-KEFS" &&
                              (t.Description === null ||
                                t.Description === "")) &&
                            testFromState[i].Abbreviation !== "PIY" ? (
                              <Field
                                component="input"
                                type="text"
                                name={`t${
                                  t.ParentScaleTitleId
                                }${t.Name.toLowerCase()
                                  .replace(/-/g, " ")
                                  .split(" ")
                                  .map(
                                    word =>
                                      word.charAt(0).toUpperCase() +
                                      word.slice(1)
                                  )
                                  .join("")}PercentileRank`}
                              />
                            ) : testFromState[i].Abbreviation === "PIY" ? (
                              <Field
                                component="input"
                                type="text"
                                name={`t${t.Id}${testFromState[
                                  i
                                ].Abbreviation.toLowerCase()
                                  .split(" ")
                                  .map(
                                    word =>
                                      word.charAt(0).toUpperCase() +
                                      word.slice(1)
                                  )
                                  .join("")}${t.Name.toLowerCase()
                                  .replace(/-/g, " ")
                                  .split(" ")
                                  .map(
                                    word =>
                                      word.charAt(0).toUpperCase() +
                                      word.slice(1)
                                  )
                                  .join("")}PercentileRank`}
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
                  <div>{testFromState[i].ScoreType}</div>
                  {testFromState[i].Abbreviation === "TOMM" ? null : (
                    <div>Description</div>
                  )}
                </div>
                {t.SubTests.map(t => (
                  <div key={t.Id} className="table__row">
                    <div>{t.Name}</div>
                    <div>
                      <Field
                        component="input"
                        type="text"
                        name={`t${t.Id}${t.Name.toLowerCase()
                          .replace(/[/]/g, "")
                          .replace(/[,/]/g, "")
                          .replace(/[’]/g, "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}Score`}
                        maxLength={3}
                        normalize={onlyNums}
                        onBlur={event =>
                          props.handleAppendixSubtestAdd(
                            testFromState[i].Id,
                            testFromState[i].Name,
                            testFromState[i].Abbreviation,
                            t.Id,
                            t.Name,
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
          {t.ParentGroupScales.map((t, pgsIdx) => (
            <div key={t.Id}>
              <h5>{t.ParentGroupScaleName}</h5>
              {t.ParentScaleTitles.length > 0
                ? t.ParentScaleTitles.map((t, pstIdx) => (
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
                                    name={`t${t.Id}${t.Name.toLowerCase()
                                      .replace(/[/]/g, "")
                                      .replace(/[,/]/g, "")
                                      .replace(/[’]/g, "")
                                      .split(" ")
                                      .map(
                                        word =>
                                          word.charAt(0).toUpperCase() +
                                          word.slice(1)
                                      )
                                      .join("")}Score`}
                                    maxLength={3}
                                    normalize={onlyNums}
                                    onBlur={event =>
                                      props.handleAppendixParentGroupScalesParentScaleTitleSubtestAdd(
                                        testFromState[i].Abbreviation,
                                        testFromState[i].Name,
                                        testFromState[i].ParentGroupScales[
                                          pgsIdx
                                        ].Id,
                                        testFromState[i].ParentGroupScales[
                                          pgsIdx
                                        ].ParentGroupScaleName,
                                        t.ParentScaleTitleId,
                                        testFromState[i].ParentGroupScales[
                                          pgsIdx
                                        ].ParentScaleTitles[pstIdx]
                                          .ParentScaleName,
                                        t.Id,
                                        t.Name,
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
              {t.ParentGroupSubScales.map((t, pgssIdx) => (
                <div key={t.Id}>
                  <h6>
                    {t.ParentGroupSubScaleName === "Full Scale"
                      ? null
                      : t.ParentGroupSubScaleName}
                  </h6>
                  {t.ParentScaleTitles.map((t, pstIdx) => (
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
                                  : testFromState[i].SubTestType}
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
                                    name={`t${t.Id}${t.Name.toLowerCase()
                                      .replace(/[/]/g, "")
                                      .replace(/[,/]/g, "")
                                      .replace(/[’]/g, "")
                                      .replace("-", " ")
                                      .split(" ")
                                      .map(
                                        word =>
                                          word.charAt(0).toUpperCase() +
                                          word.slice(1)
                                      )
                                      .join("")}Score`}
                                    maxLength={3}
                                    normalize={onlyNums}
                                    onBlur={event =>
                                      props.handleAppendixParentGroupScalesParentGroupSubScaleSubtestAdd(
                                        testFromState[i].Abbreviation,
                                        testFromState[i].Name,
                                        testFromState[i].ParentGroupScales[
                                          pgsIdx
                                        ].Id,
                                        testFromState[i].ParentGroupScales[
                                          pgsIdx
                                        ].ParentGroupScaleName,
                                        testFromState[i].ParentGroupScales[
                                          pgsIdx
                                        ].ParentGroupSubScales[pgssIdx].Id,
                                        testFromState[i].ParentGroupScales[
                                          pgsIdx
                                        ].ParentGroupSubScales[pgssIdx]
                                          .ParentGroupSubScaleName,
                                        testFromState[i].ParentGroupScales[
                                          pgsIdx
                                        ].ParentGroupSubScales[pgssIdx]
                                          .ParentScaleTitles[pstIdx].Id,
                                        testFromState[i].ParentGroupScales[
                                          pgsIdx
                                        ].ParentGroupSubScales[pgssIdx]
                                          .ParentScaleTitles[pstIdx]
                                          .ParentScaleName,
                                        t.Id,
                                        t.Name,
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
            ? t.ParentGroupSubScales.map((t, pgssIdx) => (
                <div key={t.Id}>
                  <h5>{t.ParentGroupSubScaleName}</h5>
                  {t.ParentScaleTitles.map((t, pstIdx) => (
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
                              props.handleAppendixParentGroupSubScaleSubtestAdd(
                                testFromState[i].ParentGroupSubScales[pgssIdx]
                                  .Id,
                                testFromState[i].ParentGroupSubScales[pgssIdx]
                                  .ParentGroupSubScaleName,
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
                                name={`t${t.Id}${t.Name.toLowerCase()
                                  .replace(/[/]/g, " ")
                                  .replace(/[,/]/g, "")
                                  .replace(/[’]/g, "")
                                  .replace("-", " ")
                                  .split(" ")
                                  .map(
                                    word =>
                                      word.charAt(0).toUpperCase() +
                                      word.slice(1)
                                  )
                                  .join("")}Score`}
                                maxLength={3}
                                normalize={onlyNums}
                                onBlur={event =>
                                  props.handleAppendixParentGroupSubScaleSubtestAdd(
                                    testFromState[i].Abbreviation,
                                    testFromState[i].Name,
                                    testFromState[i].ParentGroupSubScales[
                                      pgssIdx
                                    ].Id,
                                    testFromState[i].ParentGroupSubScales[
                                      pgssIdx
                                    ].ParentGroupSubScaleName,
                                    testFromState[i].ParentGroupSubScales[
                                      pgssIdx
                                    ].ParentScaleTitles[pstIdx].Id,
                                    testFromState[i].ParentGroupSubScales[
                                      pgssIdx
                                    ].ParentScaleTitles[pstIdx].ParentScaleName,
                                    t.Id,
                                    t.Name,
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
            ? t.TestModules.map((t, tmIdx) => (
                <div key={`${t.Id}-${t.Name}`}>
                  <h5>{t.Name}</h5>
                  <p>{t.Descriptions}</p>
                  {t.ParentGroupScales.map((t, pgsIdx) => (
                    <div key={t.Id}>
                      <div className="test-table-heading">
                        <SectionSubHeader subHeader={t.ParentGroupScaleName} />
                      </div>
                      {t.ParentScaleTitles.map((t, pstIdx) => (
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
                                      .replace(/ /g, "-")
                                      .replace(/\(|\)/g, "")}-score`}
                                    maxLength={3}
                                    normalize={onlyNums}
                                    onBlur={event =>
                                      props.handleAppendixTestModulesSubtestAdd(
                                        testFromState[i].Id,
                                        testFromState[i].Abbreviation,
                                        testFromState[i].Name,
                                        testFromState[i].TestModules[tmIdx].Id,
                                        testFromState[i].TestModules[tmIdx]
                                          .Name,
                                        testFromState[i].TestModules[tmIdx]
                                          .ParentGroupScales[pgsIdx].Id,
                                        testFromState[i].TestModules[tmIdx]
                                          .ParentGroupScales[pgsIdx]
                                          .ParentGroupScaleName,
                                        testFromState[i].TestModules[tmIdx]
                                          .ParentGroupScales[pgsIdx]
                                          .ParentScaleTitles[pstIdx].Id,
                                        testFromState[i].TestModules[tmIdx]
                                          .ParentGroupScales[pgsIdx]
                                          .ParentScaleTitles[pstIdx]
                                          .ParentScaleName,
                                        t.Id,
                                        t.Name,
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
            ? t.TestScoringTableDetails.map((t, tstdIdx) => (
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
                  {t.TestScoringTableScores.map((t, tstsIdx) => (
                    <div key={t.Id} className="table__row">
                      {t.Col1 == null ? ( //Does Col1 = null?
                        <div /> //...then add a blank div
                      ) : t.Col1 === "<Field>" ? ( //Does Col1 = "<Field>"?
                        <div>
                          <Field
                            name={`t${createNameIterator(t.Id)}${testFromState[
                              i
                            ].Abbreviation.toLowerCase()
                              .split(" ")
                              .map(
                                word =>
                                  word.charAt(0).toUpperCase() + word.slice(1)
                              )
                              .join("")}${testFromState[
                              i
                            ].TestScoringTableDetails[
                              tstdIdx
                            ].TableHeaderRowTitles.Col1.toLowerCase()
                              .split(" ")
                              .map(
                                word =>
                                  word.charAt(0).toUpperCase() + word.slice(1)
                              )
                              .join("")}Score`}
                            type="text"
                            component="input"
                            maxLength={3}
                            normalize={onlyNums}
                            onBlur={event =>
                              props.handleAppendixTestScoringTableScoresAdd(
                                testFromState[i].Abbreviation,
                                testFromState[i].TestScoringTableDetails[
                                  tstdIdx
                                ].Name,
                                createNameIterator(t.Id),
                                testFromState[i].TestScoringTableDetails[
                                  tstdIdx
                                ].TableHeaderRowTitles.Col1,
                                event
                              )
                            }
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
                            name={`t${createNameIterator(
                              t.Id,
                              1
                            )}${testFromState[i].Abbreviation.toLowerCase()
                              .split(" ")
                              .map(
                                word =>
                                  word.charAt(0).toUpperCase() + word.slice(1)
                              )
                              .join("")}${testFromState[
                              i
                            ].TestScoringTableDetails[0].TableHeaderRowTitles.Col2.toLowerCase()
                              .split(" ")
                              .map(
                                word =>
                                  word.charAt(0).toUpperCase() + word.slice(1)
                              )
                              .join("")}Score`}
                            type="text"
                            component="input"
                            maxLength={3}
                            normalize={onlyNums}
                            onBlur={event =>
                              props.handleAppendixTestScoringTableScoresAdd(
                                testFromState[i].Abbreviation,
                                testFromState[i].TestScoringTableDetails[
                                  tstdIdx
                                ].Name,
                                createNameIterator(t.Id, 1),
                                testFromState[i].TestScoringTableDetails[
                                  tstdIdx
                                ].TableHeaderRowTitles.Col2,
                                event
                              )
                            }
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
                            name={`t${createNameIterator(
                              t.Id,
                              2
                            )}${testFromState[i].Abbreviation.toLowerCase()
                              .split(" ")
                              .map(
                                word =>
                                  word.charAt(0).toUpperCase() + word.slice(1)
                              )
                              .join("")}${testFromState[
                              i
                            ].TestScoringTableDetails[0].TableHeaderRowTitles.Col3.toLowerCase()
                              .split(" ")
                              .map(
                                word =>
                                  word.charAt(0).toUpperCase() + word.slice(1)
                              )
                              .join("")}Score`}
                            type="text"
                            component="input"
                            maxLength={5}
                            normalize={onlyNumsAndRangeCharacters}
                            onBlur={event =>
                              props.handleAppendixTestScoringTableScoresAdd(
                                testFromState[i].Abbreviation,
                                testFromState[i].TestScoringTableDetails[
                                  tstdIdx
                                ].Name,
                                createNameIterator(t.Id, 2),
                                testFromState[i].TestScoringTableDetails[
                                  tstdIdx
                                ].TableHeaderRowTitles.Col3,
                                event
                              )
                            }
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
                            name={`t${createNameIterator(
                              t.Id,
                              3
                            )}${testFromState[i].Abbreviation.toLowerCase()
                              .split(" ")
                              .map(
                                word =>
                                  word.charAt(0).toUpperCase() + word.slice(1)
                              )
                              .join("")}${testFromState[
                              i
                            ].TestScoringTableDetails[0].TableHeaderRowTitles.Col4.toLowerCase()
                              .split(" ")
                              .map(
                                word =>
                                  word.charAt(0).toUpperCase() + word.slice(1)
                              )
                              .join("")}Score`}
                            type="text"
                            component="input"
                            maxLength={5}
                            normalize={onlyNumsAndRangeCharacters}
                            onBlur={event =>
                              props.handleAppendixTestScoringTableScoresAdd(
                                testFromState[i].Abbreviation,
                                testFromState[i].TestScoringTableDetails[
                                  tstdIdx
                                ].Name,
                                createNameIterator(t.Id, 3),
                                testFromState[i].TestScoringTableDetails[
                                  tstdIdx
                                ].TableHeaderRowTitles.Col4,
                                event
                              )
                            }
                          />
                        </div> //...then add a Redux Form Field component
                      ) : (
                        <div>{t.Col4}</div>
                      ) //Fallback to insert string from DB
                      }
                      {t.Col5 == null ? null : t.Col5 === "<Field>" ? ( //Does Col5 = null? //...then skip it //Does Col5 = "<Field>"?
                        <div>
                          <Field
                            name={`t${createNameIterator(
                              t.Id,
                              4
                            )}${testFromState[i].Abbreviation.toLowerCase()
                              .split(" ")
                              .map(
                                word =>
                                  word.charAt(0).toUpperCase() + word.slice(1)
                              )
                              .join("")}${testFromState[
                              i
                            ].TestScoringTableDetails[0].TableHeaderRowTitles.Col5.toLowerCase()
                              .split(" ")
                              .map(
                                word =>
                                  word.charAt(0).toUpperCase() + word.slice(1)
                              )
                              .join("")}Score`}
                            type="text"
                            component="input"
                            maxLength={3}
                            normalize={onlyNums}
                            onBlur={event =>
                              props.handleAppendixTestScoringTableScoresAdd(
                                testFromState[i].Abbreviation,
                                testFromState[i].TestScoringTableDetails[
                                  tstdIdx
                                ].Name,
                                createNameIterator(t.Id, 4),
                                testFromState[i].TestScoringTableDetails[
                                  tstdIdx
                                ].TableHeaderRowTitles.Col5,
                                event
                              )
                            }
                          />
                        </div> //...then add a Redux Form Field component
                      ) : (
                        <div>{t.Col5}</div>
                      ) //Fallback to insert string from DB
                      }
                      {t.Col6 == null ? null : t.Col6 === "<Field>" ? ( //Does Col6 = null? //...then skip it //Does Col6 = "<Field>"?
                        <div>
                          <Field
                            name={`t${createNameIterator(
                              t.Id,
                              5
                            )}${testFromState[i].Abbreviation.toLowerCase()
                              .split(" ")
                              .map(
                                word =>
                                  word.charAt(0).toUpperCase() + word.slice(1)
                              )
                              .join("")}${testFromState[
                              i
                            ].TestScoringTableDetails[0].TableHeaderRowTitles.Col6.toLowerCase()
                              .split(" ")
                              .map(
                                word =>
                                  word.charAt(0).toUpperCase() + word.slice(1)
                              )
                              .join("")}Score`}
                            type="text"
                            component="input"
                            maxLength={3}
                            normalize={onlyNums}
                            onBlur={event =>
                              props.handleAppendixTestScoringTableScoresAdd(
                                testFromState[i].Abbreviation,
                                testFromState[i].TestScoringTableDetails[
                                  tstdIdx
                                ].Name,
                                createNameIterator(t.Id, 5),
                                testFromState[i].TestScoringTableDetails[
                                  tstdIdx
                                ].TableHeaderRowTitles.Col6,
                                event
                              )
                            }
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
                      name={`t${t.Id}${testFromState[i].Abbreviation.charAt(
                        0
                      ).toUpperCase()}${testFromState[i].Abbreviation.slice(1)
                        .toLowerCase()
                        .replace(/ /g, "")
                        .replace("-", "")}SummaryAbilities`}
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
                      name={`t${t.Id}${testFromState[i].Abbreviation.charAt(
                        0
                      ).toUpperCase()}${testFromState[i].Abbreviation.slice(1)
                        .toLowerCase()
                        .replace(/ /g, "")
                        .replace("-", "")}SummaryChallenges`}
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
