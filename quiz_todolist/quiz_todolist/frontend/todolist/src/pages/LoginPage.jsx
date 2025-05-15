import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { loginPostAsync } from "../reducer/LoginReducer";
import { useDispatch } from "react-redux";

const LoginPage=()=>{
  const userid=useRef("");
  const password=useRef("");
  const navigator=useNavigate();
  const dispatch=useDispatch();
  const loginHandler=()=>{
    const param = {userid:userid.current.value,
                   password:password.current.value}
                   
    dispatch(loginPostAsync(param))
      .unwrap()
      .then(data=>{
        alert("로그인 성공!");
        navigator({pathname:'/'},{replace:true});
      })
      .catch(e=>{
        console.log(e);
        alert("아이디 또는 비밀번호가 맞지 않습니다.")
      })
  }

  return(
    <div>
      <h1>회원로그인</h1>
      <form action="">
        <div>
          <label htmlFor="" className="inline-block w-30 p-1 m-3">아이디</label>
          <input type="text" ref={userid} className="bg-gray-300" />
        </div>
        <div>
          <label htmlFor="" className="inline-block w-30 p-1 m-3">비밀번호</label>
          <input type="text" ref={password} className="bg-gray-300"/>
        </div>
        <div>
          <button type="button" onClick={loginHandler} className="m-3 w-80 bg-gray-300 rounded cursor-pointer">로그인</button>
        </div>
      </form>
    </div>   
  )
}
export default LoginPage;