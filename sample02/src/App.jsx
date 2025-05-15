import MyImage from "./components/1/MyImage"
import ImageList from "./components/1/ImageList"
import Books from "./components/2_useRef/Books"
import { useState } from "react"
import Light from "./components/3_useEffect/Light"
import Quiz from "./components/3_useEffect/Quiz"
import Form1 from "./components/4_form/form1"
import Form2 from "./components/4_form/Form2"
import FormQuiz from "./components/4_form/FormQuiz"
import Form3 from "./components/4_form/Form3"
import Form4 from "./components/4_form/Form4"
import FormQuiz2 from "./components/4_form/FormQuiz2"
import Day2Quiz from "./components/4_form/Day2Quiz"



function App() {
  const [status, setStatus]=useState(true);
  return (
    <>
      {/* <MyImage src="/images/1.png" text="사진1"/> */}
      {/* <ImageList></ImageList> */}
      {/* <Books/> */}
      {/* <button onClick={()=>{
        setStatus(!status);
      }}>클릭</button>
      {
        status && <Light/>
      } */}
      {/* <Quiz/> */}
      {/* <Form1/> */}
      {/* <Form2/> */}
      {/* <FormQuiz/> */}
      {/* <Form3/> */}
      {/* <Form4/> */}
      {/* <FormQuiz2/> */}
      <Day2Quiz/>
    </>
  )
}

export default App
