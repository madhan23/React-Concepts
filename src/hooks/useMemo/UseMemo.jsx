// Memoization means only  can achieve pure function
/* pure function =>  const sqrt = (n)=>n*n;
1,giving i/p -> o/p will same for all time
2,there is no side effect

side effect
let x =2;
const sqrt = (n)=>{x=x*n}  function will depend on outer scope value
not pure function 
*/

import { useState, useMemo } from "react";

// expensive calculation no need to be reexcuted all time
// dont use usememo unnessary portion coz its consume more memory

// memoization uses shallow copy for render
/*
memo- react Component
useMemo -> expensive operation & 
usecallback for callback function passing to child 
*/
const UseMemo = () => {
  const [arr, setArr] = useState([1, 2, 5]);
  const [count, setCount] = useState(0);
  const maxValue = () => {
    console.log("calculation ...");
    return Math.max(...arr);
  };
  const memo = useMemo(() => maxValue(), [arr]);

  return (
    <div>
      <p> Array : {arr} </p>
      <p> Max : {memo} </p>
      <p>count : {count}</p>
      <button onClick={() => setArr([...arr, Math.round(Math.random() * 10)])}>
        add Array
      </button>
      <button onClick={() => setCount(count + 1)}> count</button>
    </div>
  );
};
export default UseMemo;
