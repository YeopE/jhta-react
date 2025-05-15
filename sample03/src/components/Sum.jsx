import { use } from "react";
import { useState } from "react";
import { useRef } from "react";

// function Sum(){  
// }
// 화살표 함수 대신 위 function으로 사용 가능

// const Sum=()=>{
//   const num1 = useRef("");
//   const num2 = useRef("");
//   const num3 = useRef("");

//   const showSum=()=>{
//     num3.current.value = parseInt(num1.current.value) + parseInt(num2.current.value);
//   }

//   return(
//     <div>
//       <form>
//         <input type="text" name="num1" ref={num1} />
//         +
//         <input type="text" name="num2" ref={num2} />
//         =
//         <input type="text" name="num3" ref={num3} readOnly />
//         <button type="button" onClick={showSum}>더하기</button>
//       </form>
//     </div>
//   )
// }

const Sum=()=> {
  const [num1,setNum1] = useState(0);
  const [num2,setNum2] = useState(0);
  const num3=useRef(0);

  const changeNum1=(e)=>{
    setNum1(parseInt(e.target.value));
  }
  const changeNum2=(e)=>{
    setNum2(parseInt(e.target.value));
  }
  const getSum=()=>{
    num3.current.value=num1+num2;
  }

  return (
    <div>
      <input type="text" name="" id="" onChange={changeNum1}/> +
      <input type="text" name="" id="" onChange={changeNum2}/> =
      <input type="text" name="" id="" ref={num3} readOnly/> 
      <button onClick={getSum}>더하기</button><br/>
      <div>
        num1 : {num1}<br/>
        num2 : {num2}
      </div>
    </div>
  )
}
export default Sum;