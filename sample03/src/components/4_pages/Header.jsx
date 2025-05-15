import { Link, useNavigate } from "react-router-dom";

const Header=()=>{
  const navigate=useNavigate(); //navigate 함수
  return(
    <div>
      <ul>
        {/* react에서는 a태크 대신 Link를 사용한다. */}
        <li><Link to="/">메인</Link></li>
        {/* <Route path="/members/:userid" element={<Members/>}/> */}
        <li><Link to="/members/hello">회원페이지</Link></li>
        <li><Link to="/mypage">마이페이지</Link></li>
        <li><Link to="/product?pname=냉장고">상품페이지</Link></li>
        <li><button onClick={()=>{
          navigate("/mypage"); //코드상에 페이지를 이동할때
        }}>마이페이지</button></li>
      </ul>
    </div>
  )
}
export default Header;