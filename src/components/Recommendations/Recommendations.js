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
              {r.recommendations.map(r => (
                <label key={r.id} className="has-toggle-child flex">
                  <Field
                    name={`${r.id}-recommendation`}
                    type="checkbox"
                    component="input"
                  />
                  <p dangerouslySetInnerHTML={createMarkup(r.text)} />
                </label>
              ))}
              <div style={{ marginTop: "36px" }}>
                <label>{`Enter any freehand recommendations for ${
                  r.name
                }`}</label>
                <Field
                  name={`${r.name.toLowerCase()}-recommendations-freehand`}
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
