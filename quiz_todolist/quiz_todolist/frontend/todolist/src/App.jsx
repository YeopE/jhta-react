import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout'
import Home from './pages/Home'
import EnrollmentPage from './pages/EnrollmentPage'
import ListPage from './pages/ListPage'
import NotFound from './pages/NotFound'
import LoginPage from './pages/LoginPage'
import LogoutPage from './pages/LogoutPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/todolist/login" element={<LoginPage/>} />
            <Route path="/todolist/logout" element={<LogoutPage/>} />
            <Route path="/todolist/enrollment" element={<EnrollmentPage/>}/>
            <Route path="/todolist/list" element={<ListPage/>}/>
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
