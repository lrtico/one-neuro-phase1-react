import React, { Component } from 'react';
import '../app.css';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import MaterialIcon from 'react-google-material-icons';
import validate from '../validate';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import RadioCard from '../components/Card/RadioCard/RadioCard';
import CheckboxDomainsCard from '../components/Card/CheckboxCard/CheckboxDomainsCard';
import CheckboxTestsCard from '../components/Card/CheckboxCard/CheckboxTestsCard';
import DivButton from '../components/Button/DivButton';
import Test from '../components/Test/Test';
import DomainsLoading from '../components/Loading/DomainsLoading';
import store from '../store';
import SectionSubTitle from '../components/SectionSubTitle';

class WizardForm47Page extends Component {
  state = {
    domains: [],
    tests: [],
    matchedTests: [],
    testsSelected: [],
    domainsLoaded: false,
    showFetchErrorDomains: false,
  };

  showLetterFormat = () => {
    // console.log("hide domain, show letter");
    document.querySelector('.domain__pick-domain').classList.remove('show');
    document.querySelector('.letter-format').classList.add('show');
  };

  showDomainBased = () => {
    // console.log("hide letter, domain based selected");
    document.querySelector('.letter-format').classList.remove('show');
    // document.querySelector(".domain__pick-domain").classList.add("show");
    store.dispatch({
      type: 'SHOW_DOMAIN',
      payload: { showDomains: true },
    });
    document.querySelector('.domain__pick-domain').scrollIntoView({
      behavior: 'smooth',
    });
  };

  showSubDomain = () => {
    // console.log("hide everything but pick the sub domain executing...");
    // this.setState(prevState => {
    //   return { showSubDomains: !prevState.showSubDomains };
    // });
    store.dispatch({
      type: 'SHOW_SUBDOMAIN',
      payload: { showSubDomains: true },
    });
    // document.querySelector(".domain__pick-sub-domain").classList.add("show");
    document.querySelector('.domain__pick-sub-domain').scrollIntoView({
      behavior: 'smooth',
    });
    // console.log("showSubDomain click");
  };

  showTests = () => {
    // console.log("Make tests go now!");
    // this.setState(prevState => {
    //   return { showTests: !prevState.showTests };
    // });
    store.dispatch({
      type: 'SHOW__TESTS',
      payload: { showTests: true },
    });
    // document.querySelector(".domain__test").classList.add("show");
    document.querySelector('.domain__test h4').scrollIntoView({
      behavior: 'smooth',
    });
  };

  showSummary = () => {
    // console.log("Make summary go now!");
    // this.setState(prevState => {
    //   return { showSummary: !prevState.showSummary };
    // });
    store.dispatch({
      type: 'SHOW_SUMMARY',
      payload: { showSummary: true },
    });
    // document.querySelector(".summary-findings").classList.add("show");
    document.querySelector('.summary-findings').scrollIntoView({
      behavior: 'smooth',
    });
  };

  // Add a composite score domain to the appendix (not used anymore)
  addToAppendix = (id, parentScaleName, abbreviation, name, event) => {
    console.log(`
      Make Appendix Domain info go now!
      Info we need:
      - Scale name: ${parentScaleName}
      - Abbreviation: ${abbreviation}
      - Test Name: ${name}
      - Id: ${id}
      - Event: ${event.target.checked}
    `);
    const data = {
      Id: id,
      Name: name,
      Abbreviation: abbreviation,
      DomainsOverall: [{ parentScaleName, id }],
    };

    const { checked } = event.target.checked;

    if (checked) {
      console.log('payload sent to add appendix reducer: ', data);
      store.dispatch({
        type: 'ADD_APPENDIX_DOMAIN',
        payload: data,
      });
    } else {
      console.log(
        'payload sent to remove appendix reducer: ',
        data.DomainsOverall[0],
      );
      store.dispatch({
        type: 'REMOVE_APPENDIX_DOMAIN',
        payload: data,
      });
    }
  };

  // Add a subtest inside a testSelected[0].SubTests to the appendix onBlur (when user leaves a subtest's score input)
  addSubtestToAppendix = (
    id,
    testName,
    abbreviation,
    subtestId,
    subtestName,
    event,
  ) => {
    console.log(`
      Make Appendix Subtest info go now!
      Info we need:
      - Test Id: ${id}
      - Test name: ${testName}
      - Test Abbreviation: ${abbreviation}
      - SubTest Id: ${subtestId}
      - SubTest Name: ${subtestName}
      - Event: ${event.target.value}
    `);

    const data = {
      Id: id,
      TestName: testName,
      Abbreviation: abbreviation,
      SubTests: [
        {
          Id: subtestId,
          Name: subtestName,
        },
      ],
    };

    console.log('ParentScale payload sent to appendix reducer, ', data);

    const notBlank = event.target.value !== '';
    // console.log("Subtest input wasn't blank: ", notBlank);

    // Check to see if any sibling subtests have a value
    const sibsNotBlank = (event) => {
      const sibsArr = event.target.parentNode.parentNode.parentNode.querySelectorAll(
        'input',
      );
      // console.log("all sibs, ", sibsArr);
      let sibsTest;
      // while (sib) {
      //   if (sib.nodeType === 1 && sib !== event.target) {
      //     sibsArr.push(sib);
      //   }
      //   sib = sib.parentNode.parentNode.nextSibling.querySelector("input");
      // }
      for (const item of sibsArr) {
        if (item.value !== '') {
          sibsTest = true;
          return sibsTest;
        }
        sibsTest = false;
        return sibsTest;
      }
    };
    // console.log("Value of sibsNotBlank test, ", sibsNotBlank(event));

    if (notBlank) {
      // console.log("payload sent to add subtest appendix reducer: ", data);
      // store.dispatch({
      //   type: "ADD_APPENDIX_SUBTEST",
      //   payload: data
      // });
      store.dispatch({
        type: 'ADD_APPENDIX_TEST',
        payload: data,
      });
    } else if (sibsNotBlank(event)) {
      //   const domainName = `${parentScaleTitleId}-${parentScaleName
      //     .toLowerCase()
      //     .replace(/ /g, "-")}`;
      //   console.log(`Domain name = ${domainName}`);
      //   this.props.change(domainName, true);
      // console.log(
      //   "Sibs not blank but payload sent to remove appendix reducer: ",
      //   data.ParentScale[0].SubTests[0]
      // );
      store.dispatch({
        type: 'REMOVE_APPENDIX_SUBTEST',
        payload: data,
      });
    } else {
      // console.log(
      //   "payload sent to remove appendix reducer: ",
      //   data.ParentScale[0].SubTests[0]
      // );
      store.dispatch({
        type: 'REMOVE_APPENDIX_SUBTEST',
        payload: data,
      });
    }
  };

  // Add a subtest inside a ParentScaleTitle to the appendix onBlur (when user leaves a subtest's score input)
  addParentScaleTitleSubtestToAppendix = (
    id,
    testName,
    name,
    parentScaleName,
    abbreviation,
    event,
    parentScaleTitleId,
  ) => {
    console.log(`
      Make Appendix Subtest info go now!
      Info we need:
      - Test name: ${testName}
      - Abbreviation: ${abbreviation}
      - Scale name: ${parentScaleName}
      - SubTest Name: ${name}
      - Id: ${id}
      - Event: ${event.target.value}
      - ParentScale Id: ${parentScaleTitleId}
    `);

    const data = {
      Id: id,
      TestName: testName,
      Abbreviation: abbreviation,
      ParentScale: [
        {
          Id: parentScaleTitleId,
          ParentScaleTitle: parentScaleName,
          SubTests: [{ name, id }],
        },
      ],
    };

    console.log('ParentScale payload sent to appendix reducer, ', data);

    const notBlank = event.target.value !== '';
    // console.log("Subtest input wasn't blank: ", notBlank);

    // Check to see if any sibling subtests have a value
    const sibsNotBlank = (event) => {
      const sibsArr = event.target.parentNode.parentNode.parentNode.querySelectorAll(
        'input',
      );
      // console.log("all sibs, ", sibsArr);
      let sibsTest;
      // while (sib) {
      //   if (sib.nodeType === 1 && sib !== event.target) {
      //     sibsArr.push(sib);
      //   }
      //   sib = sib.parentNode.parentNode.nextSibling.querySelector("input");
      // }
      for (const item of sibsArr) {
        if (item.value !== '') {
          sibsTest = true;
          return sibsTest;
        }
        sibsTest = false;
        return sibsTest;
      }
    };
    // console.log("Value of sibsNotBlank test, ", sibsNotBlank(event));

    if (notBlank) {
      // console.log("payload sent to add subtest appendix reducer: ", data);
      // store.dispatch({
      //   type: "ADD_APPENDIX_SUBTEST",
      //   payload: data
      // });
      store.dispatch({
        type: 'ADD_APPENDIX_TEST',
        payload: data,
      });
      // Automatically change the domain's field property and visually check the radio button
      // console.log(`Make domain toggle (id ${parentScaleTitleId}) checked now!`);
      const domainName = `${parentScaleTitleId}-${parentScaleName
        .toLowerCase()
        .replace(/ /g, '-')}`;
      // console.log(`Domain name = ${domainName}`);
      this.props.change(domainName, true);
    } else if (sibsNotBlank(event)) {
      //   const domainName = `${parentScaleTitleId}-${parentScaleName
      //     .toLowerCase()
      //     .replace(/ /g, "-")}`;
      //   console.log(`Domain name = ${domainName}`);
      //   this.props.change(domainName, true);
      // console.log(
      //   "Sibs not blank but payload sent to remove appendix reducer: ",
      //   data.ParentScale[0].SubTests[0]
      // );
      store.dispatch({
        type: 'REMOVE_APPENDIX_SUBTEST',
        payload: data,
      });
    } else {
      // Automatically change the domain's field property and visually check the radio button
      const domainName = `${parentScaleTitleId}-${parentScaleName
        .toLowerCase()
        .replace(/ /g, '-')}`;
      this.props.change(domainName, false);
      // console.log(
      //   "payload sent to remove appendix reducer: ",
      //   data.ParentScale[0].SubTests[0]
      // );
      store.dispatch({
        type: 'REMOVE_APPENDIX_SUBTEST',
        payload: data,
      });
    }
  };

  // Add a subtest inside a ParentGroupSubScale to the appendix onBlur (when user leaves a subtest's score input)
  addParentGroupSubScaleSubtestToAppendix = (
    abbreviation,
    testName,
    parentGroupSubScaleId,
    parentGroupSubScaleName,
    parentScaleTitleId,
    parentScaleName,
    id,
    name,
    event,
  ) => {
    console.log(`
      Make ParentGroupSubScale's Appendix Subtest info go now!
      Info we need:
      - Abbreviation: ${abbreviation}
      - Test name: ${testName}
      - ParentGroupSubScale Id: ${parentGroupSubScaleId}
      - ParentGoupSubScale Name: ${parentGroupSubScaleName}
      - ParentScale Id: ${parentScaleTitleId}
      - ParentScale Name: ${parentScaleName}
      - Id: ${id}
      - SubTest Name: ${name}
      - Event: ${event.target.value}
    `);
    const data = {
      Id: id,
      TestName: testName,
      Abbreviation: abbreviation,
      ParentGroupSubScales: [
        {
          Id: parentGroupSubScaleId,
          ParentGroupSubScaleName: parentGroupSubScaleName,
          ParentScale: [
            {
              Id: parentScaleTitleId,
              ParentScaleTitle: parentScaleName,
              SubTests: [{ name, id }],
            },
          ],
        },
      ],
    };

    const notBlank = event.target.value !== '';
    // console.log("Subtest input wasn't blank: ", notBlank);

    // Check to see if any sibling subtests have a value
    const sibsNotBlank = (event) => {
      const sibsArr = event.target.parentNode.parentNode.parentNode.querySelectorAll(
        'input',
      );
      // console.log("all sibs, ", sibsArr);
      let sibsTest;
      // while (sib) {
      //   if (sib.nodeType === 1 && sib !== event.target) {
      //     sibsArr.push(sib);
      //   }
      //   sib = sib.parentNode.parentNode.nextSibling.querySelector("input");
      // }
      for (const item of sibsArr) {
        if (item.value !== '') {
          sibsTest = true;
          return sibsTest;
        }
        sibsTest = false;
        return sibsTest;
      }
    };
    // console.log("Value of sibsNotBlank test, ", sibsNotBlank(event));

    if (notBlank) {
      // console.log("payload sent to add subtest appendix reducer: ", data);
      // store.dispatch({
      //   type: "ADD_APPENDIX_SUBTEST",
      //   payload: data
      // });
      store.dispatch({
        type: 'ADD_APPENDIX_TEST',
        payload: data,
      });
      // Automatically change the domain's field property and visually check the radio button
      // console.log(`Make domain toggle (id ${parentScaleTitleId}) checked now!`);
      const domainName = `${parentScaleTitleId}-${parentScaleName
        .toLowerCase()
        .replace(/ /g, '-')}`;
      // console.log(`Domain name = ${domainName}`);
      this.props.change(domainName, true);
    } else if (sibsNotBlank(event)) {
      //   const domainName = `${parentScaleTitleId}-${parentScaleName
      //     .toLowerCase()
      //     .replace(/ /g, "-")}`;
      //   console.log(`Domain name = ${domainName}`);
      //   this.props.change(domainName, true);
      // console.log(
      //   "Sibs not blank but payload sent to remove appendix reducer: ",
      //   data.ParentScale[0].SubTests[0]
      // );
      store.dispatch({
        type: 'REMOVE_APPENDIX_SUBTEST',
        payload: data,
      });
    } else {
      // Automatically change the domain's field property and visually check the radio button
      const domainName = `${parentScaleTitleId}-${parentScaleName
        .toLowerCase()
        .replace(/ /g, '-')}`;
      this.props.change(domainName, false);
      // console.log(
      //   "payload sent to remove appendix reducer: ",
      //   data.ParentScale[0].SubTests[0]
      // );
      store.dispatch({
        type: 'REMOVE_APPENDIX_SUBTEST',
        payload: data,
      });
    }
  };

  // Add a subtest inside a ParentScaleTitle inside a ParentGroupScale to the appendix onBlur (when user leaves a subtest's score input)
  addParentGroupScaleParentScaleTitleSubtestToAppendix = (
    abbreviation,
    testName,
    parentGroupScaleId,
    parentGroupScaleName,
    parentScaleTitleId,
    parentScaleName,
    id,
    name,
    event,
  ) => {
    console.log(`
      Make ParentGroupScale ParentScaleTitle's Appendix Subtest info go now!
      Info we need:
      - Abbreviation: ${abbreviation}
      - Test name: ${testName}
      - ParentGroupScale Id: ${parentGroupScaleId}
      - ParentGoupScale Name: ${parentGroupScaleName}
      - ParentScale Id: ${parentScaleTitleId}
      - ParentScale Name: ${parentScaleName}
      - Id: ${id}
      - SubTest Name: ${name}
      - Event: ${event.target.value}
    `);
    const data = {
      Id: id,
      TestName: testName,
      Abbreviation: abbreviation,
      ParentGroupScales: [
        {
          Id: parentGroupScaleId,
          ParentGroupScaleName: parentGroupScaleName,
          ParentScaleTitles: [
            {
              Id: parentScaleTitleId,
              ParentScaleName: parentScaleName,
              SubTests: [{ name, id }],
            },
          ],
        },
      ],
    };

    const notBlank = event.target.value !== '';
    // console.log("Subtest input wasn't blank: ", notBlank);

    // Check to see if any sibling subtests have a value
    const sibsNotBlank = (event) => {
      const sibsArr = event.target.parentNode.parentNode.parentNode.querySelectorAll(
        'input',
      );
      // console.log("all sibs, ", sibsArr);
      let sibsTest;
      // while (sib) {
      //   if (sib.nodeType === 1 && sib !== event.target) {
      //     sibsArr.push(sib);
      //   }
      //   sib = sib.parentNode.parentNode.nextSibling.querySelector("input");
      // }
      for (const item of sibsArr) {
        if (item.value !== '') {
          sibsTest = true;
          return sibsTest;
        }
        sibsTest = false;
        return sibsTest;
      }
    };
    // console.log("Value of sibsNotBlank test, ", sibsNotBlank(event));

    if (notBlank) {
      // console.log("payload sent to add subtest appendix reducer: ", data);
      // store.dispatch({
      //   type: "ADD_APPENDIX_SUBTEST",
      //   payload: data
      // });
      store.dispatch({
        type: 'ADD_APPENDIX_TEST',
        payload: data,
      });
      // Automatically change the domain's field property and visually check the radio button
      // console.log(`Make domain toggle (id ${parentScaleTitleId}) checked now!`);
      const domainName = `${parentScaleTitleId}-${parentScaleName
        .toLowerCase()
        .replace(/ /g, '-')}`;
      // console.log(`Domain name = ${domainName}`);
      this.props.change(domainName, true);
    } else if (sibsNotBlank(event)) {
      //   const domainName = `${parentScaleTitleId}-${parentScaleName
      //     .toLowerCase()
      //     .replace(/ /g, "-")}`;
      //   console.log(`Domain name = ${domainName}`);
      //   this.props.change(domainName, true);
      // console.log(
      //   "Sibs not blank but payload sent to remove appendix reducer: ",
      //   data.ParentScale[0].SubTests[0]
      // );
      store.dispatch({
        type: 'REMOVE_APPENDIX_SUBTEST',
        payload: data,
      });
    } else {
      // Automatically change the domain's field property and visually check the radio button
      const domainName = `${parentScaleTitleId}-${parentScaleName
        .toLowerCase()
        .replace(/ /g, '-')}`;
      this.props.change(domainName, false);
      // console.log(
      //   "payload sent to remove appendix reducer: ",
      //   data.ParentScale[0].SubTests[0]
      // );
      store.dispatch({
        type: 'REMOVE_APPENDIX_SUBTEST',
        payload: data,
      });
    }
  };

  // Add a subtest inside a ParentGroupSubScale inside a ParentGroupScale to the appendix onBlur (when user leaves a subtest's score input)
  addParentGroupScaleParentGroupSubScaleSubtestToAppendix = (
    abbreviation,
    testName,
    parentGroupScaleId,
    parentGroupScaleName,
    parentGroupSubScaleId,
    parentGroupSubScaleName,
    parentScaleTitleId,
    parentScaleName,
    id,
    name,
    event,
  ) => {
    console.log(`
      Make ParentGroupScale ParentGroupSubScale's Appendix Subtest info go now!
      Info we need:
      - Abbreviation: ${abbreviation}
      - Test name: ${testName}
      - ParentGroupScale Id: ${parentGroupScaleId}
      - ParentGoupScale Name: ${parentGroupScaleName}
      - ParentGroupSubScale Id: ${parentGroupSubScaleId}
      - ParentGoupSubScale Name: ${parentGroupSubScaleName}
      - ParentScale Id: ${parentScaleTitleId}
      - ParentScale Name: ${parentScaleName}
      - Id: ${id}
      - SubTest Name: ${name}
      - Event: ${event.target.value}
    `);
    const data = {
      Id: id,
      TestName: testName,
      Abbreviation: abbreviation,
      ParentGroupScales: [
        {
          Id: parentGroupScaleId,
          ParentGroupScaleName: parentGroupScaleName,
          ParentGroupSubScales: [
            {
              Id: parentGroupSubScaleId,
              ParentGroupSubScaleName: parentGroupSubScaleName,
              ParentScaleTitles: [
                {
                  Id: parentScaleTitleId,
                  ParentScaleName: parentScaleName,
                  SubTests: [{ name, id }],
                },
              ],
            },
          ],
        },
      ],
    };

    const notBlank = event.target.value !== '';
    // console.log("Subtest input wasn't blank: ", notBlank);

    // Check to see if any sibling subtests have a value
    const sibsNotBlank = (event) => {
      const sibsArr = event.target.parentNode.parentNode.parentNode.querySelectorAll(
        'input',
      );
      // console.log("all sibs, ", sibsArr);
      let sibsTest;
      // while (sib) {
      //   if (sib.nodeType === 1 && sib !== event.target) {
      //     sibsArr.push(sib);
      //   }
      //   sib = sib.parentNode.parentNode.nextSibling.querySelector("input");
      // }
      for (const item of sibsArr) {
        if (item.value !== '') {
          sibsTest = true;
          return sibsTest;
        }
        sibsTest = false;
        return sibsTest;
      }
    };
    // console.log("Value of sibsNotBlank test, ", sibsNotBlank(event));

    if (notBlank) {
      // console.log("payload sent to add subtest appendix reducer: ", data);
      // store.dispatch({
      //   type: "ADD_APPENDIX_SUBTEST",
      //   payload: data
      // });
      store.dispatch({
        type: 'ADD_APPENDIX_TEST',
        payload: data,
      });
      // Automatically change the domain's field property and visually check the radio button
      // console.log(`Make domain toggle (id ${parentScaleTitleId}) checked now!`);
      const domainName = `${parentScaleTitleId}-${parentScaleName
        .toLowerCase()
        .replace(/ /g, '-')}`;
      // console.log(`Domain name = ${domainName}`);
      this.props.change(domainName, true);
    } else if (sibsNotBlank(event)) {
      //   const domainName = `${parentScaleTitleId}-${parentScaleName
      //     .toLowerCase()
      //     .replace(/ /g, "-")}`;
      //   console.log(`Domain name = ${domainName}`);
      //   this.props.change(domainName, true);
      // console.log(
      //   "Sibs not blank but payload sent to remove appendix reducer: ",
      //   data.ParentScale[0].SubTests[0]
      // );
      store.dispatch({
        type: 'REMOVE_APPENDIX_SUBTEST',
        payload: data,
      });
    } else {
      // Automatically change the domain's field property and visually check the radio button
      const domainName = `${parentScaleTitleId}-${parentScaleName
        .toLowerCase()
        .replace(/ /g, '-')}`;
      this.props.change(domainName, false);
      // console.log(
      //   "payload sent to remove appendix reducer: ",
      //   data.ParentScale[0].SubTests[0]
      // );
      store.dispatch({
        type: 'REMOVE_APPENDIX_SUBTEST',
        payload: data,
      });
    }
  };

  // Add a subtest inside a TestModule to the appendix onBlur (when user leaves a subtest's score input)
  addTestModuleSubtestToAppendix = (
    testId,
    abbreviation,
    testName,
    testModuleId,
    testModuleName,
    parentGroupScaleId,
    parentGroupScaleName,
    parentScaleTitleId,
    parentScaleName,
    id,
    name,
    event,
  ) => {
    console.log(`
      Make TestModules's Appendix Subtest info go now!
      Info we need:
      - Test Id: ${testId}
      - Abbreviation: ${abbreviation}
      - Test name: ${testName}
      - TestModule Id: ${testModuleId}
      - TestModule Name: ${testModuleName}
      - ParentGroupSubScale Id: ${parentGroupScaleId}
      - ParentGoupSubScale Name: ${parentGroupScaleName}
      - ParentScale Id: ${parentScaleTitleId}
      - ParentScale Name: ${parentScaleName}
      - SubTest Id: ${id}
      - SubTest Name: ${name}
      - Event: ${event.target.value}
    `);

    const data = {
      Id: testId,
      TestName: testName,
      Abbreviation: abbreviation,
      TestModules: [
        {
          Id: testModuleId,
          Name: testModuleName,
          ParentGroupScales: [
            {
              Id: parentGroupScaleId,
              ParentGroupScaleName: parentGroupScaleName,
              ParentScaleTitles: [
                {
                  Id: parentScaleTitleId,
                  ParentScaleTitle: parentScaleName,
                  SubTests: [
                    {
                      name,
                      id,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };

    console.log('TestModule payload sent to appendix reducer, ', data);

    const notBlank = event.target.value !== '';
    // console.log("Subtest input wasn't blank: ", notBlank);

    // Check to see if any sibling subtests have a value
    const sibsNotBlank = (event) => {
      const sibsArr = event.target.parentNode.parentNode.parentNode.querySelectorAll(
        'input',
      );
      // console.log("all sibs, ", sibsArr);
      let sibsTest;
      // while (sib) {
      //   if (sib.nodeType === 1 && sib !== event.target) {
      //     sibsArr.push(sib);
      //   }
      //   sib = sib.parentNode.parentNode.nextSibling.querySelector("input");
      // }
      for (const item of sibsArr) {
        if (item.value !== '') {
          sibsTest = true;
          return sibsTest;
        }
        sibsTest = false;
        return sibsTest;
      }
    };
    // console.log("Value of sibsNotBlank test, ", sibsNotBlank(event));

    if (notBlank) {
      // console.log("payload sent to add subtest appendix reducer: ", data);
      // store.dispatch({
      //   type: "ADD_APPENDIX_SUBTEST",
      //   payload: data
      // });
      store.dispatch({
        type: 'ADD_APPENDIX_TEST',
        payload: data,
      });
      // Automatically change the domain's field property and visually check the radio button
      // console.log(`Make domain toggle (id ${parentScaleTitleId}) checked now!`);
      const domainName = `${parentScaleTitleId}-${parentScaleName
        .toLowerCase()
        .replace(/ /g, '-')}`;
      // console.log(`Domain name = ${domainName}`);
      this.props.change(domainName, true);
    } else if (sibsNotBlank(event)) {
      //   const domainName = `${parentScaleTitleId}-${parentScaleName
      //     .toLowerCase()
      //     .replace(/ /g, "-")}`;
      //   console.log(`Domain name = ${domainName}`);
      //   this.props.change(domainName, true);
      // console.log(
      //   "Sibs not blank but payload sent to remove appendix reducer: ",
      //   data.ParentScale[0].SubTests[0]
      // );
      store.dispatch({
        type: 'REMOVE_APPENDIX_SUBTEST',
        payload: data,
      });
    } else {
      // Automatically change the domain's field property and visually check the radio button
      const domainName = `${parentScaleTitleId}-${parentScaleName
        .toLowerCase()
        .replace(/ /g, '-')}`;
      this.props.change(domainName, false);
      // console.log(
      //   "payload sent to remove appendix reducer: ",
      //   data.ParentScale[0].SubTests[0]
      // );
      store.dispatch({
        type: 'REMOVE_APPENDIX_SUBTEST',
        payload: data,
      });
    }
  };

  // Add a TableHeaderRowTitle inside a TestScoringTableDetail to the appendix onBlur (when user leaves a score input)
  addTestScoringTableScoresToAppendix = (
    abbreviation,
    testName,
    id,
    name,
    event,
  ) => {
    console.log(`
      Make TestScoringTableScore's Appendix Subtest info go now!
      Info we need:
      - Abbreviation: ${abbreviation}
      - Test name: ${testName}
      - Id: ${id}
      - SubTest Name: ${name}
      - Event: ${event.target.value}
    `);

    const data = {
      Id: id,
      TestName: testName,
      Abbreviation: abbreviation,
      TestScoringTableScores: [
        {
          name,
          id,
        },
      ],
    };

    console.log(
      'TestScoringTableScore payload sent to appendix reducer, ',
      data,
    );

    const notBlank = event.target.value !== '';
    // console.log("Subtest input wasn't blank: ", notBlank);

    // The field just left has a value so add it to the global state
    if (notBlank) {
      store.dispatch({
        type: 'ADD_APPENDIX_TEST',
        payload: data,
      });
    } else {
      store.dispatch({
        type: 'REMOVE_APPENDIX_SUBTEST',
        payload: data,
      });
    }
  };

  // Add an IndexName inside a TestIndex to the appendix onBlur (when user leaves a score input)
  addTestIndexToAppendix = (id, testName, abbreviation, indexName, event) => {
    console.log(`
      Make IndexName's Appendix info go now!
      Info we need:
      - Id: ${id}
      - Test name: ${testName}
      - Abbreviation: ${abbreviation}
      - Index Name: ${indexName}
      - Event: ${event.target.value}
    `);

    const data = {
      Id: id,
      TestName: testName,
      Abbreviation: abbreviation,
      TestIndexes: [
        {
          Id: id,
          IndexName: indexName,
        },
      ],
    };

    const gcaData = {
      Id: id,
      TestName: testName,
      Abbreviation: abbreviation,
      TestIndexes: [
        {
          Id: id,
          IndexName: 'General Conceptual Ability (GCA)',
        },
        {
          Id: id,
          IndexName: 'Special Nonverbal Composite (SNC)',
        },
      ],
    };

    console.log('IndexName payload sent to appendix reducer, ', data);

    const notBlank = event.target.value !== '';
    // console.log("Subtest input wasn't blank: ", notBlank);

    // The field just left has a value so add it to the global state
    if (notBlank && indexName !== 'General Conceptual Ability') {
      store.dispatch({
        type: 'ADD_APPENDIX_TEST',
        payload: data,
      });
    } else if (notBlank && indexName === 'General Conceptual Ability') {
      store.dispatch({
        type: 'ADD_APPENDIX_TEST',
        payload: gcaData,
      });
    } else {
      store.dispatch({
        type: 'REMOVE_APPENDIX_SUBTEST',
        payload: data,
      });
    }
  };

  // Show all the tests in a domain that's clicked on
  filterTestsByDomainsSelected = (card) => {
    // console.log("Passed domain from checkbox child ", card);
    // console.log("filterTestsByDomainsSelected curr state, ", this.state);
    // console.log(`Box clicked on had the label of ${card}`);
    // this.setState(({ matchedTests, tests, ...state }) => {

    const { tests } = this.state;
    const { storeMatchedTests } = this.props;
    const idx = storeMatchedTests.map((t) => t.DomainName).indexOf(card);
    // console.log(`idx = ${idx}`);

    if (idx !== -1) {
      // The domain is in state already so we remove it...
      // console.log("IndexOf, ", idx);
      // console.log(
      //   "The domain is in state already so we remove it now! ",
      //   this.state.matchedTests
      // );
      // return {
      //   ...state,
      //   matchedTests: matchedTests.filter(t => t.DomainName !== card)
      // };

      // let data = matchedTests.filter(t => t.DomainName !== card);
      // console.log(
      //   `The clicked domain is already in state, so we send the reducer the payload of the domain: ${card}`
      // );
      store.dispatch({
        type: 'REMOVE_TESTS',
        payload: card,
      });
    } else {
      // The domain clicked isn't in the matchedTest array, so filter the immutable all tests state
      // by copying the test that was clicked to the matchedTest array
      // console.log("IndexOf, ", idx);
      // console.log(
      //   "The domain clicked isn't in the matchedTest array so make add now! ",
      //   this.state.matchedTests
      // );
      // let newarr = matchedTests.concat(
      //   tests.filter(t => t.DomainName === card)
      // );
      // let handleMatches = tests.filter(t => t.DomainName === card);
      // let newarr = {
      //   DomainName: card,
      //   handleMatches
      // };
      // console.log("newarr, ", newarr);
      // return [matchedTests.push(newarr)];

      const handleMatches = tests.filter((t) => t.DomainName === card);
      const data = {
        DomainName: card,
        handleMatches,
      };
      // console.log(
      //   `${card} clicked is NOT in state, so we create a new data array with that clicked domain: ${JSON.stringify(
      //     data
      //   )}`
      // );
      store.dispatch({
        type: 'ADD_TESTS',
        payload: data,
      });
    }
    // });
  };

  // Show the test when clicked on or hide it
  showFilteredTest = (test) => {
    console.log('showFilteredTest fired ', this.state);
    const selectedTest = this.state.tests.filter(
      (t) => t.Abbreviation === test,
    );
    store.dispatch({
      type: 'ADD_TEST',
      payload: selectedTest[0],
    });
    store.dispatch({
      type: 'SHOW_TESTS',
      payload: { showTests: true },
    });

    // console.log("Make show test go now!", test);
    this.setState(({ testsSelected, tests, ...state }) => {
      const idx = testsSelected.map((t) => t.Abbreviation).indexOf(test);

      if (idx !== -1) {
        // The abbreviation is in state already so we remove it...
        // console.log("IndexOf, ", idx);
        // console.log(
        //   "The abbreviation is in state already so we remove it now! ",
        //   this.state.testsSelected
        // );
        return {
          ...state,
          testsSelected: testsSelected.filter((t) => t.Abbreviation !== test),
        };
      }
      // The abbreviation clicked isn't in the testsSelected array, so filter the immutable all tests state
      // by copying the test that was clicked to the testsSelected array
      // console.log("IndexOf, ", idx);
      // console.log(
      //   "The abbreviation clicked isn't in the testsSelected array so make add now! ",
      //   this.state.testsSelected
      // );
      return [testsSelected.push(selectedTest[0])];
    });
  };

  // Copy the data from the store to the input clicked on
  handleCopyForward = (data) => {
    console.log('Data passed to the copy forward function = ', data);
  };

  componentDidUpdate(prevProps, prevState) {
    Object.entries(this.props).forEach(
      ([key, val]) =>
        prevProps[key] !== val && console.log(`Prop '${key}' changed`),
    );
    Object.entries(this.state).forEach(
      ([key, val]) =>
        prevState[key] !== val && console.log(`State '${key}' changed`),
    );
  }

  componentDidMount() {
    // Load the domains into state
    console.log('componentDidMount firing');
    // const url = 'http://oneneuro.azurewebsites.net/api/test/domains/all';
    const url = 'https://oneneurowebapi.azurewebsites.net/api/test/domains/all';
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ domains: data, showFetchErrorDomains: false });
        console.log('Domain data from API, ', data);
      })
      .catch((error) => {
        this.setState({ showFetchErrorDomains: true });
        console.log('Error fetching domains: ', error);
      });
    // console.log("WizardForm47 is loading");

    // Load all the test data into state
    // const allData = 'http://oneneuro.azurewebsites.net/api/test/get/all';
    const allData = 'https://oneneurowebapi.azurewebsites.net/api/test/get/all';
    fetch(allData)
      .then((response) => {
        return response.json();
      })
      .then((d) => {
        this.setState({ tests: d, domainsLoaded: true });
        console.log('Test data from API, ', d);
      })
      .catch((error) => console.log('Getting all data error, ', error));

    console.log('Selected tests from the global store are: ', this.props.tests);
    this.setState({ testsSelected: this.props.tests });
  }

  shouldComponentUpdate(nextState) {
    if (
      this.state.tests !== nextState.tests ||
      this.state.domainsLoaded !== nextState.domainsLoaded ||
      this.state.domains !== nextState.domains
    ) {
      return true;
    }
    return false;
  }

  render() {
    const {
      handleSubmit,
      // patientAge,
      // patientName,
      // referral1,
      // referral2,
      // referral3,
      storeMatchedTests,
      tests,
    } = this.props;
    const { domains, showFetchErrorDomains, domainsLoaded } = this.state;
    // console.log("State after render(), ", this.state);
    // console.log("Page 47's props from the store ", this.props);
    console.log('Page 47 render just fired');

    return (
      <form className="col" onSubmit={handleSubmit}>
        <SectionTitle titleBold="Type" titleRegular="of report" />
        <div className="flex">
          <Field
            showLetterFormat={this.showLetterFormat}
            showDomainBased={this.showDomainBased}
            name="mdh-development"
            component={RadioCard}
            cardInfo={[
              {
                cardName: 'tor-format',
                cardText: 'Letter-format',
                cardKey: '1',
                tabOrder: '1',
                cardLabel: 'No',
              },
              {
                cardName: 'tor-format',
                cardText: 'Domain-based',
                cardKey: '2',
                tabOrder: '2',
                cardLabel: 'Yes',
              },
            ]}
            label="Please choose whether or not you need to"
            labelBold="include tests"
            labelLast="in your report"
            classes="question question--thumb"
          />
        </div>

        <div className="letter-format">
          <SectionTitle
            titleBold="Letter-format"
            titleRegular="type of report"
          />
          <div className="grid__half">
            <label>
              Summary of
              <strong>visit</strong>
            </label>
            <Field name="other-information" component="textarea" />
          </div>
          <Button onClick={handleSubmit} buttonLabel="OK" />
        </div>

        <div
          className={
            this.props.domainBasedReports.showDomains
              ? 'domain__pick-domain show'
              : 'domain__pick-domain'
          }
        >
          <SectionSubTitle subTitleFirst="Domains" />
          {domainsLoaded ? (
            <FieldArray
              component={CheckboxDomainsCard}
              checkboxInfo={domains.map((domain) => ({
                cardName: `dbr-${domain.DomainName}`,
                cardKey: domain.id,
                cardLabel: domain.DomainName,
                tabOrder: domain.id,
              }))}
              label="Check all the"
              labelBold="domains"
              labelLast="that were given"
              name="dbr-domains-group"
              classes="question question--thumbless"
              handleDomainTestFilter={this.filterTestsByDomainsSelected}
            />
          ) : showFetchErrorDomains ? (
            <div style={{ color: '#00414d' }}>
              We are working on a problem loading the domains. Please send an
              email to jpowell@lrtico.com and include the steps you took when
              finding the issue, which browser you are using, and which
              operating system your computer has installed, e.g. Mac OS or
              Windows. Thank you!
            </div>
          ) : (
            <DomainsLoading />
          )}
          <DivButton divButtonLabel="OK" show={this.showSubDomain} />
        </div>

        <div
          className={
            this.props.domainBasedReports.showSubDomains
              ? 'domain__pick-sub-domain show'
              : 'domain__pick-sub-domain'
          }
        >
          <SectionSubTitle subTitleFirst="Available" subTitleBold="tests" />
          <FieldArray
            component={CheckboxTestsCard}
            checkboxInfo={storeMatchedTests.map((test) => ({
              columnHeader: test.DomainName,
              cardName: `dbr-${test.DomainName}`,
              checkboxLabels: test.handleMatches,
            }))}
            label="Check all the"
            labelBold="tests"
            labelLast="that were given"
            name="dbr-tests-group"
            classes="question question--thumbless"
            handleTestFilter={this.showFilteredTest}
          />
          <DivButton divButtonLabel="OK" show={this.showTests} />
        </div>

        <div
          className={
            this.props.domainBasedReports.showTests
              ? 'domain__test show'
              : 'domain__test'
          }
        >
          <SectionSubTitle subTitleFirst="Selected" subTitleBold="tests" />
          <Test
            testFromState={tests}
            handleAppendixAdd={this.addToAppendix}
            handleAppendixSubtestAdd={this.addSubtestToAppendix}
            handleAppendixParentGroupSubScaleSubtestAdd={
              this.addParentGroupSubScaleSubtestToAppendix
            }
            handleAppendixTestScoringTableScoresAdd={
              this.addTestScoringTableScoresToAppendix
            }
            handleAppendixTestModulesSubtestAdd={
              this.addTestModuleSubtestToAppendix
            }
            handleAppendixTestIndexesAdd={this.addTestIndexToAppendix}
            handleAppendixParentScaleTitleSubtestAdd={
              this.addParentScaleTitleSubtestToAppendix
            }
            handleAppendixParentGroupScalesParentGroupSubScaleSubtestAdd={
              this.addParentGroupScaleParentGroupSubScaleSubtestToAppendix
            }
            handleAppendixParentGroupScalesParentScaleTitleSubtestAdd={
              this.addParentGroupScaleParentScaleTitleSubtestToAppendix
            }
          />
          <DivButton divButtonLabel="Ok" show={this.showSummary} />
        </div>

        <div
          className={
            this.props.domainBasedReports.showSummary
              ? 'summary-findings show'
              : 'summary-findings'
          }
        >
          <SectionTitle titleBold="Summary" titleRegular="of findings" />
          <div className="flex copy-forward-row">
            <div className="question grid__half">
              <label>
                Patient's <strong>name</strong>
              </label>
              <div className="flex question__input">
                <MaterialIcon icon="arrow_right" />
                <Field component="input" name="diName" type="text" />
              </div>
              {/* {patientName && (
                <Field
                  alt="Person"
                  component={TextQuestion}
                  name="di-name"
                  type="input"
                  classes="question"
                  //copyForward="true"
                />
              )} */}
            </div>
            <div className="question grid__half">
              <label>
                Patient's <strong>age</strong>
              </label>
              {/* {patientAge && (
                <Field
                  alt="Person"
                  component={TextQuestion}
                  name="di-age"
                  type="input"
                  classes="question"
                />
              )} */}
              <div className="flex question__input">
                <MaterialIcon icon="arrow_right" />
                <Field component="input" name="diAge" type="text" />
              </div>
            </div>
          </div>
          <div className="copy-forward-row question">
            <label>
              Reasons for <strong>referral</strong>
            </label>

            <div className="flex question__input">
              <MaterialIcon icon="arrow_right" />
              <Field component="input" name="sofreasonReferral1" type="text" />
            </div>
            <div className="flex question__input">
              <MaterialIcon icon="arrow_right" />
              <Field component="input" name="sofreasonReferral2" type="text" />
            </div>
            <div className="flex question__input">
              <MaterialIcon icon="arrow_right" />
              <Field component="input" name="sofreasonReferral3" type="text" />
            </div>
            {/* {referral1 && (
              <Field
                component={TextQuestion}
                name="sof-reason-referral-1"
                tabOrder="3"
                type="text"
                classes="question"
                materialIcon="arrow_right"
                //copyForward="true"
              />
            )} */}

            {/* {referral2 && (
              <Field
                component={TextQuestion}
                name="reason-referral-2"
                //tabOrder="4"
                type="text"
                classes="question"
                materialIcon="arrow_right"
                copyForward="true"
              />
            )} */}
            {/* {referral3 && (
              <Field
                component={TextQuestion}
                name="reason-referral-3"
                //tabOrder="5"
                type="text"
                classes="question"
                materialIcon="arrow_right"
                copyForward="true"
              />
            )} */}
          </div>
          <div>
            <label>
              Relevant <strong>background</strong> history
            </label>
            <Field name="relevantBackgroundHistory" component="textarea" />
          </div>
          <div>
            <label>
              Results of <strong>current</strong> assessment
            </label>
            <Field name="resultsCurrentAssessment" component="textarea" />
          </div>
          <div>
            <label>
              Overall <strong>summary</strong> of current situation
            </label>
            <Field name="summaryCurrentSituation" component="textarea" />
          </div>
          <Button onClick={handleSubmit} buttonLabel="OK" />
        </div>

        {/* <Button onClick={handleSubmit} buttonLabel="OK" /> */}
      </form>
    );
  }
}

// Decorate with connect to read form values
// const selector = formValueSelector("wizard"); // <-- same as form name
// WizardForm47Page = connect(state => {
//   // can select values individually
//   const patientName = selector(state, "di-name");
//   const patientAge = selector(state, "di-age");
//   const referral1 = selector(state, "reason-referral-1");
//   const referral2 = selector(state, "reason-referral-2");
//   const referral3 = selector(state, "reason-referral-3");
//   return {
//     patientName,
//     patientAge,
//     referral1,
//     referral2,
//     referral3
//   };
// })(WizardForm47Page);

WizardForm47Page = reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
  // values: { "sof-reason-referral-1": this.props.referral1 }
  // initialValues: {
  //   "sof-reason-referral-1":
  //     this.props.referral1 === undefined ? "" : this.props.referral1
  // },
  // enableReinitialize: true
})(WizardForm47Page);

// Grab the state values for showing/hiding components from the store and showing selected tests
export default connect(
  (state) => ({
    domainBasedReports: state.domainBasedReports,
    storeMatchedTests: state.matchedTests,
    tests: state.testsSelectedReducer,
    // initialValues: state.copyForward // pull initial values from copyForward reducer
  }),
  // { load: loadAccount } // bind account loading action creator
)(WizardForm47Page);
