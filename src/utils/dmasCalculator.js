const dmasCalculator = (inputs) => {
  while (inputs.length > 1) {
    if (inputs.length == 3) {
      if (inputs[1] == "/") {
        return (result = inputs[0] / inputs[2]);
      } else if (inputs[1] == "*") {
        return (result = inputs[0] * inputs[2]);
      } else if (inputs[1] == "+") {
        return (result = inputs[0] + inputs[2]);
      } else {
        return (result = inputs[0] - inputs[2]);
      }
    }
    for (let i = 0; i < inputs.length; i++) {
      let currentInput = inputs[i];
      if (
        currentInput == "/" ||
        currentInput == "*" ||
        currentInput == "-" ||
        currentInput == "+"
      ) {
        let prevIndex = i - 1;
        let nextIndex = i + 1;
        let prevValue = inputs[prevIndex];
        let nextValue = inputs[nextIndex];
        const prevSlice = inputs.slice(0, prevIndex);
        const nextSlice = inputs.slice(nextIndex + 1);
        if (currentInput == "/") {
          const result = prevValue / nextValue;
          inputs = [...prevSlice, result, ...nextSlice];
          continue;
        }
        if (currentInput == "*" && !inputs.includes("/")) {
          const result = prevValue * nextValue;
          inputs = [...prevSlice, result, ...nextSlice];
          continue;
        }
        if (
          currentInput == "+" &&
          !inputs.includes("*") &&
          !inputs.includes("/")
        ) {
          const result = prevValue + nextValue;
          inputs = [...prevSlice, result, ...nextSlice];
          i = 0;
          continue;
        }
        if (
          currentInput == "-" &&
          !inputs.includes("-") &&
          !inputs.includes("*") &&
          !inputs.includes("/")
        ) {
          const result = prevValue - nextValue;
          inputs = [...prevSlice, result, ...nextSlice];
          i = 0;
          continue;
        }
      }
    }
  }
  return inputs[0];
};
