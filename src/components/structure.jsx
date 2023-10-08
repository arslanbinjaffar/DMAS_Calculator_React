import { input_array, opertors_array } from "../globals";

const Structure = ({ handleCalculator }) => {
  const styled = {
    padding: "10px",
    // borderRadius:"12px",
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(40px, 1fr))",
    gridTemplateRows: "repeat(4, minmax(40px, 1fr))",
    alignItems: "center",
    gap: "20px",
  };

  return (
    <div
      style={styled}
      className="
      text-cyan-200 p-[4px] border-[1px] rounded-[6px] bg-fuchsia-950 
      "
    >
      {input_array.map((item) => {
        return (
          <div>
            <button
              className="text-cyan-200 p-[4px] border-[1px] rounded-[6px] bg-slate-900 
                 hover:bg-gray-400 active:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400
                 boxShadow
                "
              onClick={() => handleCalculator(item)}
            >
              {item}
            </button>
          </div>
        );
      })}
      <div>
        {opertors_array.map((item) => {
          return (
            <div>
              <button
                className="text-cyan-200 p-[4px] border-[1px] rounded-[6px] bg-slate-900 
                 hover:bg-gray-400 active:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400
                 boxShadow
                "
                onClick={() => handleCalculator(item)}
              >
                {item}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Structure;
