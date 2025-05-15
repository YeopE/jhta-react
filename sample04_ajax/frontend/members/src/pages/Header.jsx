import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header=()=>{
  const loginReducer = useSelector(state=>state.loginReducer);
  return(
    <div>
      <ul className="flex justify-end gap-3">
        <li>
          <Link to="/">홈</Link>
        </li>
        {
          loginReducer.userid ?
          <li>
            <Link to="/member/logout">로그아웃</Link>
          </li>
          :
          <li>
            <Link to="/member/login">회원로그인</Link>
          </li>
        }
        <li>
          <Link to="/member/list">회원목록</Link>
        </li>
        <li>
          <Link to="/member/join">회원가입</Link>
        </li>
      </ul>
    </div>
  )
}
export default Header;