import { useRef, useState } from "react"
import { caluatorTools } from "../utils/tools"



const Calculator=()=>{
  const [input,setInput]=useState("")
  const operators=["+","-","*","/"]
  const buttonRef=useRef(null);
  const handleInputValue=(value)=>{
    const inputValue=buttonRef.current.value
    setInput((prev)=>prev+value)  
      if (
(operators.includes(inputValue[inputValue.length - 1]) &&
          operators.includes(input[input.length - 1])) ||
        (operators.includes(inputValue[0]) && inputValue.length === 1)
      ) {

      }
  }

  return(
    <>
    <input type="text" name="value" value={input}  readOnly ref={buttonRef}/>
    <div style={styled} className="
      text-cyan-200 p-[4px] border-[1px] rounded-[6px] bg-fuchsia-950 
      ">
        {caluatorTools.map((item) => {
          return (
            <>
              <button
                className="text-cyan-200 p-[4px] border-[1px] rounded-[6px] bg-slate-900 
                 hover:bg-gray-400 active:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400
                 boxShadow
                "
            onClick={()=>handleInputValue(item)}
              >
                {item}
              </button>
            </>
          );
        })}
      </div>
    </>
  )
}


export default Calculator




const styled = {
  padding: "10px",
  // borderRadius:"12px",
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(40px, 1fr))",
  gridTemplateRows: "repeat(4, minmax(40px, 1fr))",
  alignItems: "center",
  gap: "20px",
};
