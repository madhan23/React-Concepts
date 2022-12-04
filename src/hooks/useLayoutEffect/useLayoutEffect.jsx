import { useEffect, useLayoutEffect, useState } from "react";

const UseLayoutEffect = () => {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    console.log("Im uselAYOUT Effect"); //2
  }, []);
  useEffect(() => {
    console.log("Im use Effect"); //3
  }, []);
  console.log("render"); //1
  return (
    <div>
      <p>count : {count}</p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
};

export default UseLayoutEffect;
