import { Link } from "react-router-dom"

const Header=()=>{
  return(
    <div>
      <ul>
        <li>
          <Link to="/">메인</Link>
        </li>
        <li>
          <Link to="/join">회원등록</Link>
        </li>
        <li>
          <Link to="/list">회원목록</Link>
        </li>
      </ul>
    </div>
  )
}
export default Header;