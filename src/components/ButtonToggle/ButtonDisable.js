import React, { Component } from "react";
import "../../app.css";
import "./buttonToggleStyles.css";

class ButtonDisable extends Component {
  render() {
    const { buttonToggleLabel, disabled } = this.props;
    return (
      <div className={disabled ? "toggleVis toggleVis--active" : "toggleVis"}>
        <div className="btn__hover" />
        <span>{disabled ? "enable" : buttonToggleLabel}</span>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     disabled: state.disabled
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onDisable(page) {
//       dispatch(toggleDisable(page));
//     }
//   };
// };

// ButtonDisable = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ButtonDisable);

export default ButtonDisable;
