import React from "react";
import "./app.css";
import { reduxForm } from "redux-form";
import validate from "./validate";
import SectionTitle from "./components/SectionTitle";
import Button from "./components/Button";
import ButtonToggle from "./components/ButtonToggle";
import MaterialIcon from "react-google-material-icons";

function handleSearch(event) {
  const tar = event.currentTarget,
    value = tar.value,
    code = event.currentTarget.previousSibling.firstChild;
  console.log("The prev sib of the input is ", code);
  console.log(`The previous sibling of the input is ${code}`);
  //console.log("The width of the prev sib is ", codeWidth);

  tar.nextSibling.classList.add("live-search-results--expand");

  //if the value is empty, that means
  if (value === "") {
    tar.nextSibling.classList.remove("live-search-results--expand");
    //tar.style.paddingLeft = codeWidth;
  } else {
    //tar.style.paddingLeft = codeWidth;
  }
}

function handleSearchResultsClick(event) {
  //Show the code in the input
  //Clear the value of the input
  //fade the selected code in an outlined box with a delete icon
  //Close the search results

  //The exact code in the live search results that was clicked...
  const codeText = event.currentTarget.firstChild.textContent,
    //The flex box holding all the selected codes and its width
    codeBoxesWrapper =
      event.currentTarget.parentNode.previousSibling.previousSibling,
    //The div inside the flex box that is each selected code
    code =
      event.currentTarget.parentNode.previousSibling.previousSibling.firstChild,
    //showCodeBox = document.querySelector(".live-search-wrap__dsm-code"),

    //Boolean whether or not there is a selected code above the input...
    hasCode = code.classList.contains("live-search-wrap__dsm-code--selected"),
    //The text input
    input = event.currentTarget.parentNode.previousSibling;

  let codeWidth = codeBoxesWrapper.clientWidth;

  console.log(
    "The code boxes wrapper I hope ",
    codeBoxesWrapper,
    "The code is ",
    code,
    "The input is ",
    input
  );

  //If it's the first click and there's no code selected...
  if (!hasCode) {
    input.value = "";
    input.placeholder = "";
    code.classList.add("live-search-wrap__dsm-code--selected");
    code.firstChild.textContent = codeText;
    input.nextSibling.classList.remove("live-search-results--expand");
    codeWidth = codeBoxesWrapper.clientWidth;
    console.log("The width of the code box wrapper is ", codeWidth);
    input.style.paddingLeft = codeWidth + 10 + "px";
  } else if (hasCode) {
    //If there's a code...
    console.log("Make room for another code now!");
    input.value = "";
    input.placeholder = "";
    const newCodeBox = document.createElement("div");
    newCodeBox.setAttribute(
      "class",
      "live-search-wrap__dsm-code live-search-wrap__dsm-code--selected"
    );
    //newCodeBox.setAttribute("onclick", "handleRemoveDSMCode();");
    newCodeBox.setAttribute("onclick", "handleRemoveDSMCode();");
    newCodeBox.innerHTML = `<span>294.1</span><i class="material-icons" style="font-size: 24px;">close</i>`;
    codeBoxesWrapper.appendChild(newCodeBox);
    input.nextSibling.classList.remove("live-search-results--expand");
    codeWidth = codeBoxesWrapper.clientWidth;
    console.log("The width of the code box wrapper is ", codeWidth);
    input.style.paddingLeft = codeWidth + 10 + "px";
  }
  // console.log("The width of the code box wrapper is ", codeWidth);
  // input.style.paddingLeft = codeWidth + "px";
  // console.log("The padding left of the input should now be ", codeWidth);
}

function handleRemoveDSMCode(event) {
  console.log("Make the code disappear now!");
  //Delete the value inside the span
  //Remove the class "live-search-wrap__dsm-code-selected--selected"
  event.currentTarget.firstChild.textContent = "";
  event.currentTarget.classList.remove("live-search-wrap__dsm-code--selected");
}

const WizardForm48Page = props => {
  const { handleSubmit } = props;

  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex">
        <SectionTitle titleBold="Diagnostic" titleRegular="considerations" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <div className="question">
        <div className="live-search-wrap">
          <label>DSM-5 diagnosis (ICD-10)</label>
          <div className="live-search-wrap__input-wrap">
            <div className="live-search-wrap__dsm-codes">
              <div
                className="live-search-wrap__dsm-code"
                onClick={handleRemoveDSMCode}
              >
                <span />
                <MaterialIcon icon="close" />
              </div>
            </div>
            <input
              type="search"
              placeholder="Start typing to find diagnostic codes"
              name="dc-code-search"
              tabIndex="1"
              autoComplete="off"
              onKeyUp={handleSearch}
              //onClick={handleSearch}
            />
            <div className="live-search-results">
              <div className="live-search-result live-search-result--header">
                <span className="liv-search-result__dsm-code">DSM-5 CODE</span>
                <span className="liv-search-result__icd-code">IDC-10 CODE</span>
                <span className="liv-search-result__desc">DESCRIPTION</span>
                <span className="liv-search-result__specifier">SPECIFIER</span>
              </div>
              <div
                className="live-search-result"
                onClick={handleSearchResultsClick}
              >
                <span className="liv-search-result__dsm-code">294.1</span>
                <span className="liv-search-result__icd-code">F02.80</span>
                <span className="liv-search-result__desc">
                  Major Neurocognitive Disorder Due to Another Medical Condition
                </span>
                <span className="liv-search-result__specifier">
                  Without behavioral disturbance
                </span>
              </div>
              <div
                className="live-search-result"
                onClick={handleSearchResultsClick}
              >
                <span className="liv-search-result__dsm-code">294.1</span>
                <span className="liv-search-result__icd-code">F02.80</span>
                <span className="liv-search-result__desc">
                  Major Neurocognitive Disorder Due to Multiple Etiologies
                </span>
                <span className="liv-search-result__specifier">
                  Without behavioral disturbance
                </span>
              </div>
              <div
                className="live-search-result"
                onClick={handleSearchResultsClick}
              >
                <span className="liv-search-result__dsm-code">294.11</span>
                <span className="liv-search-result__icd-code">F02.81</span>
                <span className="liv-search-result__desc">
                  Probable Major Neurocognitive Disorder Due to Alzheimer's
                  Disease
                </span>
                <span className="liv-search-result__specifier">
                  With behavioral disturbance
                </span>
              </div>
              <div
                className="live-search-result"
                onClick={handleSearchResultsClick}
              >
                <span className="liv-search-result__dsm-code">294.11</span>
                <span className="liv-search-result__icd-code">F02.81</span>
                <span className="liv-search-result__desc">
                  Probable Major Neurocognitive Disorder Due to Frontotemporal
                  Lobar Degeneration
                </span>
                <span className="liv-search-result__specifier">
                  With behavioral disturbance
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="question">
        <div className="live-search-wrap">
          <label>Educational classification</label>
          <input
            type="search"
            placeholder="Start typing to find educational codes"
            name="dc-edu-code-search"
            tabIndex="2"
          />
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
})(WizardForm48Page);
