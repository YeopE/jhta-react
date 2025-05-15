import { useRef } from "react";
import { useDispatch } from "react-redux";
import { loginPostAsync } from "../reducer/loginReducer";
import { useNavigate } from "react-router-dom";

const LoginPage=()=>{
  const userid=useRef("");
  const password=useRef("");
  const navigator=useNavigate();
  const dispatch=useDispatch();
  const loginHandler=()=>{
    const param={userid:userid.current.value,
                 password:password.current.value}
    dispatch(loginPostAsync(param))
      .unwrap() //then ~ catch를 사용하고자 할 때 unwrap()함수 호출
      .then(data=>{
        alert("로그인성공!");
        navigator({pathname:'/'},{replace:true}); //replace:true는 새로고침
      })
      .catch(e=>{
        console.log(e);
        alert("아이디 또는 비밀번호가 맞지 않습니다.")    
      })
  }

  return(
    <div>
      <h1>회원로그인</h1>
      <form>
        <div>
          <label htmlFor="" className="inline-block w-30 p-1 m-3">회원아이디</label>
          <input type="text" ref={userid} className="bg-gray-300" />
        </div>
        <div>
          <label htmlFor="" className="inline-block w-30 p-1 m-3">비밀번호</label>
          <input type="text" ref={password} className="bg-gray-300" />
        </div>
        <div>
          <button type="button" onClick={loginHandler} className="m-3 w-80 bg-gray-300 rounded cursor-pointer">로그인</button>
        </div>
      </form>
    </div>
  )
}
export default LoginPage;