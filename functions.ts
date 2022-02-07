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

/* never function type exist
    for when you will never reach the end of a function
    like throw an error
    different from void
    void doesn't have a return or returns null or undefined 
 */
function logError(message: string): never {
  throw Error(message);
}

const weather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
