import { useRef, useEffect } from "react";

const Form2=()=>{
  const name=useRef("");
  const age=useRef("");
  const result=useRef("");
  useEffect(()=>{
    name.current.focus();
  },[])
  const showResult=()=>{
    result.current.innerHTML = `이름: ${name.current.value}<br>
                                나이: ${age.current.value}`;
  }

  return(
    <div>
      <form>
        이름<input type="text" name="name" ref={name}/><br/>
        나이<input type="text" name="age" ref={age}/><br/>
        <button type="button" onClick={showResult}>확인</button>
      </form>
      <div>
        <h1>입력된 정보</h1>
        <div ref={result}></div>
      </div>
    </div>
  )
}

export default Form2;