import { useContext, useRef, useState } from "react";
import { CommentsContext } from "../../App";

const Register=()=>{
  const [users,setUsers]=useContext(CommentsContext);
  const nickname=useRef("");
  const comment=useRef("");

  const addComm=()=>{
    const user={
      nickname:nickname.current.value,
      comment:comment.current.value,
      regdate:new Date().toLocaleString()
    }
    setUsers([...users,user]);
  }

  return(
    <div>
      <div>
        <h1>댓글 추가</h1>
        닉네임 <input type="text" name="nickname" ref={nickname}/><br/>
        내용 <input type="text" name="comment" ref={comment}/><br/>
        <button onClick={addComm}>등록</button>
      </div>
      
    </div>
  )
}
export default Register;