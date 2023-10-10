function Checkbox() {
  return (
    <label className="relative flex items-center justify-start gap-3 bg-primary p-2.5">
      <input type="checkbox" className="peer h-5 w-5 accent-primaryPurple" />
      <span className="absolute left-2.5 top-3 h-5 w-5 border border-primaryGray bg-secondary  peer-checked:hidden"></span>
      <span className="m-0 select-none pt-[1px] peer-checked:line-through">
        War changed me!
      </span>
    </label>
  );
}

export default Checkbox;
