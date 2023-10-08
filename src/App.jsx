import { useRef, useState } from "react";
import InputContainer from "./components/InputComponent";
import Structure from "./components/structure";

function App() {
  const [prevInput, setPrevInput] = useState([]);
  const [currentInput, setCurrentInput] = useState();
  const [getValue, setGetValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  const buttonRef = useRef(null);
  const operatorRef = useRef(null);

  const GetResults = () => {
    if (getValue != "" && operator != "" && inputValue != "") {
      const num1 = parseFloat(getValue);
      const num2 = parseFloat(inputValue);
      let calculateResult;
      switch (operator) {
        case "+":
          calculateResult = num1 + num2;
          break;
        case "-":
          calculateResult = num1 - num2;
          break;
        case "*":
          calculateResult = num1 + num2;
          break;
        case "/":
          calculateResult = num1 + num2;
          break;
      }
      setResult(calculateResult);
    }
  };

  const handleOperatorClick = (op) => {
    if (getValue !== "" && inputValue == "") {
      setOperator(op);
    }
  };
  const handleCalculator = (value) => {
    if (value === "=") {
      GetResults();
    } else if (value === "clear") {
      clearCalculator();
    } else if (["/", "*", "-", "+"].includes(value)) {
      handleOperatorClick(value);
    } else {
      handleNumberClick(value);
    }
  };

  const handleNumberClick = (value) => {
    if (operator === "" || value === ".") {
      if (value !== "clear" || value === ".") {
        setGetValue(getValue + value);
      }
    } else if (operator !== "" && inputValue === "") {
      if (value !== "clear") {
        setInputValue(value);
      }
    } else if ((operator !== "" && inputValue !== "") || value === ".") {
      setInputValue(inputValue + value);
    }
  };

  const clearCalculator = () => {
    setGetValue("");
    setInputValue("");
    setOperator("");
    setResult("");
  };

  return (
    <div className="flex flex-col">
      <div className="w-[300px]">
        {/* <Calculator/> */}
        <InputContainer
          getValue={getValue}
          inputValue={inputValue}
          operator={operator}
          result={result}
          buttonRef={buttonRef}
          operatorRef={operatorRef}
        />
        <Structure handleCalculator={handleCalculator} />
      </div>
    </div>
  );
}

export default App;
