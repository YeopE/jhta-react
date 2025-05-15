import { useEffect, useState } from "react";

// Quiz.jsx
// 현재 시간을 출력해 보세요.
// 시간이 정오가 지나면 배경색이 핑크, 아니면 배경색을 회색으로 보여지도록 해보세요.

const Quiz=()=>{
  const [date, setDate] = useState(new Date());

  const isAfternoon = date.getHours() >= 12;
  const box={
    width:300,
    height:300,
    backgroundColor: isAfternoon ? "pink" : "gray",
    border: "1px solid #000"
  }

  useEffect(()=>{
    const time = setInterval(()=>{
      setDate(new Date());
    },1000);

    return()=>{
      clearInterval(time);
    }
  },[])

  return(
    <div style={box}>
      <div>{date.toLocaleTimeString()}</div>
    </div>
  )
}

export default Quiz;