import React from "react";
import { connect } from "react-redux";
import { Field } from "redux-form";
import SectionTitle from "../SectionTitle/index";
import SectionSubHeader from "../SectionSubHeader/index";

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
        <div key={`${i}-${t.Id}`}>
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

            {t.SubTests.map((t, index) => (
              <div
                key={`${index}-${
                  appendix.appendices[i].Id
                }-${t.toLowerCase().replace(/ /g, "-")}`}
                className="table__row"
              >
                <div>{t}</div>
                <div>
                  <Field
                    component="input"
                    type="text"
                    name={`${index}-${
                      appendix.appendices[i].Id
                    }-appendix-${appendix.appendices[
                      i
                    ].Abbreviation.toLowerCase()}-${t
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
                    name={`${index}-${
                      appendix.appendices[i].Id
                    }-appendix-${appendix.appendices[
                      i
                    ].Abbreviation.toLowerCase()}-${t
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
                    name={`${index}-${
                      appendix.appendices[i].Id
                    }-appendix-${appendix.appendices[
                      i
                    ].Abbreviation.toLowerCase()}-${t
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
    </div>
  );
};

const Appendix = connect(mapStateToProps)(AppendixConnected);

export default Appendix;
