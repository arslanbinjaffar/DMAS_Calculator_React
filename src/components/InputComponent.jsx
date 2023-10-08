const InputContainer = ({
  getValue,
  operator,
  inputValue,
  result,
  buttonRef,
  operatorRef,
}) => {
  buttonRef.current = inputValue;
  operatorRef.current = operator;
  console.log(buttonRef.current, operatorRef.current);
  return (
    <>
      <div className="text-cyan-200 p-[4px] border-[1px] rounded-[6px] bg-slate-900 border-b-0">
        <span className="text-[10px]"></span>
        {result !== "" ? (
          <span className="text-[10px]">
            {getValue}
            {operator}
            {inputValue}
          </span>
        ) : (
          ""
        )}
        {result == "" ? (
          <p>
            {getValue}
            {operator}
            {inputValue}
          </p>
        ) : (
          <p>{result}</p>
        )}
        <>
          <input
            type="text"
            value={getValue}
            style={inputStyled}
            className="hidden"
            readOnly
          />
          <input
            type="text"
            className="hidden border-l-0 border-b-0"
            value={inputValue}
            style={inputStyled}
            readOnly
          />
        </>
      </div>
    </>
  );
};

export default InputContainer;

const inputStyled = {
  backgroundColor: "transparent",
  display: "none",
  // outline:"none",
  padding: "10px",
  // borderRadius:"10px",
  borderTopLeftRadius: "12px", // Apply borderRadius to the top-left corner
  borderTopRightRadius: "12px", // Apply borderRadius to the top-right corner
  borderBottomLeftRadius: "0", // No borderRadius for the bottom-left corner
  borderBottomRightRadius: "0",
};
