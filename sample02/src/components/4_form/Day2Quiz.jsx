import { useState, useRef } from "react";

const mlist=[]

const Day2Quiz=()=>{
  const [member,setMember]=useState(mlist);
  const id=useRef("");
  const name=useRef("");
  const phone=useRef("");
  const add=useRef("");
  
  const addMember=()=>{
    const mem = {
      id: id.current.value,
      name: name.current.value,
      phone: phone.current.value,
    };
    setMember([...member,mem])

    id.current.value = "";
    name.current.value = "";
    phone.current.value = "";
  }

  const deleteMember = (idToDelete) => {
    setMember(member.filter((m) => m.id !== idToDelete));
  };
  

  return(
    <div>
      <form>
        아이디<input type="text" name="id" id="id" ref={id} /><br/>
        이름<input type="text" name="name" id="name" ref={name} /><br/>
        전화번호<input type="text" name="phone" id="phone" ref={phone} /><br/>
        <input type="button" value="등록" onClick={addMember}/>
        {
          member.map((m)=>{
            return(
            <div>
              <ul key={m.id}>
                <li>회원아이디:{m.id}</li>
                <li>회원이름:{m.name}</li>
                <li>회원전화번호:{m.phone}</li>
                <li><button onClick={() => deleteMember(m.id)}>삭제</button></li>
              </ul>
            </div>
            )
          })
        }
      </form>
    </div>
  )
}

export default Day2Quiz;