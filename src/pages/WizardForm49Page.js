import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../app.css';
import { FieldArray, reduxForm } from 'redux-form';
import validate from '../validate';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import ButtonToggle from '../components/ButtonToggle';
import CheckboxCard from '../components/Card/CheckboxCard/CheckboxCard';
import Recommendations from '../components/Recommendations/Recommendations';

class WizardForm49Page extends Component {
  onCheckboxClick = (input) => {
    console.log("Recommendation's passed argument from onCheckboxClick ", input.name);
    const { change } = this.props;
    console.log('WizardForm49Page this.props.change', change);
    change(input.name, !input.checked);
  };

  render() {
    const { handleSubmit } = this.props;
    console.log('Page 49 props ', this.props);
    return (
      <form className="col" onSubmit={handleSubmit}>
        <div className="flex">
          <SectionTitle titleBold="Recommendations" />
          <ButtonToggle buttonToggleLabel="disable" />
        </div>
        <FieldArray
          component={CheckboxCard}
          checkboxInfo={[
            {
              cardName: 'recommendationAdhd',
              cardKey: 'A',
              cardLabel: 'ADHD',
              tabOrder: '1',
              recommendation: true,
            },
            {
              cardName: 'recommendationAutism',
              cardKey: 'B',
              cardLabel: 'Autism',
              tabOrder: '2',
              recommendation: true,
            },
            {
              cardName: 'recommendationDementia',
              cardKey: 'C',
              cardLabel: 'DEMENTIA',
              tabOrder: '3',
              recommendation: true,
            },
            {
              cardName: 'recommendationDysthymia',
              cardKey: 'D',
              cardLabel: 'Dysthymia',
              tabOrder: '4',
              recommendation: true,
            },
            {
              cardName: 'recommendationLearningDisabilityMathematics',
              cardKey: 'E',
              cardLabel: 'Learning Disability Mathematics',
              tabOrder: '5',
              recommendation: true,
            },
            {
              cardName: 'recommendationLearningDisabilityReading',
              cardKey: 'F',
              cardLabel: 'Learning Disability Reading',
              tabOrder: '6',
              recommendation: true,
            },
            {
              cardName: 'recommendationNeurocognitiveDisorder',
              cardKey: 'G',
              cardLabel: 'Neurocognitive Disorder',
              tabOrder: '7',
              recommendation: true,
            },
            {
              cardName: 'recommendationVisualProcessingChildrenAdults',
              cardKey: 'H',
              cardLabel: 'Visual Processing Weakness for Children & Adults',
              tabOrder: '8',
              recommendation: true,
            },
            {
              cardName: 'recommendationVisualProcessingChildren',
              cardKey: 'I',
              cardLabel: 'Visual Processing Weakness for Children',
              tabOrder: '9',
              recommendation: true,
            },
            {
              cardName: 'recommendationLearningDisabilityWritingChildrenAdults',
              cardKey: 'J',
              cardLabel: 'Learning Disability in Writing Diagnosis for Children & Adults',
              tabOrder: '10',
              recommendation: true,
            },
            {
              cardName: 'recommendationLearningDisabilityWritingChildren',
              cardKey: 'K',
              cardLabel: 'Learning Disability in Writing Diagnosis for Children',
              tabOrder: '11',
              recommendation: true,
            },
            {
              cardName: 'recommendationAuditoryProcessingWeaknessChildrenAdults',
              cardKey: 'L',
              cardLabel: 'Auditory Processing Weakness for Children & Adults',
              tabOrder: '12',
              recommendation: true,
            },
            {
              cardName: 'recommendationAuditoryProcessingWeaknessChildren',
              cardKey: 'M',
              cardLabel: 'Auditory Processing Weakness for Children',
              tabOrder: '13',
              recommendation: true,
            },
            {
              cardName: 'recommendationTraumaPtsd',
              cardKey: 'N',
              cardLabel: 'Trauma/PTSD',
              tabOrder: '14',
              recommendation: true,
            },
            {
              cardName: 'recommendationPsychosis',
              cardKey: 'O',
              cardLabel: 'Psychosis',
              tabOrder: '15',
              recommendation: true,
            },
            {
              cardName: 'recommendationBehaviorChallenges',
              cardKey: 'P',
              cardLabel: 'Behavior Challenges',
              tabOrder: '16',
              recommendation: true,
            },
            {
              cardName: 'recommendationSportsConcussion',
              cardKey: 'Q',
              cardLabel: 'Sports Concussion',
              tabOrder: '17',
              recommendation: true,
            },
            {
              cardName: 'recommendationReactiveAttachmentDisorder',
              cardKey: 'R',
              cardLabel: 'Reactive Attachment Disorder',
              tabOrder: '18',
              recommendation: true,
            },
            {
              cardName: 'recommendationTraumaticBrainInjury',
              cardKey: 'S',
              cardLabel: 'Traumatic Brain Injury',
              tabOrder: '19',
              recommendation: true,
            },
          ]}
          label="Would you like to use recommendation"
          labelBold="templates"
          labelLast="in the PDF"
          name="recommendations-group"
          classes="question question--thumbless"
        />
        <Recommendations onCheckboxClick={this.onCheckboxClick} />
        <Button onClick={handleSubmit} buttonLabel="OK" />
      </form>
    );
  }
}

WizardForm49Page.propTypes = {
  handleSubmit: PropTypes.func,
  change: PropTypes.func,
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardForm49Page);
