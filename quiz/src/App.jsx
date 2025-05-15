
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Join from './components/Join'
import { createContext, useState } from 'react'
import List from './components/List'
import Detail from './components/Detail'

const mem=[]

export const MembersContext = createContext();
function App() {
  const [members,setMembers]=useState(mem);
  const [num,setNum]=useState(0);
  

  return (
    <>
      <MembersContext.Provider value={[members,setMembers]}>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/join" element={<Join/>}></Route>
            <Route path="/list" element={<><List num={num} setNum={setNum}/>
                                          <Detail num={num}/></>}></Route>

          </Routes>
        </BrowserRouter>
      </MembersContext.Provider>
    </>
  )
}

export default App
