import "./MyImage.css"
import {useState} from "react";

const MyImage=({src,text})=>{
  const [show,setShow] = useState(false);
  const showModel=()=>{
    setShow(true);
  }
  const closeModel=()=>{
    setShow(false);
  }
  //style을 객체 형태로 담아서 줄 수도 있다.
  const modalStyle={
    position: "absolute",
    width:"160px",
    height:"150px",
    padding:"10px",
    backgroundColor:"rgba(19,167,0)",
    borderRadius:"20px",
    border:"2px solid white"
  }

  return(
    <div>
      <div className="MyImage">
        <img src={src} onMouseEnter={showModel} onMouseLeave={closeModel}></img>
      </div>
      {
        show && //&& (and)연산자 show 가 true일 경우 다음이 실행되어 <div>내용이 실행됨 show가 false일 경우 다음 <div>를 실행하지 않음
          <div style={modalStyle}>
            <h1>My Dog</h1>
            <p>{text}</p>
          </div>
      }
    </div>
  )
}

export default MyImage;