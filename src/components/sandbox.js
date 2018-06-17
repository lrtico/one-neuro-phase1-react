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
