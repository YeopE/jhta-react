import { createContext, useState } from 'react';
import './App.css'
import List from './components/3/list';
import Detail from './components/3/detail';
import Register from './components/3/Register';

const comm=[
  {
    nickname:'kim',
    comment:'hello!!',
    regdate:new Date().toLocaleString()
  },
  {
    nickname:'hello',
    comment:'good!',
    regdate:new Date().toLocaleString()
  },
  {
    nickname:'test',
    comment:'aaaaa',
    regdate:new Date().toLocaleString()
  },
]
export const CommentsContext = createContext();
function App() {
  const [comments,setComments]=useState(comm);
  const [num,setNum]=useState(0);

  return (
    <>
      <CommentsContext.Provider value={[comments,setComments]}>
        {/* 닉네임,댓글을 추가하는 기능을 완성해 보세요. */}
        <Register/>
        <List num={num} setNum={setNum}/>
        <Detail num={num}/>
      </CommentsContext.Provider>  
    </>
  )
}

export default App
