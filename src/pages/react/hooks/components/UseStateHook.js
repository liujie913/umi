import React, {useState, useCallback} from "react";

const UseStateHook = () => {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);

  const logMethod = useCallback(() =>{
    console.log(count)
  }, [count])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => {
        setCount(count + 1);
        logMethod();
      }}>
        Click me
      </button>
    </div>
  );
}


export default UseStateHook;
