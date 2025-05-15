import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../reducer/loginReducer";

const LogoutPage=()=>{
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const logoutHandler=()=>{
    dispatch(logout());
    alert("로그아웃되었습니다.");
    navigator({pathname:"/"},{replace:true})
  }

  return(
    <div>
      <button onClick={logoutHandler} className="m-3 w-80 bg-gray-300 rounded cursor-pointer">로그아웃</button>
    </div>
  )
}
export default LogoutPage;