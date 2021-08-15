import React from 'react';
import PropTypes from 'prop-types';

// const handleSelectCode = (event, { props }) => {
//   let code = event.currentTarget.children[0].textContent;
//   console.log("code from child = ", code);
//   props.onSelectCode(code);
// };

const DatabaseResult = (props) => {
  // console.log('props of the result, ', props);
  const { data, onSelectCode } = props;
  return (
    <div
      className="live-search-result"
      onClick={() =>
        onSelectCode(data.DSM5Code, data.ICD10Code, data.Descriptions, data.Specifiers)
      }
      // onClick={handleSelectCode}
    >
      <span className="liv-search-result__dsm-code">{data.DSM5Code}</span>
      <span className="liv-search-result__icd-code">{data.ICD10Code}</span>
      <span className="liv-search-result__desc">{data.Descriptions}</span>
      <span className="liv-search-result__specifier">{data.Specifiers}</span>
    </div>
  );
};

DatabaseResult.propTypes = {
  data: PropTypes.object,
  onSelectCode: PropTypes.func,
};

export default DatabaseResult;
