import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import ListPage from "./pages/ListPage"
import JoinPage from "./pages/JoinPage"
import NotFound from "./pages/NotFound"
import UpdatePage from "./pages/UpdatePage"
import LoginPage from "./pages/loginPage"
import LogoutPage from "./pages/LogoutPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} /> {/*path 경로대신 index를 넣으면 메인 페이지로 이동한다. */}
            <Route path="/member/join" element={<JoinPage/>} />
            <Route path="/member/list" element={<ListPage/>} />
            <Route path="/member/update/:id" element={<UpdatePage/>} />
            <Route path="/member/login" element={<LoginPage/>} />
            <Route path="/member/logout" element={<LogoutPage/>} />
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
