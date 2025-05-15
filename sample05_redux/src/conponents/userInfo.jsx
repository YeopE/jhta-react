import { useSelector } from "react-redux";

const UserInfo=()=>{
  const userReducer = useSelector(state=>state.userReducer)
  return(
    <div>
      <div>회원이름:{userReducer.user.name}</div>
      <div>회원나이:{userReducer.user.age}</div>
      <div>회원이메일:{userReducer.user.email}</div>
    </div>
  )
}
export default UserInfo;