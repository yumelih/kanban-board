function Input({
  id,
  children,
  type = "input",
  typeOfInput = "text",
  register,
  validationSchema = { required: "This field is required" },
  errors,
  placeholder = "e.g. Take coffee break",
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="label">
        {children}
      </label>
      {type === "input" && (
        <>
          <input
            type={typeOfInput}
            id={id}
            name={id}
            placeholder={placeholder}
            className="input"
            {...register(id, validationSchema)}
          />
          {errors?.[id] && (
            <p className="text-red-500">{errors[id]?.message}</p>
          )}
        </>
      )}
      {type === "textarea" && (
        <textarea
          id="description"
          name="description"
          placeholder="e.g. It's always good to take a break. The 15 minutes will recharge your batteries a little."
          className="input"
          rows="4"
          {...register(id, validationSchema)}
        />
      )}
    </div>
  );
}

export default Input;
