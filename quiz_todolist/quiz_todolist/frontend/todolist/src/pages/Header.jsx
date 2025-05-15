import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header=()=>{
  const LoginReducer = useSelector(state=>state.loginReducer);
  return(
    <div>
      <ul className="flex gap-3">
        <li>
          <Link to="/">홈</Link>
        </li>
        {
          LoginReducer.userid ?
          <li>
            <Link to="/todolist/logout">로그아웃</Link>
          </li>
          :
          <li>
            <Link to="/todolist/login">로그인</Link>
          </li>
        }
        <li>
          <Link to="/todolist/enrollment">할일등록</Link>
        </li>
        <li>
          <Link to="/todolist/list">할일리스트</Link>
        </li>
      </ul>
    </div>
  )
}
export default Header;