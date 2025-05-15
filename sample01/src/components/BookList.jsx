const blist=[
  {"num":1,"title":"java","price":10000},
  {"num":2,"title":"react","price":20000},
  {"num":3,"title":"spring boot","price":30000},
]

const BookList=()=>{
  return(
    <div>
      <h1>도서목록</h1>
      <ul>
        {
          blist.map((b)=>{
            {/* 동적으로 생성되는 요소들은 key속성값을 설정해 줘야 한다. */}
            return <li key={b.num}>{b.num},{b.title},{b.price}</li>
          })
        }
      </ul>
    </div>
  )
}

export default BookList;