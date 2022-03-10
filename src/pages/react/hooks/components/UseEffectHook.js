import React, {useState, useEffect} from "react";

const UseEffectHook = () => {

  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);

  useEffect(() =>{
    console.log(value)
    document.title = `You clicked ${count} times`;
    return () =>{
      console.log(11111)
    }
  },[])


  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


export default UseEffectHook;
