import { useState, useEffect } from "react";

const ImgBtn=()=>{
  const [count,setCount] = useState(1);

  const add=()=>{
    
    console.log(count);
    setCount(count > 2 ? 1 : count+1 );
  }
  
  useEffect(() => {
    console.log('count 값이 변경되었습니다:', count);
  }, [count]); // count가 변할 때마다 실행됨
  
  return(
    <div>
      <button onClick={add}>이미지변경</button>
      <div>
        <img src={`/${count}.png`}/>
      </div>
    </div>
    
  )
}
export default ImgBtn;