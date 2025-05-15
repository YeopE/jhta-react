// 커스텀 훅 만들기 - 리액트훅을 사용할 수 있는 함수를 커스텀훅이라고 한다. 
// 일반 자바스크립트 함수는 리액트 훅을 사용할 수 없다.
// 규칙 - use로 시작하는 함수명을 만든다.

import { useSelector } from "react-redux";

const useCustomLogin=()=>{
  const loginSlice=useSelector(state=>state.loginSlice);
  const isLogin=loginSlice.email?true:false;
  return isLogin;
}
export default useCustomLogin;