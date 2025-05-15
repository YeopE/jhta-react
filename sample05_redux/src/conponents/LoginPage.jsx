import { useRef } from "react";
import { useDispatch } from "react-redux";
import { login } from "../reducer/user";

const LoginPage=()=>{
  const name = useRef("");
  const age = useRef("");
  const email = useRef("");
  const dispatch = useDispatch();
  const saveInfo=()=>{
    const action={name:name.current.value,
                  age:age.current.value,
                  email:email.current.value};
    dispatch(login(action));
    alert("저장완료!");
  }

  return(
    <div>
      <form>
        회원아이디 <input type="text" name="name" ref={name}/><br/>
        회원나이 <input type="text" name="age" ref={age}/><br/>
        회원이메일 <input type="text" name="email" ref={email}/><br/>
        <button type="button" onClick={saveInfo}>저장</button>
      </form>
    </div>
  )
}

export default LoginPage;