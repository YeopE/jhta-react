async function getData(){ //async : 객체를 리턴하는 것이 아니라 promise를 return하는 메소드
  return{
    name:"홍길동",
    age:20
  }
}
// console.log(getData());
// getData().then(res=>{
//   // console.log(res);
//   const {name,age}=res;
//   console.log(name,age);
// });

async function showReulst() {
  //await : then을 사용하지 않고 getData가 완료되기를 기다림 -> awiat를 사용하려면 메소드에 async를 붙여줘야 함
  const result =await getData(); //단독으로 쓸 경우 에러 await는 반드시 async함수 안에서만 쓸 수 있다.
  console.log(result);
}
showReulst();

//즉시실행함수
(async()=>{
  const result =await getData();
  console.log(result);  
})();

//즉시실행함수
(()=>{
  console.log("hello");
})(); 

//즉시실행함수
((username)=>{
  console.log("이름==>" + username)
})("홍길동");
