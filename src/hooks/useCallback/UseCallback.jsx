import { useState, memo, useMemo, useCallback } from "react";

export default function UseCallback() {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState(["task1", "task2"]);
  /* useMemo returns a memoized value 
  and useCallback returns a memoized function */
  const addTodo = useCallback(() => {
    setTodo([...todo, "new value"]);
  }, [todo]);
  return (
    <div>
      <p>Count : ${count}</p>
      <button onClick={() => setCount(count + 1)}>increment </button>
      <hr />

      {/* without memo in child component  if count valuse changes child compoenet gets updated */}
      <Child todo={todo} addTodo={addTodo} />
    </div>
  );
}
const Child = memo(({ todo, addTodo }) => {
  console.log("im child");

  return (
    <div>
      <p>IM Child </p>
      <button onClick={addTodo}>add </button>
      {todo.map((value, index) => (
        <div key={index}>{value}</div>
      ))}
    </div>
  );
});
