import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { clearError } from './actions/actions';
import validate from './validate';
import CCWrapper from './utils/PageWrapper';
import PageList from './PageList';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Loading from './components/Loading/Loading';
import PageJump from './components/PageJump/PageJump';
import Toast from './components/Toast/Toast';

class WizardForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 47,
      pageNumber: 1,
      testState: false,
      loading: true,
      hasError: true,
      pageJumpOutOfRange: false,
    };
  }

  // generateTestPDF = () => {
  //   console.log("Make PDF go now!");
  // };

  startingAnimation = () => {
    // console.log("starting");
    this.setState({ testState: true });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  endingAnimation = () => {
    console.log('ending');
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
    console.log('Make page jump now!');
    const x = e.target.value - 0;
    if (x < 0 || x > 50) {
      console.log('Make out of range page jump message go now!');
      this.setState({
        pageJumpOutOfRange: true,
      });
    } else {
      this.setState({
        pageNumber: x,
        pageJumpOutOfRange: false,
      });
    }
  };

  handleJumpToPage = () => {
    console.log('Make page jump now!');
    this.setState({
      page: this.state.pageNumber,
    });
  };

  pressEnterJumpToPage = event => {
    const { pageNumber } = this.state;
    if (event.key === 'Enter') {
      console.log('Enter makes page jump now!');
      this.setState({
        page: pageNumber,
      });
    }
  };

  handleClearError = index => {
    console.log('todo: handle clear error at ', this.state.hasError);
    this.setState(prevState => ({
      hasError: !prevState.hasError,
    }));
  };

  componentDidMount() {
    // Fake loading for dev
    // setTimeout(() => this.setState({ loading: false }), 3000);

    this.setState({ loading: false });
  }

  render() {
    const { onSubmit } = this.props;
    // const { page } = this.state;
    const { loading } = this.state;
    // console.log("WizardForm props, ", this.props);
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
                  generateTest={onSubmit}
                  handleDisable={this.toggleDisable}
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
          handleEnterPageJump={this.pressEnterJumpToPage}
          handlePageJump={this.handleJumpToPage}
          pageNumber={this.state.pageNumber}
          handlePageNumber={this.handlePageNumber}
          pageJumpOutOfRange={this.state.pageJumpOutOfRange}
        />
        <Toast
          onClearError={this.props.onClearError}
          errors={this.props.errors}
          hasError={this.state.hasError}
        />
      </div>
    );
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    errors: state.errors,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClearError(index) {
      dispatch(clearError(index));
    },
  };
};

WizardForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WizardForm);

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardForm);
