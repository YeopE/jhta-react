const Book=({title,price,author,publisher})=>{
  return(
    <div>
      <h1>도서정보</h1>
      <ul>
        <li>제목:{title}</li>
        <li>가격:{price}</li>
        <li>저자:{author}</li>
        <li>출판사:{publisher}</li>
      </ul>
    </div>
  )
}
export default Book;