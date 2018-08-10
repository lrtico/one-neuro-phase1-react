import React, { Component } from "react";
import PropTypes from "prop-types";
import WizardForm01Page from "./WizardForm01Page";
import WizardForm02Page from "./WizardForm02Page";
import WizardForm03Page from "./WizardForm03Page";
import WizardForm04Page from "./WizardForm04Page";
import WizardForm05Page from "./WizardForm05Page";
import WizardForm06Page from "./WizardForm06Page";
import WizardForm07Page from "./WizardForm07Page";
import WizardForm08Page from "./WizardForm08Page";
import WizardForm09Page from "./WizardForm09Page";
import WizardForm10Page from "./WizardForm10Page";
import WizardForm11Page from "./WizardForm11Page";
import WizardForm12Page from "./WizardForm12Page";
import WizardForm13Page from "./WizardForm13Page";
import WizardForm14Page from "./WizardForm14Page";
import WizardForm15Page from "./WizardForm15Page";
import WizardForm16Page from "./WizardForm16Page";
import WizardForm17Page from "./WizardForm17Page";
import WizardForm18Page from "./WizardForm18Page";
import WizardForm19Page from "./WizardForm19Page";
import WizardForm20Page from "./WizardForm20Page";
import WizardForm21Page from "./WizardForm21Page";
import WizardForm22Page from "./WizardForm22Page";
import WizardForm23Page from "./WizardForm23Page";
import WizardForm24Page from "./WizardForm24Page";
import WizardForm25Page from "./WizardForm25Page";
import WizardForm26Page from "./WizardForm26Page";
import WizardForm27Page from "./WizardForm27Page";
import WizardForm28Page from "./WizardForm28Page";
import WizardForm29Page from "./WizardForm29Page";
import WizardForm30Page from "./WizardForm30Page";
import WizardForm31Page from "./WizardForm31Page";
import WizardForm32Page from "./WizardForm32Page";
import WizardForm33Page from "./WizardForm33Page";
import WizardForm34Page from "./WizardForm34Page";
import WizardForm35Page from "./WizardForm35Page";
import WizardForm36Page from "./WizardForm36Page";
import WizardForm37Page from "./WizardForm37Page";
import WizardForm38Page from "./WizardForm38Page";
import WizardForm39Page from "./WizardForm39Page";
import WizardForm40Page from "./WizardForm40Page";
import WizardForm41Page from "./WizardForm41Page";
import WizardForm42Page from "./WizardForm42Page";
import WizardForm43Page from "./WizardForm43Page";
import WizardForm44Page from "./WizardForm44Page";
import WizardForm45Page from "./WizardForm45Page";
import WizardForm46Page from "./WizardForm46Page";
import WizardForm47Page from "./WizardForm47Page";
import WizardForm48Page from "./WizardForm48Page";
import WizardForm49Page from "./WizardForm49Page";
import WizardForm50Page from "./WizardForm50Page";
import ProgressBar from "./components/ProgressBar/ProgressBar";

class WizardForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 2
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
        <ProgressBar currentProgress={page} goBack={this.previousPage} />
        {page === 1 && <WizardForm01Page onSubmit={this.nextPage} />}
        {page === 2 && (
          <WizardForm02Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 3 && (
          <WizardForm03Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 4 && (
          <WizardForm04Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 5 && (
          <WizardForm05Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 6 && (
          <WizardForm06Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 7 && (
          <WizardForm07Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 8 && (
          <WizardForm08Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 9 && (
          <WizardForm09Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 10 && (
          <WizardForm10Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 11 && (
          <WizardForm11Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 12 && (
          <WizardForm12Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 13 && (
          <WizardForm13Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 14 && (
          <WizardForm14Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 15 && (
          <WizardForm15Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 16 && (
          <WizardForm16Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 17 && (
          <WizardForm17Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 18 && (
          <WizardForm18Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 19 && (
          <WizardForm19Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 20 && (
          <WizardForm20Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 21 && (
          <WizardForm21Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 22 && (
          <WizardForm22Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 23 && (
          <WizardForm23Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 24 && (
          <WizardForm24Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 25 && (
          <WizardForm25Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 26 && (
          <WizardForm26Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 27 && (
          <WizardForm27Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 28 && (
          <WizardForm28Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 29 && (
          <WizardForm29Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 30 && (
          <WizardForm30Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 31 && (
          <WizardForm31Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 32 && (
          <WizardForm32Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 33 && (
          <WizardForm33Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 34 && (
          <WizardForm34Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 35 && (
          <WizardForm35Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 36 && (
          <WizardForm36Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 37 && (
          <WizardForm37Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 38 && (
          <WizardForm38Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 39 && (
          <WizardForm39Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 40 && (
          <WizardForm40Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 41 && (
          <WizardForm41Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 42 && (
          <WizardForm42Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 43 && (
          <WizardForm43Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 44 && (
          <WizardForm44Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 45 && (
          <WizardForm45Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 46 && (
          <WizardForm46Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 47 && (
          <WizardForm47Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 48 && (
          <WizardForm48Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 49 && (
          <WizardForm49Page
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 50 && (
          <WizardForm50Page
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
