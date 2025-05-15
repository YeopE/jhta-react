import { Link } from "react-router-dom";
import useCustomLogin from "../hooks/useCustomLogin";

const Header=()=>{
  const isLogin = useCustomLogin();
  return(
    <>
      <div>
        <ul className="flex gap-5">
          <li>
            <Link to="/">홈</Link>
          </li>
          {
          isLogin ?
          <li>
            <Link to="/logout">로그아웃</Link>
          </li>
          :
          <li>
            <Link to="/login">로그인</Link>
          </li>
          }
          <li>
            <Link to="/mypage">마이페이지</Link>
          </li>
        </ul>
      </div>
    </>
  )
}
export default Header;