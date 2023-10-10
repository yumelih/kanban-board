function Subtask({ id, placeholder }) {
  return (
    <div className="flex items-center justify-center gap-1">
      <input
        type="text"
        id={id}
        name={id}
        placeholder={placeholder}
        className="input grow"
      />
      <p className="cursor-pointer text-4xl text-primaryGray hover:opacity-50">
        &times;
      </p>
    </div>
  );
}

export default Subtask;
