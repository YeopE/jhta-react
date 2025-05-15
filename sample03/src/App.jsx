import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './components/4_pages/Main'
import Members from './components/4_pages/Members'
import MyPage from './components/4_pages/MyPage'
import Product from './components/4_pages/Product'
import Header from './components/4_pages/Header'
import NotFound from './components/4_pages/NotFound'

function App() {


  return (
    <>
      <BrowserRouter>
      {/* http://localhost:5173/members */}
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/members/:userid" element={<Members/>}/>
          <Route path="/mypage" element={<MyPage/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
