import React from "react";
import { reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import SectionSubHeader from "../components/SectionSubHeader";
import SectionSubTitle from "../components/SectionSubTitle";
import Button from "../components/Button";

const WizardForm50Page = props => {
  const { handleSubmit } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle titleBold="Appendix" titleRegular="of scores" />
      <SectionSubTitle
        subTitleFirst="General Intelligence &amp; Overall Cognitive"
        subTitleBold="Functioning"
      />
      <SectionSubHeader subHeader="WECHSLER INTELLIGENCE SCALE FOR CHILDREN, FIFTH EDITION (WISC-V)" />
      <div className="test-table test-table--appendix">
        <div className="table__row table__header">
          <div>Index</div>
          <div>Composite Score</div>
          <div>% Rank</div>
          <div>Range</div>
        </div>
        <div className="table__row">
          <div>Verbal Comprehension</div>
          <div>
            <input type="text" name="testname-score" />
          </div>
          <div>23</div>
          <div>Low average</div>
        </div>
        <div className="table__row">
          <div>Visual Spatial</div>
          <div>
            <input type="text" name="testname-score" />
          </div>
          <div>70</div>
          <div>Average</div>
        </div>
        <div className="table__row">
          <div>Fluid Reasoning</div>
          <div>
            <input type="text" name="testname-score" />
          </div>
          <div>96</div>
          <div>Very high</div>
        </div>
      </div>
      <SectionSubTitle subTitleFirst="Verbal &amp; Language-Mediated Tasks &amp; Abilities" />
      <SectionSubHeader subHeader="WISC-V VERBAL COMPREHENSION SUBTESTS SCORE SUMMARY" />
      <div className="test-table test-table--appendix">
        <div className="table__row table__header">
          <div>Index</div>
          <div>Scaled Score</div>
          <div>% Rank</div>
          <div>Range</div>
        </div>
        <div className="table__row">
          <div>Verbal Comprehension</div>
          <div>
            <input type="text" name="testname-score" />
          </div>
          <div>23</div>
          <div>Low average</div>
        </div>
        <div className="table__row">
          <div>Visual Spatial</div>
          <div>
            <input type="text" name="testname-score" />
          </div>
          <div>70</div>
          <div>Average</div>
        </div>
        <div className="table__row">
          <div>Fluid Reasoning</div>
          <div>
            <input type="text" name="testname-score" />
          </div>
          <div>96</div>
          <div>Very high</div>
        </div>
      </div>

      <SectionSubHeader subHeader="WECHSLER INDIVIDUAL ACHIEVEMENT TEST, THIRD EDITION (WIAT-III)" />
      <div className="test-table test-table--appendix">
        <div className="table__row table__header">
          <div>Index</div>
          <div>Scaled Score</div>
          <div>% Rank</div>
          <div>Range</div>
        </div>
        <div className="table__row">
          <div>Verbal Comprehension</div>
          <div>
            <input type="text" name="testname-score" />
          </div>
          <div>23</div>
          <div>Low average</div>
        </div>
        <div className="table__row">
          <div>Visual Spatial</div>
          <div>
            <input type="text" name="testname-score" />
          </div>
          <div>70</div>
          <div>Average</div>
        </div>
        <div className="table__row">
          <div>Fluid Reasoning</div>
          <div>
            <input type="text" name="testname-score" />
          </div>
          <div>96</div>
          <div>Very high</div>
        </div>
      </div>
      <Button onClick={handleSubmit} buttonLabel="OK" />
    </form>
  );
};
export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardForm50Page);
