const flist=[
  {"num":1, "src":"/1.png", "name":"홍길동", "phone":"010-1234-5678"},
  {"num":2, "src":"/2.png", "name":"이길동", "phone":"010-2222-2222"},
  {"num":3, "src":"/3.png", "name":"삼길동", "phone":"010-3333-3333"}
]

const ProfileList=()=>{
  return(
    <div>
      <h1>프로필 목록</h1>
      <ul>
        {
          flist.map((f)=>{
            return (
            <li key={f.num} style={{listStyle:'none'}}>
              <div><img src={f.src} style={{width:'200px',height:'200px'}}/></div>
              <div>번호: {f.num}</div>
              <div>이름: {f.name}</div>
              <div>전화번호: {f.phone}</div>
            </li>
            )
          })
        }
      </ul>
    </div>
  )
}
export default ProfileList;