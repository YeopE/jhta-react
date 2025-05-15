import { useContext } from "react";
import { MembersContext } from "../App";

const Detail=({num})=>{
  const [members,setMembers] = useContext(MembersContext);
  return(
    <div>
      <h2>상세보기</h2>
      
        {members.length>0?
        <ul>
          <li>아이디 : {members[num].id}</li>
          <li>이름 : {members[num].name}</li>
          <li>전화번호 : {members[num].phone}</li>
          <li>주소 : {members[num].addr}</li>
          <li>가입일 : {members[num].regdate}</li>
        </ul>
        :
        <div>
          회원이 존재하지 않습니다.
        </div>
        }
    </div>
  )
}
export default Detail;