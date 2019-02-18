import React from "react";
import { connect } from "react-redux";
import { Field } from "redux-form";
import SectionTitle from "../SectionTitle/index";
import SectionSubHeader from "../SectionSubHeader/index";

const mapStateToProps = state => ({
  tests: state.testsSelectedReducer,
  appendices: state.appendixReducer
});

const AppendixConnected = (props, values) => {
  console.log("store from index, ", props);
  console.log("Trying to make props go now!", values);
  const { appendices } = props;
  return (
    <div>
      <SectionTitle titleBold="Appendix" titleRegular="of scores" />
      {appendices.domains.tests.map((t, i) => (
        <div key={`${i}-${t.Id}-domains`}>
          <div className="flex">
            <SectionSubHeader subHeader={t.Name} />
            <span className="h7">&nbsp;{t.Abbreviation}</span>
          </div>
          <div className="test-table test-table--appendix">
            <div className="table__row table__header">
              <div>Index</div>
              <div>Composite Score</div>
              <div>% Rank</div>
              <div>Range</div>
            </div>

            {t.DomainsOverall.map(t => (
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
                    name={`${t.id}-appendix-${appendices.domains.tests[
                      i
                    ].Abbreviation.toLowerCase().replace(
                      / /g,
                      "-"
                    )}-${t.parentScaleName
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
                    name={`${t.id}-appendix-${appendices.domains.tests[
                      i
                    ].Abbreviation.toLowerCase().replace(
                      / /g,
                      "-"
                    )}-${t.parentScaleName
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
                    name={`${t.id}-appendix-${appendices.domains.tests[
                      i
                    ].Abbreviation.toLowerCase().replace(
                      / /g,
                      "-"
                    )}-${t.parentScaleName
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
      ))}
      {appendices.subtests.tests.map((t, i) => (
        <div key={`${i}-${t.Id}-subtests`}>
          <div className="flex">
            <span className="h7">{t.Abbreviation}&nbsp;</span>
            <SectionSubHeader subHeader={t.TestName} />
            <span className="h7">&nbsp;Subtests Score Summary</span>
          </div>
          <div className="test-table test-table--appendix">
            <div className="table__row table__header">
              <div>Index</div>
              <div>Scaled Score</div>
              <div>% Rank</div>
              <div>Classification</div>
            </div>

            {t.SubTests.map(t => (
              <div key={t.id} className="table__row">
                <div>{t.name}</div>
                <div>
                  <Field
                    component="input"
                    type="text"
                    name={`${t.id}-${t.name
                      .toLowerCase()
                      .replace(/ /g, "-")
                      .replace("/", "-")
                      .replace(/[,/]/g, "")
                      .replace(/\(|\)/g, "")}-score`}
                  />
                </div>
                <div>
                  <Field
                    component="input"
                    type="text"
                    name={`${t.id}-appendix-${appendices.subtests.tests[
                      i
                    ].Abbreviation.toLowerCase().replace(/ /g, "-")}-${t.name
                      .toLowerCase()
                      .replace(/ /g, "-")
                      .replace("/", "-")
                      .replace(/[,/]/g, "")
                      .replace(/\(|\)/g, "")}-rank`}
                  />
                </div>
                <div>
                  <Field
                    component="input"
                    type="text"
                    name={`${t.id}-appendix-${appendices.subtests.tests[
                      i
                    ].Abbreviation.toLowerCase().replace(/ /g, "-")}-${t.name
                      .toLowerCase()
                      .replace(/ /g, "-")
                      .replace("/", "-")
                      .replace(/[,/]/g, "")
                      .replace(/\(|\)/g, "")}-range`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Appendix = connect(mapStateToProps)(AppendixConnected);

export default Appendix;
