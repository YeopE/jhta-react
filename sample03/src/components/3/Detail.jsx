import { useContext, useState } from "react";
import { CommentsContext } from "../../App";

const Detail=({num})=>{
  const [comments,setComments] = useContext(CommentsContext);

  return(
    <div>
      {/* Detail 작성자,제목,작성일 출력해 보세요.*/}
      <h2>상세보기</h2>
      <div>
        <ul>
          <li>작성자 : {comments[num].nickname}</li>
          <li>내용 : {comments[num].comment}</li>
          <li>작성일 : {comments[num].regdate}</li>
        </ul>
      </div>
      
    </div>
  )
}
export default Detail;