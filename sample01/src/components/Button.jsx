import './Button.css'
const Button=({text})=>{ //text라는 프로퍼티(속성)값이 저장된다.

  const showText=(e)=>{
    console.log("버튼클릭!!!!!!");
    const t = e.target.innerText;
    alert(t + "버튼 클릭!");
  };

  return (
    <div>
      {/* jsx에서는 class가 아니라 className으로 클래스를 지정한다. */}
      <button className='Button' onClick={showText}>{text}</button>
    </div>
  )
}
export default Button;