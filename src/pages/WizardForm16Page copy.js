import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from '../validate';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import FormCardStacked from '../components/Card/FormCard/FormCardStacked copy state managed';
import SectionSubHeader from '../components/SectionSubHeader';
import ButtonDisable from '../components/ButtonToggle/ButtonDisable';

class WizardForm16Page extends Component {
  state = {
    turnOver: false,
    walkDownStairs: false,
    sitAlone: false,
    likesSound: false,
    crawls: false,
    understandFirstWords: false,
    standAlone: false,
    speakFirstWords: false,
    walkAlone: false,
    speakSentences: false,
    walkUpStairs: false,
  };

  handleDelete = (input1Name, input2Name, ref) => {
    const { change } = this.props;
    console.log('WizardForm16Page handleDelete fired', input1Name, input2Name);
    console.log('WizardForm16Page handleDelete ref = ', ref);

    change(input1Name, '');
    change(input2Name, '');
    this.setState({
      [ref]: false,
    });
  };

  handleAddingTick = ref => {
    console.log('WizardForm16Page handleAddingTick ref = ', ref);
    this.setState(prevState => ({
      [ref]: !prevState.ref,
    }));
  };

  render() {
    const { handleSubmit, handleDisable, disabled } = this.props;
    const {
      turnOver,
      walkDownStairs,
      sitAlone,
      likesSound,
      crawls,
      understandFirstWords,
      standAlone,
      speakFirstWords,
      walkAlone,
      speakSentences,
      walkUpStairs,
    } = this.state;

    //  console.log('WizardForm16Page props ', this.props);
    console.log('WizardForm16Page cardSelected state = ', this.state);
    return (
      <form className="col" onSubmit={handleSubmit}>
        <SectionTitle
          titleBold="Medical &amp; development"
          titleRegular="history"
        />
        <div className="flex" onClick={() => handleDisable(16)}>
          <SectionSubHeader subHeader="Early years" />
          <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
        </div>
        <div className="flex">
          <Field
            name="mdhDevelopment"
            component={FormCardStacked}
            onDelete={this.handleDelete}
            onAdd={this.handleAddingTick}
            cardInfo={[
              {
                ref: 'turnOver',
                cardFloat: true,
                cardLabel: 'Turn over?',
                tabOrder: '1',
                card1Name: 'mdhTurnOverMonths',
                card1Placeholder: 'Months',
                card2Name: 'mdhTurnOverYear',
                card2Placeholder: 'Years',
                normalizeOnlyNums: true,
                showTick: turnOver,
              },
              {
                ref: 'walkDownStairs',
                cardFloat: true,
                cardLabel: 'Walk down stairs?',
                tabOrder: '2',
                card1Name: 'mdhWalkDownStairsMonths',
                card1Placeholder: 'Months',
                card2Name: 'mdhWalkDownStairsYear',
                card2Placeholder: 'Years',
                normalizeOnlyNums: true,
                showTick: walkDownStairs,
              },
              {
                ref: 'sitAlone',
                cardFloat: true,
                cardLabel: 'Sit alone?',
                tabOrder: '3',
                card1Name: 'mdhSitAloneMonths',
                card1Placeholder: 'Months',
                card2Name: 'mdhSitAloneYear',
                card2Placeholder: 'Years',
                normalizeOnlyNums: true,
                showTick: sitAlone,
              },
              {
                ref: 'likesSound',
                cardFloat: true,
                cardLabel: 'Show interest in or attraction to sound?',
                tabOrder: '4',
                card1Name: 'mdhAttractedSoundMonths',
                card1Placeholder: 'Months',
                card2Name: 'mdhAttractedSoundYear',
                card2Placeholder: 'Years',
                normalizeOnlyNums: true,
                showTick: likesSound,
              },
              {
                ref: 'crawls',
                cardFloat: true,
                cardLabel: 'Crawl?',
                tabOrder: '5',
                card1Name: 'mdhCrawlMonths',
                card1Placeholder: 'Months',
                card2Name: 'mdhCrawlYear',
                card2Placeholder: 'Years',
                normalizeOnlyNums: true,
                showTick: crawls,
              },
              {
                ref: 'understandFirstWords',
                cardFloat: true,
                cardLabel: 'Understand first words?',
                tabOrder: '6',
                card1Name: 'mdhUnderstandWordsMonths',
                card1Placeholder: 'Months',
                card2Name: 'mdhUnderstandWordsYear',
                card2Placeholder: 'Years',
                normalizeOnlyNums: true,
                showTick: understandFirstWords,
              },
              {
                ref: 'standAlone',
                cardFloat: true,
                cardLabel: 'Stand alone?',
                tabOrder: '7',
                card1Name: 'mdhStandAloneMonths',
                card1Placeholder: 'Months',
                card2Name: 'mdhStandAloneYear',
                card2Placeholder: 'Years',
                normalizeOnlyNums: true,
                showTick: standAlone,
              },
              {
                ref: 'speakFirstWords',
                cardFloat: true,
                cardLabel: 'Speak first words?',
                tabOrder: '8',
                card1Name: 'mdhSpeakFirstWordsMonths',
                card1Placeholder: 'Months',
                card2Name: 'mdhSpeakFirstWordsYear',
                card2Placeholder: 'Years',
                normalizeOnlyNums: true,
                showTick: speakFirstWords,
              },
              {
                ref: 'walkAlone',
                cardFloat: true,
                cardLabel: 'Walk alone?',
                tabOrder: '9',
                card1Name: 'mdhWalkAloneMonths',
                card1Placeholder: 'Months',
                card2Name: 'mdhWalkAloneYear',
                card2Placeholder: 'Years',
                normalizeOnlyNums: true,
                showTick: walkAlone,
              },
              {
                ref: 'speakSentences',
                cardFloat: true,
                cardLabel: 'Speak in sentences?',
                tabOrder: '10',
                card1Name: 'mdhSpeakSentencesMonths',
                card1Placeholder: 'Months',
                card2Name: 'mdhSpeakSentencesYear',
                card2Placeholder: 'Years',
                normalizeOnlyNums: true,
                showTick: speakSentences,
              },
              {
                ref: 'walkUpStairs',
                cardFloat: true,
                cardLabel: 'Walk up stairs?',
                tabOrder: '11',
                card1Name: 'mdhWalkUpStairsMonths',
                card1Placeholder: 'Months',
                card2Name: 'mdhWalkUpStairsYear',
                card2Placeholder: 'Years',
                normalizeOnlyNums: true,
                showTick: walkUpStairs,
              },
            ]}
            label="At what"
            labelBold="age (i.e., 3 months 1 year)"
            labelLast="did this child do the following"
            classes="question"
            disabled={disabled}
          />
        </div>

        <Button onClick={handleSubmit} buttonLabel="OK" />
      </form>
    );
  }
}

WizardForm16Page.propTypes = {
  disabled: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleDisable: PropTypes.func,
  change: PropTypes.func,
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardForm16Page);
