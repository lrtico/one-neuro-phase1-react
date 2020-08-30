import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './recommendations.css';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
// import store from "../../store";
import SectionSubTitle from '../SectionSubTitle';

class Recommendations extends Component {
  createMarkup = (text) => {
    return { __html: text };
  };

  handleCheckBoxClick = (event) => {
    const { onCheckboxClick } = this.props;
    console.log('Recommendation checkbox clicked', event.target);
    const c = event.target;
    const sibs = (n) =>
      [...n.parentElement.children].filter(
        (c) => c.nodeType === 1 && c !== n && c.nodeName !== 'P',
      );
    const toggle = sibs(c);
    console.log('Siblings = ', toggle);
    for (const t of toggle) {
      const input = t.querySelector('input');
      console.log('Input = ', input);
      onCheckboxClick(input);
    }
  };

  render() {
    console.log('Recommendation props, ', this.props);
    const { recommendations } = this.props;
    const { createMarkup, handleCheckBoxClick } = this;
    return (
      <div>
        {recommendations.map((r) =>
          r.selected ? (
            <div key={r.id} className="recommendations">
              <SectionSubTitle subTitleBold={r.name} />
              <div className="recommendations__recommendation">
                {r.recommendation.map((item) => (
                  <label key={item.id} className="has-toggle-child flex">
                    <Field
                      name={`${item.id}-recommendation`}
                      type="checkbox"
                      component="input"
                      onClick={handleCheckBoxClick}
                    />
                    <p dangerouslySetInnerHTML={createMarkup(item.text)} />
                    {item.subtext.length > 0
                      ? item.subtext.map((r) => (
                          <div key={r.id} className="recommendation__list">
                            <label className="has-toggle-child flex">
                              <Field
                                name={`${r.id}-recommendation`}
                                type="checkbox"
                                component="input"
                              />
                              <p
                                dangerouslySetInnerHTML={createMarkup(r.text)}
                              />
                            </label>
                          </div>
                        ))
                      : null}
                  </label>
                ))}
                <div style={{ marginTop: '36px' }}>
                  <label>
                    {`Enter additional recommendations for ${r.name}`}
                  </label>
                  <Field
                    name={`${r.name
                      .toLowerCase()
                      .replace(/ /g, '-')
                      .replace('&', '')
                      .replace('--', '-')}-recommendations-freehand`}
                    component="textarea"
                  />
                </div>
              </div>
            </div>
          ) : null,
        )}
      </div>
    );
  }
}

Recommendations.propTypes = {
  recommendations: PropTypes.array,
  onCheckboxClick: PropTypes.func,
};

export default connect((state) => ({ recommendations: state.recommendations }))(
  Recommendations,
);
