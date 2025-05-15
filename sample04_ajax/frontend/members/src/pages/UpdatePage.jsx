import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { memberDetail, memberUpdate } from "../api/members";

const UpdatePage=()=>{
  const params = useParams();
  const [member, setMember]=useState("");
  const navigate = useNavigate();
  const id=useRef("");
  const userid=useRef("");
  const password=useRef("");
  const createData=useRef("");

  const getMember=(id)=>{
    memberDetail(id).then(data=>{
      setMember(data);
      console.log(data);
    })
  }

  useEffect(()=>{
    // console.log("id==>",params.id);
    getMember(params.id);
  },[]);

  const updateHandler=()=>{
      const param={"id":id.current.value,
                   "userid":userid.current.value,
                   "password":password.current.value,
                   "createDate":createData.current.value};
      memberUpdate(param).then(res=>{
        alert(res);
        navigate("/member/list");
      })
  }

  {
    return(
      <div>
        <h1>회원정보수정</h1>
        <form>
          <div>
            <input type="hidden" name="id" id="id" className="bg-gray-300" value={member.id} ref={id}/>
          </div>
          <div>
            <label htmlFor="userid" className="inline-block w-30 p-1 m-3">아이디</label>
            <input type="text" name="userid" id="userid" className="bg-gray-300" value={member.userid} ref={userid} />
          </div>
          <div>
            <label htmlFor="password" className="inline-block w-30 p-1 m-3">비밀번호</label>
            <input type="password" name="password" id="password" className="bg-gray-300" ref={password}/>
          </div> 
          <div>
            <label htmlFor="createDate" className="inline-block w-30 p-1 m-3">가입일</label>
            <input type="text" name="createDate" id="createDate" className="bg-gray-300" value={member.createDate} ref={createData}/>
          </div> 
          <div>
          <button type="button" onClick={updateHandler} className="m-3 w-80 bg-gray-300 rounded">수정</button>
        </div>
        </form>
        
      </div>
    )
  }
}
export default UpdatePage;