import { createContext } from 'react';
import './App.css'
import Member from './components/1/Member'
import SampleContext from './components/2/SampleContext';
import Sum from './components/sum'
/*
  < Context >
  context를 이용하면 단계마다 일일이 props를 넘겨주지 않고도 컴포넌트 트리 전체에 데이터를 제공할 수 있다.
  사용방법)
  1. createContext 메서드를 사용해 context를 생성한다.
  2. 생성된 context를 가지고 context provider로 컴포넌트 트리를 감싼다.
  3. value 속성을 사용해 context provider에서 공유하고자 하는 값을 작성한다.
  4. useContext를 사용해서 컨텍스트에 저장된 값을 꺼내온다.
*/
export const UserContext = createContext(); //1.컨텍스트 생성
function App() {
  const userinfo={
    name:"홍길동",
    email:"hong@test.com"
  }

  return (
    <>
      <UserContext.Provider value={userinfo}> {/* 2~3.context의 provider로 공유자원 설정 */}
        <SampleContext/>
      </UserContext.Provider>
      {/* <Sum/> */}
      {/* <Member/> */}
    </>
  )
}

export default App
