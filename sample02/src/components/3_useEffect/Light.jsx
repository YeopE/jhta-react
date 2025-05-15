import { useEffect, useState, useRef } from "react";

const status=['on','off'];

const Light=()=>{
  const[light,setLight]=useState('off');
  const index=useRef(0);

  useEffect(()=>{
    console.log("useEffect");
    console.log("현재 조명 상태", light);

    return ()=>{//함수를 리턴하면 컴포넌트가 언마운트 되었을때 수행된다.
      console.log("언마운트 되어집니다......");
    }

  },[]); //컴포넌트가 마운트 될 때 한번만 수행됨

  const changeLight=()=>{
    setLight(status[index.current++%2]);
  }
  useEffect(()=>{
    console.log("상태값 변경됨...");
    console.log("현재 조명상태",light);
  },[light]); //light가 변경될 때마다 useEffect가 호출됨

  return(
  <div style={{backgroundColor:(light == 'on'? 'yellow' : 'black'),width:300,height:200}}>
    <button onClick={changeLight}>조명</button>
  </div>
  )
}
export default Light;