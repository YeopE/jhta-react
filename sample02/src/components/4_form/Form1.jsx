import { useState } from "react";

const Form1=()=>{
  const [name,setName]=useState("");
  const [age,setAge]=useState("");

  const changeName=(e)=>{
    const inputName = e.target.value;
    setName(inputName);
  }
  const changeAge=(e)=>{
    const inputAge = e.target.value;
    setAge(inputAge);
  }
  const showInfo=()=>{
    alert(`당신의 이름은 ${name}이고 나이는 ${age}이군요!`);
  }
  return(
    <div>
      <form>
        이름<input type="text" name="name" onChange={changeName}/><br/>
        나이<input type="text" name="age" onChange={changeAge}/><br/>
        <button type="button" onClick={showInfo}>확인</button>
      </form>
      <div>
        <h1>입력된 정보</h1>
        이름: {name} <br/>
        나이: {age} <br/>
      </div>
    </div>
  )
}

export default Form1;