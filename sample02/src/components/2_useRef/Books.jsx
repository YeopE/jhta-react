import { useRef, useState } from "react"

const blist=[
  {"num":1,"title":"java","price":10000},
  {"num":2,"title":"react","price":20000},
  {"num":3,"title":"spring","price":30000},
]

const Books=()=>{
  const [books,setBooks]=useState(blist);
  const booknum = useRef(4); //화면의 리렌더링이 발생되지 않아도 되는 변수를 하용하고자 할 때 useRef를 사용
  const addBook=()=>{
    const bookNumber=booknum.current++; //current속성에 의해서 값을 얻어온다
    console.log("bookNumber", bookNumber);
    const num = books.length+1;
    const book={"num":bookNumber,"title":"jsp","price":25000}
    //기존의 배열값 원본을 변경할 수 없고 새 배열을 만들어서 사용한다. -> 배열의 push함수를 쓸 수 없다.
    //spread연산자를 이용해서 배열에 데이터를 추가함
    setBooks([...books,book])
  }
  function removeBook(){
    const lastIndex = books.length-1;
    const arr = books.filter((book,index)=>{
      if(index!==lastIndex) return true; //true가 리턴된 요소들을 새로운 배열로 만들어준다.
      return false;
    })
    setBooks(arr);
  }

  return(
    <div>
        <div>
        <button onClick={addBook}>도서추가</button>
        <button onClick={removeBook}>도서삭제</button>
        <h1>도서 목록 bookNumber : {booknum.current}</h1>
          {
            books.map((b)=>{
              return(
                <div key={b.num}>
                  <div>도서번호:{b.num}</div>
                  <div>제목:{b.title}</div>
                  <div>가격:{b.price}</div>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Books;