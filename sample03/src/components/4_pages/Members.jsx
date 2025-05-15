import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Members=()=>{
  //pathvariable 방식의 파라미터 읽어오기
  const params = useParams();
  const [id,setId]=useState();
  useEffect(()=>{
    console.log(params.userid);
    setId(params.userid)
  },[])
  return(
    <>
      <div>
        <h1>Members</h1>
        <div>userid: {params.userid}</div>
      </div>
    </>
  )
}
export default Members;