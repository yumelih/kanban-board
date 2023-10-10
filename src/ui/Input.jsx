function Input({ id, children, type = "input", typeOfInput = "text" }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="label">
        {children}
      </label>
      {type === "input" && (
        <input
          type={typeOfInput}
          id={id}
          name={id}
          placeholder="e.g. Take coffee break"
          className="input"
        />
      )}
      {type === "textarea" && (
        <textarea
          id="description"
          name="description"
          placeholder="e.g. It's always good to take a break. The 15 minutes will recharge your batteries a little."
          className="input"
          rows="4"
        />
      )}
    </div>
  );
}

export default Input;
