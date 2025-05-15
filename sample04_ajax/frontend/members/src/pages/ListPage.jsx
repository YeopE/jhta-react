import { useEffect, useState } from "react";
import { memberList, memberDelete } from "../api/members";
import { Link } from "react-router-dom";


const ListPage=()=>{
  const [members,setMembers]=useState([]);

  const getMemberList=()=>{
    memberList().then(data=>{
      // console.log(data);
      setMembers([...data]);
    })
  }
  useEffect(()=>{
    getMemberList();
  },[])

  const deleteMember=(id)=>{
    memberDelete(id).then(res=>{
      alert(res);
      getMemberList();
    })
  }

  return(
    <div>
      <h1>회원목록</h1>
      <table className="border-collapse border border-amber-950 w-[500px]">
        <thead>
          <tr className="bg-amber-500">
            <th className="border border-amber-950">아이디</th>
            <th className="border border-amber-950">가입일</th>
            <th className="border border-amber-950">삭제</th>
            <th className="border border-amber-950">수정</th>
          </tr>
        </thead>
        <tbody>
          {
            members.map(m=>{
              return(
                <tr key={m.id}>
                  <td className="border">{m.userid}</td>

                  <td className="border">{m.createDate}</td>
                  <td className="border"><button className="cursor-pointer" onClick={() => {
                    if (window.confirm("삭제하시겠습니까?")) {
                      deleteMember(m.id);
                    }
                  }}>삭제</button>
                  </td>
                  <td className="border">
                    <Link to={`/member/update/${m.id}`}>수정</Link>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
export default ListPage;