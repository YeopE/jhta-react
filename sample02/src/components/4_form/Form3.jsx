import { useState } from "react";

const Form3=()=>{
  const [name,setName]=useState("이름을 입력하세요.");
  const [job,setJob]=useState("직업을 선택하세요.");
  const [age,setAge]=useState("연령대를 선택하세요.");

  const changeName=(e)=>{
    const inputName = e.target.value;
    setName(inputName);
  }
  const changeJob=(e)=>{
    const selectJob = e.target.value;
    setJob(selectJob);
  }
  const changeAge=(e)=>{
    const radioAge = e.target.value;
    setAge(radioAge);
  }
  const submitData=(e)=>{
    e.preventDefault();
    alert("비동기 방식으로 데이터가 저장됩니다....")
  }

  return(
    <div>
      <form onSubmit={submitData}>
        {/* jsx에서는 label의 for속성을 htmlFor를 쓴다. */}
        <label htmlFor="txtName">이름</label>
        <input type="text" name="name" id="txtName" onChange={changeName}></input><br/>
        <label htmlFor="job">직업</label>
        <select id="job" onChange={changeJob}>
          <option>군인</option>
          <option>회사원</option>
          <option>자영업</option>
          <option>학생</option>
          <option>기타</option>
        </select>
        <br/>
        연령대
        <label><input type="radio" value="10" name="age" onChange={changeAge}/>10대</label>
        <label><input type="radio" value="20" name="age" onChange={changeAge}/>20대</label>
        <label><input type="radio" value="30" name="age" onChange={changeAge}/>30대</label>
        <label><input type="radio" value="40" name="age" onChange={changeAge}/>40대</label>
        <br/>
        <button type="submit">등록</button>
      </form>

      <div>
        <h2>입력된 정보</h2>
        이름 : {name} <br/>
        직업 : {job} <br/>
        나이 : {age}
      </div>
    </div>
  )
}
export default Form3;