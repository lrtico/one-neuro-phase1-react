import React from "react";
import { connect } from "react-redux";
import { Field } from "redux-form";
import SectionTitle from "../SectionTitle/";
import SectionSubTitle from "../SectionSubTitle/";

const mapStateToProps = state => ({
  tests: state.testsSelectedReducer,
  appendices: state.appendixReducer
});

const createMarkup = text => {
  return { __html: text };
};

const AppendixConnected = (props, values) => {
  console.log("store from index, ", props);
  console.log("Trying to make props go now!", values);
  const { appendices } = props;
  return (
    <div>
      <SectionTitle titleBold="Appendix" titleRegular="of scores" />

      {appendices.Tests.map((t, i) => (
        <div key={`${i}-${t.Id}-subtests`}>
          <div className="flex">
            <SectionSubTitle
              subTitleBold={t.TestName.replace("<span>", "").replace(
                "</span>",
                ""
              )}
              subtitleAbbreviation={t.Abbreviation}
            />
          </div>

          {t.TestIndexes !== undefined && t.TestIndexes.length > 0 ? (
            <div className="test-table test-table--appendix">
              <div className="table__row table__header">
                <div>Index</div>
                <div>Composite Score</div>
                <div>% Rank</div>
                <div>Classification</div>
              </div>
              {t.TestIndexes.map(t => (
                <div
                  key={`${t.Id}-${t.IndexName.toLowerCase()
                    .replace(" – ", "-")
                    .replace(/ /g, "-")
                    .replace("<span>", "")
                    .replace("</span>", "")
                    .replace(/\(|\)/g, "")}}`}
                  className="table__row"
                >
                  <div>
                    {t.IndexName.replace("<span>", "").replace("</span>", "")}
                  </div>
                  <div>
                    {t.IndexName === "Full Scale IQ-4" ||
                    t.IndexName === "Full Scale IQ" ? (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${t.Id}${appendices.Tests[
                          i
                        ].Abbreviation.toLowerCase()
                          .replace(/\(|\)/g, "")
                          .replace("-", "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}${t.IndexName.toLowerCase()
                          .replace("<span>", "")
                          .replace("</span>", "")
                          .replace(/\(|\)/g, "")
                          .replace("-", "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}CompositeScore`}
                      />
                    ) : t.IndexName === "VERBAL  COMPREHENSION INDEX (VCI)" ||
                      t.IndexName === "VISUAL SPATIAL INDEX (VSI)" ||
                      t.IndexName === "FLUID REASONING INDEX (FRI)" ||
                      t.IndexName === "WORKING MEMORY INDEX (WMI)" ||
                      t.IndexName === "PROCESSING SPEED INDEX (PSI)" ? (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${t.Id}${appendices.Tests[
                          i
                        ].Abbreviation.toLowerCase()
                          .replace(/ /g, "")
                          .replace("-", "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}${t.IndexName.toLowerCase()
                          .replace("<span>", "")
                          .replace("</span>", "")
                          .replace(":", "")
                          .replace("  ", " ")
                          .replace(/\(|\)/g, "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}CompositeScore`}
                      />
                    ) : t.IndexName === "General Ability Index" ? (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${t.Id}${appendices.Tests[
                          i
                        ].Abbreviation.toLowerCase()
                          .replace("-", "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}GaiCompositeScore`}
                      />
                    ) : t.IndexName === "General Conceptual Ability (GCA)" ? (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${t.Id}${appendices.Tests[
                          i
                        ].Abbreviation.toLowerCase()
                          .replace(/\(|\)/g, "")
                          .replace(/ /g, "-")
                          .replace("-", "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}GcaScore`}
                      />
                    ) : t.IndexName === "Special Nonverbal Composite (SNC)" ? (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${t.Id}${appendices.Tests[
                          i
                        ].Abbreviation.toLowerCase()
                          .replace(/\(|\)/g, "")
                          .replace("-", "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}SncScore`}
                      />
                    ) : (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${t.Id}${appendices.Tests[
                          i
                        ].Abbreviation.toLowerCase()
                          .replace(/\(|\)/g, "")
                          .replace("-", "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}${t.IndexName.toLowerCase()
                          .replace("<span>", "")
                          .replace("</span>", "")
                          .replace(/\(|\)/g, "")
                          .replace("-", "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}CompositeScore`}
                      />
                    )}
                  </div>
                  <div>
                    {t.IndexName === "Full Scale IQ-4" ||
                    t.IndexName === "Full Scale IQ" ? (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${t.Id}${appendices.Tests[
                          i
                        ].Abbreviation.toLowerCase()
                          .replace(/\(|\)/g, "")
                          .replace("-", "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}${t.IndexName.toLowerCase()
                          .replace("<span>", "")
                          .replace("</span>", "")
                          .replace(/\(|\)/g, "")
                          .replace("-", "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}CompositePercentile`}
                      />
                    ) : t.IndexName === "VERBAL  COMPREHENSION INDEX (VCI)" ||
                      t.IndexName === "VISUAL SPATIAL INDEX (VSI)" ||
                      t.IndexName === "FLUID REASONING INDEX (FRI)" ||
                      t.IndexName === "WORKING MEMORY INDEX (WMI)" ||
                      t.IndexName === "PROCESSING SPEED INDEX (PSI)" ? (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${t.Id}${appendices.Tests[
                          i
                        ].Abbreviation.toLowerCase()
                          .replace(/ /g, "")
                          .replace("-", "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}${t.IndexName.toLowerCase()
                          .replace("<span>", "")
                          .replace("</span>", "")
                          .replace(":", "")
                          .replace("  ", " ")
                          .replace(/\(|\)/g, "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}CompositePercentile`}
                      />
                    ) : t.IndexName === "General Ability Index" ? (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${t.Id}${appendices.Tests[
                          i
                        ].Abbreviation.toLowerCase()
                          .replace("-", "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}GaiPercentile`}
                      />
                    ) : t.IndexName === "General Conceptual Ability (GCA)" ? (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${t.Id}${appendices.Tests[
                          i
                        ].Abbreviation.toLowerCase()
                          .replace(/\(|\)/g, "")
                          .replace(/ /g, "-")
                          .replace("-", "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}GcaPercentile`}
                      />
                    ) : t.IndexName === "Special Nonverbal Composite (SNC)" ? (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${t.Id}${appendices.Tests[
                          i
                        ].Abbreviation.toLowerCase()
                          .replace(/\(|\)/g, "")
                          .replace(/ /g, "-")
                          .replace("-", "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}SncPercentile`}
                      />
                    ) : (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${t.Id}${appendices.Tests[
                          i
                        ].Abbreviation.toLowerCase()
                          .replace(/\(|\)/g, "")
                          .replace("-", "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}${t.IndexName.toLowerCase()
                          .replace("<span>", "")
                          .replace("</span>", "")
                          .replace(/\(|\)/g, "")
                          .replace("-", "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}CompositePercentile`}
                      />
                    )}
                  </div>
                  <div>
                    {t.IndexName === "Full Scale IQ-4" ||
                    t.IndexName === "Full Scale IQ" ? (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${t.Id}${appendices.Tests[
                          i
                        ].Abbreviation.toLowerCase()
                          .replace(/\(|\)/g, "")
                          .replace("-", "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}${t.IndexName.toLowerCase()
                          .replace("<span>", "")
                          .replace("</span>", "")
                          .replace(/\(|\)/g, "")
                          .replace("-", "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}CompositeRange`}
                      />
                    ) : t.IndexName === "VERBAL  COMPREHENSION INDEX (VCI)" ||
                      t.IndexName === "VISUAL SPATIAL INDEX (VSI)" ||
                      t.IndexName === "FLUID REASONING INDEX (FRI)" ||
                      t.IndexName === "WORKING MEMORY INDEX (WMI)" ||
                      t.IndexName === "PROCESSING SPEED INDEX (PSI)" ? (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${t.Id}${appendices.Tests[
                          i
                        ].Abbreviation.toLowerCase()
                          .replace(/ /g, "")
                          .replace("-", "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}${t.IndexName.toLowerCase()
                          .replace("<span>", "")
                          .replace("</span>", "")
                          .replace(":", "")
                          .replace("  ", " ")
                          .replace(/\(|\)/g, "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}CompositeRange`}
                      />
                    ) : t.IndexName === "General Ability Index" ? (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${t.Id}${appendices.Tests[
                          i
                        ].Abbreviation.toLowerCase()
                          .replace("-", "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}GaiRange`}
                      />
                    ) : t.IndexName === "General Conceptual Ability (GCA)" ? (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${t.Id}${appendices.Tests[
                          i
                        ].Abbreviation.toLowerCase()
                          .replace(/\(|\)/g, "")
                          .replace(/ /g, "-")
                          .replace("-", "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}GcaRange`}
                      />
                    ) : t.IndexName === "Special Nonverbal Composite (SNC)" ? (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${t.Id}${appendices.Tests[
                          i
                        ].Abbreviation.toLowerCase()
                          .replace(/\(|\)/g, "")
                          .replace(/ /g, "-")
                          .replace("-", "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}SncRange`}
                      />
                    ) : (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${t.Id}${appendices.Tests[
                          i
                        ].Abbreviation.toLowerCase()
                          .replace(/\(|\)/g, "")
                          .replace(/-/g, "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}${t.IndexName.toLowerCase()
                          .replace("<span>", "")
                          .replace("</span>", "")
                          .replace(/\(|\)/g, "")
                          .replace("-", "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}CompositeRange`}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          {t.ParentGroupSubScales !== undefined &&
          t.ParentGroupSubScales.length > 0
            ? t.ParentGroupSubScales.map(t => (
                <div key={t.Id}>
                  <h5>{t.ParentGroupSubScaleName}</h5>
                  {t.ParentScale.map((t, psIdx) => (
                    <div key={t.Id} className="test-table test-table--appendix">
                      <h4>{t.ParentScaleTitle}</h4>
                      <div className="table__row table__header">
                        <div>Index</div>
                        <div>Score</div>
                        {appendices.Tests[i].Abbreviation === "PIY" ||
                        appendices.Tests[i].Abbreviation === "MCMI–IV" ||
                        appendices.Tests[i].Abbreviation === "MMPI-2" ||
                        appendices.Tests[i].Abbreviation === "TSCC" ||
                        appendices.Tests[i].Abbreviation === "MMPI-A" ? null : (
                          <div>% Rank</div>
                        )}
                        {appendices.Tests[i].Abbreviation === "WIAT-III" ? (
                          <div>Grade Eqv.</div>
                        ) : null}
                        {appendices.Tests[i].Abbreviation !== "BRIEF" ? (
                          <div>Classification</div>
                        ) : null}
                      </div>

                      {t.SubTests.map(t => (
                        <div
                          key={`${t.id}-${t.name}-subtest`}
                          className="table__row"
                        >
                          <div>{t.name}</div>
                          <div>
                            <Field
                              component="input"
                              type="text"
                              maxLength={3}
                              name={`t${t.id}${t.name
                                .toLowerCase()
                                .replace("<sup>", "")
                                .replace("</sup>", "")
                                .replace(" – ", " ")
                                .replace("-", " ")
                                .replace("/", " ")
                                .replace(/[’]/g, "")
                                .replace(/[,/]/g, "")
                                .replace("{", "")
                                .replace("}", "")
                                .replace(/\(|\)/g, "")
                                .split(" ")
                                .map(
                                  word =>
                                    word.charAt(0).toUpperCase() + word.slice(1)
                                )
                                .join("")}Score`}
                            />
                          </div>
                          {appendices.Tests[i].Abbreviation === "PIY" ||
                          appendices.Tests[i].Abbreviation === "MCMI–IV" ||
                          appendices.Tests[i].Abbreviation === "MMPI-2" ||
                          appendices.Tests[i].Abbreviation === "TSCC" ||
                          appendices.Tests[i].Abbreviation ===
                            "MMPI-A" ? null : (
                            <div>
                              <Field
                                component="input"
                                type="text"
                                maxLength={4}
                                name={`t${t.id}Appendix${appendices.Tests[
                                  i
                                ].Abbreviation.toLowerCase()
                                  .replace("-", " ")
                                  .split(" ")
                                  .map(
                                    word =>
                                      word.charAt(0).toUpperCase() +
                                      word.slice(1)
                                  )
                                  .join("")}${t.name
                                  .toLowerCase()
                                  .replace("<sup>", "")
                                  .replace("</sup>", "")
                                  .replace("/", " ")
                                  .replace(/[,/]/g, "")
                                  .replace(/[’]/g, "")
                                  .replace("{", "")
                                  .replace("}", "")
                                  .replace(/\(|\)/g, "")
                                  .replace("-", " ")
                                  .split(" ")
                                  .map(
                                    word =>
                                      word.charAt(0).toUpperCase() +
                                      word.slice(1)
                                  )
                                  .join("")}Rank`}
                              />
                            </div>
                          )}
                          {appendices.Tests[i].Abbreviation === "WIAT-III" ? (
                            <div>
                              <Field
                                component="input"
                                type="text"
                                maxLength={5}
                                name={`t${t.id}Appendix${appendices.Tests[
                                  i
                                ].Abbreviation.toLowerCase()
                                  .replace("-", " ")
                                  .split(" ")
                                  .map(
                                    word =>
                                      word.charAt(0).toUpperCase() +
                                      word.slice(1)
                                  )
                                  .join("")}${t.name
                                  .toLowerCase()
                                  .replace("<sup>", "")
                                  .replace("</sup>", "")
                                  .replace("/", " ")
                                  .replace("-", " ")
                                  .replace(/[,/]/g, "")
                                  .replace(/[’]/g, "")
                                  .replace("{", "")
                                  .replace("}", "")
                                  .replace(/\(|\)/g, "")
                                  .split(" ")
                                  .map(
                                    word =>
                                      word.charAt(0).toUpperCase() +
                                      word.slice(1)
                                  )
                                  .join("")}GradeEquivalent`}
                              />
                            </div>
                          ) : null}
                          {appendices.Tests[i].Abbreviation !== "BRIEF" ? (
                            <div>
                              <Field
                                component="input"
                                type="text"
                                maxLength={15}
                                name={`t${t.id}Appendix${appendices.Tests[
                                  i
                                ].Abbreviation.toLowerCase()
                                  .replace(/-/g, " ")
                                  .split(" ")
                                  .map(
                                    word =>
                                      word.charAt(0).toUpperCase() +
                                      word.slice(1)
                                  )
                                  .join("")}${t.name
                                  .toLowerCase()
                                  .replace("-", " ")
                                  .replace("<sup>", "")
                                  .replace("</sup>", "")
                                  .replace("/", " ")
                                  .replace(/[,/]/g, "")
                                  .replace(/[’]/g, "")
                                  .replace("{", "")
                                  .replace("}", "")
                                  .replace(/\(|\)/g, "")
                                  .split(" ")
                                  .map(
                                    word =>
                                      word.charAt(0).toUpperCase() +
                                      word.slice(1)
                                  )
                                  .join("")}Range`}
                              />
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  ))}
                  {appendices.Tests[i].Abbreviation === "RBANS" ? (
                    <div>
                      <div
                        key={t.Id}
                        className="test-table test-table--appendix"
                      >
                        <h4>Total Scale Score</h4>
                        <div className="table__row table__header">
                          <div>Total Scale Score</div>
                          <div>Scaled Score</div>
                          <div>% Rank</div>
                          <div>Classification</div>
                        </div>
                        <div className="table__row">
                          <div>
                            <Field
                              component="input"
                              type="text"
                              maxLength={3}
                              name="rbansTotalScaleScore"
                            />
                          </div>
                          <div>
                            <Field
                              component="input"
                              type="text"
                              maxLength={5}
                              name="rbansTotalScaleScoreScaledScore"
                            />
                          </div>
                          <div>
                            <Field
                              component="input"
                              type="text"
                              maxLength={5}
                              name="rbansTotalScaleScorePercentileRank"
                            />
                          </div>
                          <div>
                            <Field
                              component="input"
                              type="text"
                              maxLength={15}
                              name="rbansTotalScaleScoreRange"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              ))
            : null}

          {t.ParentGroupScales !== undefined && t.ParentGroupScales.length > 0
            ? t.ParentGroupScales.map(t => (
                <div key={t.Id}>
                  <h5>{t.ParentGroupScaleName}</h5>
                  {t.ParentScaleTitles !== undefined
                    ? t.ParentScaleTitles.map((t, pstIdx) => (
                        <div
                          key={t.Id}
                          className="test-table test-table--appendix"
                        >
                          <h4>{t.ParentScaleName}</h4>
                          <div className="table__row table__header">
                            <div>Scale</div>
                            <div>T-Score</div>
                            {appendices.Tests[i].Abbreviation === "PIY" ||
                            appendices.Tests[i].Abbreviation === "MCMI–IV" ||
                            appendices.Tests[i].Abbreviation === "MMPI-2" ||
                            appendices.Tests[i].Abbreviation === "TSCC" ||
                            appendices.Tests[i].Abbreviation ===
                              "MMPI-A" ? null : (
                              <div>% Rank</div>
                            )}
                            {appendices.Tests[i].Abbreviation !== "BRIEF" ? (
                              <div>Classification</div>
                            ) : null}
                          </div>

                          {t.SubTests.map(t => (
                            <div
                              key={`${t.id}-${t.name}-subtest`}
                              className="table__row"
                            >
                              <div>{t.name}</div>
                              <div>
                                <Field
                                  component="input"
                                  type="text"
                                  maxLength={3}
                                  name={`t${t.id}${t.name
                                    .toLowerCase()
                                    .replace("<sup>", "")
                                    .replace("</sup>", "")
                                    .replace(" – ", " ")
                                    .replace("/", " ")
                                    .replace("-", " ")
                                    .replace(/[’]/g, "")
                                    .replace(/[,/]/g, "")
                                    .replace("{", "")
                                    .replace("}", "")
                                    .replace(/\(|\)/g, "")
                                    .split(" ")
                                    .map(
                                      word =>
                                        word.charAt(0).toUpperCase() +
                                        word.slice(1)
                                    )
                                    .join("")}Score`}
                                />
                              </div>
                              {appendices.Tests[i].Abbreviation === "PIY" ||
                              appendices.Tests[i].Abbreviation === "MCMI–IV" ||
                              appendices.Tests[i].Abbreviation === "MMPI-2" ||
                              appendices.Tests[i].Abbreviation === "TSCC" ||
                              appendices.Tests[i].Abbreviation ===
                                "MMPI-A" ? null : (
                                <div>
                                  <Field
                                    component="input"
                                    type="text"
                                    maxLength={4}
                                    name={`t${t.id}Appendix${appendices.Tests[
                                      i
                                    ].Abbreviation.toLowerCase()
                                      .replace("-", " ")
                                      .split(" ")
                                      .map(
                                        word =>
                                          word.charAt(0).toUpperCase() +
                                          word.slice(1)
                                      )
                                      .join("")}${t.name
                                      .toLowerCase()
                                      .replace("<sup>", "")
                                      .replace("</sup>", "")
                                      .replace("/", " ")
                                      .replace(/[,/]/g, "")
                                      .replace(/[’]/g, "")
                                      .replace("{", "")
                                      .replace("}", "")
                                      .replace(/\(|\)/g, "")
                                      .replace("-", " ")
                                      .split(" ")
                                      .map(
                                        word =>
                                          word.charAt(0).toUpperCase() +
                                          word.slice(1)
                                      )
                                      .join("")}Rank`}
                                  />
                                </div>
                              )}
                              {appendices.Tests[i].Abbreviation !== "BRIEF" ? (
                                <div>
                                  <Field
                                    component="input"
                                    type="text"
                                    maxLength={15}
                                    name={`t${t.id}Appendix${appendices.Tests[
                                      i
                                    ].Abbreviation.toLowerCase()
                                      .replace("-", " ")
                                      .split(" ")
                                      .map(
                                        word =>
                                          word.charAt(0).toUpperCase() +
                                          word.slice(1)
                                      )
                                      .join("")}${t.name
                                      .toLowerCase()
                                      .replace("<sup>", "")
                                      .replace("</sup>", "")
                                      .replace("/", " ")
                                      .replace(/[,/]/g, "")
                                      .replace(/[’]/g, "")
                                      .replace("{", "")
                                      .replace("}", "")
                                      .replace("-", " ")
                                      .replace(/\(|\)/g, "")
                                      .split(" ")
                                      .map(
                                        word =>
                                          word.charAt(0).toUpperCase() +
                                          word.slice(1)
                                      )
                                      .join("")}Range`}
                                  />
                                </div>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      ))
                    : t.ParentGroupSubScales.map((t, pgssIdx) => (
                        <div
                          key={t.Id}
                          className="test-table test-table--appendix"
                        >
                          <h4>{t.ParentGroupSubScaleName}</h4>
                          {t.ParentScaleTitles.map((t, pstIdx) => (
                            <div key={t.Id}>
                              <div className="table__row table__header">
                                <div>Scale</div>
                                <div>T-Score</div>
                                {appendices.Tests[i].Abbreviation === "PIY" ||
                                appendices.Tests[i].Abbreviation ===
                                  "MCMI–IV" ||
                                appendices.Tests[i].Abbreviation === "MMPI-2" ||
                                appendices.Tests[i].Abbreviation === "TSCC" ||
                                appendices.Tests[i].Abbreviation ===
                                  "MMPI-A" ? null : (
                                  <div>% Rank</div>
                                )}
                                {appendices.Tests[i].Abbreviation !==
                                "BRIEF" ? (
                                  <div>Classification</div>
                                ) : null}
                              </div>

                              {t.SubTests.map(t => (
                                <div
                                  key={`${t.id}-${t.name}-subtest`}
                                  className="table__row"
                                >
                                  <div>{t.name}</div>
                                  <div>
                                    <Field
                                      component="input"
                                      type="text"
                                      maxLength={3}
                                      name={`t${t.id}${t.name
                                        .toLowerCase()
                                        .replace("<sup>", "")
                                        .replace("</sup>", "")
                                        .replace(" – ", " ")
                                        .replace("-", " ")
                                        .replace("/", "")
                                        .replace(/[’]/g, "")
                                        .replace(/[,/]/g, "")
                                        .replace("{", "")
                                        .replace("}", "")
                                        .replace(/\(|\)/g, "")
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
                                    />
                                  </div>
                                  {appendices.Tests[i].Abbreviation === "PIY" ||
                                  appendices.Tests[i].Abbreviation ===
                                    "MCMI–IV" ||
                                  appendices.Tests[i].Abbreviation ===
                                    "MMPI-2" ||
                                  appendices.Tests[i].Abbreviation === "TSCC" ||
                                  appendices.Tests[i].Abbreviation ===
                                    "MMPI-A" ? null : (
                                    <div>
                                      <Field
                                        component="input"
                                        type="text"
                                        maxLength={4}
                                        name={`t${
                                          t.id
                                        }Appendix${appendices.Tests[
                                          i
                                        ].Abbreviation.toLowerCase()
                                          .replace("-", " ")
                                          .split(" ")
                                          .map(
                                            word =>
                                              word.charAt(0).toUpperCase() +
                                              word.slice(1)
                                          )
                                          .join("")}${t.name
                                          .toLowerCase()
                                          .replace("<sup>", "")
                                          .replace("</sup>", "")
                                          .replace("/", " ")
                                          .replace(/[,/]/g, "")
                                          .replace(/[’]/g, "")
                                          .replace("{", "")
                                          .replace("}", "")
                                          .replace(/\(|\)/g, "")
                                          .replace("-", " ")
                                          .split(" ")
                                          .map(
                                            word =>
                                              word.charAt(0).toUpperCase() +
                                              word.slice(1)
                                          )
                                          .join("")}Rank`}
                                      />
                                    </div>
                                  )}
                                  {appendices.Tests[i].Abbreviation !==
                                  "BRIEF" ? (
                                    <div>
                                      <Field
                                        component="input"
                                        type="text"
                                        maxLength={15}
                                        name={`t${
                                          t.id
                                        }Appendix${appendices.Tests[
                                          i
                                        ].Abbreviation.toLowerCase()
                                          .replace("-", " ")
                                          .split(" ")
                                          .map(
                                            word =>
                                              word.charAt(0).toUpperCase() +
                                              word.slice(1)
                                          )
                                          .join("")}${t.name
                                          .toLowerCase()
                                          .replace("<sup>", "")
                                          .replace("</sup>", "")
                                          .replace("/", " ")
                                          .replace(/[,/]/g, "")
                                          .replace(/[’]/g, "")
                                          .replace("{", "")
                                          .replace("}", "")
                                          .replace("-", " ")
                                          .replace(/\(|\)/g, "")
                                          .split(" ")
                                          .map(
                                            word =>
                                              word.charAt(0).toUpperCase() +
                                              word.slice(1)
                                          )
                                          .join("")}Range`}
                                      />
                                    </div>
                                  ) : null}
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      ))}
                </div>
              ))
            : null}

          {t.ParentScale !== undefined && t.ParentScale.length > 0
            ? t.ParentScale.map(t => (
                <div key={t.Id} className="test-table test-table--appendix">
                  <h4>
                    {t.ParentScaleTitle.replace("<span>", "").replace(
                      "</span>",
                      ""
                    )}
                  </h4>
                  <div className="table__row table__header">
                    {appendices.Tests[i].Abbreviation === "BRIEF" ? (
                      <div>Scale</div>
                    ) : (
                      <div>Subtest</div>
                    )}
                    <div>Score</div>
                    {appendices.Tests[i].Abbreviation === "MCMI–IV" ||
                    appendices.Tests[i].Abbreviation === "MMPI-2" ||
                    appendices.Tests[i].Abbreviation === "TSCC" ||
                    appendices.Tests[i].Abbreviation === "D-KEFS" ||
                    appendices.Tests[i].Abbreviation === "MMPI-A" ? null : (
                      <div>% Rank</div>
                    )}
                    {appendices.Tests[i].Abbreviation === "WIAT-III" ? (
                      <div>Grade Eqv.</div>
                    ) : null}
                    {appendices.Tests[i].Abbreviation === "Vineland-II" ? (
                      <div>Descriptive Category</div>
                    ) : appendices.Tests[i].Abbreviation === "PIY" ? null : (
                      <div>Classification</div>
                    )}
                  </div>

                  {t.SubTests.map(t => (
                    <div
                      key={`${t.id}-${t.name.replace("-", "")}-subtest`}
                      className="table__row"
                    >
                      {appendices.Tests[i].Abbreviation === "MMPI-2" ? (
                        <div dangerouslySetInnerHTML={createMarkup(t.name)} />
                      ) : (
                        <div>{t.name}</div>
                      )}
                      <div>
                        <Field
                          component="input"
                          type="text"
                          maxLength={3}
                          name={`t${t.id}${t.name
                            .replace("<sup>", "")
                            .replace("</sup>", "")
                            .replace("/", "")
                            .replace(" – ", "")
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
                        />
                      </div>
                      {appendices.Tests[i].Abbreviation === "MCMI–IV" ||
                      appendices.Tests[i].Abbreviation === "MMPI-2" ||
                      appendices.Tests[i].Abbreviation === "D-KEFS" ||
                      appendices.Tests[i].Abbreviation === "TSCC" ||
                      appendices.Tests[i].Abbreviation === "PIY" ||
                      appendices.Tests[i].Abbreviation === "MMPI-A" ? null : (
                        <div>
                          <Field
                            component="input"
                            type="text"
                            maxLength={4}
                            name={`t${t.id}Appendix${appendices.Tests[
                              i
                            ].Abbreviation.charAt(
                              0
                            ).toUpperCase()}${appendices.Tests[
                              i
                            ].Abbreviation.slice(1)
                              .toLowerCase()
                              .replace(/ /g, "")
                              .replace("-", "")}${t.name
                              .toLowerCase()
                              .replace(/ /g, " ")
                              .replace("<sup>", "")
                              .replace("</sup>", "")
                              .replace("/", " ")
                              .replace(/[,/]/g, "")
                              .replace(/[’]/g, "")
                              .replace("{", "")
                              .replace("}", "")
                              .replace(/\(|\)/g, "")
                              .replace(/–/g, "")
                              .replace(/-/g, " ")
                              .replace(":", "")
                              .split(" ")
                              .map(
                                word =>
                                  word.charAt(0).toUpperCase() + word.slice(1)
                              )
                              .join("")}Rank`}
                          />
                        </div>
                      )}
                      {appendices.Tests[i].Abbreviation === "PIY" ? (
                        <div>
                          <Field
                            component="input"
                            type="text"
                            maxLength={4}
                            name={`t${t.id}${appendices.Tests[
                              i
                            ].Abbreviation.charAt(
                              0
                            ).toUpperCase()}${appendices.Tests[
                              i
                            ].Abbreviation.slice(1)
                              .toLowerCase()
                              .replace(/ /g, "")
                              .replace("-", "")}${t.name
                              .toLowerCase()
                              .replace(/ /g, " ")
                              .replace("<sup>", "")
                              .replace("</sup>", "")
                              .replace("/", " ")
                              .replace(/[,/]/g, "")
                              .replace(/[’]/g, "")
                              .replace("{", "")
                              .replace("}", "")
                              .replace(/\(|\)/g, "")
                              .replace(/–/g, "")
                              .replace(/-/g, " ")
                              .replace(":", "")
                              .split(" ")
                              .map(
                                word =>
                                  word.charAt(0).toUpperCase() + word.slice(1)
                              )
                              .join("")}PercentileRank`}
                          />
                        </div>
                      ) : null}
                      {appendices.Tests[i].Abbreviation === "WIAT-III" ? (
                        <div>
                          <Field
                            component="input"
                            type="text"
                            maxLength={5}
                            name={`t${t.id}Appendix${appendices.Tests[
                              i
                            ].Abbreviation.charAt(
                              0
                            ).toUpperCase()}${appendices.Tests[
                              i
                            ].Abbreviation.slice(1)
                              .toLowerCase()
                              .replace(/ /g, "")
                              .replace("-", "")}${t.name
                              .toLowerCase()
                              .replace(/ /g, " ")
                              .replace("<sup>", "")
                              .replace("</sup>", "")
                              .replace("/", " ")
                              .replace(/[,/]/g, "")
                              .replace(/[’]/g, "")
                              .replace("{", "")
                              .replace("}", "")
                              .replace(/\(|\)/g, "")
                              .replace(/–/g, "")
                              .replace(/-/g, " ")
                              .split(" ")
                              .map(
                                word =>
                                  word.charAt(0).toUpperCase() + word.slice(1)
                              )
                              .join("")}GradeEquivalent`}
                          />
                        </div>
                      ) : null}
                      {appendices.Tests[i].Abbreviation === "PIY" ? null : (
                        <div>
                          <Field
                            component="input"
                            type="text"
                            maxLength={15}
                            name={`t${t.id}Appendix${appendices.Tests[
                              i
                            ].Abbreviation.charAt(
                              0
                            ).toUpperCase()}${appendices.Tests[
                              i
                            ].Abbreviation.slice(1)
                              .toLowerCase()
                              .replace(/ /g, "")
                              .replace("-", "")}${t.name
                              .toLowerCase()
                              .replace(/ /g, " ")
                              .replace("<sup>", "")
                              .replace("</sup>", "")
                              .replace("/", "")
                              .replace(/[,/]/g, "")
                              .replace(/[’]/g, "")
                              .replace("{", "")
                              .replace("}", "")
                              .replace(/\(|\)/g, "")
                              .replace(/–/g, "")
                              .replace(/-/g, " ")
                              .replace(":", "")
                              .split(" ")
                              .map(
                                word =>
                                  word.charAt(0).toUpperCase() + word.slice(1)
                              )
                              .join("")}Range`}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                  {appendices.Tests[i].Abbreviation === "D-KEFS" &&
                  (t.ParentScaleTitle === "Verbal Fluency" ||
                    t.ParentScaleTitle === "Design Fluency" ||
                    t.ParentScaleTitle === "Color-Word Interference Test" ||
                    t.ParentScaleTitle === "Sorting Test" ||
                    t.ParentScaleTitle === "Twenty Questions" ||
                    t.ParentScaleTitle === "Word Context Test" ||
                    t.ParentScaleTitle === "Tower Test" ||
                    t.ParentScaleTitle === "Proverb Test") ? (
                    <div className="table__row">
                      <div>Summary of Scores</div>
                      <div>
                        <Field
                          component="input"
                          type="text"
                          maxLength={3}
                          name={`t${t.Id}Appendix${appendices.Tests[
                            i
                          ].Abbreviation.toLowerCase()
                            .replace("-", "")
                            .split(" ")
                            .map(
                              word =>
                                word.charAt(0).toUpperCase() + word.slice(1)
                            )
                            .join("")}${t.ParentScaleTitle.replace("-", " ")
                            .split(" ")
                            .map(
                              word =>
                                word.charAt(0).toUpperCase() + word.slice(1)
                            )
                            .join("")}SummaryOfScoresScore`}
                        />
                      </div>
                      <div>
                        <Field
                          component="input"
                          type="text"
                          maxLength={15}
                          name={`t${t.Id}Appendix${appendices.Tests[
                            i
                          ].Abbreviation.toLowerCase()
                            .replace("-", "")
                            .split(" ")
                            .map(
                              word =>
                                word.charAt(0).toUpperCase() + word.slice(1)
                            )
                            .join("")}${t.ParentScaleTitle.replace("-", " ")
                            .split(" ")
                            .map(
                              word =>
                                word.charAt(0).toUpperCase() + word.slice(1)
                            )
                            .join("")}SummaryOfScoresRange`}
                        />
                      </div>
                    </div>
                  ) : null}
                </div>
              ))
            : null}

          {t.SubTests !== undefined && t.SubTests.length > 0 ? (
            <div className="test-table test-table--appendix">
              <div className="table__row table__header">
                <div>Subtest</div>
                <div>Scaled Score</div>
                {appendices.Tests[i].Abbreviation === "PIY" ||
                appendices.Tests[i].Abbreviation === "MCMI–IV" ||
                appendices.Tests[i].Abbreviation === "MMPI-2" ||
                appendices.Tests[i].Abbreviation === "TSCC" ||
                appendices.Tests[i].Abbreviation === "MMPI-A" ? null : (
                  <div>% Rank</div>
                )}
                {appendices.Tests[i].Abbreviation === "BRIEF" ||
                appendices.Tests[i].Abbreviation === "Nelson-Denny" ||
                appendices.Tests[i].Abbreviation === "GORT-5" ? null : (
                  <div>Classification</div>
                )}
                {appendices.Tests[i].Abbreviation === "Nelson-Denny" ||
                appendices.Tests[i].Abbreviation === "GORT-5" ? (
                  <div>Grade Equivalent</div>
                ) : null}
              </div>
              {t.SubTests.map(t => (
                <div key={`${t.Id}-${t.Name}-subtest`} className="table__row">
                  <div>{t.Name}</div>
                  <div>
                    <Field
                      component="input"
                      type="text"
                      maxLength={3}
                      name={`t${t.Id}${t.Name.toLowerCase()
                        .replace("<sup>", "")
                        .replace("</sup>", "")
                        .replace(" – ", "")
                        .replace("/", "")
                        .replace(/[’]/g, "")
                        .replace(/[,/]/g, "")
                        .replace("{", "")
                        .replace("}", "")
                        .replace(/\(|\)/g, "")
                        .split(" ")
                        .map(
                          word => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join("")}Score`}
                    />
                  </div>
                  {appendices.Tests[i].Abbreviation === "PIY" ? null : (
                    <div>
                      <Field
                        component="input"
                        type="text"
                        maxLength={4}
                        name={`t${t.Id}Appendix${appendices.Tests[
                          i
                        ].Abbreviation.toLowerCase()
                          .replace(/-/g, " ")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}${t.Name.toLowerCase()
                          .replace("<sup>", "")
                          .replace("</sup>", "")
                          .replace("/", "")
                          .replace(/[,/]/g, "")
                          .replace(/[’]/g, "")
                          .replace("{", "")
                          .replace("}", "")
                          .replace(/\(|\)/g, "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}Rank`}
                      />
                    </div>
                  )}
                  {appendices.Tests[i].Abbreviation !== "BRIEF" ? (
                    <div>
                      <Field
                        component="input"
                        type="text"
                        maxLength={15}
                        name={`t${t.Id}Appendix${appendices.Tests[
                          i
                        ].Abbreviation.toLowerCase()
                          .replace(/-/g, " ")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}${t.Name.toLowerCase()
                          .replace("<sup>", "")
                          .replace("</sup>", "")
                          .replace("/", "")
                          .replace(/[,/]/g, "")
                          .replace(/[’]/g, "")
                          .replace("{", "")
                          .replace("}", "")
                          .replace(/\(|\)/g, "")
                          .replace(/-/g, " ")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}Range`}
                      />
                    </div>
                  ) : null}
                </div>
              ))}
              {appendices.Tests[i].Abbreviation === "GORT-5" ? (
                <div className="table__row">
                  <div>ORI (Oral Reading Index)</div>
                  <div>
                    <Field
                      component="input"
                      type="text"
                      maxLength={3}
                      name={`t${t.Id}ORIScore`}
                    />
                  </div>
                  <div>
                    <Field
                      component="input"
                      type="text"
                      maxLength={5}
                      name={`t${t.Id}Appendix${appendices.Tests[
                        i
                      ].Abbreviation.toLowerCase()
                        .replace("-", "")
                        .split(" ")
                        .map(
                          word => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join("")}ORIRank`}
                    />
                  </div>
                  <div>
                    <Field
                      component="input"
                      type="text"
                      maxLength={15}
                      name={`t${t.Id}Appendix${appendices.Tests[
                        i
                      ].Abbreviation.toLowerCase()
                        .replace("-", "")
                        .split(" ")
                        .map(
                          word => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join("")}ORIGradeEquivalent`}
                    />
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}

          {t.TestModules !== undefined && t.TestModules.length > 0
            ? t.TestModules.map(t => (
                <div key={`${t.Id}-${t.Name}`}>
                  <h5>{t.Name}</h5>
                  {t.ParentGroupScales.map((t, pgsIdx) => (
                    <div key={t.Id} className="test-table test-table--appendix">
                      <h4>{t.ParentGroupScaleName}</h4>
                      {t.ParentScaleTitles.map((t, pstIdx) => (
                        <div key={t.Id}>
                          <h6>{t.ParentScaleTitle}</h6>
                          <div className="table__row table__header">
                            <div>Scale</div>
                            <div>Score</div>
                            {appendices.Tests[i].Abbreviation === "PIY" ||
                            appendices.Tests[i].Abbreviation === "MCMI–IV" ||
                            appendices.Tests[i].Abbreviation === "MMPI-2" ||
                            appendices.Tests[i].Abbreviation === "TSCC" ||
                            appendices.Tests[i].Abbreviation === "MMPI-A" ||
                            appendices.Tests[i].Abbreviation ===
                              "ADOS-2" ? null : (
                              <div>% Rank</div>
                            )}
                            {appendices.Tests[i].Abbreviation === "ADOS-2" ? (
                              <div>Positive Findings</div>
                            ) : null}
                            {appendices.Tests[i].Abbreviation === "WIAT-III" ? (
                              <div>Grade Eqv.</div>
                            ) : null}
                            {appendices.Tests[i].Abbreviation !== "BRIEF" ? (
                              <div>Comparison Score</div>
                            ) : null}
                          </div>

                          {t.SubTests.map(t => (
                            <div
                              key={`${t.id}-${t.name}-subtest`}
                              className="table__row"
                            >
                              <div>{t.name}</div>
                              <div>
                                <Field
                                  component="input"
                                  type="text"
                                  maxLength={3}
                                  name={`${t.id}-${t.name
                                    .toLowerCase()
                                    .replace("<sup>", "")
                                    .replace("</sup>", "")
                                    .replace(" – ", "-")
                                    .replace(/ /g, "-")
                                    .replace("/", "-")
                                    .replace(/[’]/g, "")
                                    .replace(/[,/]/g, "")
                                    .replace("{", "")
                                    .replace("}", "")
                                    .replace(/\(|\)/g, "")}-score`}
                                />
                              </div>
                              {appendices.Tests[i].Abbreviation === "PIY" ||
                              appendices.Tests[i].Abbreviation === "MCMI–IV" ||
                              appendices.Tests[i].Abbreviation === "MMPI-2" ||
                              appendices.Tests[i].Abbreviation === "TSCC" ||
                              appendices.Tests[i].Abbreviation === "MMPI-A" ||
                              appendices.Tests[i].Abbreviation ===
                                "ADOS-2" ? null : (
                                <div>
                                  <Field
                                    component="input"
                                    type="text"
                                    maxLength={4}
                                    name={`${t.id}-appendix-${appendices.Tests[
                                      i
                                    ].Abbreviation.toLowerCase().replace(
                                      / /g,
                                      "-"
                                    )}-${t.name
                                      .toLowerCase()
                                      .replace(/ /g, "-")
                                      .replace("<sup>", "")
                                      .replace("</sup>", "")
                                      .replace("/", "-")
                                      .replace(/[,/]/g, "")
                                      .replace(/[’]/g, "")
                                      .replace("{", "")
                                      .replace("}", "")
                                      .replace(/\(|\)/g, "")}-rank`}
                                  />
                                </div>
                              )}
                              {appendices.Tests[i].Abbreviation === "ADOS-2" ? (
                                <div>Positive findings go here</div>
                              ) : null}
                              {appendices.Tests[i].Abbreviation ===
                              "WIAT-III" ? (
                                <div>
                                  <Field
                                    component="input"
                                    type="text"
                                    maxLength={5}
                                    name={`${t.id}-appendix-${appendices.Tests[
                                      i
                                    ].Abbreviation.toLowerCase().replace(
                                      / /g,
                                      "-"
                                    )}-${t.name
                                      .toLowerCase()
                                      .replace(/ /g, "-")
                                      .replace("<sup>", "")
                                      .replace("</sup>", "")
                                      .replace("/", "-")
                                      .replace(/[,/]/g, "")
                                      .replace(/[’]/g, "")
                                      .replace("{", "")
                                      .replace("}", "")
                                      .replace(/\(|\)/g, "")}-grade-equivalent`}
                                  />
                                </div>
                              ) : null}
                              {appendices.Tests[i].Abbreviation !== "BRIEF" ? (
                                <div>
                                  <Field
                                    component="input"
                                    type="text"
                                    maxLength={15}
                                    name={`${t.id}-appendix-${appendices.Tests[
                                      i
                                    ].Abbreviation.toLowerCase().replace(
                                      / /g,
                                      "-"
                                    )}-${t.name
                                      .toLowerCase()
                                      .replace(/ /g, "-")
                                      .replace("<sup>", "")
                                      .replace("</sup>", "")
                                      .replace("/", "-")
                                      .replace(/[,/]/g, "")
                                      .replace(/[’]/g, "")
                                      .replace("{", "")
                                      .replace("}", "")
                                      .replace(/\(|\)/g, "")}-range`}
                                  />
                                </div>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))
            : null}

          {t.TestScoringTableScores !== undefined &&
          t.TestScoringTableScores.length > 0 ? (
            <div className="test-table test-table--appendix">
              <div className="table__row table__header">
                <div>Subtest</div>
                <div>Score</div>
                {appendices.Tests[i].Abbreviation === "PIY" ||
                appendices.Tests[i].Abbreviation === "MCMI–IV" ||
                appendices.Tests[i].Abbreviation === "MMPI-2" ||
                appendices.Tests[i].Abbreviation === "TSCC" ||
                appendices.Tests[i].Abbreviation === "MMPI-A" ? null : (
                  <div>% Rank</div>
                )}
                {appendices.Tests[i].Abbreviation === "WIAT-III" ? (
                  <div>Grade Eqv.</div>
                ) : null}
                {appendices.Tests[i].Abbreviation !== "BRIEF" ? (
                  <div>Classification</div>
                ) : null}
              </div>

              {t.TestScoringTableScores.map(t => (
                <div key={`${t.id}-${t.name}`} className="table__row">
                  <div>{t.name}</div>
                  <div>
                    <Field
                      component="input"
                      type="text"
                      maxLength={3}
                      name={`t${t.id}${appendices.Tests[
                        i
                      ].Abbreviation.toLowerCase()
                        .split(" ")
                        .map(
                          word => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join("")}${t.name
                        .toLowerCase()
                        .replace("<sup>", "")
                        .replace("</sup>", "")
                        .replace(" – ", " ")
                        .replace("/", "-")
                        .replace(/[’]/g, "")
                        .replace(/[,/]/g, "")
                        .replace("{", "")
                        .replace("}", "")
                        .replace(/\(|\)/g, "")
                        .split(" ")
                        .map(
                          word => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join("")}Score`}
                    />
                  </div>
                  {appendices.Tests[i].Abbreviation === "PIY" ||
                  appendices.Tests[i].Abbreviation === "MCMI–IV" ||
                  appendices.Tests[i].Abbreviation === "MMPI-2" ||
                  appendices.Tests[i].Abbreviation === "TSCC" ||
                  appendices.Tests[i].Abbreviation === "MMPI-A" ? null : (
                    <div>
                      <Field
                        component="input"
                        type="text"
                        maxLength={4}
                        name={`t${t.id}Appendix${appendices.Tests[
                          i
                        ].Abbreviation.toLowerCase()
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}${t.name
                          .toLowerCase()
                          .replace("<sup>", "")
                          .replace("</sup>", "")
                          .replace("/", "")
                          .replace(/[,/]/g, "")
                          .replace(/[’]/g, "")
                          .replace("{", "")
                          .replace("}", "")
                          .replace(/\(|\)/g, "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}Rank`}
                      />
                    </div>
                  )}
                  {appendices.Tests[i].Abbreviation === "WIAT-III" ? (
                    <div>
                      <Field
                        component="input"
                        type="text"
                        maxLength={5}
                        name={`t${t.id}Appendix${appendices.Tests[
                          i
                        ].Abbreviation.toLowerCase()
                          .replace("-", "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}${t.name
                          .toLowerCase()
                          .replace("<sup>", "")
                          .replace("</sup>", "")
                          .replace("/", "")
                          .replace(/[,/]/g, "")
                          .replace(/[’]/g, "")
                          .replace("{", "")
                          .replace("}", "")
                          .replace(/\(|\)/g, "")}GradeEquivalent`}
                      />
                    </div>
                  ) : null}
                  {appendices.Tests[i].Abbreviation !== "BRIEF" ? (
                    <div>
                      <Field
                        component="input"
                        type="text"
                        maxLength={15}
                        name={`t${t.id}Appendix${appendices.Tests[
                          i
                        ].Abbreviation.toLowerCase()
                          .replace("-", "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}${t.name
                          .toLowerCase()
                          .replace("-", " ")
                          .replace("<sup>", "")
                          .replace("</sup>", "")
                          .replace("/", "")
                          .replace(/[,/]/g, "")
                          .replace(/[’]/g, "")
                          .replace("{", "")
                          .replace("}", "")
                          .replace(/\(|\)/g, "")
                          .split(" ")
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")}Range`}
                      />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

const Appendix = connect(mapStateToProps)(AppendixConnected);

export default Appendix;
