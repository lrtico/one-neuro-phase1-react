import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
// import ReactHtmlParser from "react-html-parser";
import './Test.css';
import MaterialIcon from 'react-google-material-icons';
import SectionSubTitle from '../SectionSubTitle';
import SectionSubHeader from '../SectionSubHeader';
import Textarea from '../Textarea/Textarea';
import { onlyNums, onlyNumsAndRangeCharacters } from '../../utils/Normalize';
// import HtmlParser from "react-html-parser/lib/HtmlParser";

const createNameIterator = (id, b = 0) => {
  const newId = id + b;
  return newId;
};

const ReplaceField = ({ d, i, a, n, tn, event, ...props }) => {
  // Redux Form can't parse embedded <Field>s so we have to construct
  // our own string including Field components and return it to the UI
  const str = d;
  const id = i;
  const abbr = a;
  const name = n;
  const testName = tn;
  console.log(`
    *** The replaceField() string passed in is ${str}.
    The id of the clicked test condition is ${id}.
    The Abbreviation is ${a}.
    The IndexName is ${name}.
    The TestName is ${testName}.
  `);

  // Strip out the first part of the condition string to capture the name of the test
  const output = str.substring(0, str.indexOf('<'));

  const score = (
    <Field
      name={`t${id}${abbr
        .toLowerCase()
        .replace(/\(|\)/g, '')
        .replace('-', '')
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('')}${name
        .toLowerCase()
        .replace('<span>', '')
        .replace('</span>', '')
        .replace(/\(|\)/g, '')
        .replace('-', '')
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('')}CompositeScore`}
      type="text"
      component="input"
      maxLength={3}
      normalize={onlyNums}
      onBlur={(event) => props.handleAppendixTestIndexesAdd(id, testName, abbr, name, event)}
    />
  );
  const percentile = (
    <Field
      name={`t${id}${abbr
        .toLowerCase()
        .replace(/\(|\)/g, '')
        .replace('-', '')
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('')}${name
        .toLowerCase()
        .replace('<span>', '')
        .replace('</span>', '')
        .replace(/\(|\)/g, '')
        .replace('-', '')
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('')}CompositePercentile`}
      type="text"
      component="input"
      maxLength={3}
      normalize={onlyNums}
      // eslint-disable-next-line no-shadow
      onBlur={(event) => props.handleAppendixTestIndexesAdd(id, testName, abbr, name, event)}
    />
  );
  const rank = (
    <Field
      name={`t${id}${abbr
        .toLowerCase()
        .replace(/\(|\)/g, '')
        .replace('-', '')
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('')}${name
        .toLowerCase()
        .replace('<span>', '')
        .replace('</span>', '')
        .replace(/\(|\)/g, '')
        .replace('-', '')
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('')}CompositeRange`}
      type="text"
      component="input"
      onBlur={(event) => props.handleAppendixTestIndexesAdd(id, testName, abbr, name, event)}
    />
  );

  return (
    <span>
      {output}
      {score}
      {', ('}
      {percentile}
      {' percentile)'}
      {', which falls within in the '}
      {rank} {'range of functioning.'}
    </span>
  );
};

const createMarkup = (text) => {
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
            <SectionSubTitle subTitleBold={t.Name} subtitleAbbreviation={t.Abbreviation} />
            {/* <ButtonToggle buttonToggleLabel="Remove test" /> */}
          </div>
          <div className="test-desc">
            <div
              style={{ marginBottom: '9px' }}
              dangerouslySetInnerHTML={createMarkup(t.Descriptions)}
            />
            {t.TestIndexes.map((testindex, tiIdx) => (
              <div key={testindex.Id}>
                {testindex.IndexName === 'General Ability Index' ? (
                  <div className="test__list">
                    <SectionSubHeader subHeader={testindex.IndexName} />
                    <p>
                      <span dangerouslySetInnerHTML={createMarkup(testindex.IndexDescription)} />{' '}
                      {testindex.HasInput && (
                        <span>
                          Client name received a Composite score of{' '}
                          <Field
                            name={`t${testindex.Id}${testFromState[i].Abbreviation.toLowerCase()
                              .replace('-', '')
                              .split(' ')
                              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                              .join('')}GaiCompositeScore`}
                            type="text"
                            component="input"
                            maxLength={3}
                            normalize={onlyNums}
                            onBlur={(event) =>
                              props.handleAppendixTestIndexesAdd(
                                testindex.Id,
                                testFromState[i].Name,
                                testFromState[i].Abbreviation,
                                testindex.IndexName,
                                event,
                              )
                            }
                          />
                          &nbsp;(
                          <Field
                            name={`t${testindex.Id}${testFromState[i].Abbreviation.toLowerCase()
                              .replace('-', '')
                              .split(' ')
                              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                              .join('')}GaiPercentile`}
                            type="text"
                            component="input"
                            onBlur={(event) =>
                              props.handleAppendixTestIndexesAdd(
                                testindex.Id,
                                testFromState[i].Name,
                                testFromState[i].Abbreviation,
                                testindex.IndexName,
                                event,
                              )
                            }
                          />
                          &nbsp; percentile), which falls within in the&nbsp;
                          <Field
                            name={`t${testindex.Id}${testFromState[i].Abbreviation.toLowerCase()
                              .replace('-', '')
                              .split(' ')
                              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                              .join('')}GaiRange`}
                            type="text"
                            component="input"
                            onBlur={(event) =>
                              props.handleAppendixTestIndexesAdd(
                                testindex.Id,
                                testFromState[i].Name,
                                testFromState[i].Abbreviation,
                                testindex.IndexName,
                                event,
                              )
                            }
                          />
                          range of functioning compared to other individuals (his/her) age.
                        </span>
                      )}
                    </p>
                  </div>
                ) : testindex.IndexName === 'General Conceptual Ability' ? (
                  <div>
                    <SectionSubHeader subHeader={testindex.IndexName} />
                    <div className="test__list">
                      CLIENT NAME&#39;s GCA score on the DAS-II places him/her in the{' '}
                      <Field
                        name={`t${testindex.Id}${testFromState[i].Abbreviation.toLowerCase()
                          .replace('-', '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}GcaRange`}
                        type="text"
                        component="input"
                        onBlur={(event) =>
                          props.handleAppendixTestIndexesAdd(
                            testindex.Id,
                            testFromState[i].Name,
                            testFromState[i].Abbreviation,
                            testindex.IndexName,
                            event,
                          )
                        }
                      />{' '}
                      range DAS-II (GCA score of
                      <Field
                        name={`t${testindex.Id}${testFromState[i].Abbreviation.toLowerCase()
                          .replace('-', '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}GcaScore`}
                        type="text"
                        component="input"
                        onBlur={(event) =>
                          props.handleAppendixTestIndexesAdd(
                            testindex.Id,
                            testFromState[i].Name,
                            testFromState[i].Abbreviation,
                            testindex.IndexName,
                            event,
                          )
                        }
                      />
                      {', '}
                      <Field
                        name={`t${testindex.Id}${testFromState[i].Abbreviation.toLowerCase()
                          .replace('-', '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}GcaPercentile`}
                        type="text"
                        component="input"
                        onBlur={(event) =>
                          props.handleAppendixTestIndexesAdd(
                            testindex.Id,
                            testFromState[i].Name,
                            testFromState[i].Abbreviation,
                            testindex.IndexName,
                            event,
                          )
                        }
                      />{' '}
                      percentile) while his/her Special Nonverbal Composite SNC score placed in the{' '}
                      <Field
                        name={`t${testindex.Id}${testFromState[i].Abbreviation.toLowerCase()
                          .replace('-', '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}SncRange`}
                        type="text"
                        component="input"
                        onBlur={(event) =>
                          props.handleAppendixTestIndexesAdd(
                            testindex.Id,
                            testFromState[i].Name,
                            testFromState[i].Abbreviation,
                            testindex.IndexName,
                            event,
                          )
                        }
                      />{' '}
                      range (DAS-II SNC score of{' '}
                      <Field
                        name={`t${testindex.Id}${testFromState[i].Abbreviation.toLowerCase()
                          .replace('-', '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}SncScore`}
                        type="text"
                        component="input"
                        onBlur={(event) =>
                          props.handleAppendixTestIndexesAdd(
                            testindex.Id,
                            testFromState[i].Name,
                            testFromState[i].Abbreviation,
                            testindex.IndexName,
                            event,
                          )
                        }
                      />
                      {', '}
                      <Field
                        name={`t${testindex.Id}${testFromState[i].Abbreviation.toLowerCase()
                          .replace('-', '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}SncPercentile`}
                        type="text"
                        component="input"
                        onBlur={(event) =>
                          props.handleAppendixTestIndexesAdd(
                            testindex.Id,
                            testFromState[i].Name,
                            testFromState[i].Abbreviation,
                            testindex.IndexName,
                            event,
                          )
                        }
                      />{' '}
                      percentile).
                    </div>
                  </div>
                ) : (
                  <div>
                    <SectionSubHeader subHeader={testindex.IndexName} />
                    <p>{testindex.IndexDescription}</p>
                  </div>
                )}

                {testindex.IndexConditions.length > 0
                  ? testindex.IndexConditions.map((indexcondition) => (
                      <div key={indexcondition.Id}>
                        <div className="flex flex--center-vertical has-toggle-child">
                          <h5>{indexcondition.Condition}</h5>
                          <Field
                            name={`t${indexcondition.Id}${indexcondition.Condition.toLowerCase()
                              .replace('-', '')
                              .split(' ')
                              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                              .join('')}`}
                            type="checkbox"
                            component="input"
                          />
                        </div>
                        <div className="flex test__list">
                          <MaterialIcon icon="arrow_right" />
                          <p>
                            {indexcondition.Condition === 'If FSIQ is meaningful' ||
                            indexcondition.Condition === 'If GIA is meaningful' ? (
                              <ReplaceField
                                d={indexcondition.ConditionDescription}
                                i={indexcondition.Id}
                                a={testFromState[i].Abbreviation}
                                n={testFromState[i].TestIndexes[tiIdx].IndexName}
                                tn={testFromState[i].Name}
                                handleAppendixTestIndexesAdd={props.handleAppendixTestIndexesAdd}
                              />
                            ) : (
                              indexcondition.ConditionDescription
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
              ? t.ParentScaleTitles.map((parentscaletitle, idx) => (
                  <div key={parentscaletitle.Id}>
                    <div className="test-table-heading">
                      <div className="flex has-toggle-child">
                        <h6
                          className="h7"
                          dangerouslySetInnerHTML={createMarkup(parentscaletitle.ParentScaleName)}
                        />
                        <Field
                          name={`t${parentscaletitle.Id}${testFromState[
                            i
                          ].Abbreviation.toLowerCase()
                            .replace(/ /g, '')
                            .replace('-', '')
                            .split(' ')
                            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                            .join('')}${parentscaletitle.ParentScaleName.toLowerCase()
                            .replace('<span>', '')
                            .replace('-', ' ')
                            .replace('</span>', '')
                            .replace(':', '')
                            .replace('  ', ' ')
                            .replace(/\(|\)/g, '')
                            .split(' ')
                            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                            .join('')}`}
                          type="checkbox"
                          component="input"
                          onChange={(event) =>
                            props.handleAppendixAdd(
                              parentscaletitle.Id,
                              parentscaletitle.ParentScaleName,
                              testFromState[i].Abbreviation,
                              testFromState[i].Name,
                              event,
                            )
                          }
                        />
                      </div>
                      {parentscaletitle.ParentScaleDescription !== null &&
                      testFromState[i].Abbreviation === 'WPSSI-IV' ? (
                        <div>{parentscaletitle.ParentScaleDescription}</div>
                      ) : null}
                      {parentscaletitle.HasInput ? (
                        <div className="test__list">
                          <p>
                            <span>(Client) demonstrated a relatively</span>
                            <span className="has-toggle-child">
                              <Field
                                name={`t${parentscaletitle.Id}${testFromState[
                                  i
                                ].Abbreviation.toLowerCase()
                                  .replace(/ /g, '')
                                  .replace('-', '')
                                  .split(' ')
                                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                  .join('')}${parentscaletitle.ParentScaleName.toLowerCase()
                                  .replace('<span>', '')
                                  .replace('-', ' ')
                                  .replace('</span>', '')
                                  .replace(':', '')
                                  .replace('  ', ' ')
                                  .replace(/\(|\)/g, '')
                                  .split(' ')
                                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                  .join('')}Inconsistent`}
                                type="checkbox"
                                component="input"
                              />
                              <span className="has-toggle-child--label">inconsistent</span>
                              <Field
                                name={`t${parentscaletitle.Id}${testFromState[
                                  i
                                ].Abbreviation.toLowerCase()
                                  .replace(/ /g, '')
                                  .replace('-', '')
                                  .split(' ')
                                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                  .join('')}${parentscaletitle.ParentScaleName.toLowerCase()
                                  .replace('<span>', '')
                                  .replace('</span>', '')
                                  .replace('-', ' ')
                                  .replace(':', '')
                                  .replace('  ', ' ')
                                  .replace(/\(|\)/g, '')
                                  .split(' ')
                                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                  .join('')}Consistent`}
                                type="checkbox"
                                component="input"
                              />
                              <span className="has-toggle-child--label">consistent</span>
                              <Field
                                name={`t${parentscaletitle.Id}${testFromState[
                                  i
                                ].Abbreviation.toLowerCase()
                                  .replace(/ /g, '')
                                  .replace('-', '')
                                  .split(' ')
                                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                  .join('')}${parentscaletitle.ParentScaleName.toLowerCase()
                                  .replace('<span>', '')
                                  .replace('</span>', '')
                                  .replace('-', ' ')
                                  .replace(':', '')
                                  .replace('  ', ' ')
                                  .replace(/\(|\)/g, '')
                                  .split(' ')
                                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                  .join('')}FreehandPerformance`}
                                type="text"
                                component="input"
                              />
                            </span>
                            <span> performance on the subtests.</span>
                          </p>
                          <p>
                            <span>(Client) received a Composite score of </span>
                            <Field
                              name={`t${parentscaletitle.Id}${testFromState[
                                i
                              ].Abbreviation.toLowerCase()
                                .replace(/ /g, '')
                                .replace('-', '')
                                .split(' ')
                                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                .join('')}${parentscaletitle.ParentScaleName.toLowerCase()
                                .replace('<span>', '')
                                .replace('</span>', '')
                                .replace('-', ' ')
                                .replace(':', '')
                                .replace('  ', ' ')
                                .replace(/\(|\)/g, '')
                                .split(' ')
                                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                .join('')}CompositeScore`}
                              type="text"
                              component="input"
                              maxLength={3}
                              normalize={onlyNums}
                              onBlur={(event) =>
                                props.handleAppendixTestIndexesAdd(
                                  parentscaletitle.Id,
                                  testFromState[i].Name,
                                  testFromState[i].Abbreviation,
                                  parentscaletitle.ParentScaleName,
                                  event,
                                )
                              }
                            />
                            <span>&nbsp;(</span>
                            <Field
                              name={`t${
                                parentscaletitle.Id
                              }${testFromState[0].Abbreviation.toLowerCase()
                                .replace(/ /g, '')
                                .replace('-', '')
                                .split(' ')
                                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                .join('')}${parentscaletitle.ParentScaleName.toLowerCase()
                                .replace('<span>', '')
                                .replace('</span>', '')
                                .replace('-', ' ')
                                .replace(':', '')
                                .replace('  ', ' ')
                                .replace(/\(|\)/g, '')
                                .split(' ')
                                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                .join('')}CompositePercentile`}
                              type="text"
                              component="input"
                              maxLength={3}
                              normalize={onlyNums}
                            />
                            <span>&nbsp; percentile), which falls within in the&nbsp;</span>
                            <Field
                              name={`t${
                                parentscaletitle.Id
                              }${testFromState[0].Abbreviation.toLowerCase()
                                .replace(/ /g, '')
                                .replace('-', '')
                                .split(' ')
                                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                .join('')}${parentscaletitle.ParentScaleName.toLowerCase()
                                .replace('<span>', '')
                                .replace('</span>', '')
                                .replace('-', ' ')
                                .replace(':', '')
                                .replace('  ', ' ')
                                .replace(/\(|\)/g, '')
                                .split(' ')
                                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                .join('')}CompositeRange`}
                              type="text"
                              component="input"
                            />
                            <span>
                              {' '}
                              range of functioning compared to other individuals (his/her) age.
                            </span>
                          </p>
                        </div>
                      ) : (
                        <div
                          dangerouslySetInnerHTML={createMarkup(
                            parentscaletitle.ParentScaleDescription,
                          )}
                        />
                      )}
                    </div>
                    <div className="test-table">
                      <div className="table__row table__header">
                        <div
                          className={
                            (parentscaletitle.SubTests.length > 0 &&
                              parentscaletitle.SubTests[0].Description === null) ||
                            (parentscaletitle.Id !== 163 &&
                              parentscaletitle.SubTests[0].Description === '')
                              ? 'table__row__cell--wide'
                              : null
                          }
                        >
                          {testFromState[i].SubTestType}
                        </div>
                        <div
                          className={
                            testFromState[i].ScoreType === 'T-Score'
                              ? 'table__row__cell--wide'
                              : null
                          }
                        >
                          {testFromState[i].ScoreType}
                        </div>
                        {testFromState[i].Abbreviation === 'Beery VMI' ||
                        testFromState[i].Abbreviation === 'PIY' ||
                        (testFromState[i].Abbreviation === 'D-KEFS' &&
                          (parentscaletitle.ParentScaleName === 'Color-Word Interference Test' ||
                            parentscaletitle.ParentScaleName === 'Twenty Questions' ||
                            parentscaletitle.ParentScaleName === 'Color-Word Interference Test' ||
                            parentscaletitle.ParentScaleName === 'Word Context Test' ||
                            parentscaletitle.ParentScaleName === 'Tower Test')) ? (
                          <div />
                        ) : (
                          <div>{testFromState[i].DescriptionType}</div>
                        )}
                      </div>
                      {parentscaletitle.SubTests.map((subtest) => (
                        <div key={subtest.Id} className="table__row">
                          <div
                            className={
                              subtest.Name !== 'Beery-Motor Coordination' &&
                              (subtest.Description === null || subtest.Description === '')
                                ? 'table__row__cell--wide'
                                : null
                            }
                            dangerouslySetInnerHTML={createMarkup(subtest.Name)}
                          />
                          <div>
                            <Field
                              component="input"
                              type="text"
                              name={`t${subtest.Id}${subtest.Name.replace('<sup>', '')
                                .replace('</sup>', '')
                                .replace('/', '')
                                .replace(' – ', ' ')
                                .replace('{', '')
                                .replace('}', '')
                                .replace('-', ' ')
                                .replace(':', '')
                                .replace(/\(|\)/g, '')
                                .split(' ')
                                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                .join('')}Score`}
                              maxLength={3}
                              normalize={onlyNums}
                              onBlur={(event) =>
                                props.handleAppendixParentScaleTitleSubtestAdd(
                                  subtest.Id,
                                  testFromState[i].Name,
                                  subtest.Name,
                                  testFromState[i].ParentScaleTitles[idx].ParentScaleName,
                                  testFromState[i].Abbreviation,
                                  event,
                                  subtest.ParentScaleTitleId,
                                )
                              }
                            />
                          </div>
                          <div>
                            {testFromState[i].Abbreviation !== 'Beery VMI' &&
                            testFromState[i].Abbreviation !== 'D-KEFS' &&
                            (subtest.Description === null || subtest.Description === '') &&
                            testFromState[i].Abbreviation !== 'PIY' ? (
                              <Field
                                component="input"
                                type="text"
                                name={`t${subtest.ParentScaleTitleId}${subtest.Name.toLowerCase()
                                  .replace(/-/g, ' ')
                                  .split(' ')
                                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                  .join('')}PercentileRank`}
                              />
                            ) : (
                              <span dangerouslySetInnerHTML={createMarkup(subtest.Description)} />
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
                  {testFromState[i].Abbreviation === 'TOMM' ? null : <div>Description</div>}
                </div>
                {t.SubTests.map((subtest) => (
                  <div key={subtest.Id} className="table__row">
                    <div>{subtest.Name}</div>
                    <div>
                      <Field
                        component="input"
                        type="text"
                        name={`t${subtest.Id}${subtest.Name.toLowerCase()
                          .replace(/[/]/g, '')
                          .replace(/[,/]/g, '')
                          .replace(/[’]/g, '')
                          .split(' ')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}Score`}
                        maxLength={3}
                        normalize={onlyNums}
                        onBlur={(event) =>
                          props.handleAppendixSubtestAdd(
                            testFromState[i].Id,
                            testFromState[i].Name,
                            testFromState[i].Abbreviation,
                            subtest.Id,
                            subtest.Name,
                            event,
                          )
                        }
                      />
                    </div>
                    <div dangerouslySetInnerHTML={createMarkup(subtest.Description)} />
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          {t.ParentGroupScales.map((parentgroupscale, pgsIdx) => (
            <div key={parentgroupscale.Id}>
              <h5>{parentgroupscale.ParentGroupScaleName}</h5>
              {parentgroupscale.ParentScaleTitles.length > 0
                ? parentgroupscale.ParentScaleTitles.map((parentscaletitle, pstIdx) => (
                    <div key={parentscaletitle.Id}>
                      {parentscaletitle.SubTests.length > 0 ? (
                        <div>
                          <div className="flex has-toggle-child">
                            <h6 className="h7">{parentscaletitle.ParentScaleName}</h6>
                            <Field
                              name={`t${
                                parentscaletitle.Id
                              }${parentscaletitle.ParentScaleName.toLowerCase()
                                .replace('<span>', '')
                                .replace('</span>', '')
                                .replace('-', ' ')
                                .replace(':', '')
                                .replace('  ', ' ')
                                .replace(/\(|\)/g, '')
                                .split(' ')
                                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                .join('')}`}
                              type="checkbox"
                              component="input"
                              onClick={(event) =>
                                props.handleAppendixAdd(
                                  parentscaletitle.Id,
                                  parentscaletitle.ParentScaleName,
                                  testFromState[i].Abbreviation,
                                  testFromState[i].Name,
                                  event,
                                )
                              }
                            />
                          </div>
                          {parentscaletitle.ParentScaleDescription == null ? null : (
                            <p>{parentscaletitle.ParentScaleDescription}</p>
                          )}
                          <div className="test-table">
                            <div className="table__row table__header">
                              <div>{testFromState[i].SubTestType}</div>
                              <div>Score</div>
                              <div>Description</div>
                            </div>
                            {parentscaletitle.SubTests.map((subtest) => (
                              <div key={subtest.Id} className="table__row">
                                <div>{subtest.Name}</div>
                                <div>
                                  <Field
                                    component="input"
                                    type="text"
                                    name={`t${subtest.Id}${subtest.Name.toLowerCase()
                                      .replace(/[/]/g, '')
                                      .replace(/[,/]/g, '')
                                      .replace(/[’]/g, '')
                                      .replace('-', ' ')
                                      .split(' ')
                                      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                      .join('')}Score`}
                                    maxLength={3}
                                    normalize={onlyNums}
                                    onBlur={(event) =>
                                      props.handleAppendixParentGroupScalesParentScaleTitleSubtestAdd(
                                        testFromState[i].Abbreviation,
                                        testFromState[i].Name,
                                        testFromState[i].ParentGroupScales[pgsIdx].Id,
                                        testFromState[i].ParentGroupScales[pgsIdx]
                                          .ParentGroupScaleName,
                                        subtest.ParentScaleTitleId,
                                        testFromState[i].ParentGroupScales[pgsIdx]
                                          .ParentScaleTitles[pstIdx].ParentScaleName,
                                        subtest.Id,
                                        subtest.Name,
                                        event,
                                      )
                                    }
                                  />
                                </div>
                                <div>{subtest.Description}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div>
                          <h6>{parentscaletitle.ParentScaleName}</h6>
                          <p>{parentscaletitle.ParentScaleDescription}</p>
                        </div>
                      )}
                    </div>
                  ))
                : null}
              {parentgroupscale.ParentGroupSubScales.map((parentgroupsubscale, pgssIdx) => (
                <div key={parentgroupsubscale.Id}>
                  <h6>
                    {parentgroupsubscale.ParentGroupSubScaleName === 'Full Scale'
                      ? null
                      : parentgroupsubscale.ParentGroupSubScaleName}
                  </h6>
                  {parentgroupsubscale.ParentScaleTitles.map((parentscaletitle, pstIdx) => (
                    <div key={parentscaletitle.Id}>
                      {parentscaletitle.SubTests.length > 0 ? (
                        <div>
                          <div className="flex has-toggle-child">
                            <h6 className="h7">{parentscaletitle.ParentScaleName}</h6>
                            <Field
                              name={`t${
                                parentscaletitle.Id
                              }${parentscaletitle.ParentScaleName.toLowerCase()
                                .replace('<span>', '')
                                .replace('</span>', '')
                                .replace('-', ' ')
                                .replace(':', '')
                                .replace('  ', ' ')
                                .replace(/\(|\)/g, '')
                                .replace(/\//g, '')
                                .split(' ')
                                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                .join('')}`}
                              type="checkbox"
                              component="input"
                              onClick={(event) =>
                                props.handleAppendixAdd(
                                  parentscaletitle.Id,
                                  parentscaletitle.ParentScaleName,
                                  testFromState[i].Abbreviation,
                                  testFromState[i].Name,
                                  event,
                                )
                              }
                            />
                          </div>
                          <p>{parentscaletitle.ParentScaleDescription}</p>
                          <div className="test-table">
                            <div className="table__row table__header">
                              <div>
                                {parentscaletitle.Id === 85
                                  ? 'Index'
                                  : testFromState[i].SubTestType}
                              </div>
                              <div>Score</div>
                              <div>Description</div>
                            </div>
                            {parentscaletitle.SubTests.map((subtest) => (
                              <div key={subtest.Id} className="table__row">
                                <div>{subtest.Name}</div>
                                <div>
                                  <Field
                                    component="input"
                                    type="text"
                                    name={`t${subtest.Id}${subtest.Name.toLowerCase()
                                      .replace(/[/]/g, '')
                                      .replace(/[,/]/g, '')
                                      .replace(/[’]/g, '')
                                      .replace('-', ' ')
                                      .split(' ')
                                      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                      .join('')}Score`}
                                    maxLength={3}
                                    normalize={onlyNums}
                                    onBlur={(event) =>
                                      props.handleAppendixParentGroupScalesParentGroupSubScaleSubtestAdd(
                                        testFromState[i].Abbreviation,
                                        testFromState[i].Name,
                                        testFromState[i].ParentGroupScales[pgsIdx].Id,
                                        testFromState[i].ParentGroupScales[pgsIdx]
                                          .ParentGroupScaleName,
                                        testFromState[i].ParentGroupScales[pgsIdx]
                                          .ParentGroupSubScales[pgssIdx].Id,
                                        testFromState[i].ParentGroupScales[pgsIdx]
                                          .ParentGroupSubScales[pgssIdx].ParentGroupSubScaleName,
                                        testFromState[i].ParentGroupScales[pgsIdx]
                                          .ParentGroupSubScales[pgssIdx].ParentScaleTitles[pstIdx]
                                          .Id,
                                        testFromState[i].ParentGroupScales[pgsIdx]
                                          .ParentGroupSubScales[pgssIdx].ParentScaleTitles[pstIdx]
                                          .ParentScaleName,
                                        subtest.Id,
                                        subtest.Name,
                                        event,
                                      )
                                    }
                                  />
                                </div>
                                <div dangerouslySetInnerHTML={createMarkup(subtest.Description)} />
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div>
                          <h6>{parentscaletitle.ParentScaleName}</h6>
                          <p>{parentscaletitle.ParentScaleDescription}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
          {t.ParentGroupSubScales.length > 0
            ? t.ParentGroupSubScales.map((parentgroupsubscale, pgssIdx) => (
                <div key={parentgroupsubscale.Id}>
                  <h5>{parentgroupsubscale.ParentGroupSubScaleName}</h5>
                  {parentgroupsubscale.ParentScaleTitles.map((parentscaletitle, pstIdx) => (
                    <div key={parentscaletitle.Id}>
                      <div>
                        <div className="flex has-toggle-child">
                          <h6 className="h7">{parentscaletitle.ParentScaleName}</h6>
                          <Field
                            name={`t${parentscaletitle.Id}${testFromState[
                              i
                            ].Abbreviation.toLowerCase()
                              .replace(/ /g, '')
                              .replace('-', '')
                              .split(' ')
                              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                              .join('')}${parentscaletitle.ParentScaleName.toLowerCase()
                              .replace(/[/]/g, '')
                              .replace(/[,/]/g, '')
                              .replace(/[’]/g, '')
                              .replaceAll('-', '')
                              .split(' ')
                              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                              .join('')}`}
                            type="checkbox"
                            component="input"
                            onClick={(event) =>
                              props.handleAppendixAdd(
                                parentscaletitle.Id,
                                parentscaletitle.ParentScaleName,
                                testFromState[i].Abbreviation,
                                testFromState[i].Name,
                                event,
                              )
                            }
                          />
                        </div>
                        <p>{parentscaletitle.ParentScaleDescription}</p>
                      </div>
                      <div className="test-table">
                        <div className="table__row table__header">
                          <div>{testFromState[0].SubTestType}</div>
                          <div>Score</div>
                          <div>Description</div>
                        </div>
                        {parentscaletitle.SubTests.map((subtest) => (
                          <div key={subtest.Id} className="table__row">
                            <div>{subtest.Name}</div>
                            <div>
                              <Field
                                component="input"
                                type="text"
                                name={`t${subtest.Id}${subtest.Name.toLowerCase()
                                  .replace(/[/]/g, ' ')
                                  .replace(/[,/]/g, '')
                                  .replace(/[’]/g, '')
                                  .replace('-', ' ')
                                  .split(' ')
                                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                  .join('')}Score`}
                                maxLength={3}
                                normalize={onlyNums}
                                onBlur={(event) =>
                                  props.handleAppendixParentGroupSubScaleSubtestAdd(
                                    testFromState[i].Abbreviation,
                                    testFromState[i].Name,
                                    testFromState[i].ParentGroupSubScales[pgssIdx].Id,
                                    testFromState[i].ParentGroupSubScales[pgssIdx]
                                      .ParentGroupSubScaleName,
                                    testFromState[i].ParentGroupSubScales[pgssIdx]
                                      .ParentScaleTitles[pstIdx].Id,
                                    testFromState[i].ParentGroupSubScales[pgssIdx]
                                      .ParentScaleTitles[pstIdx].ParentScaleName,
                                    subtest.Id,
                                    subtest.Name,
                                    event,
                                  )
                                }
                              />
                            </div>
                            <div dangerouslySetInnerHTML={createMarkup(subtest.Description)} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))
            : null}
          {t.TestModules.length > 0
            ? t.TestModules.map((testmodule, tmIdx) => (
                <div key={`${testmodule.Id}-${testmodule.Name}`}>
                  <h5>{testmodule.Name}</h5>
                  <p>{testmodule.Descriptions}</p>
                  {testmodule.ParentGroupScales.map((parentgroupscale, pgsIdx) => (
                    <div key={parentgroupscale.Id}>
                      <div className="test-table-heading">
                        <SectionSubHeader subHeader={parentgroupscale.ParentGroupScaleName} />
                      </div>
                      {parentgroupscale.ParentScaleTitles.map((parentscaletitle, pstIdx) => (
                        <div key={parentscaletitle.Id}>
                          <SectionSubHeader subHeader={parentscaletitle.ParentGroupScaleName} />
                          <div className="test-table-heading">
                            <div className="flex has-toggle-child">
                              <h6 className="h7">{parentscaletitle.ParentScaleName}</h6>
                              <Field
                                name={`t${parentscaletitle.Id}${testFromState[
                                  i
                                ].Abbreviation.toLowerCase()
                                  .replace(/ /g, '')
                                  .replace('-', '')
                                  .split(' ')
                                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                  .join('')}${parentscaletitle.ParentScaleName.toLowerCase()
                                  .replace(/ /g, ' ')
                                  .replaceAll('-', ' ')
                                  .split(' ')
                                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                  .join('')}`}
                                type="checkbox"
                                component="input"
                                onClick={(event) =>
                                  props.handleAppendixAdd(
                                    parentscaletitle.Id,
                                    parentscaletitle.ParentScaleName,
                                    testFromState[i].Abbreviation,
                                    testFromState[i].Name,
                                    event,
                                  )
                                }
                              />
                            </div>
                            {parentscaletitle.ParentScaleDescription !== null ? (
                              <div
                                className="test__list"
                                dangerouslySetInnerHTML={createMarkup(
                                  parentscaletitle.ParentScaleDescription,
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
                            {parentscaletitle.SubTests.map((subtest) => (
                              <div key={subtest.Id} className="table__row">
                                <div>{subtest.Name}</div>
                                <div>
                                  <Field
                                    component="input"
                                    type="text"
                                    name={`t${subtest.Id}${testFromState[
                                      i
                                    ].Abbreviation.toLowerCase()
                                      .replace(/ /g, '')
                                      .replace('-', '')
                                      .split(' ')
                                      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                      .join('')}${subtest.Name.toLowerCase()
                                      .replace(/[/]/g, ' ')
                                      .replace(/[,/]/g, ' ')
                                      .replace(/[’]/g, ' ')
                                      .replace(/ /g, ' ')
                                      .replace(/\(|\)/g, ' ')
                                      .replaceAll('-', ' ')
                                      .split(' ')
                                      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                      .join('')}Score`}
                                    maxLength={3}
                                    normalize={onlyNums}
                                    onBlur={(event) =>
                                      props.handleAppendixTestModulesSubtestAdd(
                                        testFromState[i].Id,
                                        testFromState[i].Abbreviation,
                                        testFromState[i].Name,
                                        testFromState[i].TestModules[tmIdx].Id,
                                        testFromState[i].TestModules[tmIdx].Name,
                                        testFromState[i].TestModules[tmIdx].ParentGroupScales[
                                          pgsIdx
                                        ].Id,
                                        testFromState[i].TestModules[tmIdx].ParentGroupScales[
                                          pgsIdx
                                        ].ParentGroupScaleName,
                                        testFromState[i].TestModules[tmIdx].ParentGroupScales[
                                          pgsIdx
                                        ].ParentScaleTitles[pstIdx].Id,
                                        testFromState[i].TestModules[tmIdx].ParentGroupScales[
                                          pgsIdx
                                        ].ParentScaleTitles[pstIdx].ParentScaleName,
                                        subtest.Id,
                                        subtest.Name,
                                        event,
                                      )
                                    }
                                  />
                                </div>
                                <div>{subtest.Description}</div>
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
            ? t.TestScoringTableDetails.map((tabledetail, tstdIdx) => (
                <div key={tabledetail.Id} className="test-table test-table--fourCols">
                  <div className="flex has-toggle-child">
                    <h6 className="h7">{tabledetail.Name}</h6>
                  </div>
                  <p>{tabledetail.Description}</p>
                  {tabledetail.ScoreHeader == null ? null : <p>{tabledetail.ScoreHeader}</p>}
                  <div className="table__row table__header">
                    {tabledetail.TableHeaderRowTitles.Col1 == null ? (
                      <div />
                    ) : (
                      <div>{tabledetail.TableHeaderRowTitles.Col1}</div>
                    )}
                    {tabledetail.TableHeaderRowTitles.Col2 == null ? (
                      <div />
                    ) : (
                      <div>{tabledetail.TableHeaderRowTitles.Col2}</div>
                    )}
                    {tabledetail.TableHeaderRowTitles.Col3 == null ? (
                      <div />
                    ) : (
                      <div>{tabledetail.TableHeaderRowTitles.Col3}</div>
                    )}
                    {tabledetail.TableHeaderRowTitles.Col4 == null ? (
                      <div />
                    ) : (
                      <div>{tabledetail.TableHeaderRowTitles.Col4}</div>
                    )}
                    {tabledetail.TableHeaderRowTitles.Col5 == null ? null : (
                      <div>{tabledetail.TableHeaderRowTitles.Col5}</div>
                    )}
                    {tabledetail.TableHeaderRowTitles.Col6 == null ? null : (
                      <div>{tabledetail.TableHeaderRowTitles.Col6}</div>
                    )}
                  </div>
                  {tabledetail.TestScoringTableScores.map((tablescore) => (
                    <div key={tablescore.Id} className="table__row">
                      {
                        tablescore.Col1 == null ? ( // Does Col1 = null?
                          <div /> // ...then add a blank div
                        ) : tablescore.Col1 === '<Field>' ? ( // Does Col1 = "<Field>"?
                          <div>
                            <Field
                              name={`t${createNameIterator(tablescore.Id)}${testFromState[
                                i
                              ].Abbreviation.toLowerCase()
                                .split(' ')
                                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                .join('')}${testFromState[i].TestScoringTableDetails[
                                tstdIdx
                              ].TableHeaderRowTitles.Col1.toLowerCase()
                                .split(' ')
                                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                .join('')}Score`}
                              type="text"
                              component="input"
                              maxLength={3}
                              normalize={onlyNums}
                              onBlur={(event) =>
                                props.handleAppendixTestScoringTableScoresAdd(
                                  testFromState[i].Abbreviation,
                                  testFromState[i].TestScoringTableDetails[tstdIdx].Name,
                                  createNameIterator(tablescore.Id),
                                  testFromState[i].TestScoringTableDetails[tstdIdx]
                                    .TableHeaderRowTitles.Col1,
                                  event,
                                )
                              }
                            />
                          </div> // ...then add a Redux Form Field component
                        ) : (
                          <div>{tablescore.Col1}</div>
                        ) // Fallback to insert string from DB
                      }
                      {
                        tablescore.Col2 == null ? ( // Does Col2 = null?
                          <div /> // ...then add a blank div
                        ) : tablescore.Col2 === '<Field>' ? ( // Does Col2 =2 "<Field>"?
                          <div>
                            <Field
                              name={`t${createNameIterator(tablescore.Id, 1)}${testFromState[
                                i
                              ].Abbreviation.toLowerCase()
                                .split(' ')
                                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                .join('')}${testFromState[
                                i
                              ].TestScoringTableDetails[0].TableHeaderRowTitles.Col2.toLowerCase()
                                .split(' ')
                                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                .join('')}Score`}
                              type="text"
                              component="input"
                              maxLength={3}
                              normalize={onlyNums}
                              onBlur={(event) =>
                                props.handleAppendixTestScoringTableScoresAdd(
                                  testFromState[i].Abbreviation,
                                  testFromState[i].TestScoringTableDetails[tstdIdx].Name,
                                  createNameIterator(tablescore.Id, 1),
                                  testFromState[i].TestScoringTableDetails[tstdIdx]
                                    .TableHeaderRowTitles.Col2,
                                  event,
                                )
                              }
                            />
                          </div> // ...then add a Redux Form Field component
                        ) : (
                          <div>{tablescore.Col2}</div>
                        ) // Fallback to insert string from DB
                      }
                      {
                        tablescore.Col3 == null ? ( // Does Col3 = null?
                          <div /> // ...then add a blank div
                        ) : tablescore.Col3 === '<Field>' ? ( // Does Col3 = "<Field>"?
                          <div>
                            <Field
                              name={`t${createNameIterator(tablescore.Id, 2)}${testFromState[
                                i
                              ].Abbreviation.toLowerCase()
                                .split(' ')
                                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                .join('')}${testFromState[
                                i
                              ].TestScoringTableDetails[0].TableHeaderRowTitles.Col3.toLowerCase()
                                .split(' ')
                                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                .join('')}Score`}
                              type="text"
                              component="input"
                              maxLength={5}
                              normalize={onlyNumsAndRangeCharacters}
                              onBlur={(event) =>
                                props.handleAppendixTestScoringTableScoresAdd(
                                  testFromState[i].Abbreviation,
                                  testFromState[i].TestScoringTableDetails[tstdIdx].Name,
                                  createNameIterator(tablescore.Id, 2),
                                  testFromState[i].TestScoringTableDetails[tstdIdx]
                                    .TableHeaderRowTitles.Col3,
                                  event,
                                )
                              }
                            />
                          </div> // ...then add a Redux Form Field component
                        ) : (
                          <div>{tablescore.Col3}</div>
                        ) // Fallback to insert string from DB
                      }
                      {
                        tablescore.Col4 == null ? ( // Does Col4 = null?
                          <div /> // ...then add a blank div
                        ) : tablescore.Col4 === '<Field>' ? ( // Does Col4 = "<Field>"?
                          <div>
                            <Field
                              name={`t${createNameIterator(tablescore.Id, 3)}${testFromState[
                                i
                              ].Abbreviation.toLowerCase()
                                .split(' ')
                                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                .join('')}${testFromState[
                                i
                              ].TestScoringTableDetails[0].TableHeaderRowTitles.Col4.toLowerCase()
                                .split(' ')
                                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                .join('')}Score`}
                              type="text"
                              component="input"
                              maxLength={5}
                              normalize={onlyNumsAndRangeCharacters}
                              onBlur={(event) =>
                                props.handleAppendixTestScoringTableScoresAdd(
                                  testFromState[i].Abbreviation,
                                  testFromState[i].TestScoringTableDetails[tstdIdx].Name,
                                  createNameIterator(tablescore.Id, 3),
                                  testFromState[i].TestScoringTableDetails[tstdIdx]
                                    .TableHeaderRowTitles.Col4,
                                  event,
                                )
                              }
                            />
                          </div> // ...then add a Redux Form Field component
                        ) : (
                          <div>{tablescore.Col4}</div>
                        ) // Fallback to insert string from DB
                      }
                      {
                        tablescore.Col5 == null ? null : tablescore.Col5 === '<Field>' ? ( // Does Col5 = null? then skip it // Does Col5 = "<Field>"?
                          <div>
                            <Field
                              name={`t${createNameIterator(tablescore.Id, 4)}${testFromState[
                                i
                              ].Abbreviation.toLowerCase()
                                .split(' ')
                                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                .join('')}${testFromState[
                                i
                              ].TestScoringTableDetails[0].TableHeaderRowTitles.Col5.toLowerCase()
                                .split(' ')
                                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                .join('')}Score`}
                              type="text"
                              component="input"
                              maxLength={3}
                              normalize={onlyNums}
                              onBlur={(event) =>
                                props.handleAppendixTestScoringTableScoresAdd(
                                  testFromState[i].Abbreviation,
                                  testFromState[i].TestScoringTableDetails[tstdIdx].Name,
                                  createNameIterator(tablescore.Id, 4),
                                  testFromState[i].TestScoringTableDetails[tstdIdx]
                                    .TableHeaderRowTitles.Col5,
                                  event,
                                )
                              }
                            />
                          </div> // ...then add a Redux Form Field component
                        ) : (
                          <div>{tablescore.Col5}</div>
                        ) // Fallback to insert string from DB
                      }
                      {
                        tablescore.Col6 == null ? null : tablescore.Col6 === '<Field>' ? ( // Does Col6 = null? //...then skip it // Does Col6 = "<Field>"?
                          <div>
                            <Field
                              name={`t${createNameIterator(tablescore.Id, 5)}${testFromState[
                                i
                              ].Abbreviation.toLowerCase()
                                .split(' ')
                                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                .join('')}${testFromState[
                                i
                              ].TestScoringTableDetails[0].TableHeaderRowTitles.Col6.toLowerCase()
                                .split(' ')
                                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                .join('')}Score`}
                              type="text"
                              component="input"
                              maxLength={3}
                              normalize={onlyNums}
                              onBlur={(event) =>
                                props.handleAppendixTestScoringTableScoresAdd(
                                  testFromState[i].Abbreviation,
                                  testFromState[i].TestScoringTableDetails[tstdIdx].Name,
                                  createNameIterator(tablescore.Id, 5),
                                  testFromState[i].TestScoringTableDetails[tstdIdx]
                                    .TableHeaderRowTitles.Col6,
                                  event,
                                )
                              }
                            />
                          </div> // ...then add a Redux Form Field component
                        ) : (
                          <div>{tablescore.Col6}</div>
                        ) // Fallback to insert string from DB
                      }
                    </div>
                  ))}
                </div>
              ))
            : null}
          {t.TestSummaries.length > 0
            ? t.TestSummaries.map((summary) => (
                <div key={summary.Id}>
                  <SectionSubHeader subHeader="Summary" />
                  <p className="test__list">
                    <span>
                      Overall, (client’s) performance on the&nbsp;
                      {testFromState[0].Abbreviation} provided a snapshot into (his/her) various
                      cognitive abilities and strengths. (He/She) demonstrated well-developed
                    </span>
                  </p>
                  <div className="flex" style={{ marginBottom: 36, alignItems: 'flex-end' }}>
                    <Field
                      name={`t${summary.Id}${testFromState[i].Abbreviation.charAt(
                        0,
                      ).toUpperCase()}${testFromState[i].Abbreviation.slice(1)
                        .toLowerCase()
                        .replace(/ /g, '')
                        .replace('-', '')}SummaryAbilities`}
                      type="text"
                      component={Textarea}
                      classes="domain__test__summary-textarea"
                      rows="1"
                    />
                    <span>&nbsp;abilities.</span>
                  </div>
                  <p className="test__list">
                    <span>However, (he/she) also evidenced relative challenges with</span>
                  </p>
                  <div style={{ marginBottom: 36 }}>
                    <Field
                      name={`t${summary.Id}${testFromState[i].Abbreviation.charAt(
                        0,
                      ).toUpperCase()}${testFromState[i].Abbreviation.slice(1)
                        .toLowerCase()
                        .replace(/ /g, '')
                        .replace('-', '')}SummaryChallenges`}
                      type="text"
                      component={Textarea}
                      classes="domain__test__summary-textarea"
                      rows="1"
                    />
                  </div>
                  <p>
                    These challenges should continue to be monitored and evaluated so as to help
                    (him/her) continue to perform at (his/her) best.
                  </p>
                </div>
              ))
            : null}
        </div>
      ))}
    </div>
  );
};

Test.propTypes = {
  handleAppendixTestIndexesAdd: PropTypes.func,
  testFromState: PropTypes.array,
  handleAppendixParentScaleTitleSubtestAdd: PropTypes.func,
  handleAppendixAdd: PropTypes.func,
  handleAppendixSubtestAdd: PropTypes.func,
  handleAppendixParentGroupScalesParentScaleTitleSubtestAdd: PropTypes.func,
  handleAppendixParentGroupScalesParentGroupSubScaleSubtestAdd: PropTypes.func,
  handleAppendixParentGroupSubScaleSubtestAdd: PropTypes.func,
  handleAppendixTestModulesSubtestAdd: PropTypes.func,
  handleAppendixTestScoringTableScoresAdd: PropTypes.func,
};

export default Test;
