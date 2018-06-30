import React, { Component } from "react";
import PropTypes from "prop-types";
import WizardFormFirstPage from "./WizardFormFirstPage";
import WizardFormSecondPage from "./WizardFormSecondPage";
import WizardFormThirdPage from "./WizardFormThirdPage";
import WizardFormFourthPage from "./WizardFormFourthPage";
import WizardFormFifthPage from "./WizardFormFifthPage";
import WizardFormSixthPage from "./WizardFormSixthPage";
import WizardFormSeventhPage from "./WizardFormSeventhPage";
import WizardFormEigthPage from "./WizardFormEigthPage";
import WizardFormNinthPage from "./WizardFormNinthPage";
import WizardFormTenthPage from "./WizardFormTenthPage";
import WizardFormEleventhPage from "./WizardFormEleventhPage";
import WizardFormTwelfthPage from "./WizardFormTwelfthPage";
import WizardFormThirteenthPage from "./WizardFormThirteenthPage";
import WizardFormFourteenthPage from "./WizardFormFourteenthPage";
import WizardFormFifthteenthPage from "./WizardFormFifthteenthPage";
import WizardFormSixteenthPage from "./WizardFormSixteenthPage";
import WizardFormSeventeenthPage from "./WizardFormSeventeenthPage";
import WizardFormEighteenthPage from "./WizardFormEighteenthPage";
import WizardFormNineteenthPage from "./WizardFormNineteenthPage";
import WizardFormTwentiethPage from "./WizardFormTwentiethPage";
import WizardFormTwentyFirstPage from "./WizardFormTwentyFirstPage";
import WizardFormTwentySecondPage from "./WizardFormTwentySecondPage";
import WizardFormTwentyThirdPage from "./WizardFormTwentyThirdPage";
import WizardFormTwentyFourthPage from "./WizardFormTwentyFourthPage";
import WizardFormTwentyFifthPage from "./WizardFormTwentyFifthPage";
import WizardFormTwentySixthPage from "./WizardFormTwentySixthPage";
import WizardFormTwentySeventhPage from "./WizardFormTwentySeventhPage";
import WizardFormTwentyEighthPage from "./WizardFormTwentyEighthPage";
import WizardFormTwentyNinthPage from "./WizardFormTwentyNinthPage";
import WizardFormThirtiethPage from "./WizardFormThirtiethPage";
import WizardFormThirtyFirstPage from "./WizardFormThirtyFirstPage";
import WizardFormThirtySecondPage from "./WizardFormThirtySecondPage";
import WizardFormThirtyThirdPage from "./WizardFormThirtyThirdPage";
import WizardFormThirtyFourthPage from "./WizardFormThirtyFourthPage";
import WizardFormThirtyFifthPage from "./WizardFormThirtyFifthPage";
import WizardFormThirtySixthPage from "./WizardFormThirtySixthPage";

class WizardForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 5
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div className="content questions">
        {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} />}
        {page === 2 && (
          <WizardFormSecondPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 3 && (
          <WizardFormThirdPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 4 && (
          <WizardFormFourthPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 5 && (
          <WizardFormFifthPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 6 && (
          <WizardFormSixthPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 7 && (
          <WizardFormSeventhPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 8 && (
          <WizardFormEigthPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 9 && (
          <WizardFormNinthPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 10 && (
          <WizardFormTenthPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 11 && (
          <WizardFormEleventhPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 12 && (
          <WizardFormTwelfthPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 13 && (
          <WizardFormThirteenthPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 14 && (
          <WizardFormFourteenthPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 15 && (
          <WizardFormFifthteenthPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 16 && (
          <WizardFormSixteenthPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 17 && (
          <WizardFormSeventeenthPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 18 && (
          <WizardFormEighteenthPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 19 && (
          <WizardFormNineteenthPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 20 && (
          <WizardFormTwentiethPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 21 && (
          <WizardFormTwentyFirstPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 22 && (
          <WizardFormTwentySecondPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 23 && (
          <WizardFormTwentyThirdPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 24 && (
          <WizardFormTwentyFourthPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 25 && (
          <WizardFormTwentyFifthPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 26 && (
          <WizardFormTwentySixthPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 27 && (
          <WizardFormTwentySeventhPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 28 && (
          <WizardFormTwentyEighthPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 29 && (
          <WizardFormTwentyNinthPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 30 && (
          <WizardFormThirtiethPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 31 && (
          <WizardFormThirtyFirstPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 32 && (
          <WizardFormThirtySecondPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 33 && (
          <WizardFormThirtyThirdPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 34 && (
          <WizardFormThirtyFourthPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 35 && (
          <WizardFormThirtyFifthPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 36 && (
          <WizardFormThirtySixthPage
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />
        )}
      </div>
    );
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default WizardForm;
