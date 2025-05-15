import { useDispatch } from "react-redux";
import { replace, useNavigate } from "react-router-dom";
import { logout } from "../store/slices/loginSlice";

const Logout=()=>{
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const logoutHandler=()=>{
    dispatch(logout());
    alert("로그아웃되었습니다.");
    navigator({pathname:'/'},{replace:true});
  }
  return(
    <>
      <button onClick={logoutHandler}>로그아웃</button>
    </>
  );
}
export default Logout;