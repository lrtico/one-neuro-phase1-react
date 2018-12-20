import React from "react";
import { reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import SectionSubHeader from "../components/SectionSubHeader";
import SectionSubTitle from "../components/SectionSubTitle";
import Button from "../components/Button";
import Appendix from "../components/Test/Appendix";

const WizardForm50Page = props => {
  const { handleSubmit } = props;
  console.log("Wizard50 props, ", props);
  return (
    <form className="col" onSubmit={handleSubmit}>
      <Appendix />
      <SectionTitle titleBold="Appendix" titleRegular="of scores" />
      <SectionSubTitle
        subTitleFirst="Intelligence"
        //subTitleBold="Functioning"
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
      <SectionSubTitle subTitleFirst="Autism" />
      <SectionSubHeader subHeader="Childhood Autism Rating Scale (CARS-2)" />
      <div className="test-table test-table--appendix">
        <div className="table__row table__header">
          <div>Item</div>
          <div>Scaled Score</div>
          <div>% Rank</div>
          <div>Range</div>
        </div>
        <div className="table__row">
          <div>Relating to People</div>
          <div>
            <input type="text" name="testname-score" />
          </div>
          <div>23</div>
          <div>Low average</div>
        </div>
        <div className="table__row">
          <div>Imitation</div>
          <div>
            <input type="text" name="testname-score" />
          </div>
          <div>70</div>
          <div>Average</div>
        </div>
        <div className="table__row">
          <div>Body Use</div>
          <div>
            <input type="text" name="testname-score" />
          </div>
          <div>96</div>
          <div>Very high</div>
        </div>
      </div>

      <SectionSubHeader subHeader="Comprehensive Test of Nonverbal Intelligence - Second Edition (CTONI-2)" />
      <div className="test-table test-table--appendix">
        <div className="table__row table__header">
          <div>Subtest</div>
          <div>Scaled Score</div>
          <div>% Rank</div>
          <div>Range</div>
        </div>
        <div className="table__row">
          <div>Pictorial Analogies</div>
          <div>
            <input type="text" name="testname-score" />
          </div>
          <div>23</div>
          <div>Low average</div>
        </div>
        <div className="table__row">
          <div>Geometric Analogies</div>
          <div>
            <input type="text" name="testname-score" />
          </div>
          <div>70</div>
          <div>Average</div>
        </div>
        <div className="table__row">
          <div>Pictorial Categories</div>
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
