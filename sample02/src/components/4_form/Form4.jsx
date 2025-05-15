import { useState } from "react";

const Form4=()=>{
  const [data,setData]=useState({
    name:'',
    age:'',
    job:''
  })
  const changeData=(e)=>{
    const name=e.target.name; //이벤트가 발생된 객체의 name속성값 (name,job,age,...)
    const value=e.target.value; //이벤트가 발행된 객체의 value속성값(입력된값/선택된값)

    // const inputData={
    //   ...data,
    //   [name]:value
    // }
    // setData(intputData);
    setData({
      ...data,
      [name]:value
    });
  }

  return(
    <div>
      <form>
        <label htmlFor="txtName">이름</label>
        <input type="text" name="name" id="txtName" onChange={changeData}></input><br/>
        <label htmlFor="job">직업</label>
        <select id="job" name="job" onChange={changeData}>
          <option>군인</option>
          <option>회사원</option>
          <option>자영업</option>
          <option>학생</option>
          <option>기타</option>
        </select>
        <br/>
        연령대
        <label><input type="radio" value="10" name="age" onChange={changeData}/>10대</label>
        <label><input type="radio" value="20" name="age" onChange={changeData}/>20대</label>
        <label><input type="radio" value="30" name="age" onChange={changeData}/>30대</label>
        <label><input type="radio" value="40" name="age" onChange={changeData}/>40대</label>
        <br/>
        <button type="submit">등록</button>
      </form>

      <div>
        <h2>입력된 정보</h2>
        이름 {data.name}<br/>
        나이 {data.age}<br/>
        직업 {data.job}<br/>
      </div>
    </div>
  )
}
export default Form4;