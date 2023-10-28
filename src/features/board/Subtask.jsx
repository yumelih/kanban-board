function Subtask({
  id,
  placeholder,
  onSubtaskDelete,
  register,
  errors,
  validationSchema,
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-1">
      <input
        type="text"
        id={id}
        name={id}
        placeholder={placeholder}
        className="input grow"
        {...register(id, validationSchema)}
      />

      <p
        className="cursor-pointer text-4xl text-primaryGray hover:opacity-50"
        onClick={(e) => onSubtaskDelete(e, id)}
      >
        &times;
      </p>
      {errors?.[id] && (
        <p className="basis-full text-red-500">{errors[id]?.message}</p>
      )}
    </div>
  );
}

export default Subtask;
