import React from "react";
import { connect } from "react-redux";
import SectionTitle from "../SectionTitle/index";
import SectionSubHeader from "../SectionSubHeader/index";

const mapStateToProps = state => {
  return { tests: state.testsSelectedReducer };
};

const AppendixConnected = props => {
  console.log("store from index, ", props);
  const { tests } = props;
  return (
    <div>
      <SectionTitle titleBold="Appendix" titleRegular="of scores" />
      {tests.map(t => (
        <div key={t.Id}>
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
            {t.ParentScaleTitles.length > 0
              ? t.ParentScaleTitles.map(t => (
                  <div key={t.Id} className="table__row">
                    <div>{t.ParentScaleName}</div>
                    <div>
                      <input type="text" name="testname-score" />
                    </div>
                    <div>23</div>
                    <div>Low average</div>
                  </div>
                ))
              : null}
            {t.ParentGroupScales.length > 0
              ? t.ParentGroupScales.map(t =>
                  t.ParentGroupSubScales.map(t =>
                    t.ParentScaleTitles.map(t => (
                      <div key={t.Id} className="table__row">
                        <div>{t.ParentScaleName}</div>
                        <div>
                          <input type="text" name="testname-score" />
                        </div>
                        <div>23</div>
                        <div>Low average</div>
                      </div>
                    ))
                  )
                )
              : null}
            {t.TestScoringTableDetails !== null
              ? t.TestScoringTableDetails.map(t =>
                  t.TestScoringTableScores.map(t => (
                    <div key={t.Id} className="table__row">
                      <div>{t.Col1}</div>
                      <div>
                        <input type="text" name="testname-score" />
                      </div>
                      <div>23</div>
                      <div>Low average</div>
                    </div>
                  ))
                )
              : null}
            {t.ParentGroupSubScales.length > 0
              ? t.ParentGroupSubScales.map(t =>
                  t.ParentScaleTitles.map(t => (
                    <div key={t.Id} className="table__row">
                      <div>{t.ParentScaleName}</div>
                      <div>
                        <input type="text" name="testname-score" />
                      </div>
                      <div>23</div>
                      <div>Low average</div>
                    </div>
                  ))
                )
              : null}
            {t.SubTests.length > 0
              ? t.SubTests.map(t => (
                  <div key={t.Id} className="table__row">
                    <div>{t.Name}</div>
                    <div>
                      <input type="text" name="testname-score" />
                    </div>
                    <div>23</div>
                    <div>Low average</div>
                  </div>
                ))
              : null}
            {t.TestModules.length > 0
              ? t.TestModules.map(t =>
                  t.ParentGroupScales.map(t => (
                    <div key={t.Id} className="table__row">
                      <div>{t.ParentGroupScaleName}</div>
                      <div>
                        <input type="text" name="testname-score" />
                      </div>
                      <div>23</div>
                      <div>Low average</div>
                    </div>
                  ))
                )
              : null}
          </div>
        </div>
      ))}
    </div>
  );
};

const Appendix = connect(mapStateToProps)(AppendixConnected);

export default Appendix;
