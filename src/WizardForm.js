import React, { Component } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import CCWrapper from "./utils/PageWrapper";
import PageList from "./PageList";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Loading from "./components/Loading/Loading";
import PageJump from "./components/PageJump/PageJump";

class WizardForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 47,
      pageNumber: 1,
      testState: false,
      loading: true
    };
  }

  startingAnimation = () => {
    console.log("starting");
    this.setState({ testState: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  endingAnimation = () => {
    console.log("ending");
    this.setState({ testState: false });
  };

  nextPage() {
    this.endingAnimation();
    setTimeout(() => {
      this.setState({ page: this.state.page + 1 });
    }, 250);
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  backToPage1 = () => {
    this.setState({ page: 2 });
  };

  goPage47 = () => {
    this.setState({ page: 47 });
  };

  handlePageNumber = e => {
    console.log("Make page jump now!");
    let x = e.target.value - 0;
    this.setState({
      pageNumber: x
    });
  };

  handleJumpToPage = () => {
    console.log("Make page jump now!");
    this.setState({
      page: this.state.pageNumber
    });
  };

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 3000);
  }

  render() {
    //const { onSubmit } = this.props;
    //const { page } = this.state;
    const { loading } = this.state;
    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <CSSTransition in={this.state.testState} classNames="form">
            <div className="form content questions">
              <CCWrapper
                startingAnimation={this.startingAnimation}
                endingAnimation={this.endingAnimation}
                pageNumber={this.state.page}
              >
                <PageList
                  onSubmit={this.nextPage}
                  pageNumber={this.state.page}
                />
              </CCWrapper>
            </div>
          </CSSTransition>
        )}
        <ProgressBar
          currentProgress={this.state.page}
          goBack={this.previousPage}
          handleGoPage1={this.backToPage1}
          handleGoPage47={this.goPage47}
        />
        <PageJump
          handlePageJump={this.handleJumpToPage}
          pageNumber={this.state.pageNumber}
          handlePageNumber={this.handlePageNumber}
        />
      </div>
    );
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default WizardForm;
