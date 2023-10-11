function Button({ children, type = "primary", render }) {
  const base = "px-3 py-2.5 text-sm rounded-full font-semibold ";

  const styles = {
    primary: base + " bg-indigo-500 text-slate-50 hover:bg-indigo-600",
    white: base + " bg-primaryWhite text-indigo-500 hover:opacity-75",
  };

  return (
    <button onClick={render} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
