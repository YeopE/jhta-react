import { useContext } from "react";
import { MembersContext } from "../App";

const List=({num,setNum})=>{
  const [members,setMembers]=useContext(MembersContext);
  return(
    <div>
      <h1>회원목록</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>아이디</th>
            {/* <th>이름</th>
            <th>전화번호</th>
            <th>주소</th> */}
            <th>가입일</th>
            <th>상세보기</th>
          </tr>
        </thead>
        <tbody>
          {
            members.map((m,i)=>{
              return(<tr key={i}>
                <td>{m.id}</td>
                {/* <td>{m.name}</td>
                <td>{m.phone}</td>
                <td>{m.addr}</td> */}
                <td>{m.regdate}</td>
                <td><button onClick={()=>{
                  setNum(i);
                }}>상세보기</button></td>
              </tr>)
            })
          }
        </tbody>
      </table>
    </div>
  )
}
export default List;