import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './recommendations.css';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import store from '../../store';
import SectionSubTitle from '../SectionSubTitle';

class Recommendations extends Component {
  createMarkup = (text) => {
    return { __html: text };
  };

  handleAddSubRecommendation = (id) => {
    store.dispatch({
      type: 'ADD_SUB_RECOMMENDATION',
      payload: id,
    });
  };

  handleAddSubSubRecommendation = (id) => {
    store.dispatch({
      type: 'ADD_SUB_SUB_RECOMMENDATION',
      payload: id,
    });
  };

  handleCheckBoxClick = (event, id) => {
    const { onCheckboxClick } = this.props;
    console.log('Recommendation checkbox clicked', 'event.target =', event.target, 'id =', id);

    // Send action to add recommendation to state
    this.handleAddSubRecommendation(id);

    const c = event.target;
    const sibs = (n) =>
      [...n.parentElement.children].filter(
        (c) => c.nodeType === 1 && c !== n && c.nodeName !== 'P',
      );
    const toggle = sibs(c);
    console.log('Siblings = ', toggle);
    if (toggle.length > 0) {
      for (let i = 0; i < toggle.length; i += 1) {
        const input = toggle[i].querySelector('input');
        console.log('Input = ', input);
        onCheckboxClick(input);
      }
      // for (const t of toggle) {
      //   const input = t.querySelector('input');
      //   console.log('Input = ', input);
      //   onCheckboxClick(input);
      // }
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
                      name={`r${item.id
                        .split(' ')
                        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                        .join('')}Recommendation`}
                      type="checkbox"
                      component="input"
                      // onClick={(event) => handleCheckBoxClick(event, item.id)}
                      onClick={() => this.handleAddSubRecommendation(item.id)}
                    />
                    <p dangerouslySetInnerHTML={createMarkup(item.text)} />
                    {item.subtext.length > 0
                      ? item.subtext.map((subtext) => (
                          <div key={subtext.id} className="recommendation__list">
                            <label className="has-toggle-child flex">
                              <Field
                                name={`r${subtext.id
                                  .split(' ')
                                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                  .join('')}Recommendation`}
                                type="checkbox"
                                component="input"
                                onClick={() => this.handleAddSubSubRecommendation(subtext.id)}
                              />
                              <p dangerouslySetInnerHTML={createMarkup(subtext.text)} />
                            </label>
                          </div>
                        ))
                      : null}
                  </label>
                ))}
                <div style={{ marginTop: '36px' }}>
                  <label>{`Enter additional recommendations for ${r.name}`}</label>
                  <Field
                    name={`r${r.name
                      .toLowerCase()
                      .replace(/ /g, '')
                      .replace('&', '')
                      .replace('--', '')
                      .replaceAll('/', ' ')
                      .split(' ')
                      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                      .join('')}RecommendationsFreehand`}
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

export default connect((state) => ({ recommendations: state.recommendations }))(Recommendations);
