import { useRef } from "react";

const FormQuiz=()=>{

  const num1 = useRef("");
  const num2 = useRef("");
  const sum = useRef("");

  const showSum=()=>{
    console.log(num1.current.value);
    console.log(num2.current.value);
    sum.current.value = parseInt(num1.current.value)+parseInt(num2.current.value);
  }

  return(
    <div>
      <form>
        <input type="text" name="num1" ref={num1} />
        +
        <input type="text" name="num2" ref={num2}/>
        =
        <input type="text" name="num3" ref={sum}/>
        <button type="button" onClick={showSum}>plus</button>
      </form>
    </div>
  )
}
export default FormQuiz;