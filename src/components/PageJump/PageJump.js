import React from 'react';
import PropTypes from 'prop-types';
import './pageJump.css';
import MaterialIcon from 'react-google-material-icons';
import RequiredText from '../Required/RequiredText';

const PageJump = (props) => {
  // eslint-disable-next-line operator-linebreak
  const { pageNumber, handlePageNumber, handleEnterPageJump, handlePageJump, pageJumpOutOfRange } =
    props;
  return (
    <div id="page-jump" className="noprint">
      <input
        type="text"
        value={pageNumber}
        onChange={handlePageNumber}
        onKeyPress={handleEnterPageJump}
        maxLength="2"
        min="1"
        max="50"
        placeholder="#"
      />
      <div className="page-jump__button" onClick={handlePageJump}>
        <MaterialIcon icon="arrow_forward" />
      </div>
      <RequiredText
        visibility={pageJumpOutOfRange}
        requiredText="Please enter min 1, max 50 :)"
        customRequiredTextClass="question__required-text question__required-text--pagejump"
      />
    </div>
  );
};

PageJump.propTypes = {
  pageNumber: PropTypes.number,
  handlePageNumber: PropTypes.func,
  handleEnterPageJump: PropTypes.func,
  handlePageJump: PropTypes.func,
  pageJumpOutOfRange: PropTypes.bool,
};

export default PageJump;
