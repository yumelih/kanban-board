function Heading({ type = "base", children }) {
  const base =
    "text-xs font-semibold uppercase tracking-widest text-primaryGray";

  const styles = {
    base: base,
    sidebar: base + " pb-6 pl-7",
    task: " normal-case text-primaryWhite font-bold",
    column:
      base +
      " flex items-end justify-start uppercase tracking-[0.3em] text-[13px]",
  };

  return <h3 className={styles[type]}>{children}</h3>;
}

export default Heading;
