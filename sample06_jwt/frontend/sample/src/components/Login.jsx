import { useRef } from "react";
import { useDispatch } from "react-redux";
import { loginPostAsync } from "../store/slices/loginSlice";
import { useNavigate } from "react-router-dom";

const Login=()=>{
  const username = useRef("");
  const password = useRef("");
  const dispatch=useDispatch();
  const navigator=useNavigate();
  const loginHandler=()=>{
    const name=username.current.value;
    const pwd=password.current.value;
    dispatch(loginPostAsync({username:name,password:pwd}))
    .unwrap()
    .then((data)=>{
      console.log(data);
      if(data.error){
        alert("이메일 또는 비밀번호가 맞지 않습니다.");
      }else {
        alert("로그인 성공");
        navigator({pathname:'/'},{replace:true})
      }
    })
  }

  return(
    <>
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-4xl ">회원로그인</h1>
      <form>
        <div className="mt-5">
          <label className="inline-block w-[100px]">이메일</label>
          <input type="text" ref={username} className="bg-gray-300" />
        </div>
        <div className="mt-5">
          <label className="inline-block w-[100px]">비밀번호</label>
          <input type="password" ref={password} className="bg-gray-300"/>
        </div>
        <button type="button" onClick={loginHandler} className="bg-blue-300 w-[100%] mt-5">로그인</button>
      </form>
    </div>
    </>
  )
}
export default Login;