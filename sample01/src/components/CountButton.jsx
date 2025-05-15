
import { useState } from "react";

const CountButton=()=>{
  const [count,setCount] = useState(0);

  const plus=()=>{
    setCount(count+1);
  }
  const minus=()=>{
    setCount(count-1);
  }

  return(
    <div>
      <div>현재 Count값 : {count}</div>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  )
}
export default CountButton;