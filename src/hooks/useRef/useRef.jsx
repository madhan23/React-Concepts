import { useEffect, useRef, useState } from "react";
// persist during re render
// accessing DOM Element

export default function UseRef() {
  console.log("component render");
  const inputRef = useRef();
  let count = useRef(1);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const [value, setValue] = useState(" ");
  return (
    <div>
      <p>useRef count {count.current} </p>
      <p>input {value}</p>
      <input
        type='text'
        ref={inputRef}
        placeholder='enter value'
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          count.current = count.current + 1;
        }}
      />
    </div>
  );
}
