import { useState } from "react";

const Counter=()=>{
  const [count,setCount] = useState(0); //[변수(현재값),변경값] = userState(초기값)

  const add=()=>{
    setCount(count+1);
  }
  return(
    <div>
      <button onClick={add}>값증가</button>
      <div>현재 Count값 : {count} </div>
    </div>
  )
}

export default Counter;