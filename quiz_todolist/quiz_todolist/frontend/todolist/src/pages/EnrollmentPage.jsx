import { useRef } from "react";
import { todosEnrollment } from "../api/todos";

const EnrollmentPage=()=>{
  const task=useRef("");
  const date=useRef("");

  const enrollment=()=>{
    const param={"task":task.current.value,"date":date.current.value};
    todosEnrollment(param).then(res=>{
      alert(res);
    })
  }

  return(
    <div>
      <h1>Todo</h1>
      <div>
        <textarea name="task" id="task" cols="30" rows="10" className="w-[600px] h-[300px] border placeholder:'일정' resize-none" ref={task} ></textarea>
      </div>
      <div>
        <input type="datetime-local" name="date" id="date" className="border" ref={date}/>
      </div>
      <div>
        <button className="bg-amber-600 text-white p-3 rounded-md cursor-pointer" onClick={enrollment}>저장</button>
      </div>
    </div>
  )
}
export default EnrollmentPage;