function OpenSidebar({ setIsSidebarOpen }) {
  return (
    // <div className="relative mx-auto mt-4 h-1 w-8 bg-slate-100 before:absolute before:top-3 before:h-1 before:w-8 before:bg-slate-100 before:content-[''] after:absolute after:-top-3 after:h-1 after:w-8 after:bg-slate-100 after:content-[''] "></div>
    <>
      <input
        type="checkbox"
        id="open-sidebar"
        className="hidden"
        onClick={() => setIsSidebarOpen((prev) => !prev)}
      />
      <label
        htmlFor="open-sidebar"
        className="group absolute right-0 top-12 block h-12 w-12 cursor-pointer sm:left-4 "
      >
        <span className="relative mx-auto block h-1 w-8 bg-slate-100 transition duration-700 before:absolute before:left-1/2 before:top-3 before:block before:h-1 before:w-8 before:-translate-x-1/2 before:bg-slate-100 before:transition before:duration-700 before:content-[''] after:absolute after:-top-3 after:left-1/2 after:block after:h-1 after:w-8 after:-translate-x-1/2 after:bg-slate-100 after:transition after:duration-700 after:content-[''] group-hover:bg-transparent group-hover:before:top-0 group-hover:before:rotate-45 group-hover:after:top-0 group-hover:after:-rotate-45">
          {/* This span can be used for accessibility purposes, such as adding screen reader text */}
        </span>
      </label>
    </>
  );
}

export default OpenSidebar;
