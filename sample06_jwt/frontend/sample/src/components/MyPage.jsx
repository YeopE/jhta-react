import { useEffect, useState } from "react";
import { todoList } from "../api/memberApi";
import useCustomLogin from "../hooks/useCustomLogin";
import { Navigate } from "react-router-dom";

const MyPage=()=>{

  const [todos,setTodos]=useState([]);
  const isLogin=useCustomLogin();

  useEffect(()=>{
    todoList().then(res=>{
      console.log(res);
      setTodos([...res]);
    })
  },[])

  return(
    <>
      {
        isLogin
        ?
        <div>
          <div>MyPage..........</div>
          <h1>todoList</h1>
          <ul>
            {
              todos.map((e,index)=>{
                return <li key={index}>번호: {e.tno}, 제목 : {e.title}, 할일 : {e.content}</li>
              })
            }
            <li>//////</li>
          </ul>
        </div>
        :
        <Navigate to="/login" replace /> //로그인안했으면 로그인페이지로 이동
      }
    </>
  )
}
export default MyPage;