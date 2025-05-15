import { useContext } from "react";
import { CommentsContext } from "../../App";

const List=({num,setNum})=>{
  const [comments,setComments]=useContext(CommentsContext);
  return(
    <div>
      <h1>댓글목록</h1>
      <table>
        <thead>
          <tr>
            <th>작성자</th>
            {/* <th>내용</th> */}
            <th>작성일</th>
            <th>상세보기</th>
          </tr>
        </thead>
        <tbody>
          {
            comments.map((c,i)=>{
              return (<tr key={i}>
                <td>{c.nickname}</td>
                {/* <td>{c.comment}</td> */}
                <td>{c.regdate}</td>
                <td><button onClick={()=>{
                  setNum(i);
                }}>상세</button></td>
              </tr>);
            })
          }
        </tbody>
      </table>
    </div>
  )
}
export default List;