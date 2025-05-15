import { useRef, useState } from "react";
import User from "./User";
const mem=[
  {userid:"hello",username:"홍길동",phone:"010-1111-1111"},
  {userid:"test",username:"김길동",phone:"010-2222-2222"},
  {userid:"abcd",username:"이길동",phone:"010-3333-3333"},
]

const Member=()=>{
  const [users,setUsers]=useState(mem);
  const userid=useRef("");
  const username=useRef("");
  const phone=useRef("");

  const addUser=()=>{
    const user={
      userid:userid.current.value,
      username:username.current.value,
      phone:phone.current.value
    }
    // const arr=[...users,user]
    // setUsers(arr)
    setUsers([...users,user]);
  }

  const removeUser=(n)=>{
    const newArr=users.filter((u,index)=>{
      // if(n!=index) return true;
      // else false;
      return (n!=index) ? true : false;
    });
    setUsers(newArr);

    // setUsers(users.filter((u,index)=>index==n?false:true)); // 위 코드를 이렇게 줄여 쓸 수 있다.
  }

  return(
    <div>
      <div>
        아이디 <input type="text" name="userid" ref={userid}/><br/>
        회원명 <input type="text" name="name" ref={username}/><br/>
        연락처 <input type="text" name="phone" ref={phone}/><br/>
        <button onClick={addUser}>등록</button>
      </div>
      <h1>Member</h1>
      {
        users.map((m,index)=>{
          return(
            <User key={index} userid={m.userid} username={m.username} phone={m.phone}
            index={index}
            removeUser={removeUser}/>
          )
        })
      }
    </div>
  )
}
export default Member;