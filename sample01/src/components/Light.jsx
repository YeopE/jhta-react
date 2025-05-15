import { useState } from "react";

const Light=()=>{

  const [on,setOn]=useState(false);

  return(
    <div>
      <button onClick={()=>{
        setOn(true);
      }}>ON</button>
      <button onClick={()=>{
        setOn(false);
      }}>OFF</button>
      <div style={{backgroundColor:(on?'yellow':'gray'),width:300,height:100}}>Hello</div>
    </div>
  )
}

export default Light;