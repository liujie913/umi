import React, {useState, useCallback} from "react";
import { history, Link } from "umi";

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
        if (count == 2){
          history.push('/list?name=98');
        }
        setCount(count + 1);
        logMethod();
      }}>
        Click me
      </button>
      <Link to="/list">Go to list page</Link>
    </div>
  );
}


export default UseStateHook;
