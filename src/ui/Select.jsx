function Select({ id, register, options, label = "title", defaultValue }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="status" className="label">
        {label}
      </label>
      <div className="">
        <select
          {...register(id)}
          className="text-white-900 after:ar after: block w-full appearance-none rounded-md border-[2px] border-gray-500/30 bg-secondary px-3 py-2"
          defaultValue={defaultValue}
        >
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Select;
