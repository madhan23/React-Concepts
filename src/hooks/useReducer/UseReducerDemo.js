import React, { useReducer, useRef, useId } from "react";
import { INITIAL_STATE, formReducer } from "./FormReducer";
import "./UseReducerDemo.css";

function UseReducerDemo() {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const uuid = useId();
  const textAreaRef = useRef();
  const handleChange = (e) => {
    dispatch({ type: "INPUT_UPDATE", payload: e.target });
  };

  const showResult = () => {
    console.log(JSON.stringify(state));
  };
  return (
    <div className='form-section'>
      <div>
        <input
          type='text'
          name='username'
          placeholder='username'
          onChange={handleChange}
        />
        <input
          type='email'
          name='email'
          placeholder='email'
          onChange={handleChange}
        />
        <input
          type='number'
          name='mobileNumber'
          placeholder='mobileNumber'
          onChange={handleChange}
        />
        <div>
          <label htmlFor='category' style={{ margin: "10px" }}>
            Category
          </label>
          <select name='category' id='category' onChange={handleChange}>
            <option value='select'>select</option>
            <option value='jeans'>Jeans</option>
            <option value='t-shirts'>TShirts</option>
            <option value='trousers'>Trousers</option>
            <option value='pant'>Pants</option>
          </select>
        </div>

        <div className='text-area-section'>
          <label htmlFor='tags'>Tags</label>
          <textarea
            ref={textAreaRef}
            placeholder='seperate tags with commas...'
            name='tags'
            id='tags'
            rows='4'
            cols='50'
          ></textarea>
          <button
            onClick={() =>
              dispatch({ type: "TAGS", payload: textAreaRef.current })
            }
          >
            Add Tags
          </button>
          <div style={{ display: "flex" }}>
            {state.tags.map((data, index) => (
              <span className='tags' key={uuid + index}>
                {data}
              </span>
            ))}
          </div>
        </div>
        <div className='qty-section'>
          <button
            onClick={() => dispatch({ type: "QTY_DEC" })}
            disabled={state.quantity <= 0}
          >
            -
          </button>
          <p>Quantity ({state.quantity})</p>
          <button onClick={() => dispatch({ type: "QTY_INC" })}>+</button>
        </div>
      </div>
      <button onClick={showResult}>Show Results</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}

export default UseReducerDemo;
