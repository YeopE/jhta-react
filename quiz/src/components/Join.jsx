import { useContext, useRef } from "react";
import { MembersContext } from "../App";

const Join=()=>{
  const [users,setUsers]=useContext(MembersContext);
  const id = useRef("");
  const name = useRef("");
  const phone = useRef("");
  const addr = useRef("");

  const addMember=()=>{
    const user={
      id:id.current.value,
      name:name.current.value,
      phone:phone.current.value,
      addr:addr.current.value,
      regdate:new Date().toLocaleString()
    }
    setUsers([...users,user]);
    console.log(user);
  }

  return(
    <div>
      아이디 <input type="text" name="id" ref={id}/><br/>
      이름 <input type="text" name="name" ref={name}/><br/>
      전화번호 <input type="text" name="phone" ref={phone}/><br/>
      주소 <input type="text" name="addr" ref={addr}/><br/>
      <button onClick={addMember}>등록</button>
    </div>
  )
}
export default Join;