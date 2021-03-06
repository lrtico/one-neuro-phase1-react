import React from "react";
import { connect } from "react-redux";
import { Field } from "redux-form";
import SectionTitle from "../SectionTitle/index";
import SectionSubHeader from "../SectionSubHeader/index";
import SectionSubTitle from "../SectionSubTitle";

const mapStateToProps = state => ({
  tests: state.testsSelectedReducer,
  appendix: state.appendixReducer
});

const AppendixConnected = (props, values) => {
  console.log("store from index, ", props);
  console.log("Trying to make props go now!", values);
  const { appendix } = props;
  return (
    <div>
      <SectionTitle titleBold="Appendix" titleRegular="of scores" />
      {appendix.appendices.map((t, i) => (
        <div key={t.Id}>
          {t.isSelected && (
            <div>
              <div className="flex">
                <SectionSubTitle
                  subTitleBold={t.Name}
                  subtitleAbbreviation={t.Abbreviation}
                />
              </div>
              {t.ParentGroupScales.length > 0 &&
                t.ParentGroupScales.map(t => (
                  <div id={t.Id}>
                    <SectionSubHeader subHeader={t.ParentGroupScaleName} />
                    <span className="h7">
                      &nbsp;{t.ParentGroupScaleDescription}
                    </span>
                  </div>
                ))}

              <div className="test-table test-table--appendix">
                <div className="table__row table__header">
                  <div>Index</div>
                  <div>Composite Score</div>
                  <div>% Rank</div>
                  <div>Range</div>
                </div>

                {t.SubTests.map(t => (
                  <div
                    key={`${t.id}-${t.parentScaleName
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                    className="table__row"
                  >
                    <div>{t.parentScaleName}</div>
                    <div>
                      <Field
                        component="input"
                        type="text"
                        name={`${t.id}-appendix-${appendix.appendices[
                          i
                        ].Abbreviation.toLowerCase()}-${t.parentScaleName
                          .toLowerCase()
                          .replace(/ /g, "-")
                          .replace("/", "-")
                          .replace(/\(|\)/g, "")}-composite-score`}
                      />
                    </div>
                    <div>
                      <Field
                        component="input"
                        type="text"
                        name={`${t.id}-appendix-${appendix.appendices[
                          i
                        ].Abbreviation.toLowerCase()}-${t.parentScaleName
                          .toLowerCase()
                          .replace(/ /g, "-")
                          .replace("/", "-")
                          .replace(/\(|\)/g, "")}-rank`}
                      />
                    </div>
                    <div>
                      <Field
                        component="input"
                        type="text"
                        name={`${t.id}-appendix-${appendix.appendices[
                          i
                        ].Abbreviation.toLowerCase()}-${t.parentScaleName
                          .toLowerCase()
                          .replace(/ /g, "-")
                          .replace("/", "-")
                          .replace(/\(|\)/g, "")}-range`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const Appendix = connect(mapStateToProps)(AppendixConnected);

export default Appendix;
