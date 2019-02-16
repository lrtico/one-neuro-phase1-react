import React from "react";
import "./recommendations.css";
import { connect } from "react-redux";
import { Field } from "redux-form";
// import store from "../../store";
import SectionSubTitle from "../SectionSubTitle/";

const mapStateToProps = state => ({
  recommendations: state.recommendations
});

const createMarkup = text => {
  return { __html: text };
};

// const removeRecommendation = name => {
//   store.dispatch({
//     type: "ADD_RECOMMENDATION",
//     payload: name
//   });
// };

// const handleLink = event => {
//   event.preventDefault();
// };

const RecommendationsConnected = props => {
  console.log("Recommendation props, ", props);
  const { recommendations } = props;
  return (
    <div>
      {recommendations.map(r =>
        r.selected ? (
          <div key={r.id} className="recommendations">
            <SectionSubTitle subTitleBold={r.name} />
            <div className="recommendations__recommendation">
              {r.recommendation.map(item => (
                <label key={item.id} className="has-toggle-child flex">
                  <Field
                    name={`${item.id}-recommendation`}
                    type="checkbox"
                    component="input"
                  />
                  <p dangerouslySetInnerHTML={createMarkup(item.text)} />
                  {item.subtext.length > 0
                    ? item.subtext.map(r => (
                        <div key={r.id} className="recommendation__list">
                          <label className="has-toggle-child flex">
                            <Field
                              name={`${r.id}-recommendation`}
                              type="checkbox"
                              component="input"
                            />
                            <p dangerouslySetInnerHTML={createMarkup(r.text)} />
                          </label>
                        </div>
                      ))
                    : null}
                </label>
              ))}
              <div style={{ marginTop: "36px" }}>
                <label>{`Enter additional recommendations for ${
                  r.name
                }`}</label>
                <Field
                  name={`${r.name
                    .toLowerCase()
                    .replace(/ /g, "-")}-recommendations-freehand`}
                  component="textarea"
                />
              </div>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

const Recommendations = connect(mapStateToProps)(RecommendationsConnected);

export default Recommendations;
