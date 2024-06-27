import { useEffect, useMemo, useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  let [inputValue, setInputValue] = useState(0);

  function Update() {
    setCount(count + 1);
  }

  // let sum = 0;
  // useEffect(() => {
  //   for (let i = 0; i <= inputValue; i++) {
  //     console.log("inside Function");
  //     sum = sum + i;
  //   }
  //   setSum1(sum);
  // }, [inputValue]);

  let finalSum = useMemo(() => {
    console.log("inside Function");
    let sum = 0;
    for (let i = 0; i <= inputValue; i++) {
      sum = sum + i;
    }
    return sum;
  }, [inputValue]);

  return (
    <>
      <input
        type="number"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <h6>{`sum from 0 to ${inputValue} is ${finalSum}`}</h6>
      <button onClick={Update}>Count : {count}</button>
    </>
  );
}

export default App;
