const User=({userid,username,phone,index,removeUser})=>{
  return(
    <div>
      <ul>
        <li>회원아이디:{userid}</li>
        <li>회원이름:{username}</li>
        <li>연락처:{phone}</li>
        <button onClick={()=>{
          removeUser(index)
        }}>삭제</button>
      </ul>
    </div>
  )
}
export default User;