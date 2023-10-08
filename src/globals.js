export const input_array = ["9", "8", "7", "6", "5", "3", "2", "1", "0"];

export const opertors_array = ["-", "+", "*", "/", "=", "clear"];

// [2,+,2,/,2,*,2,-,2]
//DMAS
// Divides
// Multiply
// Additions
// Subtractions

export const calculateResult = (inputs) => {
  while (inputs.length > 1) {
    for (let j = 0; j < inputs.length; j++) {
      let currentOperator = inputs[j];
      let prevIndex = i - 1;
      let nextIndex = i + 1;
      let prevValue = inputs[prevIndex];
      let nextValue = inputs[nextIndex];
      const prevSlice = inputs.slice(0, prevIndex);
      const nextSlice = inputs.slice(nextIndex + 1);
      switch (currentOperator) {
        case "/":
          const result = prevValue / nextValue;
          inputs = [...prevSlice, result, ...nextSlice];
        case "*":
          const result1 = prevValue * nextValue;
          inputs = [...prevSlice, result1, ...nextSlice];
        case "-":
          const result2 = prevValue - nextValue;
          inputs = [...prevSlice, result2, ...nextSlice];
        case "+":
          const result3 = prevValue + nextValue;
          inputs = [...prevSlice, result3, ...nextSlice];
      }
    }
  }
};
