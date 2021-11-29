import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import SectionTitle from '../SectionTitle';
import SectionSubTitle from '../SectionSubTitle';

const mapStateToProps = (state) => ({
  tests: state.testsSelectedReducer,
  appendices: state.appendixReducer,
});

const createMarkup = (text) => {
  return { __html: text };
};

const AppendixConnected = (props, values) => {
  console.log('store from index, ', props);
  console.log('Trying to make props go now!', values);
  const { appendices } = props;
  return (
    <div>
      <SectionTitle titleBold="Appendix" titleRegular="of scores" />

      {appendices.Tests.map((t, i) => (
        <div key={`${i}-${t.Id}-subtests`}>
          <div className="flex">
            <SectionSubTitle
              subTitleBold={t.TestName.replace('<span>', '').replace('</span>', '')}
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
              {t.TestIndexes.map((testindex) => (
                <div
                  key={`${testindex.Id}-${testindex.IndexName.toLowerCase()
                    .replace(' – ', '-')
                    .replace(/ /g, '-')
                    .replace('<span>', '')
                    .replace('</span>', '')
                    .replace(/\(|\)/g, '')}}`}
                  className="table__row"
                >
                  <div>{testindex.IndexName.replace('<span>', '').replace('</span>', '')}</div>
                  <div>
                    {testindex.IndexName === 'Full Scale IQ-4' ||
                    testindex.IndexName === 'Full Scale IQ' ? (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${testindex.Id}${appendices.Tests[i].Abbreviation.toLowerCase()
                          .replace(/\(|\)/g, '')
                          .replace('-', '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}${testindex.IndexName.toLowerCase()
                          .replace('<span>', '')
                          .replace('</span>', '')
                          .replace(/\(|\)/g, '')
                          .replace('-', '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}CompositeScore`}
                      />
                    ) : testindex.IndexName === 'VERBAL  COMPREHENSION INDEX (VCI)' ||
                      testindex.IndexName === 'VISUAL SPATIAL INDEX (VSI)' ||
                      testindex.IndexName === 'FLUID REASONING INDEX (FRI)' ||
                      testindex.IndexName === 'WORKING MEMORY INDEX (WMI)' ||
                      testindex.IndexName === 'PROCESSING SPEED INDEX (PSI)' ? (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${testindex.Id}${appendices.Tests[i].Abbreviation.toLowerCase()
                          .replace(/ /g, '')
                          .replace('-', '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}${testindex.IndexName.toLowerCase()
                          .replace('<span>', '')
                          .replace('</span>', '')
                          .replace(':', '')
                          .replace('  ', ' ')
                          .replace(/\(|\)/g, '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}CompositeScore`}
                      />
                    ) : testindex.IndexName === 'General Ability Index' ? (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${testindex.Id}${appendices.Tests[i].Abbreviation.toLowerCase()
                          .replace('-', '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}GaiCompositeScore`}
                      />
                    ) : testindex.IndexName === 'General Conceptual Ability (GCA)' ? (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${testindex.Id}${appendices.Tests[i].Abbreviation.toLowerCase()
                          .replace(/\(|\)/g, '')
                          .replace(/ /g, '-')
                          .replace('-', '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}GcaScore`}
                      />
                    ) : testindex.IndexName === 'Special Nonverbal Composite (SNC)' ? (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${testindex.Id}${appendices.Tests[i].Abbreviation.toLowerCase()
                          .replace(/\(|\)/g, '')
                          .replace('-', '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}SncScore`}
                      />
                    ) : (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${testindex.Id}${appendices.Tests[i].Abbreviation.toLowerCase()
                          .replace(/\(|\)/g, '')
                          .replace('-', '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}${testindex.IndexName.toLowerCase()
                          .replace('<span>', '')
                          .replace('-', ' ')
                          .replace('</span>', '')
                          .replace(':', '')
                          .replace('  ', ' ')
                          .replace(/\(|\)/g, '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}CompositeScore`}
                      />
                    )}
                  </div>
                  <div>
                    {testindex.IndexName === 'Full Scale IQ-4' ||
                    testindex.IndexName === 'Full Scale IQ' ? (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${testindex.Id}${appendices.Tests[i].Abbreviation.toLowerCase()
                          .replace(/\(|\)/g, '')
                          .replace('-', '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}${testindex.IndexName.toLowerCase()
                          .replace('<span>', '')
                          .replace('</span>', '')
                          .replace(/\(|\)/g, '')
                          .replace('-', '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}CompositePercentile`}
                      />
                    ) : testindex.IndexName === 'VERBAL  COMPREHENSION INDEX (VCI)' ||
                      testindex.IndexName === 'VISUAL SPATIAL INDEX (VSI)' ||
                      testindex.IndexName === 'FLUID REASONING INDEX (FRI)' ||
                      testindex.IndexName === 'WORKING MEMORY INDEX (WMI)' ||
                      testindex.IndexName === 'PROCESSING SPEED INDEX (PSI)' ? (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${testindex.Id}${appendices.Tests[i].Abbreviation.toLowerCase()
                          .replace(/ /g, '')
                          .replace('-', '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}${testindex.IndexName.toLowerCase()
                          .replace('<span>', '')
                          .replace('</span>', '')
                          .replace(':', '')
                          .replace('  ', ' ')
                          .replace(/\(|\)/g, '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}CompositePercentile`}
                      />
                    ) : testindex.IndexName === 'General Ability Index' ? (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${testindex.Id}${appendices.Tests[i].Abbreviation.toLowerCase()
                          .replace('-', '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}GaiPercentile`}
                      />
                    ) : testindex.IndexName === 'General Conceptual Ability (GCA)' ? (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${testindex.Id}${appendices.Tests[i].Abbreviation.toLowerCase()
                          .replace(/\(|\)/g, '')
                          .replace(/ /g, '-')
                          .replace('-', '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}GcaPercentile`}
                      />
                    ) : testindex.IndexName === 'Special Nonverbal Composite (SNC)' ? (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${testindex.Id}${appendices.Tests[i].Abbreviation.toLowerCase()
                          .replace(/\(|\)/g, '')
                          .replace(/ /g, '-')
                          .replace('-', '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}SncPercentile`}
                      />
                    ) : (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${testindex.Id}${appendices.Tests[i].Abbreviation.toLowerCase()
                          .replace(/\(|\)/g, '')
                          .replace('-', '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}${testindex.IndexName.toLowerCase()
                          .replace('<span>', '')
                          .replace('</span>', '')
                          .replace('-', ' ')
                          .replace(':', '')
                          .replace('  ', ' ')
                          .replace(/\(|\)/g, '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}CompositePercentile`}
                      />
                    )}
                  </div>
                  <div>
                    {testindex.IndexName === 'Full Scale IQ-4' ||
                    testindex.IndexName === 'Full Scale IQ' ? (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${testindex.Id}${appendices.Tests[i].Abbreviation.toLowerCase()
                          .replace(/\(|\)/g, '')
                          .replace('-', '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}${testindex.IndexName.toLowerCase()
                          .replace('<span>', '')
                          .replace('</span>', '')
                          .replace(/\(|\)/g, '')
                          .replace('-', '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}CompositeRange`}
                      />
                    ) : testindex.IndexName === 'VERBAL  COMPREHENSION INDEX (VCI)' ||
                      testindex.IndexName === 'VISUAL SPATIAL INDEX (VSI)' ||
                      testindex.IndexName === 'FLUID REASONING INDEX (FRI)' ||
                      testindex.IndexName === 'WORKING MEMORY INDEX (WMI)' ||
                      testindex.IndexName === 'PROCESSING SPEED INDEX (PSI)' ? (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${testindex.Id}${appendices.Tests[i].Abbreviation.toLowerCase()
                          .replace(/ /g, '')
                          .replace('-', '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}${testindex.IndexName.toLowerCase()
                          .replace('<span>', '')
                          .replace('</span>', '')
                          .replace(':', '')
                          .replace('  ', ' ')
                          .replace(/\(|\)/g, '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}CompositeRange`}
                      />
                    ) : testindex.IndexName === 'General Ability Index' ? (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${testindex.Id}${appendices.Tests[i].Abbreviation.toLowerCase()
                          .replace('-', '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}GaiRange`}
                      />
                    ) : testindex.IndexName === 'General Conceptual Ability (GCA)' ? (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${testindex.Id}${appendices.Tests[i].Abbreviation.toLowerCase()
                          .replace(/\(|\)/g, '')
                          .replace(/ /g, '-')
                          .replace('-', '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}GcaRange`}
                      />
                    ) : testindex.IndexName === 'Special Nonverbal Composite (SNC)' ? (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${testindex.Id}${appendices.Tests[i].Abbreviation.toLowerCase()
                          .replace(/\(|\)/g, '')
                          .replace(/ /g, '-')
                          .replace('-', '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}SncRange`}
                      />
                    ) : (
                      <Field
                        component="input"
                        type="text"
                        maxLength={3}
                        name={`t${testindex.Id}${appendices.Tests[i].Abbreviation.toLowerCase()
                          .replace(/\(|\)/g, '')
                          .replace(/-/g, '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}${testindex.IndexName.toLowerCase()
                          .replace('<span>', '')
                          .replace('</span>', '')
                          .replace('-', ' ')
                          .replace(':', '')
                          .replace('  ', ' ')
                          .replace(/\(|\)/g, '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}CompositeRange`}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          {t.ParentGroupSubScales !== undefined && t.ParentGroupSubScales.length > 0
            ? t.ParentGroupSubScales.map((parentgroupsubscale) => (
                <div key={parentgroupsubscale.Id}>
                  <h5>{parentgroupsubscale.ParentGroupSubScaleName}</h5>
                  {parentgroupsubscale.ParentScale.map((parentscale) => (
                    <div key={parentscale.Id} className="test-table test-table--appendix">
                      <h4>{parentscale.ParentScaleTitle}</h4>
                      <div className="table__row table__header">
                        <div>Index</div>
                        <div>Score</div>
                        {appendices.Tests[i].Abbreviation === 'PIY' ||
                        appendices.Tests[i].Abbreviation === 'MCMI–IV' ||
                        appendices.Tests[i].Abbreviation === 'MMPI-2' ||
                        appendices.Tests[i].Abbreviation === 'TSCC' ||
                        appendices.Tests[i].Abbreviation === 'MMPI-A' ? null : (
                          <div>% Rank</div>
                        )}
                        {appendices.Tests[i].Abbreviation === 'WIAT-III' ? (
                          <div>Grade Eqv.</div>
                        ) : null}
                        {appendices.Tests[i].Abbreviation !== 'BRIEF' ? (
                          <div>Classification</div>
                        ) : null}
                      </div>

                      {parentscale.SubTests.map((parentscalesubtest) => (
                        <div
                          key={`${parentscalesubtest.id}-${parentscalesubtest.name}-subtest`}
                          className="table__row"
                        >
                          <div>{parentscalesubtest.name}</div>
                          <div>
                            <Field
                              component="input"
                              type="text"
                              maxLength={3}
                              name={`t${parentscalesubtest.id}${parentscalesubtest.name
                                .toLowerCase()
                                .replace('<sup>', '')
                                .replace('</sup>', '')
                                .replace(' – ', ' ')
                                .replace('-', ' ')
                                .replace('/', ' ')
                                .replace(/[’]/g, '')
                                .replace(/[,/]/g, '')
                                .replace('{', '')
                                .replace('}', '')
                                .replace(/\(|\)/g, '')
                                .split(' ')
                                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                .join('')}Score`}
                            />
                          </div>
                          {appendices.Tests[i].Abbreviation === 'PIY' ||
                          appendices.Tests[i].Abbreviation === 'MCMI–IV' ||
                          appendices.Tests[i].Abbreviation === 'MMPI-2' ||
                          appendices.Tests[i].Abbreviation === 'TSCC' ||
                          appendices.Tests[i].Abbreviation === 'MMPI-A' ? null : (
                            <div>
                              <Field
                                component="input"
                                type="text"
                                maxLength={4}
                                name={`t${parentscalesubtest.id}Appendix${appendices.Tests[
                                  i
                                ].Abbreviation.toLowerCase()
                                  .replace('-', ' ')
                                  .split(' ')
                                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                  .join('')}${parentscalesubtest.name
                                  .toLowerCase()
                                  .replace('<sup>', '')
                                  .replace('</sup>', '')
                                  .replace('/', ' ')
                                  .replace(/[,/]/g, '')
                                  .replace(/[’]/g, '')
                                  .replace('{', '')
                                  .replace('}', '')
                                  .replace(/\(|\)/g, '')
                                  .replace('-', ' ')
                                  .split(' ')
                                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                  .join('')}Rank`}
                              />
                            </div>
                          )}
                          {appendices.Tests[i].Abbreviation === 'WIAT-III' ? (
                            <div>
                              <Field
                                component="input"
                                type="text"
                                maxLength={5}
                                name={`t${parentscalesubtest.id}Appendix${appendices.Tests[
                                  i
                                ].Abbreviation.toLowerCase()
                                  .replace('-', ' ')
                                  .split(' ')
                                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                  .join('')}${parentscalesubtest.name
                                  .toLowerCase()
                                  .replace('<sup>', '')
                                  .replace('</sup>', '')
                                  .replace('/', ' ')
                                  .replace('-', ' ')
                                  .replace(/[,/]/g, '')
                                  .replace(/[’]/g, '')
                                  .replace('{', '')
                                  .replace('}', '')
                                  .replace(/\(|\)/g, '')
                                  .split(' ')
                                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                  .join('')}GradeEquivalent`}
                              />
                            </div>
                          ) : null}
                          {appendices.Tests[i].Abbreviation !== 'BRIEF' ? (
                            <div>
                              <Field
                                component="input"
                                type="text"
                                maxLength={15}
                                name={`t${parentscalesubtest.id}Appendix${appendices.Tests[
                                  i
                                ].Abbreviation.toLowerCase()
                                  .replace(/-/g, ' ')
                                  .split(' ')
                                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                  .join('')}${parentscalesubtest.name
                                  .toLowerCase()
                                  .replace('-', ' ')
                                  .replace('<sup>', '')
                                  .replace('</sup>', '')
                                  .replace('/', ' ')
                                  .replace(/[,/]/g, '')
                                  .replace(/[’]/g, '')
                                  .replace('{', '')
                                  .replace('}', '')
                                  .replace(/\(|\)/g, '')
                                  .split(' ')
                                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                  .join('')}Range`}
                              />
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  ))}
                  {appendices.Tests[i].Abbreviation === 'RBANS' ? (
                    <div>
                      <div className="test-table test-table--appendix">
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
            ? t.ParentGroupScales.map((parentgroupscale) => (
                <div key={`pgs-${parentgroupscale.Id}`}>
                  <h5>{parentgroupscale.ParentGroupScaleName}</h5>
                  {parentgroupscale.ParentScaleTitles !== undefined
                    ? parentgroupscale.ParentScaleTitles.map((parentgroupscalestitle) => (
                        <div
                          key={`pst-${parentgroupscalestitle.Id}`}
                          className="test-table test-table--appendix"
                        >
                          <h4>{parentgroupscalestitle.ParentScaleName}</h4>
                          <div className="table__row table__header">
                            <div>Scale</div>
                            <div>T-Score</div>
                            {appendices.Tests[i].Abbreviation === 'PIY' ||
                            appendices.Tests[i].Abbreviation === 'MCMI–IV' ||
                            appendices.Tests[i].Abbreviation === 'MMPI-2' ||
                            appendices.Tests[i].Abbreviation === 'TSCC' ||
                            appendices.Tests[i].Abbreviation === 'MMPI-A' ? null : (
                              <div>% Rank</div>
                            )}
                            {appendices.Tests[i].Abbreviation !== 'BRIEF' ? (
                              <div>Classification</div>
                            ) : null}
                          </div>

                          {parentgroupscalestitle.SubTests.map((parentgroupscalesubtest) => (
                            <div
                              key={`${parentgroupscalesubtest.id}-${parentgroupscalesubtest.name}-subtest`}
                              className="table__row"
                            >
                              <div>{parentgroupscalesubtest.name}</div>
                              <div>
                                <Field
                                  component="input"
                                  type="text"
                                  maxLength={3}
                                  name={`t${
                                    parentgroupscalesubtest.id
                                  }${parentgroupscalesubtest.name
                                    .toLowerCase()
                                    .replace('<sup>', '')
                                    .replace('</sup>', '')
                                    .replace(' – ', ' ')
                                    .replace('/', ' ')
                                    .replace('-', ' ')
                                    .replace(/[’]/g, '')
                                    .replace(/[,/]/g, '')
                                    .replace('{', '')
                                    .replace('}', '')
                                    .replace(/\(|\)/g, '')
                                    .split(' ')
                                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                    .join('')}Score`}
                                />
                              </div>
                              {appendices.Tests[i].Abbreviation === 'PIY' ||
                              appendices.Tests[i].Abbreviation === 'MCMI–IV' ||
                              appendices.Tests[i].Abbreviation === 'MMPI-2' ||
                              appendices.Tests[i].Abbreviation === 'TSCC' ||
                              appendices.Tests[i].Abbreviation === 'MMPI-A' ? null : (
                                <div>
                                  <Field
                                    component="input"
                                    type="text"
                                    maxLength={4}
                                    name={`t${parentgroupscalesubtest.id}Appendix${appendices.Tests[
                                      i
                                    ].Abbreviation.toLowerCase()
                                      .replace('-', ' ')
                                      .split(' ')
                                      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                      .join('')}${parentgroupscalesubtest.name
                                      .toLowerCase()
                                      .replace('<sup>', '')
                                      .replace('</sup>', '')
                                      .replace('/', ' ')
                                      .replace(/[,/]/g, '')
                                      .replace(/[’]/g, '')
                                      .replace('{', '')
                                      .replace('}', '')
                                      .replace(/\(|\)/g, '')
                                      .replace('-', ' ')
                                      .split(' ')
                                      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                      .join('')}Rank`}
                                  />
                                </div>
                              )}
                              {appendices.Tests[i].Abbreviation !== 'BRIEF' ? (
                                <div>
                                  <Field
                                    component="input"
                                    type="text"
                                    maxLength={15}
                                    name={`t${parentgroupscalesubtest.id}Appendix${appendices.Tests[
                                      i
                                    ].Abbreviation.toLowerCase()
                                      .replace('-', ' ')
                                      .split(' ')
                                      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                      .join('')}${parentgroupscalesubtest.name
                                      .toLowerCase()
                                      .replace('<sup>', '')
                                      .replace('</sup>', '')
                                      .replace('/', ' ')
                                      .replace(/[,/]/g, '')
                                      .replace(/[’]/g, '')
                                      .replace('{', '')
                                      .replace('}', '')
                                      .replace('-', ' ')
                                      .replace(/\(|\)/g, '')
                                      .split(' ')
                                      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                      .join('')}Range`}
                                  />
                                </div>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      ))
                    : parentgroupscale.ParentGroupSubScales.map((parentgroupsubscale) => (
                        <div
                          key={`pgss-${parentgroupsubscale.Id}`}
                          className="test-table test-table--appendix"
                        >
                          <h4>{parentgroupsubscale.ParentGroupSubScaleName}</h4>
                          {parentgroupsubscale.ParentScaleTitles.map(
                            (parentgroupsubscalestitle) => (
                              <div key={`pst-${parentgroupsubscalestitle.Id}`}>
                                <div className="table__row table__header">
                                  <div>Scale</div>
                                  <div>T-Score</div>
                                  {appendices.Tests[i].Abbreviation === 'PIY' ||
                                  appendices.Tests[i].Abbreviation === 'MCMI–IV' ||
                                  appendices.Tests[i].Abbreviation === 'MMPI-2' ||
                                  appendices.Tests[i].Abbreviation === 'TSCC' ||
                                  appendices.Tests[i].Abbreviation === 'MMPI-A' ? null : (
                                    <div>% Rank</div>
                                  )}
                                  {appendices.Tests[i].Abbreviation !== 'BRIEF' ? (
                                    <div>Classification</div>
                                  ) : null}
                                </div>

                                {parentgroupsubscalestitle.SubTests.map(
                                  (parentgroupscalesubtest) => (
                                    <div
                                      key={`${parentgroupscalesubtest.id}-${parentgroupscalesubtest.name}-subtest`}
                                      className="table__row"
                                    >
                                      <div>{parentgroupscalesubtest.name}</div>
                                      <div>
                                        <Field
                                          component="input"
                                          type="text"
                                          maxLength={3}
                                          name={`t${
                                            parentgroupscalesubtest.id
                                          }${parentgroupscalesubtest.name
                                            .toLowerCase()
                                            .replace('<sup>', '')
                                            .replace('</sup>', '')
                                            .replace(' – ', ' ')
                                            .replace('-', ' ')
                                            .replace('/', '')
                                            .replace(/[’]/g, '')
                                            .replace(/[,/]/g, '')
                                            .replace('{', '')
                                            .replace('}', '')
                                            .replace(/\(|\)/g, '')
                                            .replace(/[/]/g, '')
                                            .replace(/[,/]/g, '')
                                            .replace(/[’]/g, '')
                                            .split(' ')
                                            .map(
                                              (word) =>
                                                word.charAt(0).toUpperCase() + word.slice(1),
                                            )
                                            .join('')}Score`}
                                        />
                                      </div>
                                      {appendices.Tests[i].Abbreviation === 'PIY' ||
                                      appendices.Tests[i].Abbreviation === 'MCMI–IV' ||
                                      appendices.Tests[i].Abbreviation === 'MMPI-2' ||
                                      appendices.Tests[i].Abbreviation === 'TSCC' ||
                                      appendices.Tests[i].Abbreviation === 'MMPI-A' ? null : (
                                        <div>
                                          <Field
                                            component="input"
                                            type="text"
                                            maxLength={4}
                                            name={`t${
                                              parentgroupscalesubtest.id
                                            }Appendix${appendices.Tests[
                                              i
                                            ].Abbreviation.toLowerCase()
                                              .replace('-', ' ')
                                              .split(' ')
                                              .map(
                                                (word) =>
                                                  word.charAt(0).toUpperCase() + word.slice(1),
                                              )
                                              .join('')}${parentgroupscalesubtest.name
                                              .toLowerCase()
                                              .replace('<sup>', '')
                                              .replace('</sup>', '')
                                              .replace('/', ' ')
                                              .replace(/[,/]/g, '')
                                              .replace(/[’]/g, '')
                                              .replace('{', '')
                                              .replace('}', '')
                                              .replace(/\(|\)/g, '')
                                              .replace('-', ' ')
                                              .split(' ')
                                              .map(
                                                (word) =>
                                                  word.charAt(0).toUpperCase() + word.slice(1),
                                              )
                                              .join('')}Rank`}
                                          />
                                        </div>
                                      )}
                                      {appendices.Tests[i].Abbreviation !== 'BRIEF' ? (
                                        <div>
                                          <Field
                                            component="input"
                                            type="text"
                                            maxLength={15}
                                            name={`t${
                                              parentgroupscalesubtest.id
                                            }Appendix${appendices.Tests[
                                              i
                                            ].Abbreviation.toLowerCase()
                                              .replace('-', ' ')
                                              .split(' ')
                                              .map(
                                                (word) =>
                                                  word.charAt(0).toUpperCase() + word.slice(1),
                                              )
                                              .join('')}${parentgroupscalesubtest.name
                                              .toLowerCase()
                                              .replace('<sup>', '')
                                              .replace('</sup>', '')
                                              .replace('/', ' ')
                                              .replace(/[,/]/g, '')
                                              .replace(/[’]/g, '')
                                              .replace('{', '')
                                              .replace('}', '')
                                              .replace('-', ' ')
                                              .replace(/\(|\)/g, '')
                                              .split(' ')
                                              .map(
                                                (word) =>
                                                  word.charAt(0).toUpperCase() + word.slice(1),
                                              )
                                              .join('')}Range`}
                                          />
                                        </div>
                                      ) : null}
                                    </div>
                                  ),
                                )}
                              </div>
                            ),
                          )}
                        </div>
                      ))}
                </div>
              ))
            : null}

          {t.ParentScale !== undefined && t.ParentScale.length > 0
            ? t.ParentScale.map((parentscale) => (
                <div key={parentscale.Id} className="test-table test-table--appendix">
                  <h4>
                    {parentscale.ParentScaleTitle.replace('<span>', '').replace('</span>', '')}
                  </h4>
                  <div className="table__row table__header">
                    {appendices.Tests[i].Abbreviation === 'BRIEF' ? (
                      <div>Scale</div>
                    ) : (
                      <div>Subtest</div>
                    )}
                    <div>Score</div>
                    {appendices.Tests[i].Abbreviation === 'MCMI–IV' ||
                    appendices.Tests[i].Abbreviation === 'MMPI-2' ||
                    appendices.Tests[i].Abbreviation === 'TSCC' ||
                    appendices.Tests[i].Abbreviation === 'D-KEFS' ||
                    appendices.Tests[i].Abbreviation === 'MMPI-A' ? null : (
                      <div>% Rank</div>
                    )}
                    {appendices.Tests[i].Abbreviation === 'WIAT-III' ? <div>Grade Eqv.</div> : null}
                    {appendices.Tests[i].Abbreviation === 'Vineland-II' ? (
                      <div>Descriptive Category</div>
                    ) : appendices.Tests[i].Abbreviation === 'PIY' ? null : (
                      <div>Classification</div>
                    )}
                  </div>

                  {parentscale.SubTests.map((subtest) => (
                    <div
                      key={`${subtest.id}-${subtest.name.replace('-', '')}-subtest`}
                      className="table__row"
                    >
                      {appendices.Tests[i].Abbreviation === 'MMPI-2' ? (
                        <div dangerouslySetInnerHTML={createMarkup(subtest.name)} />
                      ) : (
                        <div>{subtest.name}</div>
                      )}
                      <div>
                        <Field
                          component="input"
                          type="text"
                          maxLength={3}
                          name={`t${subtest.id}${subtest.name
                            .replace('<sup>', '')
                            .replace('</sup>', '')
                            .replace('/', '')
                            .replace(' – ', '')
                            .replace('{', '')
                            .replace('}', '')
                            .replace('-', ' ')
                            .replace(':', '')
                            .replace(/\(|\)/g, '')
                            .split(' ')
                            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                            .join('')}Score`}
                        />
                      </div>
                      {appendices.Tests[i].Abbreviation === 'MCMI–IV' ||
                      appendices.Tests[i].Abbreviation === 'MMPI-2' ||
                      appendices.Tests[i].Abbreviation === 'D-KEFS' ||
                      appendices.Tests[i].Abbreviation === 'TSCC' ||
                      appendices.Tests[i].Abbreviation === 'PIY' ||
                      appendices.Tests[i].Abbreviation === 'MMPI-A' ? null : (
                        <div>
                          <Field
                            component="input"
                            type="text"
                            maxLength={4}
                            name={`t${subtest.id}Appendix${appendices.Tests[i].Abbreviation.charAt(
                              0,
                            ).toUpperCase()}${appendices.Tests[i].Abbreviation.slice(1)
                              .toLowerCase()
                              .replace(/ /g, '')
                              .replace('-', '')}${subtest.name
                              .toLowerCase()
                              .replace(/ /g, ' ')
                              .replace('<sup>', '')
                              .replace('</sup>', '')
                              .replace('/', ' ')
                              .replace(/[,/]/g, '')
                              .replace(/[’]/g, '')
                              .replace('{', '')
                              .replace('}', '')
                              .replace(/\(|\)/g, '')
                              .replace('–', '')
                              .replace('-', ' ')
                              .replace(':', '')
                              .split(' ')
                              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                              .join('')}Rank`}
                          />
                        </div>
                      )}
                      {appendices.Tests[i].Abbreviation === 'PIY' ? (
                        <div>
                          <Field
                            component="input"
                            type="text"
                            maxLength={4}
                            name={`t${subtest.id}${appendices.Tests[i].Abbreviation.charAt(
                              0,
                            ).toUpperCase()}${appendices.Tests[i].Abbreviation.slice(1)
                              .toLowerCase()
                              .replace(/ /g, '')
                              .replace('-', '')}${subtest.name
                              .toLowerCase()
                              .replace(/ /g, ' ')
                              .replace('<sup>', '')
                              .replace('</sup>', '')
                              .replace('/', ' ')
                              .replace(/[,/]/g, '')
                              .replace(/[’]/g, '')
                              .replace('{', '')
                              .replace('}', '')
                              .replace(/\(|\)/g, '')
                              .replace('–', '')
                              .replace('-', ' ')
                              .replace(':', '')
                              .split(' ')
                              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                              .join('')}PercentileRank`}
                          />
                        </div>
                      ) : null}
                      {appendices.Tests[i].Abbreviation === 'WIAT-III' ? (
                        <div>
                          <Field
                            component="input"
                            type="text"
                            maxLength={5}
                            name={`t${subtest.id}Appendix${appendices.Tests[i].Abbreviation.charAt(
                              0,
                            ).toUpperCase()}${appendices.Tests[i].Abbreviation.slice(1)
                              .toLowerCase()
                              .replace(/ /g, '')
                              .replace('-', '')}${subtest.name
                              .toLowerCase()
                              .replace(/ /g, ' ')
                              .replace('<sup>', '')
                              .replace('</sup>', '')
                              .replace('/', ' ')
                              .replace(/[,/]/g, '')
                              .replace(/[’]/g, '')
                              .replace('{', '')
                              .replace('}', '')
                              .replace(/\(|\)/g, '')
                              .replace('–', '')
                              .replace('-', ' ')
                              .split(' ')
                              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                              .join('')}GradeEquivalent`}
                          />
                        </div>
                      ) : null}
                      {appendices.Tests[i].Abbreviation === 'PIY' ? null : (
                        <div>
                          <Field
                            component="input"
                            type="text"
                            maxLength={15}
                            name={`t${subtest.id}Appendix${appendices.Tests[i].Abbreviation.charAt(
                              0,
                            ).toUpperCase()}${appendices.Tests[i].Abbreviation.slice(1)
                              .toLowerCase()
                              .replace(/ /g, '')
                              .replace('-', '')}${subtest.name
                              .toLowerCase()
                              .replace(/ /g, ' ')
                              .replace('<sup>', '')
                              .replace('</sup>', '')
                              .replace('/', '')
                              .replace(/[,/]/g, '')
                              .replace(/[’]/g, '')
                              .replace('{', '')
                              .replace('}', '')
                              .replace(/\(|\)/g, '')
                              .replace('–', '')
                              .replace('-', ' ')
                              .replace(':', '')
                              .split(' ')
                              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                              .join('')}Range`}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                  {appendices.Tests[i].Abbreviation === 'D-KEFS' &&
                  (parentscale.ParentScaleTitle === 'Verbal Fluency' ||
                    parentscale.ParentScaleTitle === 'Design Fluency' ||
                    parentscale.ParentScaleTitle === 'Color-Word Interference Test' ||
                    parentscale.ParentScaleTitle === 'Sorting Test' ||
                    parentscale.ParentScaleTitle === 'Twenty Questions' ||
                    parentscale.ParentScaleTitle === 'Word Context Test' ||
                    parentscale.ParentScaleTitle === 'Tower Test' ||
                    parentscale.ParentScaleTitle === 'Proverb Test') ? (
                    <div className="table__row">
                      <div>Summary of Scores</div>
                      <div>
                        <Field
                          component="input"
                          type="text"
                          maxLength={3}
                          name={`t${parentscale.Id}Appendix${appendices.Tests[
                            i
                          ].Abbreviation.toLowerCase()
                            .replace('-', '')
                            .split(' ')
                            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                            .join('')}${parentscale.ParentScaleTitle.replace('-', ' ')
                            .split(' ')
                            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                            .join('')}SummaryOfScoresScore`}
                        />
                      </div>
                      <div>
                        <Field
                          component="input"
                          type="text"
                          maxLength={15}
                          name={`t${parentscale.Id}Appendix${appendices.Tests[
                            i
                          ].Abbreviation.toLowerCase()
                            .replace('-', '')
                            .split(' ')
                            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                            .join('')}${parentscale.ParentScaleTitle.replace('-', ' ')
                            .split(' ')
                            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                            .join('')}SummaryOfScoresRange`}
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
                {appendices.Tests[i].Abbreviation === 'PIY' ||
                appendices.Tests[i].Abbreviation === 'MCMI–IV' ||
                appendices.Tests[i].Abbreviation === 'MMPI-2' ||
                appendices.Tests[i].Abbreviation === 'TSCC' ||
                appendices.Tests[i].Abbreviation === 'MMPI-A' ? null : (
                  <div>% Rank</div>
                )}
                {appendices.Tests[i].Abbreviation === 'BRIEF' ||
                appendices.Tests[i].Abbreviation === 'Nelson-Denny' ||
                appendices.Tests[i].Abbreviation === 'GORT-5' ? null : (
                  <div>Classification</div>
                )}
                {appendices.Tests[i].Abbreviation === 'Nelson-Denny' ||
                appendices.Tests[i].Abbreviation === 'GORT-5' ? (
                  <div>Grade Equivalent</div>
                ) : null}
              </div>
              {t.SubTests.map((subtest) => (
                <div key={`${subtest.Id}-${subtest.Name}-subtest`} className="table__row">
                  <div>{subtest.Name}</div>
                  <div>
                    <Field
                      component="input"
                      type="text"
                      maxLength={3}
                      name={`t${subtest.Id}${subtest.Name.toLowerCase()
                        .replace('<sup>', '')
                        .replace('</sup>', '')
                        .replaceAll(' – ', '')
                        .replaceAll('-', ' ')
                        .replace(/[/]/g, ' ')
                        .replace(/[,/]/g, '')
                        .replace(/[’]/g, '')
                        .replace('{', '')
                        .replace('}', '')
                        .replace(/\(|\)/g, '')
                        .split(' ')
                        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                        .join('')}Score`}
                    />
                  </div>
                  {appendices.Tests[i].Abbreviation === 'PIY' ? null : (
                    <div>
                      <Field
                        component="input"
                        type="text"
                        maxLength={4}
                        name={`t${subtest.Id}Appendix${appendices.Tests[
                          i
                        ].Abbreviation.toLowerCase()
                          .replace(/-/g, ' ')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}${subtest.Name.toLowerCase()
                          .replace('<sup>', '')
                          .replaceAll('-', '')
                          .replace('</sup>', '')
                          .replace('/', '')
                          .replace(/[,/]/g, '')
                          .replace(/[’]/g, '')
                          .replace('{', '')
                          .replace('}', '')
                          .replace(/\(|\)/g, '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}Rank`}
                      />
                    </div>
                  )}
                  {appendices.Tests[i].Abbreviation !== 'BRIEF' ? (
                    <div>
                      <Field
                        component="input"
                        type="text"
                        maxLength={15}
                        name={`t${subtest.Id}Appendix${appendices.Tests[
                          i
                        ].Abbreviation.toLowerCase()
                          .replace(/-/g, ' ')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}${subtest.Name.toLowerCase()
                          .replace('<sup>', '')
                          .replace('</sup>', '')
                          .replace('/', '')
                          .replace(/[,/]/g, '')
                          .replace(/[’]/g, '')
                          .replace('{', '')
                          .replace('}', '')
                          .replace(/\(|\)/g, '')
                          .replace(/-/g, ' ')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}Range`}
                      />
                    </div>
                  ) : null}
                </div>
              ))}
              {appendices.Tests[i].Abbreviation === 'GORT-5' ? (
                <div className="table__row">
                  <div>ORI (Oral Reading Index)</div>
                  <div>
                    <Field component="input" type="text" maxLength={3} name={`t${t.Id}ORIScore`} />
                  </div>
                  <div>
                    <Field
                      component="input"
                      type="text"
                      maxLength={5}
                      name={`t${t.Id}Appendix${appendices.Tests[i].Abbreviation.toLowerCase()
                        .replace('-', ' ')
                        .split(' ')
                        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                        .join('')}ORIRank`}
                    />
                  </div>
                  <div>
                    <Field
                      component="input"
                      type="text"
                      maxLength={15}
                      name={`t${t.Id}Appendix${appendices.Tests[i].Abbreviation.toLowerCase()
                        .replace('-', '')
                        .split(' ')
                        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                        .join('')}ORIGradeEquivalent`}
                    />
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}

          {t.TestModules !== undefined && t.TestModules.length > 0
            ? t.TestModules.map((testmodule) => (
                <div key={`${testmodule.Id}-${testmodule.Name}`}>
                  <h5>{testmodule.Name}</h5>
                  {testmodule.ParentGroupScales.map((parentgroupscale) => (
                    <div key={parentgroupscale.Id} className="test-table test-table--appendix">
                      <h4>{parentgroupscale.ParentGroupScaleName}</h4>
                      {parentgroupscale.ParentScaleTitles.map((parentscaletitle) => (
                        <div key={parentscaletitle.Id}>
                          <h6>{parentscaletitle.ParentScaleTitle}</h6>
                          <div className="table__row table__header">
                            <div>Scale</div>
                            <div>Score</div>
                            {appendices.Tests[i].Abbreviation === 'PIY' ||
                            appendices.Tests[i].Abbreviation === 'MCMI–IV' ||
                            appendices.Tests[i].Abbreviation === 'MMPI-2' ||
                            appendices.Tests[i].Abbreviation === 'TSCC' ||
                            appendices.Tests[i].Abbreviation === 'MMPI-A' ||
                            appendices.Tests[i].Abbreviation === 'ADOS-2' ? null : (
                              <div>% Rank</div>
                            )}
                            {appendices.Tests[i].Abbreviation === 'ADOS-2' ? (
                              <div>Positive Findings</div>
                            ) : null}
                            {appendices.Tests[i].Abbreviation === 'WIAT-III' ? (
                              <div>Grade Eqv.</div>
                            ) : null}
                            {appendices.Tests[i].Abbreviation !== 'BRIEF' ? (
                              <div>Comparison Score</div>
                            ) : null}
                          </div>

                          {parentscaletitle.SubTests.map((subtest) => (
                            <div
                              key={`${subtest.id}-${subtest.name}-subtest`}
                              className="table__row"
                            >
                              <div>{subtest.name}</div>
                              <div>
                                <Field
                                  component="input"
                                  type="text"
                                  maxLength={3}
                                  name={`t${subtest.id}${appendices.Tests[
                                    i
                                  ].Abbreviation.toLowerCase()
                                    .replace(/ /g, '')
                                    .replace('-', '')
                                    .split(' ')
                                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                    .join('')}${subtest.name
                                    .toLowerCase()
                                    .replace(/[/]/g, ' ')
                                    .replace(/[,/]/g, ' ')
                                    .replace(/[’]/g, ' ')
                                    .replace(/ /g, ' ')
                                    .replace(/\(|\)/g, ' ')
                                    .replaceAll('-', ' ')
                                    .split(' ')
                                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                    .join('')}Score`}
                                />
                              </div>
                              {appendices.Tests[i].Abbreviation === 'PIY' ||
                              appendices.Tests[i].Abbreviation === 'MCMI–IV' ||
                              appendices.Tests[i].Abbreviation === 'MMPI-2' ||
                              appendices.Tests[i].Abbreviation === 'TSCC' ||
                              appendices.Tests[i].Abbreviation === 'MMPI-A' ||
                              appendices.Tests[i].Abbreviation === 'ADOS-2' ? null : (
                                <div>
                                  <Field
                                    component="input"
                                    type="text"
                                    maxLength={4}
                                    name={`t${subtest.id}Appendix${appendices.Tests[
                                      i
                                    ].Abbreviation.toLowerCase().replace(/ /g, '')}${subtest.name
                                      .toLowerCase()
                                      .replace('<sup>', '')
                                      .replace('</sup>', '')
                                      .replace('/', ' ')
                                      .replace(/[,/]/g, '')
                                      .replace(/[’]/g, '')
                                      .replace('{', '')
                                      .replace('}', '')
                                      .replace(/\(|\)/g, '')}Rank`}
                                  />
                                </div>
                              )}
                              {appendices.Tests[i].Abbreviation === 'ADOS-2' ? (
                                <div>Positive findings go here</div>
                              ) : null}
                              {appendices.Tests[i].Abbreviation === 'WIAT-III' ? (
                                <div>
                                  <Field
                                    component="input"
                                    type="text"
                                    maxLength={5}
                                    name={`${subtest.id}Appendix${appendices.Tests[
                                      i
                                    ].Abbreviation.toLowerCase().replace(/ /g, '-')}${subtest.name
                                      .toLowerCase()
                                      .replace('<sup>', '')
                                      .replace('</sup>', '')
                                      .replace('/', '-')
                                      .replace(/[,/]/g, '')
                                      .replace(/[’]/g, '')
                                      .replace('{', '')
                                      .replace('}', '')
                                      .replace(/\(|\)/g, '')}GradeEquivalent`}
                                  />
                                </div>
                              ) : null}
                              {appendices.Tests[i].Abbreviation !== 'BRIEF' ? (
                                <div>
                                  <Field
                                    component="input"
                                    type="text"
                                    maxLength={15}
                                    name={`t${subtest.id}Appendix-${appendices.Tests[
                                      i
                                    ].Abbreviation.toLowerCase()}${subtest.name
                                      .toLowerCase()
                                      .replace(/ /g, '-')
                                      .replace('<sup>', '')
                                      .replace('</sup>', '')
                                      .replace('/', '-')
                                      .replace(/[,/]/g, '')
                                      .replace(/[’]/g, '')
                                      .replace('{', '')
                                      .replace('}', '')
                                      .replace(/\(|\)/g, '')}Range`}
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

          {t.TestScoringTableScores !== undefined && t.TestScoringTableScores.length > 0 ? (
            <div className="test-table test-table--appendix">
              <div className="table__row table__header">
                <div>Subtest</div>
                <div>Score</div>
                {appendices.Tests[i].Abbreviation === 'PIY' ||
                appendices.Tests[i].Abbreviation === 'MCMI–IV' ||
                appendices.Tests[i].Abbreviation === 'MMPI-2' ||
                appendices.Tests[i].Abbreviation === 'TSCC' ||
                appendices.Tests[i].Abbreviation === 'MMPI-A' ? null : (
                  <div>% Rank</div>
                )}
                {appendices.Tests[i].Abbreviation === 'WIAT-III' ? <div>Grade Eqv.</div> : null}
                {appendices.Tests[i].Abbreviation !== 'BRIEF' ? <div>Classification</div> : null}
              </div>

              {t.TestScoringTableScores.map((testscoringtablescore, tstsIndex) => (
                <div
                  key={`${tstsIndex}-${testscoringtablescore.id}-${testscoringtablescore.name}`}
                  className="table__row"
                >
                  <div>{testscoringtablescore.name}</div>
                  <div>
                    <Field
                      component="input"
                      type="text"
                      maxLength={3}
                      name={`t${testscoringtablescore.id}${appendices.Tests[
                        i
                      ].Abbreviation.toLowerCase()
                        .replaceAll('-', '')
                        .split(' ')
                        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                        .join('')}${testscoringtablescore.name
                        .toLowerCase()
                        .replace('<sup>', '')
                        .replace('</sup>', '')
                        .replace(' – ', ' ')
                        .replace('/', ' ')
                        .replace(/[’]/g, '')
                        .replace(/[,/]/g, '')
                        .replace('{', '')
                        .replace('}', '')
                        .replace(/\(|\)/g, '')
                        .split(' ')
                        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                        .join('')}Score`}
                    />
                  </div>
                  {appendices.Tests[i].Abbreviation === 'PIY' ||
                  appendices.Tests[i].Abbreviation === 'MCMI–IV' ||
                  appendices.Tests[i].Abbreviation === 'MMPI-2' ||
                  appendices.Tests[i].Abbreviation === 'TSCC' ||
                  appendices.Tests[i].Abbreviation === 'MMPI-A' ? null : (
                    <div>
                      <Field
                        component="input"
                        type="text"
                        maxLength={4}
                        name={`t${testscoringtablescore.id}Appendix${appendices.Tests[
                          i
                        ].Abbreviation.toLowerCase()
                          .replaceAll('-', '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}${testscoringtablescore.name
                          .toLowerCase()
                          .replaceAll('-', '')
                          .replace('<sup>', '')
                          .replace('</sup>', '')
                          .replace('/', '')
                          .replace(/[,/]/g, '')
                          .replace(/[’]/g, '')
                          .replace('{', '')
                          .replace('}', '')
                          .replace(/\(|\)/g, '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}Rank`}
                      />
                    </div>
                  )}
                  {appendices.Tests[i].Abbreviation === 'WIAT-III' ? (
                    <div>
                      <Field
                        component="input"
                        type="text"
                        maxLength={5}
                        name={`t${testscoringtablescore.id}Appendix${appendices.Tests[
                          i
                        ].Abbreviation.toLowerCase()
                          .replaceAll('-', '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}${testscoringtablescore.name
                          .toLowerCase()
                          .replaceAll('-', ' ')
                          .replace('<sup>', '')
                          .replace('</sup>', '')
                          .replace('/', '')
                          .replace(/[,/]/g, '')
                          .replace(/[’]/g, '')
                          .replace('{', '')
                          .replace('}', '')
                          .replace(/\(|\)/g, '')}GradeEquivalent`}
                      />
                    </div>
                  ) : null}
                  {appendices.Tests[i].Abbreviation !== 'BRIEF' ? (
                    <div>
                      <Field
                        component="input"
                        type="text"
                        maxLength={15}
                        name={`t${testscoringtablescore.id}Appendix${appendices.Tests[
                          i
                        ].Abbreviation.toLowerCase()
                          .replaceAll('-', '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}${testscoringtablescore.name
                          .toLowerCase()
                          .replaceAll('-', ' ')
                          .replace('<sup>', '')
                          .replace('</sup>', '')
                          .replace('/', '')
                          .replace(/[,/]/g, '')
                          .replace(/[’]/g, '')
                          .replace('{', '')
                          .replace('}', '')
                          .replace(/\(|\)/g, '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}Range`}
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

AppendixConnected.propTypes = {
  appendices: PropTypes.object,
};

export default Appendix;
