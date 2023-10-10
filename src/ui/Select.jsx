function Select({ label = "title" }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="status" className="label">
        {label}
      </label>
      <div className="">
        <select
          id="status"
          name="status"
          className="text-white-900 after:ar after: block w-full appearance-none rounded-md border-[2px] border-gray-500/30 bg-secondary px-3 py-2"
        >
          <option>1</option>
          <option>2</option>
        </select>
      </div>
    </div>
  );
}

export default Select;
