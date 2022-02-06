// no inference for function arguments
const add = (a: number, b: number) => {
  return a + b;
};

// having a function type makes ts notify you if you forgot the return statement or are returning the wrong type.
const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}
