import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Logout from "./components/Logout"
import MyPage from "./components/MyPage"
import Layout from "./components/Layout"
import Main from "./components/Main"


function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route index element={<Main></Main>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/logout" element={<Logout/>}></Route>
            <Route path="/mypage" element={<MyPage/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
