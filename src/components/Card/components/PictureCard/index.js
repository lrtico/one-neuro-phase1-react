import React, { Component } from 'react'
import './pictureCard.css'
import '../../../../app.css'
import MaterialIcon from 'react-google-material-icons'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'

class PictureCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isChecked: ''
    }
  }

  handleTick = () => {
    this.setState(prevState => {
      return { isChecked: !prevState.isChecked }
    })
  }

  render() {
    const {
      tabOrder,
      cardName,
      cardKey,
      cardLabel,
      thumbnail,
      thumbnailAlt
    } = this.props

    return (
      <li
        className={
          this.props.ReduxValue1 === cardLabel ||
          this.props.ReduxValue2 === cardLabel ||
          this.props.ReduxValue3 === cardLabel
            ? 'question__choice question__checkbox--selected'
            : 'question__choice'
        }
        tabIndex={tabOrder}
        onChange={this.handleTick}
      >
        <Field
          name={cardName}
          type="radio"
          component="input"
          value={cardLabel}
        />
        <div className="question__tick-wrap">
          <MaterialIcon icon="check" />
        </div>
        {thumbnail === undefined ? null : (
          <div className="question__image-wrap">
            <img src={thumbnail} alt={thumbnailAlt} />
          </div>
        )}
        <div className="question__text-wrap flex flex--center-vertical">
          <div className="question__label">
            <div className="question__letter">
              <span>{cardKey}</span>
            </div>
          </div>
          <div className="question__text-label">{cardLabel}</div>
        </div>
        <div className="question__bg" />
      </li>
    )
  }
}

// Decorate with redux-form
PictureCard = reduxForm({
  form: 'wizard' // a unique identifier for this form
})(PictureCard)

// Decorate with connect to read form values
const selector = formValueSelector('wizard') // <-- same as form name
PictureCard = connect(state => {
  // can select values individually
  const ReduxValue1 = selector(state, 'di-gender')
  const ReduxValue2 = selector(state, 'di-handedness')
  const ReduxValue3 = selector(state, 'paq-guardian')
  return {
    ReduxValue1,
    ReduxValue2,
    ReduxValue3
  }
})(PictureCard)

export default PictureCard
