import { useRef } from "react";
import { memberJoin } from "../api/members";

const JoinPage=()=>{
  const userid=useRef("");
  const password=useRef("");

  const joinHandler=()=>{
    const param={"userid":userid.current.value,"password":password.current.value};
    memberJoin(param).then(res=>{
      alert(res);
    })
  }

  return(
    <div>
      <h1>회원가입하기</h1>
      <form>
        <div>
          <label htmlFor="userid" className="inline-block w-30 p-1 m-3">아이디</label>
          <input type="text" ref={userid} id="userid" name="userid" className="bg-gray-300"/>
        </div>
        <div>
          <label htmlFor="password" className="inline-block w-30 p-1 m-3">비밀번호</label>
          <input type="password" ref={password} id="password" name="password" className="bg-gray-300"/>
        </div>
        <div>
          <button type="button" onClick={joinHandler} className="m-3 w-80 bg-gray-300 rounded cursor-pointer">가입</button>
        </div>
      </form>
    </div>
  )
}
export default JoinPage;