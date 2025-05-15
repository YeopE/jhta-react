import { useState } from "react";

const FormQuiz2=()=>{
  const [img, setImg]=useState("/images/1.png");

  const imgChoice=(e)=>{
    const choiceImg = e.target.value;
    setImg(choiceImg);
  }

  return(
    <div>
      <h1>Sample....</h1>
      <form>
        <label><input type="radio" name="choice" value="/images/1.png" onChange={imgChoice} checked={img === "/images/1.png"}/>소년</label>
        <label><input type="radio" name="choice" value="/images/2.png" onChange={imgChoice}/>커피</label>
        <label><input type="radio" name="choice" value="/images/3.png" onChange={imgChoice}/>강아지</label>
      </form>
      <div>
        <img src={img}/><br/>
        선택된 이미지 : {img}
      </div>
    </div>
  )
}
export default FormQuiz2;