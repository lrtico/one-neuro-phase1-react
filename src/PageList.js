import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import validate from './validate';
import WizardForm01Page from './pages/WizardForm01Page';
import WizardForm02Page from './pages/WizardForm02Page';
import WizardForm03Page from './pages/WizardForm03Page';
import WizardForm04Page from './pages/WizardForm04Page';
import WizardForm05Page from './pages/WizardForm05Page';
import WizardForm06Page from './pages/WizardForm06Page';
import WizardForm07Page from './pages/WizardForm07Page';
import WizardForm08Page from './pages/WizardForm08Page';
import WizardForm09Page from './pages/WizardForm09Page';
import WizardForm10Page from './pages/WizardForm10Page';
import WizardForm11Page from './pages/WizardForm11Page';
import WizardForm12Page from './pages/WizardForm12Page';
import WizardForm13Page from './pages/WizardForm13Page';
import WizardForm14Page from './pages/WizardForm14Page';
import WizardForm15Page from './pages/WizardForm15Page';
import WizardForm16Page from './pages/WizardForm16Page';
import WizardForm17Page from './pages/WizardForm17Page';
import WizardForm18Page from './pages/WizardForm18Page';
import WizardForm19Page from './pages/WizardForm19Page';
import WizardForm20Page from './pages/WizardForm20Page';
import WizardForm21Page from './pages/WizardForm21Page';
import WizardForm22Page from './pages/WizardForm22Page';
import WizardForm23Page from './pages/WizardForm23Page';
import WizardForm24Page from './pages/WizardForm24Page';
import WizardForm25Page from './pages/WizardForm25Page';
import WizardForm26Page from './pages/WizardForm26Page';
import WizardForm27Page from './pages/WizardForm27Page';
import WizardForm28Page from './pages/WizardForm28Page';
import WizardForm29Page from './pages/WizardForm29Page';
import WizardForm30Page from './pages/WizardForm30Page';
import WizardForm31Page from './pages/WizardForm31Page';
import WizardForm32Page from './pages/WizardForm32Page';
import WizardForm33Page from './pages/WizardForm33Page';
import WizardForm34Page from './pages/WizardForm34Page';
import WizardForm35Page from './pages/WizardForm35Page';
import WizardForm36Page from './pages/WizardForm36Page';
import WizardForm37Page from './pages/WizardForm37Page';
import WizardForm38Page from './pages/WizardForm38Page';
import WizardForm39Page from './pages/WizardForm39Page';
import WizardForm40Page from './pages/WizardForm40Page';
import WizardForm41Page from './pages/WizardForm41Page';
import WizardForm42Page from './pages/WizardForm42Page';
import WizardForm43Page from './pages/WizardForm43Page';
import WizardForm44Page from './pages/WizardForm44Page';
import WizardForm45Page from './pages/WizardForm45Page';
import WizardForm46Page from './pages/WizardForm46Page';
import WizardForm47Page from './pages/WizardForm47Page';
import WizardForm48Page from './pages/WizardForm48Page';
import WizardForm49Page from './pages/WizardForm49Page';
import WizardForm50Page from './pages/WizardForm50Page';

class PageList extends Component {
  state = {
    wizardForm01: false,
    wizardForm02: false,
    wizardForm03: false,
    wizardForm04: false,
    wizardForm05: false,
    wizardForm06: false,
    wizardForm07: false,
    wizardForm08: false,
    wizardForm09: false,
    wizardForm10: false,
    wizardForm11: false,
    wizardForm12: false,
    wizardForm13: false,
    wizardForm14: false,
    wizardForm15: false,
    wizardForm16: false,
    wizardForm17: false,
    wizardForm18: false,
    wizardForm19: false,
    wizardForm20: false,
    wizardForm21: false,
    wizardForm22: false,
    wizardForm23: false,
    wizardForm24: false,
    wizardForm25: false,
    wizardForm26: false,
    wizardForm27: false,
    wizardForm28: false,
    wizardForm29: false,
    wizardForm30: false,
    wizardForm31: false,
    wizardForm32: false,
    wizardForm33: false,
    wizardForm34: false,
    wizardForm35: false,
    wizardForm36: false,
    wizardForm37: false,
    wizardForm38: false,
    wizardForm39: false,
    wizardForm40: false,
    wizardForm41: false,
    wizardForm42: false,
    wizardForm43: false,
    wizardForm44: false,
    wizardForm45: false,
    wizardForm46: false,
    wizardForm47: false,
    wizardForm48: false,
    wizardForm49: false,
    wizardForm50: false,
  };

  toggleDisable = page => {
    let num = page;
    let val = `wizardForm${num}`;
    //console.log("Old state = " + this.state[val]);
    this.setState(prevState => ({
      [val]: !prevState[val],
    }));
    // let newVal = this.state[val];
    //console.log("New state = " + this.state[val]);
    this.props.change(`wizardForm${num}Disabled`, !this.state[val]);
  };

  render() {
    // console.log("PageList props = ", this.props);
    // console.log("PageList state = ", this.state);
    const { onSubmit, previousPage, pageNumber, generateTest } = this.props;
    const { toggleDisable } = this;
    return (
      <div>
        {pageNumber === 1 ? <WizardForm01Page onSubmit={onSubmit} /> : null}
        {pageNumber === 2 ? (
          <WizardForm02Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
          />
        ) : null}
        {pageNumber === 3 ? (
          <WizardForm03Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
          />
        ) : null}
        {pageNumber === 4 ? (
          <WizardForm04Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
          />
        ) : null}
        {pageNumber === 5 ? (
          <WizardForm05Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm5}
          />
        ) : null}
        {pageNumber === 6 ? (
          <WizardForm06Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm6}
          />
        ) : null}
        {pageNumber === 7 ? (
          <WizardForm07Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm7}
          />
        ) : null}
        {pageNumber === 8 ? (
          <WizardForm08Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm8}
          />
        ) : null}
        {pageNumber === 9 ? (
          <WizardForm09Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm9}
          />
        ) : null}
        {pageNumber === 10 ? (
          <WizardForm10Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm10}
          />
        ) : null}
        {pageNumber === 11 ? (
          <WizardForm11Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm11}
          />
        ) : null}
        {pageNumber === 12 ? (
          <WizardForm12Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm12}
          />
        ) : null}
        {pageNumber === 13 ? (
          <WizardForm13Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm13}
          />
        ) : null}
        {pageNumber === 14 ? (
          <WizardForm14Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm14}
          />
        ) : null}
        {pageNumber === 15 ? (
          <WizardForm15Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm15}
          />
        ) : null}
        {pageNumber === 16 ? (
          <WizardForm16Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm16}
          />
        ) : null}
        {pageNumber === 17 ? (
          <WizardForm17Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm17}
          />
        ) : null}
        {pageNumber === 18 ? (
          <WizardForm18Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm18}
          />
        ) : null}
        {pageNumber === 19 ? (
          <WizardForm19Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm19}
          />
        ) : null}
        {pageNumber === 20 ? (
          <WizardForm20Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm20}
          />
        ) : null}
        {pageNumber === 21 ? (
          <WizardForm21Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm21}
          />
        ) : null}
        {pageNumber === 22 ? (
          <WizardForm22Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm22}
          />
        ) : null}
        {pageNumber === 23 ? (
          <WizardForm23Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm23}
          />
        ) : null}
        {pageNumber === 24 ? (
          <WizardForm24Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm24}
          />
        ) : null}
        {pageNumber === 25 ? (
          <WizardForm25Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm25}
          />
        ) : null}
        {pageNumber === 26 ? (
          <WizardForm26Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm26}
          />
        ) : null}
        {pageNumber === 27 ? (
          <WizardForm27Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm27}
          />
        ) : null}
        {pageNumber === 28 ? (
          <WizardForm28Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm28}
          />
        ) : null}
        {pageNumber === 29 ? (
          <WizardForm29Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm29}
          />
        ) : null}
        {pageNumber === 30 ? (
          <WizardForm30Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm30}
          />
        ) : null}
        {pageNumber === 31 ? (
          <WizardForm31Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm31}
          />
        ) : null}
        {pageNumber === 32 ? (
          <WizardForm32Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm32}
          />
        ) : null}
        {pageNumber === 33 ? (
          <WizardForm33Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm33}
          />
        ) : null}
        {pageNumber === 34 ? (
          <WizardForm34Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm34}
          />
        ) : null}
        {pageNumber === 35 ? (
          <WizardForm35Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm35}
          />
        ) : null}
        {pageNumber === 36 ? (
          <WizardForm36Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm36}
          />
        ) : null}
        {pageNumber === 37 ? (
          <WizardForm37Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm37}
          />
        ) : null}
        {pageNumber === 38 ? (
          <WizardForm38Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm38}
          />
        ) : null}
        {pageNumber === 39 ? (
          <WizardForm39Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm39}
          />
        ) : null}
        {pageNumber === 40 ? (
          <WizardForm40Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm40}
          />
        ) : null}
        {pageNumber === 41 ? (
          <WizardForm41Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm41}
          />
        ) : null}
        {pageNumber === 42 ? (
          <WizardForm42Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm42}
          />
        ) : null}
        {pageNumber === 43 ? (
          <WizardForm43Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm43}
          />
        ) : null}
        {pageNumber === 44 ? (
          <WizardForm44Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm44}
          />
        ) : null}
        {pageNumber === 45 ? (
          <WizardForm45Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm45}
          />
        ) : null}
        {pageNumber === 46 ? (
          <WizardForm46Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm46}
          />
        ) : null}
        {pageNumber === 47 ? (
          <WizardForm47Page onSubmit={onSubmit} previousPage={previousPage} />
        ) : null}
        {pageNumber === 48 ? (
          <WizardForm48Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm48}
          />
        ) : null}
        {pageNumber === 49 ? (
          <WizardForm49Page
            onSubmit={onSubmit}
            previousPage={previousPage}
            handleDisable={toggleDisable}
            disabled={this.state.wizardForm49}
          />
        ) : null}
        {pageNumber === 50 ? (
          <WizardForm50Page
            onSubmit={generateTest}
            previousPage={previousPage}
          />
        ) : null}
      </div>
    );
  }
}

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(PageList);
