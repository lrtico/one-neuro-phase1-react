const radioButtonGenerator = ({
  input,
  type,
  options,
  meta: { touched, error, warning }
}) => (
  <div>
    {options.map(o => (
      <div className={classnames(["radio-container"])}>
        <label key={o.value} className={classnames(["radio"])}>
          <input
            className={classnames(["radio-dot"])}
            type="radio"
            {...input}
            value={o.value}
            checked={o.value === input.value}
          />
        </label>
        <span className={classnames(["radio-label"])}>{o.title}</span>
      </div>
    ))}
  </div>
);

const RadioButton = ({ content, renderField }) => (
  <div className={classnames(["radio-buttons"])}>
    <Field
      component={radioButtonGenerator}
      name={content.id}
      id={content.id}
      options={content.options}
    />
  </div>
);

// .question.question--thumbless .question__input ul.question__choices > li.question__choice {
//   margin-bottom: 9px;
//   padding: 0;
//   width: auto;
//   display: flex;
// }

// .question .question__input ul.question__choices > li.question__choice .question__text-wrap {
//   color: #6d6d6d;
//   font-family: "Montserrat", sans-serif;
//   font-size: 18px;
//   font-size: 1.8rem;
//   -webkit-transition: color 0.25s;
//   -o-transition: color 0.25s;
//   transition: color 0.25s;
//   position: relative;
//   padding: 15px 18px 15px 15px;
// }

// element.style {
//   border-right: none;
//   border-radius: 0;
// }
// .question .question__input ul.question__choices > li.question__choice .question__bg {
//   border: 1px solid rgba(0, 0, 0, 0.2);
//   border-radius: 2px;
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   -webkit-transition: background-color 0.25s ease-out;
//   -o-transition: background-color 0.25s ease-out;
//   transition: background-color 0.25s ease-out;
//   z-index: -1;
// }

// text input needs flex: 1 1 auto;
